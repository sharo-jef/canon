/**
 * 意味解析器 - ASTを走査して名前解決、型チェック、型推論を行う
 */

import { SymbolTable } from './SymbolTable';
import fs from 'fs';
import yaml from 'js-yaml';

export interface ASTNode {
  type: string;
  [key: string]: any;
}

export interface SemanticError {
  message: string;
  location?: {
    line: number;
    column: number;
  };
  type: 'NameError' | 'TypeError' | 'ScopeError' | 'ValidationError';
}

export class SemanticAnalyzer {
  private symbolTable: SymbolTable;
  private errors: SemanticError[] = [];
  private currentFunctionType?: string;

  constructor() {
    this.symbolTable = new SymbolTable();
  }

  /**
   * ASTファイルを読み込んで意味解析を実行
   */
  async analyzeFromFile(astFilePath: string): Promise<{
    success: boolean;
    errors: SemanticError[];
    symbolTable: SymbolTable;
  }> {
    try {
      const astContent = fs.readFileSync(astFilePath, 'utf8');
      const ast = yaml.load(astContent) as ASTNode;

      await this.analyze(ast);

      return {
        success: this.errors.length === 0,
        errors: this.errors,
        symbolTable: this.symbolTable,
      };
    } catch (error) {
      this.addError({
        message: `Failed to read or parse AST file: ${error}`,
        type: 'ValidationError',
      });

      return {
        success: false,
        errors: this.errors,
        symbolTable: this.symbolTable,
      };
    }
  }

  /**
   * ASTノードを解析 - 2パス解析を実行
   */
  async analyze(node: ASTNode): Promise<void> {
    if (!node || typeof node !== 'object') {
      return;
    }

    try {
      // Pass 1: 型定義の収集（前方宣言対応）
      await this.collectTypeDefinitions(node);

      // Pass 2: 詳細な意味解析
      await this.visitNode(node);
    } catch (error) {
      this.addError({
        message: `Unexpected error during analysis: ${error}`,
        type: 'ValidationError',
        location: node.loc
          ? {
              line: node.loc.start?.line || 0,
              column: node.loc.start?.column || 0,
            }
          : undefined,
      });
    }
  }

  /**
   * Pass 1: 型定義を事前に収集（前方宣言対応）
   */
  private async collectTypeDefinitions(node: ASTNode): Promise<void> {
    if (!node || typeof node !== 'object') {
      return;
    }

    // 構造体とユニオンの定義を先に収集
    if (node.type === 'StructDeclaration') {
      const structName = node.name?.name;
      if (structName && !this.symbolTable.isDefined(structName)) {
        this.symbolTable.define({
          name: structName,
          type: 'struct',
          dataType: structName,
          location: this.getLocation(node.name),
        });
      }
    } else if (node.type === 'UnionDeclaration') {
      const unionName = node.name?.name;
      if (unionName && !this.symbolTable.isDefined(unionName)) {
        this.symbolTable.define({
          name: unionName,
          type: 'union',
          dataType: unionName,
          location: this.getLocation(node.name),
        });
      }
    }

    // 子ノードを再帰的に処理
    await this.visitChildrenForTypeCollection(node);
  }

