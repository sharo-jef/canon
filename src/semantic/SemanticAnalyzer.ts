/**
 * 意味解析器 - ASTを走査して名前解決、型チェック、型推論を行う
 */

import { SymbolTable, Symbol, SymbolType } from './SymbolTable';
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
        return this.visitMemberAccess(node);
      case 'StringLiteral':
        return 'string';
      case 'IntegerLiteral':
        return 'int';
      case 'FloatLiteral':
        return 'float';
      case 'BooleanLiteral':
        return 'bool';
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
    if (node.typeRef) {
      dataType = node.typeRef.name?.name || node.typeRef.name || 'any';
    } else if (node.value) {
      if (process.env.DEBUG) {
        console.log(`[DEBUG] Processing variable '${varName}' with value type: ${node.value.type}`);
      }
      const inferredType = await this.visitNode(node.value);
      dataType = inferredType || 'any';
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

    // メソッドの戻り値型を決定
    let returnType = 'void';
    if (node.returnType) {
      returnType = node.returnType.name?.name || node.returnType.name || 'void';
    }

    // メソッドをシンボルテーブルに登録
    this.symbolTable.define({
      name: methodName,
      type: 'function',
      dataType: `function -> ${returnType}`,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });

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
    return `function -> ${returnType}`;
  }

  /**
   * メソッドの宣言のみを処理（ボディは処理しない）
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

    // メソッドの戻り値型を決定
    let returnType = 'void';
    if (node.returnType) {
      returnType = node.returnType.name?.name || node.returnType.name || 'void';
    }

    // メソッドをシンボルテーブルに登録
    this.symbolTable.define({
      name: methodName,
      type: 'function',
      dataType: `function -> ${returnType}`,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });
  }

  /**
   * 関数の宣言のみを処理（ボディは処理しない）
   */
  private async visitFunctionDeclarationOnly(node: ASTNode): Promise<void> {
    const funcName = node.name?.name;
    if (!funcName) {
      this.addError({
        message: 'Function declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node.name),
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

    // 関数の戻り値型を決定
    let returnType = 'any';
    if (node.returnType) {
      returnType = node.returnType.name?.name || node.returnType.name || 'any';
    }

    const functionType = `function -> ${returnType}`;

    // 関数をシンボルテーブルに登録
    this.symbolTable.define({
      name: fullFunctionName,
      type: 'function',
      dataType: functionType,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });
  }

  /**
   * 変数の宣言のみを処理（初期化子は処理しない）
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

    // 型を決定
    let varType = 'any';
    if (node.typeRef) {
      varType = node.typeRef.name?.name || node.typeRef.name || 'any';
    }

    // 変数をシンボルテーブルに登録
    this.symbolTable.define({
      name: varName,
      type: 'variable',
      dataType: varType,
      isPrivate: node.isPrivate || false,
      location: this.getLocation(node.name),
    });
  }

  private async visitIdentifier(node: ASTNode): Promise<string | undefined> {
    const name = node.name;
    if (!name) return undefined;

    // スコープチェーンを辿ってシンボルを検索
    const symbol = this.symbolTable.resolve(name);
    if (symbol) {
      return symbol.dataType;
    }

    this.addError({
      message: `Undefined symbol '${name}'`,
      type: 'NameError',
      location: this.getLocation(node),
    });
    return undefined;
  }

  /**
   * RangeExpression の特殊処理
   * 1..10 → IntRange, 1.0..10.0 → FloatRange
   */
  private async visitRangeExpression(node: ASTNode): Promise<string | undefined> {
    // RangeExpressionのfromとtoフィールドを使用（ASTでは'start'/'end'ではなく'from'/'to'）
    const startType = await this.visitNode(node.from);
    const endType = await this.visitNode(node.to);

    // 両方の型が数値型である必要がある
    const isStartNumeric =
      this.isCompatibleType(startType, 'int') || this.isCompatibleType(startType, 'float');
    const isEndNumeric =
      this.isCompatibleType(endType, 'int') || this.isCompatibleType(endType, 'float');

    if (!isStartNumeric) {
      this.addTypeError(
        startType,
        'numeric type (int or float)',
        this.getLocation(node.from),
        'range start'
      );
    }

    if (!isEndNumeric) {
      this.addTypeError(
        endType,
        'numeric type (int or float)',
        this.getLocation(node.to),
        'range end'
      );
    }

    if (!isStartNumeric || !isEndNumeric) {
      return undefined;
    }

    // 型互換性チェック（intとfloat間は互換性あり）
    if (
      !this.isCompatibleType(startType, endType || '') &&
      !this.isCompatibleType(endType, startType || '')
    ) {
      this.addTypeError(
        endType,
        startType || 'unknown',
        this.getLocation(node.to),
        'range expression'
      );
      return undefined;
    }

    // 型に応じてIntRangeまたはFloatRangeを返す
    if (startType === 'int' || endType === 'int') {
      return 'IntRange';
    } else if (startType === 'float' || endType === 'float') {
      return 'FloatRange';
    }

    return 'IntRange'; // デフォルト
  }

  /**
   * InfixFunctionCall の処理（特にRange関連）
   */
  private async visitInfixFunctionCall(node: ASTNode): Promise<string | undefined> {
    // InfixCallとInfixFunctionCallの両方に対応
    const functionName = node.function?.name || node.functionName;
    const leftType = await this.visitNode(node.left);
    const rightType = await this.visitNode(node.right);

    // デバッグ出力
    if (process.env.DEBUG) {
      console.log(`[DEBUG] InfixCall: ${leftType} ${functionName} ${rightType}`);
    }

    // Range用のinfix関数の特殊処理
    if (functionName === 'step' && (leftType === 'IntRange' || leftType === 'FloatRange')) {
      // stepの右オペランドは数値型である必要がある
      if (!this.isCompatibleType(rightType, 'int') && !this.isCompatibleType(rightType, 'float')) {
        this.addTypeError(rightType, 'int or float', this.getLocation(node.right), 'step function');
      }
      return leftType; // stepはRangeの型を保持
    }

    if (functionName === 'until' || functionName === 'downTo') {
      // until/downToは左右の型が互換性を持つ必要がある
      if (!this.isCompatibleType(rightType, leftType || '')) {
        this.addTypeError(
          rightType,
          leftType || 'unknown',
          this.getLocation(node.right),
          `${functionName} function`
        );
        return undefined;
      }

      if (leftType === 'int' || this.isCompatibleType(leftType, 'int')) {
        return 'IntRange';
      } else if (leftType === 'float' || this.isCompatibleType(leftType, 'float')) {
        return 'FloatRange';
      }
    }

    // 通常のinfix関数呼び出し
    const fullFunctionName = `${leftType}.${functionName}`;
    const symbol = this.symbolTable.resolve(fullFunctionName);
    if (symbol) {
      // 関数の戻り値型を返す（簡略化）
      const returnType = symbol.dataType.includes('->')
        ? symbol.dataType.split('->')[1].trim()
        : 'any';
      return returnType;
    }

    // グローバル関数としても確認
    const globalSymbol = this.symbolTable.resolve(functionName);
    if (globalSymbol) {
      const returnType = globalSymbol.dataType.includes('->')
        ? globalSymbol.dataType.split('->')[1].trim()
        : 'any';
      return returnType;
    }

    // infix関数が見つからない場合のエラー
    this.addError({
      message: `Undefined infix function '${functionName}' for type '${leftType}'`,
      type: 'NameError',
      location: this.getLocation(node.function || node),
    });
    return undefined;
  }

  private async visitFunctionCall(node: ASTNode): Promise<string | undefined> {
    const functionName = this.getFunctionName(node.function);
    if (!functionName) return undefined;

    const symbol = this.symbolTable.resolve(functionName);
    if (!symbol) {
      this.addError({
        message: `Undefined function '${functionName}'`,
        type: 'NameError',
        location: this.getLocation(node.function),
      });
      return undefined;
    }

    // 引数の型チェック（簡略化）
    if (node.arguments && Array.isArray(node.arguments)) {
      for (const arg of node.arguments) {
        await this.visitNode(arg);
      }
    }

    return this.extractReturnType(symbol.dataType);
  }

  private async visitBinaryExpression(node: ASTNode): Promise<string | undefined> {
    const leftType = await this.visitNode(node.left);
    const rightType = await this.visitNode(node.right);

    // 型の互換性チェック（簡略化）
    if (leftType && rightType) {
      if (this.isNumericType(leftType) && this.isNumericType(rightType)) {
        // 数値型の場合、より精密な型を返す
        return leftType === 'float' || rightType === 'float' ? 'float' : 'int';
      }
      if (leftType === rightType) {
        return leftType;
      }
    }

    return leftType || rightType || 'any';
  }

  /**
   * メンバーアクセス（this.property, obj.method など）の処理
   */
  private async visitMemberAccess(node: ASTNode): Promise<string | undefined> {
    const objectType = await this.visitNode(node.object);
    const memberName = node.property?.name || node.member?.name;

    if (!objectType || !memberName) {
      return undefined;
    }

    // thisの場合は現在のスコープ内でメンバーを検索
    if (node.object?.name === 'this') {
      const symbol = this.symbolTable.resolveInScope(memberName);
      if (symbol) {
        return symbol.dataType;
      }
    }

    // 型のメンバーを検索（簡略化：今回は基本実装）
    const memberSymbol = this.symbolTable.resolve(`${objectType}.${memberName}`);
    if (memberSymbol) {
      return memberSymbol.dataType;
    }

    this.addError({
      message: `Property '${memberName}' does not exist on type '${objectType}'`,
      type: 'TypeError',
      location: this.getLocation(node.property || node.member),
    });

    return undefined;
  }

  /**
   * 子ノードを再帰的に処理
   */
  private async visitChildren(node: ASTNode): Promise<void> {
    if (!node || typeof node !== 'object') {
      return;
    }

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
   * メソッドのボディのみを処理（宣言は既に処理済み）
   */
  private async visitMethodBody(node: ASTNode): Promise<void> {
    const methodName = node.name?.name;
    if (!methodName) return;

    // 既存のメソッドスコープに入る
    this.symbolTable.enterScope(methodName);

    // パラメータを再定義（スコープは新しく作られているため）
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

    // メソッドのボディを処理
    if (node.body) {
      await this.visitNode(node.body);
    }

    this.symbolTable.exitScope();
  }

  /**
   * 関数のボディのみを処理（宣言は既に処理済み）
   */
  private async visitFunctionBody(node: ASTNode): Promise<void> {
    const funcName = node.name?.name;
    if (!funcName) return;

    // infix関数の場合は receiverType.functionName として登録
    let fullFunctionName = funcName;
    if (node.isInfix && node.receiverType) {
      const receiverTypeName = node.receiverType.name;
      if (receiverTypeName) {
        fullFunctionName = `${receiverTypeName}.${funcName}`;
      }
    }

    // 既存の関数スコープに入る
    this.symbolTable.enterScope(fullFunctionName);

    // パラメータを再定義
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

    // 関数のボディを処理
    if (node.body) {
      await this.visitNode(node.body);
    }

    this.symbolTable.exitScope();
  }

  /**
   * 変数の初期化子のみを処理
   */
  private async visitVariableInitializer(node: ASTNode): Promise<void> {
    if (node.value) {
      await this.visitNode(node.value);
    }
  }

  /**
   * 型の互換性をチェックする
   */
  private isCompatibleType(actualType: string | undefined, expectedType: string): boolean {
    if (!actualType) return false;
    if (actualType === expectedType) return true;

    // any型は全ての型と互換性がある
    if (actualType === 'any' || expectedType === 'any') return true;

    // 数値型の互換性（intとfloatは相互変換可能）
    if (
      (actualType === 'int' && expectedType === 'float') ||
      (actualType === 'float' && expectedType === 'int')
    ) {
      return true;
    }

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
}