  private async visitChildrenForTypeCollection(node: ASTNode): Promise<void> {
    for (const [key, value] of Object.entries(node)) {
      if (key === 'type' || key === 'loc') continue;

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item && typeof item === 'object' && item.type) {
            await this.collectTypeDefinitions(item);
          }
        }
      } else if (value && typeof value === 'object' && value.type) {
        await this.collectTypeDefinitions(value);
      }
    }
  }

  /**
   * Pass 2: プロパティ定義を事前に収集
   */
  private async collectPropertyDefinitions(node: ASTNode): Promise<void> {
    if (!node || typeof node !== 'object') {
      return;
    }

    if (node.type === 'StructDeclaration') {
      const structName = node.name?.name;
      if (structName) {
        // 構造体スコープに入る
        this.symbolTable.enterScope(structName);

        // thisを定義
        this.symbolTable.define({
          name: 'this',
          type: 'variable',
          dataType: structName,
          location: this.getLocation(node),
        });

        // プロパティ定義のみを収集
        if (node.body && Array.isArray(node.body)) {
          for (const member of node.body) {
            if (member.type === 'PropertyDeclaration') {
              await this.collectPropertyDefinition(member);
            }
          }
        }

        this.symbolTable.exitScope();
      }
    }

    // 子ノードを再帰的に処理
    await this.visitChildrenForPropertyCollection(node);
  }

  private async collectPropertyDefinition(node: ASTNode): Promise<void> {
    const propName = node.name?.name;
    if (!propName) return;

    let dataType = 'any';
    if (node.typeRef) {
      dataType = node.typeRef.name?.name || node.typeRef.name || 'any';
    }

    this.symbolTable.define({
      name: propName,
      type: 'property',
      dataType,
      isPrivate: node.isPrivate || false,
      isOptional: node.isOptional || false,
      location: this.getLocation(node.name),
    });
  }

  private async visitChildrenForPropertyCollection(node: ASTNode): Promise<void> {
    for (const [key, value] of Object.entries(node)) {
      if (key === 'type' || key === 'loc') continue;

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item && typeof item === 'object' && item.type) {
            await this.collectPropertyDefinitions(item);
          }
        }
      } else if (value && typeof value === 'object' && value.type) {
        await this.collectPropertyDefinitions(value);
      }
    }
  }

  /**
   * ノードタイプに応じて適切な処理メソッドを呼び出す
   */
  private async visitNode(node: ASTNode): Promise<string | undefined> {
    // nullチェック
    if (!node || typeof node !== 'object') {
      return undefined;
    }

    // typeプロパティが存在しない場合もundefinedを返す
    if (!node.type) {
      if (process.env.DEBUG) {
        console.log('[DEBUG] Node missing type property:', JSON.stringify(node, null, 2));
      }
      return undefined;
    }

    switch (node.type) {
      case 'Program':
        return this.visitProgram(node);
      case 'SchemaDeclaration':
        return this.visitSchemaDeclaration(node);
      case 'StructDeclaration':
        return this.visitStructDeclaration(node);
      case 'UnionDeclaration':
        return this.visitUnionDeclaration(node);
      case 'FunctionDeclaration':
        return this.visitFunctionDeclaration(node);
      case 'VariableDeclaration':
        return this.visitVariableDeclaration(node);
      case 'PropertyDeclaration':
        return this.visitPropertyDeclaration(node);
      case 'MethodDeclaration':
      case 'GetterDeclaration':
        return this.visitMethodDeclaration(node);
      case 'Identifier':
        return this.visitIdentifier(node);
      case 'RangeExpression':
        return this.visitRangeExpression(node);
      case 'InfixFunctionCall':
      case 'InfixCall':
        return this.visitInfixFunctionCall(node);
      case 'FunctionCall':
        return this.visitFunctionCall(node);
      case 'BinaryExpression':
        return this.visitBinaryExpression(node);
      case 'MemberAccess':
      case 'PropertyAccess':
      case 'MemberAccessExpression':
        return this.visitMemberAccess(node);
      case 'ThisExpression':
        return this.visitThisExpression(node);
      case 'TypeCastExpression':
        return this.visitTypeCastExpression(node);
      case 'NullableType':
        return this.visitNullableType(node);
      case 'ArrayType':
        return this.visitArrayType(node);
      case 'PrimitiveType':
        return this.visitPrimitiveType(node);
      case 'TypeReference':
        return this.visitTypeReference(node);
      case 'AssignmentStatement':
        return this.visitAssignmentStatement(node);
      case 'IfExpression':
        return this.visitIfExpression(node);
      case 'StringLiteral':
        return 'string';
      case 'TemplateLiteral':
        return 'string';
      case 'IntegerLiteral':
        return 'int';
      case 'FloatLiteral':
        return 'float';
      case 'BooleanLiteral':
        return 'bool';
      case 'ExpressionStatement':
        // 式文の中の式の型を返す
        return node.expression ? this.visitNode(node.expression) : undefined;
      default:
        // 未対応のノードタイプの場合、子ノードを再帰的に処理
        if (process.env.DEBUG) {
          console.log(`[DEBUG] Unhandled node type: ${node.type}`);
        }
        await this.visitChildren(node);
        return undefined;
    }
  }

  private async visitProgram(node: ASTNode): Promise<string | undefined> {
    if (node.body && Array.isArray(node.body)) {
      for (const child of node.body) {
        await this.visitNode(child);
      }
    }
    return undefined;
  }

  private async visitSchemaDeclaration(node: ASTNode): Promise<string | undefined> {
    this.symbolTable.enterScope('schema');

    if (node.body && Array.isArray(node.body)) {
      for (const child of node.body) {
        await this.visitNode(child);
      }
    }

    this.symbolTable.exitScope();
    return undefined;
  }

  private async visitStructDeclaration(node: ASTNode): Promise<string | undefined> {
    const structName = node.name?.name;
    if (!structName) {
      this.addError({
        message: 'Struct declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 構造体内のスコープに入る
    this.symbolTable.enterScope(structName);

    // thisキーワードを定義
    this.symbolTable.define({
      name: 'this',
      type: 'variable',
      dataType: structName,
      location: this.getLocation(node),
    });

    // パス1: 構造体メンバーの宣言を収集
    if (node.body && Array.isArray(node.body)) {
      for (const member of node.body) {
        await this.collectStructMemberDeclarations(member);
      }
    }

    // パス2: 構造体メンバーの実装を処理
    if (node.body && Array.isArray(node.body)) {
      for (const member of node.body) {
        await this.processStructMemberBodies(member);
      }
    }

    this.symbolTable.exitScope();
    return structName;
  }

  /**
   * 構造体メンバーの宣言のみを収集（実装は処理しない）
   */
  private async collectStructMemberDeclarations(node: ASTNode): Promise<void> {
    switch (node.type) {
      case 'PropertyDeclaration':
        await this.visitPropertyDeclaration(node);
        break;
      case 'MethodDeclaration':
      case 'GetterDeclaration':
        // メソッドの宣言のみ処理（ボディは後で処理）
        await this.visitMethodDeclarationOnly(node);
        break;
      case 'FunctionDeclaration':
        // 関数の宣言のみ処理
        await this.visitFunctionDeclarationOnly(node);
        break;
      case 'VariableDeclaration':
        // 変数宣言はそのまま処理（値の評価は後で）
        await this.visitVariableDeclarationOnly(node);
        break;
    }
  }

  /**
   * 構造体メンバーの実装を処理
   */
  private async processStructMemberBodies(node: ASTNode): Promise<void> {
    switch (node.type) {
      case 'MethodDeclaration':
      case 'GetterDeclaration':
        // メソッドのボディを処理
        await this.visitMethodBody(node);
        break;
      case 'FunctionDeclaration':
        // 関数のボディを処理
        await this.visitFunctionBody(node);
        break;
      case 'VariableDeclaration':
        // 変数の初期化子を処理
        await this.visitVariableInitializer(node);
        break;
      case 'InitDeclaration':
      case 'ExpressionStatement':
      case 'CallExpression':
        // その他の文や式を処理
        await this.visitNode(node);
        break;
    }
  }

  private async visitUnionDeclaration(node: ASTNode): Promise<string | undefined> {
    const unionName = node.name?.name;
    if (!unionName) {
      this.addError({
        message: 'Union declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // ユニオンは既にPass1で登録済みなので、重複登録しない
    // 型の有効性をチェック
    if (node.types && Array.isArray(node.types)) {
      for (const typeRef of node.types) {
        const typeName = typeRef.name?.name || typeRef.name;
        if (typeName && !this.symbolTable.isDefined(typeName)) {
          this.addError({
            message: `Unknown type '${typeName}' in union '${unionName}'`,
            type: 'TypeError',
            location: this.getLocation(typeRef),
          });
        }
      }
    }

    return unionName;
  }

  private async visitFunctionDeclaration(node: ASTNode): Promise<string | undefined> {
    const funcName = node.name?.name;
    if (!funcName) {
      this.addError({
        message: 'Function declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // infix関数の場合は receiverType.functionName として登録
    let fullFunctionName = funcName;
    if (node.isInfix && node.receiverType) {
      const receiverTypeName = node.receiverType.name;
      if (receiverTypeName) {
        fullFunctionName = `${receiverTypeName}.${funcName}`;
      }
    }

    // 関数をシンボルテーブルに登録
    let functionType = 'function';
    if (node.returnType) {
      const returnTypeName = node.returnType.name?.name || node.returnType.name;
      if (returnTypeName) {
        functionType = `function -> ${returnTypeName}`;
      }
    }

    this.symbolTable.define({
      name: fullFunctionName,
      type: 'function',
      dataType: functionType,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });

    // 関数内のスコープに入る
    this.symbolTable.enterScope(fullFunctionName);
    this.currentFunctionType = functionType;

    // パラメータを処理
    if (node.parameters && Array.isArray(node.parameters)) {
      for (const param of node.parameters) {
        if (param.name?.name) {
          const paramType = param.typeRef?.name?.name || param.typeRef?.name || 'any';
          this.symbolTable.define({
            name: param.name.name,
            type: 'parameter',
            dataType: paramType,
            location: this.getLocation(param.name),
          });
        }
      }
    }

    // 関数本体を処理
    if (node.body) {
      await this.visitNode(node.body);
    }

    this.currentFunctionType = undefined;
    this.symbolTable.exitScope();
    return functionType;
  }

  private async visitVariableDeclaration(node: ASTNode): Promise<string | undefined> {
    const varName = node.name?.name;
    if (!varName) {
      this.addError({
        message: 'Variable declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 型推論または明示的型チェック
    let dataType = 'any';
    let inferredType: string | undefined;

    // 値がある場合は型推論を実行
    if (node.value) {
      if (process.env.DEBUG) {
        console.log(`[DEBUG] Processing variable '${varName}' with value type: ${node.value.type}`);
      }
      inferredType = await this.visitNode(node.value);
    }

    // 明示型がある場合
    if (node.typeRef) {
      let declaredType: string;

      // typeRefも解析対象のASTノードの場合
      if (node.typeRef.type) {
        const typeResult = await this.visitNode(node.typeRef);
        declaredType = typeResult || 'any';
      } else {
        // 従来の簡単な形式（PrimitiveTypeの場合など）
        declaredType = node.typeRef.name?.name || node.typeRef.name || 'any';
      }

      if (process.env.DEBUG) {
        console.log(
          `[DEBUG] Variable '${varName}': inferred type = ${inferredType || 'none'}, declared type = ${declaredType}`
        );
      }

      // 型チェック：推論型と明示型の一致を確認
      if (inferredType && !this.isCompatibleType(inferredType, declaredType)) {
        this.addTypeError(
          inferredType,
          declaredType,
          this.getLocation(node.value),
          `variable '${varName}' initialization`
        );
      }

      dataType = declaredType;
    } else if (inferredType) {
      // 明示型がない場合は推論型を使用
      dataType = inferredType;
    }

    this.symbolTable.define({
      name: varName,
      type: 'variable',
      dataType,
      location: this.getLocation(node.name),
    });

    return dataType;
  }

  private async visitPropertyDeclaration(node: ASTNode): Promise<string | undefined> {
    const propName = node.name?.name;
    if (!propName) {
      this.addError({
        message: 'Property declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    let dataType = 'any';
    if (node.typeRef) {
      dataType = node.typeRef.name?.name || node.typeRef.name || 'any';

      // 型の存在確認
      if (
        dataType !== 'any' &&
        !this.isBuiltinType(dataType) &&
        !this.symbolTable.isDefined(dataType)
      ) {
        this.addError({
          message: `Unknown type '${dataType}' for property '${propName}'`,
          type: 'TypeError',
          location: this.getLocation(node.typeRef),
        });
      }
    } else if (node.initializer) {
      const inferredType = await this.visitNode(node.initializer);
      dataType = inferredType || 'any';
    }

    this.symbolTable.define({
      name: propName,
      type: 'property',
      dataType,
      isPrivate: node.isPrivate || false,
      isOptional: node.isOptional || false,
      location: this.getLocation(node.name),
    });

    return dataType;
  }

  private async visitMethodDeclaration(node: ASTNode): Promise<string | undefined> {
    const methodName = node.name?.name;
    if (!methodName) {
      this.addError({
        message: 'Method declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    if (process.env.DEBUG && methodName === 'toString') {
      console.log(`[DEBUG] Processing getter '${methodName}', type: ${node.type}`);
      console.log(`[DEBUG] Node returnType:`, node.returnType);
      console.log(`[DEBUG] Node body:`, node.body?.type);
    }

    // メソッドの戻り値型を決定
    let returnType = 'void';
    let explicitReturnType: string | undefined = undefined;

    if (node.returnType) {
      // 明示的に指定された戻り値型
      const typeStr = node.returnType.name?.name || node.returnType.name || 'void';
      explicitReturnType = typeStr;
      returnType = typeStr;
    }

    // getterの場合は戻り値型を推論
    if (node.type === 'GetterDeclaration' && node.body) {
      this.symbolTable.enterScope(methodName);
      const inferredType = await this.visitNode(node.body);
      this.symbolTable.exitScope();

      if (process.env.DEBUG && methodName === 'toString') {
        console.log(`[DEBUG] Inferred type for '${methodName}': ${inferredType}`);
      }

      if (inferredType) {
        if (explicitReturnType) {
          // 明示指定と推論結果を比較
          if (!this.isCompatibleType(inferredType, explicitReturnType)) {
            this.addTypeError(
              inferredType,
              explicitReturnType,
              this.getLocation(node.returnType),
              `getter '${methodName}' return type`
            );
          }
        } else {
          // 明示指定がない場合は推論結果を使用
          returnType = inferredType;
        }
      }
    }

    // メソッドをシンボルテーブルに登録
    this.symbolTable.define({
      name: methodName,
      type: 'function',
      dataType: `function -> ${returnType}`,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });

    // 通常のメソッドの場合は本体を処理
    if (node.type !== 'GetterDeclaration' || !node.returnType) {
      // メソッド内のスコープに入る
      this.symbolTable.enterScope(methodName);

      // パラメータを処理
      if (node.parameters && Array.isArray(node.parameters)) {
        for (const param of node.parameters) {
          if (param.name?.name) {
            const paramType = param.typeRef?.name?.name || param.typeRef?.name || 'any';
            this.symbolTable.define({
              name: param.name.name,
              type: 'parameter',
              dataType: paramType,
              location: this.getLocation(param.name),
            });
          }
        }
      }

      // メソッド本体を処理
      if (node.body) {
        await this.visitNode(node.body);
      }

      this.symbolTable.exitScope();
    }

    return `function -> ${returnType}`;
  }

  /**
   * メソッド・ゲッターの宣言のみを処理（実装は後で処理）
   */
  private async visitMethodDeclarationOnly(node: ASTNode): Promise<void> {
    const methodName = node.name?.name;
    if (!methodName) {
      this.addError({
        message: 'Method declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return;
    }

    // 戻り値型の処理
    let declaredReturnType: string | undefined;
    if (node.returnType) {
      declaredReturnType = node.returnType.name?.name || node.returnType.name;
    }

    // 一時的にシンボルテーブルに登録（本体処理で型を更新する）
    const functionType = declaredReturnType
      ? `function -> ${declaredReturnType}`
      : 'function -> unknown';

    this.symbolTable.define({
      name: methodName,
      type: 'function',
      dataType: functionType,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });

    if (process.env.DEBUG) {
      console.log(`[DEBUG] Method declaration: ${methodName} with type: ${functionType}`);
    }
  }

  /**
   * メソッド・ゲッターの本体を処理
   */
  private async visitMethodBody(node: ASTNode): Promise<void> {
    const methodName = node.name?.name;
    if (!methodName) return;

    // メソッドスコープに入る
    this.symbolTable.enterScope(methodName);

    // パラメータを処理
    if (node.parameters && Array.isArray(node.parameters)) {
      for (const param of node.parameters) {
        if (param.name?.name) {
          const paramType = param.typeRef?.name?.name || param.typeRef?.name || 'any';
          this.symbolTable.define({
            name: param.name.name,
            type: 'parameter',
            dataType: paramType,
            location: this.getLocation(param.name),
          });
        }
      }
    }

    // 明示的な戻り値型を取得
    let declaredReturnType: string | undefined;
    if (node.returnType) {
      declaredReturnType = node.returnType.name?.name || node.returnType.name;
    }

    // 本体を処理して戻り値型を推論
    let inferredReturnType: string | undefined;
    if (node.body) {
      inferredReturnType = await this.visitBlockAndInferReturnType(node.body);
    }

    // ゲッターの場合、戻り値型の検証を行う
    if (node.type === 'GetterDeclaration') {
      if (declaredReturnType && inferredReturnType) {
        if (!this.isCompatibleType(inferredReturnType, declaredReturnType)) {
          this.addTypeError(
            inferredReturnType,
            declaredReturnType,
            this.getLocation(node),
            `getter '${methodName}' return type`
          );
        }
      }

      // 最終的な戻り値型を決定
      const finalReturnType = declaredReturnType || inferredReturnType || 'void';

      // シンボルテーブルの型情報を更新
      this.symbolTable.updateType(methodName, `function -> ${finalReturnType}`);

      if (process.env.DEBUG) {
        console.log(
          `[DEBUG] Getter '${methodName}': declared=${declaredReturnType}, inferred=${inferredReturnType}, final=${finalReturnType}`
        );
      }
    } else {
      // 通常のメソッドの場合
      const finalReturnType = declaredReturnType || inferredReturnType || 'void';
      this.symbolTable.updateType(methodName, `function -> ${finalReturnType}`);
    }

    this.symbolTable.exitScope();
  }

  /**
   * ブロックを処理して戻り値型を推論
   */
  private async visitBlockAndInferReturnType(
    block: ASTNode | ASTNode[]
  ): Promise<string | undefined> {
    // blockが配列の場合（getterの本体など）
    if (Array.isArray(block)) {
      let lastExpressionType: string | undefined;

      for (const stmt of block) {
        const stmtType = await this.visitNode(stmt);
        if (stmtType) {
          lastExpressionType = stmtType;
        }
      }

      return lastExpressionType || 'void';
    }

    // blockがASTNodeの場合（通常のblock）
    if (!block || !block.body || !Array.isArray(block.body)) {
      return 'void';
    }

    let lastExpressionType: string | undefined;

    for (const stmt of block.body) {
      const stmtType = await this.visitNode(stmt);
      if (stmtType) {
        lastExpressionType = stmtType;
      }
    }

    return lastExpressionType || 'void';
  }

  /**
   * 関数の宣言のみを処理
   */
  private async visitFunctionDeclarationOnly(node: ASTNode): Promise<void> {
    // 既存のvisitFunctionDeclarationから宣言部分のみ抽出
    const funcName = node.name?.name;
    if (!funcName) {
      this.addError({
        message: 'Function declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return;
    }

    // infix関数の場合は receiverType.functionName として登録
    let fullFunctionName = funcName;
    if (node.isInfix && node.receiverType) {
      const receiverTypeName = node.receiverType.name;
      if (receiverTypeName) {
        fullFunctionName = `${receiverTypeName}.${funcName}`;
      }
    }

    // 関数をシンボルテーブルに登録
    let functionType = 'function';
    if (node.returnType) {
      const returnTypeName = node.returnType.name?.name || node.returnType.name;
      if (returnTypeName) {
        functionType = `function -> ${returnTypeName}`;
      }
    }

    this.symbolTable.define({
      name: fullFunctionName,
      type: 'function',
      dataType: functionType,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });
  }

  /**
   * 関数の本体を処理
   */
  private async visitFunctionBody(node: ASTNode): Promise<void> {
    const funcName = node.name?.name;
    if (!funcName) return;

    // infix関数の場合は receiverType.functionName として処理
    let fullFunctionName = funcName;
    if (node.isInfix && node.receiverType) {
      const receiverTypeName = node.receiverType.name;
      if (receiverTypeName) {
        fullFunctionName = `${receiverTypeName}.${funcName}`;
      }
    }

    // 関数内のスコープに入る
    this.symbolTable.enterScope(fullFunctionName);
    let functionType = 'function';
    if (node.returnType) {
      const returnTypeName = node.returnType.name?.name || node.returnType.name;
      if (returnTypeName) {
        functionType = `function -> ${returnTypeName}`;
      }
    }
    this.currentFunctionType = functionType;

    // パラメータを処理
    if (node.parameters && Array.isArray(node.parameters)) {
      for (const param of node.parameters) {
        if (param.name?.name) {
          const paramType = param.typeRef?.name?.name || param.typeRef?.name || 'any';
          this.symbolTable.define({
            name: param.name.name,
            type: 'parameter',
            dataType: paramType,
            location: this.getLocation(param.name),
          });
        }
      }
    }

    // 関数本体を処理
    if (node.body) {
      await this.visitNode(node.body);
    }

    this.currentFunctionType = undefined;
    this.symbolTable.exitScope();
  }

  /**
   * 変数宣言のみを処理（初期化子は後で処理）
   */
  private async visitVariableDeclarationOnly(node: ASTNode): Promise<void> {
    const varName = node.name?.name;
    if (!varName) {
      this.addError({
        message: 'Variable declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return;
    }

    // 明示的型がある場合はそれを使用、ない場合は一時的に'any'
    let dataType = 'any';
    if (node.typeRef) {
      dataType = node.typeRef.name?.name || node.typeRef.name || 'any';
    }

    this.symbolTable.define({
      name: varName,
      type: 'variable',
      dataType,
      location: this.getLocation(node.name),
    });
  }

  /**
   * 変数の初期化子を処理
   */
  private async visitVariableInitializer(node: ASTNode): Promise<void> {
    const varName = node.name?.name;
    if (!varName || !node.value) return;

    // 初期化子の型を推論
    const inferredType = await this.visitNode(node.value);

    if (process.env.DEBUG) {
      console.log(
        `[DEBUG] Variable '${varName}': inferred type = ${inferredType}, declared type = ${node.typeRef?.name?.name || node.typeRef?.name || 'none'}`
      );
    }

    // 明示型がある場合は型チェック
    if (node.typeRef && inferredType) {
      const declaredType = node.typeRef.name?.name || node.typeRef.name;
      if (declaredType && !this.isCompatibleType(inferredType, declaredType)) {
        this.addTypeError(
          inferredType,
          declaredType,
          this.getLocation(node.value),
          `variable '${varName}' initialization`
        );
      }
    }

    // 型情報を更新（推論型があればそれを、なければ明示型を使用）
    const finalType = inferredType || node.typeRef?.name?.name || node.typeRef?.name || 'any';
    this.symbolTable.updateType(varName, finalType);
  }

  /**
   * 型の互換性をチェックする（厳密型チェック）
   */
  private isCompatibleType(actualType: string | undefined, expectedType: string): boolean {
    if (!actualType) return false;
    if (actualType === expectedType) return true;

    // any型は全ての型と互換性がある
    if (actualType === 'any' || expectedType === 'any') return true;

    // null許容型の互換性チェック
    // 非null型 -> null許容型 は許可（例: string -> string?）
    if (expectedType.endsWith('?')) {
      const baseExpectedType = expectedType.slice(0, -1);
      return this.isCompatibleType(actualType, baseExpectedType);
    }

    // null許容型 -> 非null型 は禁止（例: string? -> string）
    if (actualType.endsWith('?') && !expectedType.endsWith('?')) {
      return false;
    }

    // 暗黙的型変換は行わない（型安全性のため）
    // 型変換が必要な場合は明示的にint(), float(), string(), bool()関数を使用する

    return false;
  }

  /**
   * 型チェックエラーを報告する
   */
  private addTypeError(
    actualType: string | undefined,
    expectedType: string,
    location: any,
    context: string = ''
  ): void {
    const contextMsg = context ? ` in ${context}` : '';
    this.addError({
      message: `Type mismatch${contextMsg}: expected '${expectedType}', but got '${actualType || 'unknown'}'`,
      type: 'TypeError',
      location,
    });
  }

  /**
   * ヘルパーメソッド群
   */
  private addError(error: SemanticError): void {
    this.errors.push(error);
  }

  private getLocation(node: ASTNode): { line: number; column: number } | undefined {
    if (node?.loc?.start) {
      return {
        line: node.loc.start.line || 0,
        column: node.loc.start.column || 0,
      };
    }
    return undefined;
  }

  private getFunctionName(node: ASTNode): string | undefined {
    if (node?.name) {
      return node.name;
    }
    if (node?.type === 'Identifier') {
      return node.name;
    }
    return undefined;
  }

  private extractReturnType(functionType: string): string {
    const match = functionType.match(/function -> (.+)/);
    return match ? match[1] : 'any';
  }

  private extractParameterType(functionType: string): string | undefined {
    // infix関数は通常 "function -> returnType" の形式
    // パラメータ型情報は関数名から推論する

    // step演算子の場合は int が期待される
    if (functionType.includes('step') && functionType.includes('function -> IntRange')) {
      return 'int';
    } else if (functionType.includes('step') && functionType.includes('function -> FloatRange')) {
      return 'int'; // step値はintのみ許可
    }
    // 一般的なinfix演算子の型を返す
    else if (functionType.includes('function -> int')) {
      return 'int'; // 例: int.add(other: int): int
    } else if (functionType.includes('function -> float')) {
      return 'float';
    } else if (functionType.includes('function -> string')) {
      return 'string';
    }

    return 'any'; // デフォルト
  }

  private extractParameterTypeByName(
    operatorName: string,
    functionType: string
  ): string | undefined {
    // 演算子名を考慮したパラメータ型の推論
    if (operatorName === 'step') {
      return 'int'; // step演算子は常にint引数を期待
    } else if (
      operatorName === 'add' ||
      operatorName === 'sub' ||
      operatorName === 'mul' ||
      operatorName === 'div'
    ) {
      // 算術演算子は左辺と同じ型の引数を期待
      if (functionType.includes('function -> int')) {
        return 'int';
      } else if (functionType.includes('function -> float')) {
        return 'float';
      }
    } else if (operatorName === 'until' || operatorName === 'downTo') {
      // range演算子は数値型引数を期待
      return 'int'; // 一般的にはint
    }

    // フォールバック: 従来のextractParameterTypeを使用
    return this.extractParameterType(functionType);
  }

  private isBuiltinType(type: string): boolean {
    return ['int', 'float', 'string', 'bool', 'any'].includes(type);
  }

  private isNumericType(type: string): boolean {
    return ['int', 'float'].includes(type);
  }

  /**
   * デバッグ用：エラーと結果を出力
   */
  public printResults(): void {
    console.log('=== Semantic Analysis Results ===');
    console.log(`Total errors: ${this.errors.length}`);

    if (this.errors.length > 0) {
      console.log('\nErrors:');
      this.errors.forEach((error, index) => {
        console.log(`${index + 1}. [${error.type}] ${error.message}`);
        if (error.location) {
          console.log(`   at line ${error.location.line}, column ${error.location.column}`);
        }
      });
    }

    console.log('\nSymbol Table:');
    this.symbolTable.debug();
  }

  /**
   * 識別子ノードを処理
   */
  private async visitIdentifier(node: ASTNode): Promise<string | undefined> {
    const name = node.name;
    if (!name) return undefined;

    const symbol = this.symbolTable.resolve(name);
    if (!symbol) {
      this.addError({
        message: `Undefined identifier '${name}'`,
        type: 'NameError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    return symbol.dataType;
  }

  /**
   * Range式を処理
   */
  private async visitRangeExpression(node: ASTNode): Promise<string | undefined> {
    // from/to フィールドの型を確認
    let fromType: string | undefined;
    let toType: string | undefined;

    if (node.from) {
      fromType = await this.visitNode(node.from);
    }
    if (node.to) {
      toType = await this.visitNode(node.to);
    }

    // 型チェック: Range式は数値型でのみ使用可能
    if (fromType && !this.isNumericType(fromType)) {
      this.addError({
        message: `Range operator cannot be applied to '${fromType}'. Range expressions require numeric types.`,
        type: 'TypeError',
        location: this.getLocation(node.from),
      });
    }

    if (toType && !this.isNumericType(toType)) {
      this.addError({
        message: `Range operator cannot be applied to '${toType}'. Range expressions require numeric types.`,
        type: 'TypeError',
        location: this.getLocation(node.to),
      });
    }

    // 型チェック: from と to は互換性のある数値型である必要がある
    if (fromType && toType && this.isNumericType(fromType) && this.isNumericType(toType)) {
      if (!this.isCompatibleType(fromType, toType)) {
        this.addError({
          message: `Range operator requires compatible numeric types, but got '${fromType}' and '${toType}'.`,
          type: 'TypeError',
          location: this.getLocation(node),
        });
      }
    }

    // Range型を返す
    if (fromType === 'float' || toType === 'float') {
      return 'FloatRange';
    } else if (fromType === 'int' || toType === 'int') {
      return 'IntRange';
    }

    return 'IntRange'; // デフォルト
  }

  /**
   * Infix関数呼び出しを処理
   */
  private async visitInfixFunctionCall(node: ASTNode): Promise<string | undefined> {
    const operatorName = node.operator?.name || node.operator || node.functionName;
    const leftType = node.left ? await this.visitNode(node.left) : undefined;
    const rightType = node.right ? await this.visitNode(node.right) : undefined;

    if (process.env.DEBUG) {
      console.log(`[DEBUG] InfixCall: ${operatorName}, left=${leftType}, right=${rightType}`);
    }

    if (!operatorName) return undefined;

    // print関数の特別処理（InfixCallとして解析された場合）
    if (operatorName === 'print') {
      // print関数は引数を1つだけ取る（leftまたはrightのどちらか一方）
      const argType = rightType || leftType;
      if (!argType) {
        this.addError({
          message: `Function 'print()' expects exactly 1 argument, but got 0`,
          type: 'TypeError',
          location: this.getLocation(node),
        });
        return 'void';
      }

      // any型を受け付けるため、型チェックなし

      return 'void'; // print関数は戻り値なし
    }

    // infix演算子の型チェック
    if (leftType && rightType) {
      const infixFunctionName = `${leftType}.${operatorName}`;
      const infixFunction = this.symbolTable.resolve(infixFunctionName);

      if (process.env.DEBUG) {
        console.log(
          `[DEBUG] Looking for infix function: ${infixFunctionName}, found: ${!!infixFunction}`
        );
      }

      if (!infixFunction) {
        this.addError({
          message: `Unknown infix operator '${operatorName}' for type '${leftType}'`,
          type: 'TypeError',
          location: this.getLocation(node),
        });
        return 'any';
      }

      // infix関数のパラメータ型をチェック
      const expectedParamType = this.extractParameterTypeByName(
        operatorName,
        infixFunction.dataType
      );

      if (process.env.DEBUG) {
        console.log(`[DEBUG] Expected param type: ${expectedParamType}, got: ${rightType}`);
      }

      if (expectedParamType && !this.isCompatibleType(rightType, expectedParamType)) {
        this.addError({
          message: `Infix operator '${operatorName}' expects parameter of type '${expectedParamType}', but got '${rightType}'`,
          type: 'TypeError',
          location: this.getLocation(node.right),
        });
      }

      // 戻り値型を抽出
      return this.extractReturnType(infixFunction.dataType);
    }

    return undefined;
  }

  /**
   * 関数呼び出しを処理
   */
  private async visitFunctionCall(node: ASTNode): Promise<string | undefined> {
    const funcName = node.function?.name || node.function;
    if (!funcName) return undefined;

    // 型キャスト関数の特別処理（int(), float(), string(), bool()）
    if (['int', 'float', 'string', 'bool'].includes(funcName)) {
      // 引数の型チェック
      if (node.arguments && Array.isArray(node.arguments)) {
        if (node.arguments.length !== 1) {
          this.addError({
            message: `Type cast function '${funcName}()' expects exactly 1 argument, but got ${node.arguments.length}`,
            type: 'TypeError',
            location: this.getLocation(node),
          });
          return funcName; // 型キャスト関数の戻り値型は関数名と同じ
        }

        // 引数の型を評価
        const argType = await this.visitNode(node.arguments[0]);
        if (argType) {
          // 明示的型キャストは任意の型から可能（ただし実行時エラーの可能性あり）
          console.log(`[DEBUG] Type cast: ${argType} -> ${funcName}`);
        }
      }

      return funcName; // 型キャスト関数の戻り値型は関数名と同じ
    }

    // print関数の特別処理（struct型の引数のみ受け入れ）
    if (funcName === 'print') {
      if (node.arguments && Array.isArray(node.arguments)) {
        if (node.arguments.length !== 1) {
          this.addError({
            message: `Function 'print()' expects exactly 1 argument, but got ${node.arguments.length}`,
            type: 'TypeError',
            location: this.getLocation(node),
          });
          return 'void';
        }

        // 引数の型を評価（型チェックなし、any型を受け付け）
        await this.visitNode(node.arguments[0]);
      } else {
        this.addError({
          message: `Function 'print()' expects exactly 1 argument, but got 0`,
          type: 'TypeError',
          location: this.getLocation(node),
        });
      }

      return 'void'; // print関数は戻り値なし
    }

    // 通常の関数解決
    const func = this.symbolTable.resolve(funcName);
    if (!func) {
      this.addError({
        message: `Undefined function '${funcName}'`,
        type: 'NameError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 引数の型チェック（簡略化）
    if (node.arguments && Array.isArray(node.arguments)) {
      for (const arg of node.arguments) {
        await this.visitNode(arg);
      }
    }

    // 戻り値型を抽出
    return this.extractReturnType(func.dataType);
  }

  /**
   * 二項演算式を処理
   */
  private async visitBinaryExpression(node: ASTNode): Promise<string | undefined> {
    const leftType = node.left ? await this.visitNode(node.left) : undefined;
    const rightType = node.right ? await this.visitNode(node.right) : undefined;
    const operator = node.operator;

    if (!operator) return undefined;

    // 演算子に基づく型チェック
    switch (operator) {
      case '+':
        if (leftType && rightType) {
          // 文字列連結
          if (leftType === 'string' && rightType === 'string') {
            return 'string';
          }
          // 数値演算
          else if (this.isNumericType(leftType) && this.isNumericType(rightType)) {
            return leftType === 'float' || rightType === 'float' ? 'float' : 'int';
          }
          // 型不一致エラー
          else {
            this.addError({
              message: `Binary operator '+' cannot be applied to '${leftType}' and '${rightType}'. Both operands must be numeric types or both must be strings.`,
              type: 'TypeError',
              location: this.getLocation(node),
            });
            return 'any';
          }
        }
        break;
      case '-':
      case '*':
      case '/':
      case '%':
        if (leftType && rightType) {
          if (this.isNumericType(leftType) && this.isNumericType(rightType)) {
            // 数値型同士の演算
            return leftType === 'float' || rightType === 'float' ? 'float' : 'int';
          } else {
            this.addError({
              message: `Binary operator '${operator}' cannot be applied to '${leftType}' and '${rightType}'. Both operands must be numeric types.`,
              type: 'TypeError',
              location: this.getLocation(node),
            });
            return 'any';
          }
        }
        break;
      case '==':
      case '!=':
        // 等価演算子は任意の型で使用可能（ただし型の互換性チェック）
        if (
          leftType &&
          rightType &&
          !this.isCompatibleType(leftType, rightType) &&
          !this.isCompatibleType(rightType, leftType)
        ) {
          this.addError({
            message: `Comparison operator '${operator}' cannot be applied to incompatible types '${leftType}' and '${rightType}'.`,
            type: 'TypeError',
            location: this.getLocation(node),
          });
        }
        return 'bool';
      case '<':
      case '>':
      case '<=':
      case '>=':
        // 比較演算子は数値型または文字列型でのみ使用可能
        if (leftType && rightType) {
          if (
            (this.isNumericType(leftType) && this.isNumericType(rightType)) ||
            (leftType === 'string' && rightType === 'string')
          ) {
            return 'bool';
          } else {
            this.addError({
              message: `Comparison operator '${operator}' cannot be applied to '${leftType}' and '${rightType}'. Both operands must be numeric types or both must be strings.`,
              type: 'TypeError',
              location: this.getLocation(node),
            });
            return 'bool';
          }
        }
        return 'bool';
      case '&&':
      case '||':
        // 論理演算子はbool型でのみ使用可能
        if (leftType && rightType) {
          if (leftType !== 'bool' || rightType !== 'bool') {
            this.addError({
              message: `Logical operator '${operator}' cannot be applied to '${leftType}' and '${rightType}'. Both operands must be bool type.`,
              type: 'TypeError',
              location: this.getLocation(node),
            });
          }
        }
        return 'bool';
      default:
        return 'any';
    }

    return undefined;
  }

  /**
   * メンバーアクセスを処理
   */
  private async visitMemberAccess(node: ASTNode): Promise<string | undefined> {
    const objectType = node.object ? await this.visitNode(node.object) : undefined;
    const memberName = node.property?.name || node.property;

    if (!objectType || !memberName) return undefined;

    // オブジェクトの型に基づいてメンバーの型を推論
    // まず直接のメンバーアクセスをチェック（例: Version.major）
    const directMemberSymbol = this.symbolTable.resolve(`${objectType}.${memberName}`);
    if (directMemberSymbol) {
      return directMemberSymbol.dataType;
    }

    // 構造体のスコープ内でプロパティを検索
    const objectScope = this.findScopeByName(objectType);
    if (objectScope) {
      const memberSymbol = objectScope.symbols.get(memberName);
      if (memberSymbol) {
        return memberSymbol.dataType;
      }
    }

    // 現在のスコープでプロパティを検索（thisアクセスの場合）
    if (objectType === this.symbolTable.getCurrentScope().name) {
      const memberSymbol = this.symbolTable.resolve(memberName);
      if (memberSymbol && memberSymbol.type === 'property') {
        return memberSymbol.dataType;
      }
    }

    return 'any';
  }

  /**
   * this式を処理
   */
  private async visitThisExpression(node: ASTNode): Promise<string | undefined> {
    // 現在のスコープから 'this' の型を取得
    const thisSymbol = this.symbolTable.resolve('this');
    if (thisSymbol) {
      return thisSymbol.dataType;
    }

    // thisが見つからない場合、現在のクラス/構造体のスコープ名を返す
    const currentScope = this.symbolTable.getCurrentScope();
    if (currentScope && currentScope.name !== 'global') {
      return currentScope.name;
    }

    this.addError({
      message: `'this' is not available in the current context`,
      type: 'TypeError',
      location: this.getLocation(node),
    });

    return 'any';
  }

  /**
   * 代入文を処理
   */
  private async visitAssignmentStatement(node: ASTNode): Promise<string | undefined> {
    const leftType = node.left ? await this.visitNode(node.left) : undefined;
    const rightType = node.right ? await this.visitNode(node.right) : undefined;

    if (leftType && rightType && !this.isCompatibleType(rightType, leftType)) {
      this.addError({
        message: `Cannot assign value of type '${rightType}' to variable of type '${leftType}'`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
    }

    return leftType; // 代入式の型は左辺の型
  }

  /**
   * if式を処理
   */
  private async visitIfExpression(node: ASTNode): Promise<string | undefined> {
    // 条件式の型をチェック
    if (node.condition) {
      const conditionType = await this.visitNode(node.condition);
      if (conditionType && conditionType !== 'bool') {
        this.addError({
          message: `Condition in if expression must be of type 'bool', but got '${conditionType}'`,
          type: 'TypeError',
          location: this.getLocation(node.condition),
        });
      }
    }

    // then節とelse節の型をチェック
    let thenType: string | undefined;
    let elseType: string | undefined;

    if (node.then) {
      thenType = await this.visitNode(node.then);
    }

    if (node.else) {
      elseType = await this.visitNode(node.else);
    }

    // if式の型は、then節とelse節の共通上位型
    if (thenType && elseType) {
      if (this.isCompatibleType(thenType, elseType)) {
        return elseType;
      } else if (this.isCompatibleType(elseType, thenType)) {
        return thenType;
      } else {
        // 型が一致しない場合は警告
        this.addError({
          message: `If expression branches have incompatible types: '${thenType}' and '${elseType}'`,
          type: 'TypeError',
          location: this.getLocation(node),
        });
        return 'any';
      }
    }

    return thenType || elseType || 'any';
  }

  /**
   * 型キャスト式を処理
   */
  private async visitTypeCastExpression(node: ASTNode): Promise<string | undefined> {
    // 被キャスト式の型を評価
    const sourceType = node.expression ? await this.visitNode(node.expression) : undefined;
    const targetType = node.targetType;

    if (!targetType) {
      this.addError({
        message: 'Type cast expression missing target type',
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return 'any';
    }

    // 基本型の検証
    if (!this.isBuiltinType(targetType)) {
      this.addError({
        message: `Invalid cast target type '${targetType}'. Only built-in types (int, float, string, bool) are supported for casting`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return 'any';
    }

    if (sourceType) {
      console.log(`[DEBUG] Type cast: ${sourceType} -> ${targetType}`);

      // 型キャストの妥当性チェック（警告レベル）
      if (sourceType === targetType) {
        // 同じ型への無意味なキャスト
        console.log(`[DEBUG] Warning: Unnecessary cast from ${sourceType} to ${targetType}`);
      }
    }

    // 型キャストは常に成功する（実行時エラーの可能性はあるが）
    return targetType;
  }

  /**
   * 子ノードを再帰的に処理
   */
  private async visitChildren(node: ASTNode): Promise<void> {
    if (!node || typeof node !== 'object') return;

    for (const [key, value] of Object.entries(node)) {
      if (key === 'type' || key === 'loc') continue;

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item && typeof item === 'object' && item.type) {
            await this.visitNode(item);
          }
        }
      } else if (value && typeof value === 'object' && value.type) {
        await this.visitNode(value);
      }
    }
  }

  /**
   * スコープ名でスコープを検索する
   */
  private findScopeByName(scopeName: string): any {
    // SymbolTableの全スコープを検索してスコープ名が一致するものを見つける
    return this.symbolTable.findScopeByName(scopeName);
  }

  /**
   * null許容型の型推論
   */
  private async visitNullableType(node: ASTNode): Promise<string | undefined> {
    if (!node.innerType) {
      this.addError({
        message: 'Nullable type must have an inner type',
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    const innerType = await this.visitNode(node.innerType);
    if (!innerType) {
      return undefined;
    }

    // null許容型は型名の後に?を付けて表現
    return `${innerType}?`;
  }

  /**
   * 配列型の型推論
   */
  private async visitArrayType(node: ASTNode): Promise<string | undefined> {
    if (!node.elementType) {
      this.addError({
        message: 'Array type must have an element type',
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    const elementType = await this.visitNode(node.elementType);
    if (!elementType) {
      return undefined;
    }

    // 配列の次元数を考慮
    const dimensions = node.dimensions || 1;
    let arrayType = elementType;
    for (let i = 0; i < dimensions; i++) {
      arrayType = `${arrayType}[]`;
    }

    return arrayType;
  }

  /**
   * プリミティブ型の型推論
   */
  private async visitPrimitiveType(node: ASTNode): Promise<string | undefined> {
    // プリミティブ型はnameプロパティに型名が格納されている
    return node.name || undefined;
  }

  /**
   * 型参照の型推論
   */
  private async visitTypeReference(node: ASTNode): Promise<string | undefined> {
    if (!node.name) {
      this.addError({
        message: 'Type reference must have a name',
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 識別子ノードから型名を取得
    let typeName: string;
    if (typeof node.name === 'string') {
      typeName = node.name;
    } else if (node.name.name) {
      typeName = node.name.name;
    } else {
      this.addError({
        message: 'Invalid type reference name',
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 型が定義されているかチェック
    const typeInfo = this.symbolTable.resolve(typeName);
    if (!typeInfo) {
      this.addError({
        message: `Unknown type: ${typeName}`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    return typeName;
  }

  /**
   * 型がstruct型またはstructから派生した型かどうかをチェック
   */
  private isStructType(typeName: string): boolean {
    if (!typeName) return false;

    // 基本型（プリミティブ型）は除外
    if (['int', 'float', 'string', 'bool'].includes(typeName)) {
      return false;
    }

    // null許容型の場合は内部型をチェック
    if (typeName.endsWith('?')) {
      const innerType = typeName.slice(0, -1);
      return this.isStructType(innerType);
    }

    // 配列型の場合は要素型をチェック
    if (typeName.endsWith('[]')) {
      const elementType = typeName.slice(0, -2);
      return this.isStructType(elementType);
    }

    // シンボルテーブルから型情報を取得
    const typeSymbol = this.symbolTable.resolve(typeName);
    if (typeSymbol && typeSymbol.type === 'struct') {
      return true;
    }

    // カスタム構造体型として扱う（未定義でもstruct型として扱う）
    // これにより、ユーザー定義のstruct型も許可される
    return true;
  }
}
