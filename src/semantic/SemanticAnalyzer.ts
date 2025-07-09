/**
 * 意味解析器 - ASTを走査して名前解決、型チェック、型推論を行う
 */

import { SymbolTable } from './SymbolTable';
import * as fs from 'fs';
import * as path from 'path';
import { parseCanonFile } from '../parser';

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

export interface SchemaProperty {
  name: string;
  type: string;
  isOptional?: boolean;
  location?: { line: number; column: number };
}

export class SemanticAnalyzer {
  private symbolTable: SymbolTable;
  private errors: SemanticError[] = [];
  private currentFunctionType?: string;
  private isInSchema: boolean = false;
  private schemaDefinition: Map<string, SchemaProperty> = new Map();
  private currentFilePath?: string;
  private schemaPropertyInstances: Set<string> = new Set(); // Track instantiated schema properties

  constructor() {
    this.symbolTable = new SymbolTable();
  }

  /**
   * Canonファイルを読み込んで意味解析を実行
   * config.canonが指定された場合、同じディレクトリのschema.canonも自動的に解析
   */
  async analyzeFromFile(sourceFilePath: string): Promise<{
    success: boolean;
    errors: SemanticError[];
    symbolTable: SymbolTable;
  }> {
    try {
      // 現在のファイルパスを保存
      this.currentFilePath = sourceFilePath;
      
      if (sourceFilePath.endsWith('.canon')) {
        const directory = path.dirname(sourceFilePath);
        const filename = path.basename(sourceFilePath);
        
        // config.canonの場合、schema.canonも探す
        if (filename === 'config.canon') {
          const schemaPath = path.join(directory, 'schema.canon');
          
          if (fs.existsSync(schemaPath)) {
            // 1. schema.canonを解析（型定義のため、validationはスキップ）
            try {
              const schemaAst = await parseCanonFile(schemaPath);
              if (schemaAst) {
                if (process.env.DEBUG) {
                  console.log(`[DEBUG] Analyzing schema.canon first`);
                }
                await this.analyze(schemaAst, true);
              }
            } catch (error) {
              this.addError({
                message: `Failed to parse schema.canon: ${error}`,
                type: 'ValidationError',
              });
            }
          }
          
          // 2. config.canonを解析（validationを実行）
          try {
            const configAst = await parseCanonFile(sourceFilePath);
            if (configAst) {
              if (process.env.DEBUG) {
                console.log(`[DEBUG] Analyzing config.canon with validation`);
              }
              await this.analyze(configAst, false);
            }
          } catch (error) {
            this.addError({
              message: `Failed to parse config.canon: ${error}`,
              type: 'ValidationError',
            });
          }
        } else {
          // schema.canonのみの場合
          try {
            const ast = await parseCanonFile(sourceFilePath);
            if (ast) {
              await this.analyze(ast, true); // schema.canonではvalidationをスキップ
            }
          } catch (error) {
            this.addError({
              message: `Failed to parse ${sourceFilePath}: ${error}`,
              type: 'ValidationError',
            });
          }
        }
      } else {
        this.addError({
          message: `Unsupported file type: ${sourceFilePath}. Only .canon files are supported.`,
          type: 'ValidationError',
        });
      }

      return {
        success: this.errors.length === 0,
        errors: this.errors,
        symbolTable: this.symbolTable,
      };
    } catch (error) {
      this.addError({
        message: `Failed to analyze file: ${error}`,
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
   * use文のみを処理（config.canonファイルから）
   */
  private async processUseStatements(node: ASTNode): Promise<void> {
    if (!node || typeof node !== 'object') {
      return;
    }

    if (node.type === 'UseStatement') {
      await this.visitUseStatement(node);
      return;
    }

    // 子ノードを再帰的に処理
    for (const [key, value] of Object.entries(node)) {
      if (key === 'type' || key === 'loc') continue;

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item && typeof item === 'object' && item.type) {
            await this.processUseStatements(item);
          }
        }
      } else if (value && typeof value === 'object' && value.type) {
        await this.processUseStatements(value);
      }
    }
  }

  /**
   * ASTノードを解析 - 2パス解析を実行
   */
  async analyze(node: ASTNode, skipValidation: boolean = false): Promise<void> {
    if (!node || typeof node !== 'object') {
      return;
    }

    try {
      // Pass 1: 型定義の収集（前方宣言対応）
      await this.collectTypeDefinitions(node);

      // Pass 2: 詳細な意味解析
      await this.visitNode(node);

      // Pass 3: Schema completeness validation (config.canonでのみ実行)
      if (!skipValidation) {
        this.validateSchemaCompleteness();
      }
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

    switch (node.type) {
      case 'StructDeclaration':
      case 'UnionDeclaration': {
        const typeName = node.name?.name;
        if (typeName) {
          try {
            this.symbolTable.define({
              name: typeName,
              type: 'type',
              dataType: node.type === 'StructDeclaration' ? 'struct' : 'union',
              location: this.getLocation(node),
            });
          } catch {
            // 重複定義の場合はスキップ
            if (process.env.DEBUG) {
              console.log(`[DEBUG] Type already defined: ${typeName}`);
            }
          }
        }
        break;
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
      case 'SchemaDirective':
        return this.visitSchemaDirective(node);
      case 'UseStatement':
        return this.visitUseStatement(node);
      case 'SchemaDeclaration':
        return this.visitSchemaDeclaration(node);
      case 'SchemaPropertyDeclaration':
        return this.visitSchemaPropertyDeclaration(node);
      case 'SchemaShorthandProperty':
        return this.visitSchemaShorthandProperty(node);
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
      case 'CallExpression':
        // CallExpressionを詳細に処理し、schema property instantiationを検出
        return this.visitCallExpression(node);
      case 'LambdaExpression':
        return this.visitLambdaExpression(node);
      case 'NonNullAssertionExpression':
        // NonNullAssertionExpression内の式の型を返す
        return node.expression ? this.visitNode(node.expression) : undefined;
      case 'IfExpression':
        return this.visitIfExpression(node);
      case 'RepeatedDeclaration':
        // 繰り返し宣言の処理
        return this.visitRepeatedDeclaration(node);
      case 'MappingBlock':
        // マッピングブロックの処理
        return this.visitMappingBlock(node);
      case 'MappingEntry':
        // マッピングエントリの処理
        return this.visitMappingEntry(node);
      case 'InitDeclaration':
        // コンストラクタ内の初期化処理
        return this.visitInitDeclaration(node);
      case 'Parameter':
        // 関数パラメータの処理
        return this.visitParameter(node);
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
    this.isInSchema = true;
    this.schemaDefinition.clear();

    this.symbolTable.enterScope('schema');

    if (node.body && Array.isArray(node.body)) {
      for (const child of node.body) {
        // Schema内のPropertyDeclarationを処理
        if (child.type === 'PropertyDeclaration') {
          // 型が指定されていない場合は、プロパティ名と同じ型を使用
          const propertyName = child.name?.name;
          const propertyType = child.typeRef ? await this.visitNode(child.typeRef) : propertyName;

          if (propertyName) {
            this.schemaDefinition.set(propertyName, {
              name: propertyName,
              type: propertyType || 'any',
              isOptional: child.isOptional || false,
              location: this.getLocation(child),
            });
          }
        } else {
          await this.visitNode(child);
        }
      }
    }

    // スキーマプロパティをグローバルスコープで使用できるようにシンボルテーブルに追加
    this.symbolTable.exitScope();
    for (const [propertyName, schemaProperty] of this.schemaDefinition) {
      try {
        this.symbolTable.define({
          name: propertyName,
          type: 'variable',
          dataType: schemaProperty.type,
          location: schemaProperty.location,
        });

        if (process.env.DEBUG) {
          console.log(
            `[DEBUG] Schema property added to global scope: ${propertyName}: ${schemaProperty.type}`
          );
        }
      } catch {
        if (process.env.DEBUG) {
          console.log(`[DEBUG] Schema property already exists: ${propertyName}`);
        }
        // 既に定義されている場合はスキップ（重複定義エラーを避ける）
      }
    }

    this.isInSchema = false;
    return undefined;
  }

  /**
   * Schema property declaration: propertyName: Type
   */
  private async visitSchemaPropertyDeclaration(node: ASTNode): Promise<string | undefined> {
    if (!this.isInSchema) {
      this.addError({
        message: 'Property declarations are only allowed within schema blocks',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    const propertyName = node.name?.name;
    const propertyType =
      node.typeAnnotation || node.typeRef
        ? await this.visitNode(node.typeAnnotation || node.typeRef)
        : 'any';

    if (!propertyName) {
      this.addError({
        message: 'Schema property declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // Check if type is valid
    if (propertyType && !this.symbolTable.isTypeDefined(propertyType)) {
      this.addError({
        message: `Undefined type '${propertyType}' in schema property '${propertyName}'`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
    }

    // Store schema property definition
    this.schemaDefinition.set(propertyName, {
      name: propertyName,
      type: propertyType || 'any',
      isOptional: node.isOptional || false,
      location: this.getLocation(node),
    });

    return undefined;
  }

  /**
   * Schema shorthand property: propertyName
   */
  private async visitSchemaShorthandProperty(node: ASTNode): Promise<string | undefined> {
    if (!this.isInSchema) {
      this.addError({
        message: 'Property declarations are only allowed within schema blocks',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    const propertyName = node.name?.name || node.name;

    if (!propertyName) {
      this.addError({
        message: 'Schema shorthand property missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // Store schema property definition with inferred type
    this.schemaDefinition.set(propertyName, {
      name: propertyName,
      type: 'any', // Type will be inferred from usage
      isOptional: node.isOptional || false,
      location: this.getLocation(node),
    });

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
    try {
      this.symbolTable.define({
        name: 'this',
        type: 'variable',
        dataType: structName,
        location: this.getLocation(node),
      });
    } catch {
      if (process.env.DEBUG) {
        console.log(`[DEBUG] 'this' already defined in scope: ${structName}`);
      }
    }

    // 構造体のメンバーを処理
    if (node.body && Array.isArray(node.body)) {
      for (const member of node.body) {
        await this.visitNode(member);
      }
    }

    this.symbolTable.exitScope();
    return undefined;
  }

  private async visitUnionDeclaration(_node: ASTNode): Promise<string | undefined> {
    // Union declarations are mainly type definitions
    return undefined;
  }

  private async visitFunctionDeclaration(node: ASTNode): Promise<string | undefined> {
    const functionName = node.name?.name;
    const returnType = node.returnType ? await this.visitNode(node.returnType) : 'void';

    if (!functionName) {
      this.addError({
        message: 'Function declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 関数をシンボルテーブルに登録
    try {
      this.symbolTable.define({
        name: functionName,
        type: 'function',
        dataType: returnType || 'void',
        location: this.getLocation(node),
      });
    } catch {
      if (process.env.DEBUG) {
        console.log(`[DEBUG] Function already defined: ${functionName}`);
      }
    }

    // 関数スコープに入る
    this.symbolTable.enterScope(functionName);
    const previousFunctionType = this.currentFunctionType;
    this.currentFunctionType = returnType;

    // パラメータを処理
    if (node.parameters && Array.isArray(node.parameters)) {
      for (const param of node.parameters) {
        await this.visitParameter(param);
      }
    }

    // 関数本体を処理
    if (node.body) {
      await this.visitNode(node.body);
    }

    this.currentFunctionType = previousFunctionType;
    this.symbolTable.exitScope();
    return undefined;
  }

  private async visitVariableDeclaration(node: ASTNode): Promise<string | undefined> {
    const variableName = node.name?.name;
    let variableType: string | undefined;

    if (!variableName) {
      this.addError({
        message: 'Variable declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 型アノテーションがある場合
    if (node.typeAnnotation) {
      variableType = await this.visitNode(node.typeAnnotation);
    }

    // 初期化式がある場合
    if (node.value) {
      const initializerType = await this.visitNode(node.value);

      if (variableType && initializerType) {
        // 型アノテーションと初期化式の型の互換性をチェック
        if (!this.isCompatibleType(initializerType, variableType)) {
          this.addError({
            message: `Type mismatch: cannot assign '${initializerType}' to '${variableType}'`,
            type: 'TypeError',
            location: this.getLocation(node),
          });
        }
      } else if (!variableType) {
        // 型推論
        variableType = initializerType;
      }
    }

    // デフォルト型
    if (!variableType) {
      variableType = 'any';
    }

    // Schema validation - 設計原則に従い、schemaで定義されたプロパティのインスタンス生成のみ検証
    // 自由な変数宣言（val example = ...）は検証対象外
    if (this.isSchemaPropertyAssignment(variableName)) {
      this.validateAgainstSchema(variableName, variableType, node);
    }

    // 変数をシンボルテーブルに登録
    try {
      this.symbolTable.define({
        name: variableName,
        type: 'variable',
        dataType: variableType,
        location: this.getLocation(node),
      });
    } catch {
      if (process.env.DEBUG) {
        console.log(`[DEBUG] Variable already defined: ${variableName}`);
      }
    }

    return variableType;
  }

  private async visitPropertyDeclaration(node: ASTNode): Promise<string | undefined> {
    const propertyName = node.name?.name;
    const propertyType = node.typeAnnotation ? await this.visitNode(node.typeAnnotation) : 'any';

    if (!propertyName) {
      this.addError({
        message: 'Property declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // プロパティをシンボルテーブルに登録
    try {
      this.symbolTable.define({
        name: propertyName,
        type: 'property',
        dataType: propertyType || 'any',
        isPrivate: node.isPrivate || false,
        location: this.getLocation(node),
      });
    } catch {
      if (process.env.DEBUG) {
        console.log(`[DEBUG] Property already defined: ${propertyName}`);
      }
    }

    return propertyType;
  }

  private async visitMethodDeclaration(node: ASTNode): Promise<string | undefined> {
    const methodName = node.name?.name;
    const returnType = node.returnType ? await this.visitNode(node.returnType) : 'void';

    if (!methodName) {
      this.addError({
        message: 'Method declaration missing name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // メソッドをシンボルテーブルに登録
    try {
      this.symbolTable.define({
        name: methodName,
        type: 'function',
        dataType: returnType || 'void',
        location: this.getLocation(node),
      });
    } catch {
      if (process.env.DEBUG) {
        console.log(`[DEBUG] Method already defined: ${methodName}`);
      }
    }

    return returnType;
  }

  private async visitIdentifier(node: ASTNode): Promise<string | undefined> {
    const identifierName = node.name;

    if (!identifierName) {
      return undefined;
    }

    const symbol = this.symbolTable.resolve(identifierName);
    if (!symbol) {
      this.addError({
        message: `Undefined identifier '${identifierName}'`,
        type: 'NameError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    return symbol.dataType;
  }

  private async visitRangeExpression(node: ASTNode): Promise<string | undefined> {
    const startType = node.start ? await this.visitNode(node.start) : undefined;
    const endType = node.end ? await this.visitNode(node.end) : undefined;

    // 範囲の開始と終了が数値型であることを確認
    if (startType && !this.isNumericType(startType)) {
      this.addError({
        message: `Range start must be numeric, got '${startType}'`,
        type: 'TypeError',
        location: this.getLocation(node.start),
      });
    }

    if (endType && !this.isNumericType(endType)) {
      this.addError({
        message: `Range end must be numeric, got '${endType}'`,
        type: 'TypeError',
        location: this.getLocation(node.end),
      });
    }

    return '[int]'; // 範囲は整数の配列として扱う
  }

  private async visitInfixFunctionCall(node: ASTNode): Promise<string | undefined> {
    const leftType = node.left ? await this.visitNode(node.left) : undefined;
    const rightType = node.right ? await this.visitNode(node.right) : undefined;
    const operatorName = node.operator?.name || node.operator;

    if (operatorName === 'until' || operatorName === 'to') {
      // 範囲演算子の場合
      if (leftType && !this.isNumericType(leftType)) {
        this.addError({
          message: `Range start must be numeric, got '${leftType}'`,
          type: 'TypeError',
          location: this.getLocation(node.left),
        });
      }

      if (rightType && !this.isNumericType(rightType)) {
        this.addError({
          message: `Range end must be numeric, got '${rightType}'`,
          type: 'TypeError',
          location: this.getLocation(node.right),
        });
      }

      return '[int]';
    }

    // その他の中置演算子の処理
    return this.inferBinaryOperationType(leftType, rightType, operatorName);
  }

  private async visitFunctionCall(node: ASTNode): Promise<string | undefined> {
    const functionName = node.function?.name || node.name?.name || node.callee?.name;

    if (!functionName) {
      this.addError({
        message: 'Function call missing function name',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    const symbol = this.symbolTable.resolve(functionName);
    if (!symbol) {
      this.addError({
        message: `Undefined function '${functionName}'`,
        type: 'NameError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    if (symbol.type !== 'function' && symbol.type !== 'cast_function') {
      this.addError({
        message: `'${functionName}' is not a function`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 引数の型チェック
    if (node.arguments && Array.isArray(node.arguments)) {
      for (const arg of node.arguments) {
        await this.visitNode(arg);
      }
    }

    return symbol.dataType;
  }

  private async visitBinaryExpression(node: ASTNode): Promise<string | undefined> {
    const leftType = node.left ? await this.visitNode(node.left) : undefined;
    const rightType = node.right ? await this.visitNode(node.right) : undefined;
    const operator = node.operator;

    return this.inferBinaryOperationType(leftType, rightType, operator);
  }

  private async visitMemberAccess(node: ASTNode): Promise<string | undefined> {
    const objectType = node.object ? await this.visitNode(node.object) : undefined;
    const propertyName = node.property?.name || node.member?.name;

    if (!objectType || !propertyName) {
      return undefined;
    }

    // 構造体のメンバアクセスの場合
    if (this.isStructType(objectType)) {
      // 構造体の定義からプロパティの型を取得
      const structScope = this.symbolTable.findTypeScope(objectType);
      if (structScope) {
        const propertySymbol = structScope.symbols.get(propertyName);
        if (propertySymbol) {
          return propertySymbol.dataType;
        }
      }

      this.addError({
        message: `Property '${propertyName}' does not exist on type '${objectType}'`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    return 'any';
  }

  private async visitThisExpression(node: ASTNode): Promise<string | undefined> {
    const thisSymbol = this.symbolTable.resolve('this');
    if (!thisSymbol) {
      this.addError({
        message: "'this' can only be used within struct methods",
        type: 'ScopeError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    return thisSymbol.dataType;
  }

  private async visitTypeCastExpression(node: ASTNode): Promise<string | undefined> {
    const targetType = node.targetType ? await this.visitNode(node.targetType) : undefined;
    const expressionType = node.expression ? await this.visitNode(node.expression) : undefined;

    if (!targetType) {
      this.addError({
        message: 'Type cast missing target type',
        type: 'ValidationError',
        location: this.getLocation(node),
      });
      return undefined;
    }

    // 型キャストの妥当性をチェック
    if (expressionType && !this.isValidCast(expressionType, targetType)) {
      this.addError({
        message: `Cannot cast '${expressionType}' to '${targetType}'`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
    }

    return targetType;
  }

  private async visitNullableType(node: ASTNode): Promise<string | undefined> {
    const baseType = node.baseType ? await this.visitNode(node.baseType) : 'any';
    return baseType + '?';
  }

  private async visitArrayType(node: ASTNode): Promise<string | undefined> {
    const elementType = node.elementType ? await this.visitNode(node.elementType) : 'any';
    return `[${elementType}]`;
  }

  private async visitPrimitiveType(node: ASTNode): Promise<string | undefined> {
    return node.name || node.typeName;
  }

  private async visitTypeReference(node: ASTNode): Promise<string | undefined> {
    const typeName = node.name?.name || node.typeName;

    if (!typeName) {
      return 'any';
    }

    // 型が定義されているかチェック
    if (!this.symbolTable.isTypeDefined(typeName)) {
      this.addError({
        message: `Undefined type '${typeName}'`,
        type: 'TypeError',
        location: this.getLocation(node),
      });
    }

    return typeName;
  }

  private async visitAssignmentStatement(node: ASTNode): Promise<string | undefined> {
    const rightType = node.right ? await this.visitNode(node.right) : undefined;

    // 左辺が識別子の場合、変数の定義または代入
    if (node.left && node.left.type === 'Identifier') {
      const variableName = node.left.name;
      const existingSymbol = this.symbolTable.resolve(variableName);

      if (existingSymbol) {
        // 既存の変数への代入
        const leftType = existingSymbol.dataType;
        if (leftType && rightType && !this.isCompatibleType(rightType, leftType)) {
          this.addError({
            message: `Type mismatch: cannot assign '${rightType}' to '${leftType}'`,
            type: 'TypeError',
            location: this.getLocation(node),
          });
        }
        return leftType;
      } else {
        // 新しい変数の定義
        const variableType = rightType || 'any';

        // Schema validation - 設計原則に従い、schemaで定義されたプロパティのインスタンス生成のみ検証
        if (this.isSchemaPropertyAssignment(variableName)) {
          this.validateAgainstSchema(variableName, variableType, node);
        }

        // 変数をシンボルテーブルに登録
        try {
          this.symbolTable.define({
            name: variableName,
            type: 'variable',
            dataType: variableType,
            location: this.getLocation(node.left),
          });
        } catch {
          if (process.env.DEBUG) {
            console.log(`[DEBUG] Variable already defined in assignment: ${variableName}`);
          }
        }

        return variableType;
      }
    } else {
      // 左辺が識別子以外の場合（メンバアクセスなど）
      const leftType = node.left ? await this.visitNode(node.left) : undefined;

      if (leftType && rightType && !this.isCompatibleType(rightType, leftType)) {
        this.addError({
          message: `Type mismatch: cannot assign '${rightType}' to '${leftType}'`,
          type: 'TypeError',
          location: this.getLocation(node),
        });
      }

      return leftType;
    }
  }

  private async visitIfExpression(node: ASTNode): Promise<string | undefined> {
    const conditionType = node.condition ? await this.visitNode(node.condition) : undefined;

    if (conditionType && conditionType !== 'bool') {
      this.addError({
        message: `If condition must be boolean, got '${conditionType}'`,
        type: 'TypeError',
        location: this.getLocation(node.condition),
      });
    }

    // then分岐とelse分岐の型を取得
    const thenType = node.thenBranch ? await this.visitNode(node.thenBranch) : undefined;
    const elseType = node.elseBranch ? await this.visitNode(node.elseBranch) : undefined;

    // 両方の分岐の型が同じ場合はその型を返す
    if (thenType && elseType && this.isCompatibleType(thenType, elseType)) {
      return thenType;
    }

    return 'any';
  }

  /**
   * Validate a variable declaration against the current schema
   */
  private validateAgainstSchema(variableName: string, variableType: string, location?: any): void {
    // Schema検証は設計原則に従い、以下の条件でのみ適用する：
    // 1. configファイルでの変数宣言の場合のみ
    // 2. schemaファイル内での変数宣言は自由に許可される

    if (process.env.DEBUG) {
      console.log(
        `[DEBUG] validateAgainstSchema called for variable '${variableName}', currentFilePath: '${this.currentFilePath}'`
      );
    }

    // 現在解析中のファイルがschemaファイル（ast.yamlの元ファイル）の場合は検証をスキップ
    if (!this.currentFilePath || !this.currentFilePath.includes('config.canon')) {
      if (process.env.DEBUG) {
        console.log(
          `[DEBUG] Skipping schema validation for variable '${variableName}' in schema file`
        );
      }
      return;
    }

    if (this.schemaDefinition.size === 0) {
      return; // No schema defined
    }

    const schemaProperty = this.schemaDefinition.get(variableName);

    if (!schemaProperty) {
      this.addError({
        message: `Property '${variableName}' is not defined in the schema`,
        type: 'ValidationError',
        location: this.getLocation(location),
      });
      return;
    }

    // Check type compatibility
    if (
      schemaProperty.type !== 'any' &&
      !this.isCompatibleType(variableType, schemaProperty.type)
    ) {
      this.addError({
        message: `Type mismatch: expected '${schemaProperty.type}' but got '${variableType}' for property '${variableName}'`,
        type: 'TypeError',
        location: this.getLocation(location),
      });
    }
  }

  /**
   * Validate that all required schema properties have been declared
   */
  private validateSchemaCompleteness(): void {
    const declaredVariables = new Set<string>();
    const instantiatedProperties = new Set<string>(this.schemaPropertyInstances);

    if (process.env.DEBUG) {
      console.log(
        `[DEBUG] validateSchemaCompleteness: instantiated properties:`,
        Array.from(instantiatedProperties)
      );
    }

    // Collect all variable names from symbol table
    const symbols = this.symbolTable.getAllSymbols();
    for (const symbol of symbols) {
      if (symbol.type === 'variable') {
        declaredVariables.add(symbol.name);
      }
    }

    if (process.env.DEBUG) {
      console.log(`[DEBUG] declaredVariables:`, Array.from(declaredVariables));
    }

    // Check for missing required properties
    const schemaEntries = Array.from(this.schemaDefinition.entries());
    for (const [propertyName, schemaProperty] of schemaEntries) {
      if (process.env.DEBUG) {
        console.log(
          `[DEBUG] Checking property: ${propertyName}, isOptional: ${schemaProperty.isOptional}`
        );
        console.log(
          `[DEBUG] declaredVariables.has(${propertyName}):`,
          declaredVariables.has(propertyName)
        );
        console.log(
          `[DEBUG] instantiatedProperties.has(${propertyName}):`,
          instantiatedProperties.has(propertyName)
        );
      }

      if (
        !schemaProperty.isOptional &&
        !declaredVariables.has(propertyName) &&
        !instantiatedProperties.has(propertyName)
      ) {
        if (process.env.DEBUG) {
          console.log(`[DEBUG] Adding error for missing property: ${propertyName}`);
          console.trace('Stack trace for missing property error');
        }
        this.addError({
          message: `Required property '${propertyName}' of type '${schemaProperty.type}' is missing`,
          type: 'ValidationError',
          location: schemaProperty.location,
        });
      }
    }
  }

  /**
   * Check if two types are compatible
   */
  private isCompatibleType(sourceType: string, targetType: string): boolean {
    // Exact match
    if (sourceType === targetType) {
      return true;
    }

    // Any type is compatible with everything
    if (targetType === 'any' || sourceType === 'any') {
      return true;
    }

    // Nullable type compatibility
    if (targetType.endsWith('?')) {
      const baseTargetType = targetType.slice(0, -1);
      return this.isCompatibleType(sourceType, baseTargetType) || sourceType === 'null';
    }

    // Array type compatibility
    if (sourceType.startsWith('[') && targetType.startsWith('[')) {
      const sourceElementType = sourceType.slice(1, -1);
      const targetElementType = targetType.slice(1, -1);
      return this.isCompatibleType(sourceElementType, targetElementType);
    }

    // Numeric type compatibility
    const numericTypes = ['int', 'float', 'number'];
    if (numericTypes.includes(sourceType) && numericTypes.includes(targetType)) {
      return true;
    }

    return false;
  }

  // Helper methods
  private async visitChildren(node: ASTNode): Promise<void> {
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

  private addError(error: SemanticError): void {
    this.errors.push(error);
  }

  private getLocation(node: any): { line: number; column: number } | undefined {
    if (node?.loc?.start) {
      return {
        line: node.loc.start.line || 0,
        column: node.loc.start.column || 0,
      };
    }
    return undefined;
  }

  private isNumericType(type: string): boolean {
    return ['int', 'float', 'number'].includes(type);
  }

  private isStructType(typeName: string): boolean {
    // null許容型の場合は内部型をチェック
    if (typeName.endsWith('?')) {
      const innerType = typeName.slice(0, -1);
      return this.isStructType(innerType);
    }

    // 配列型の場合は要素型をチェック
    if (typeName.startsWith('[') && typeName.endsWith(']')) {
      return false; // 配列は構造体ではない
    }

    // プリミティブ型ではない場合は構造体の可能性
    const primitiveTypes = ['int', 'float', 'string', 'bool', 'any', 'void'];
    if (primitiveTypes.includes(typeName)) {
      return false;
    }

    // シンボルテーブルで定義されている型かチェック
    return this.symbolTable.isTypeDefined(typeName);
  }

  private inferBinaryOperationType(
    leftType?: string,
    rightType?: string,
    operator?: string
  ): string {
    if (!leftType || !rightType) {
      return 'any';
    }

    // 比較演算子
    if (['==', '!=', '<', '>', '<=', '>='].includes(operator || '')) {
      return 'bool';
    }

    // 論理演算子
    if (['&&', '||'].includes(operator || '')) {
      return 'bool';
    }

    // 算術演算子
    if (['+', '-', '*', '/', '%'].includes(operator || '')) {
      if (this.isNumericType(leftType) && this.isNumericType(rightType)) {
        // 浮動小数点数が含まれていれば float
        if (leftType === 'float' || rightType === 'float') {
          return 'float';
        }
        return 'int';
      }

      // 文字列の結合
      if (operator === '+' && (leftType === 'string' || rightType === 'string')) {
        return 'string';
      }
    }

    return 'any';
  }

  private isValidCast(fromType: string, toType: string): boolean {
    // 同じ型の場合は常に有効
    if (fromType === toType) {
      return true;
    }

    // any型は任意の型にキャスト可能
    if (fromType === 'any' || toType === 'any') {
      return true;
    }

    // 数値型間のキャスト
    const numericTypes = ['int', 'float', 'number'];
    if (numericTypes.includes(fromType) && numericTypes.includes(toType)) {
      return true;
    }

    // null許容型からベース型へのキャスト
    if (fromType.endsWith('?') && toType === fromType.slice(0, -1)) {
      return true;
    }

    // ベース型からnull許容型へのキャスト
    if (toType.endsWith('?') && fromType === toType.slice(0, -1)) {
      return true;
    }

    return false;
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

  private async visitSchemaDirective(node: ASTNode): Promise<string | undefined> {
    // スキーマディレクティブの処理 - スキーマファイルを読み込む
    const schemaPath = node.path;
    if (schemaPath && typeof schemaPath === 'string') {
      try {
        // 相対パスの場合は、元のソースファイルのディレクトリから解決
        let resolvedPath: string;
        if (this.currentFilePath && !path.isAbsolute(schemaPath)) {
          const sourceDir = path.dirname(this.currentFilePath);
          resolvedPath = path.resolve(sourceDir, schemaPath);
        } else {
          resolvedPath = path.resolve(schemaPath);
        }

        if (process.env.DEBUG) {
          console.log('[DEBUG] Schema directive - currentFilePath:', this.currentFilePath);
          console.log('[DEBUG] Schema directive - schemaPath:', schemaPath);
          console.log('[DEBUG] Schema directive - resolvedPath:', resolvedPath);
        }

        // スキーマファイルをパースしてシンボルテーブルに追加
        const schemaAst = await parseCanonFile(resolvedPath);

        // 型定義のみを収集（重複定義を避けるため）
        await this.collectTypeDefinitions(schemaAst);

        // スキーマ定義のみを処理（StructDeclarationなどはスキップ）
        if (schemaAst.body && Array.isArray(schemaAst.body)) {
          for (const item of schemaAst.body) {
            if (item.type === 'SchemaDeclaration') {
              await this.visitSchemaDeclaration(item);
            }
          }
        }

        if (process.env.DEBUG) {
          console.log('[DEBUG] Schema file loaded:', schemaPath);
        }
      } catch (error) {
        this.addError({
          message: `Failed to load schema file: ${schemaPath} - ${error}`,
          type: 'ValidationError',
          location: this.getLocation(node),
        });
      }
    }
    return undefined;
  }

  private async visitInitDeclaration(node: ASTNode): Promise<string | undefined> {
    // コンストラクタ内の初期化処理
    if (node.target && node.value) {
      const valueType = await this.visitNode(node.value);

      // targetが識別子の場合、変数として定義
      if (node.target.type === 'Identifier') {
        const targetName = node.target.name;
        if (targetName) {
          try {
            this.symbolTable.define({
              name: targetName,
              type: 'variable',
              dataType: valueType || 'any',
              location: this.getLocation(node.target),
            });
          } catch {
            // 重複定義の場合はスキップ
            if (process.env.DEBUG) {
              console.log(`[DEBUG] Variable already defined: ${targetName}`);
            }
          }
        }
      }
    }

    return undefined;
  }

  private async visitParameter(node: ASTNode): Promise<string | undefined> {
    // 関数パラメータの処理
    const paramName = node.name?.name;
    if (paramName) {
      let paramType: string | undefined;

      // 型参照がある場合は型を推論
      if (node.typeRef) {
        paramType = await this.visitNode(node.typeRef);
      } else {
        paramType = 'any';
      }

      if (process.env.DEBUG) {
        console.log(
          `[DEBUG] visitParameter: name=${paramName}, typeRef=${JSON.stringify(node.typeRef)}, paramType=${paramType}`
        );
      }

      try {
        this.symbolTable.define({
          name: paramName,
          type: 'parameter',
          dataType: paramType || 'any',
          location: this.getLocation(node),
        });
      } catch {
        // 重複定義の場合はスキップ
        if (process.env.DEBUG) {
          console.log(`[DEBUG] Parameter already defined: ${paramName}`);
        }
      }

      return paramType;
    }

    return undefined;
  }

  private async visitRepeatedDeclaration(node: ASTNode): Promise<string | undefined> {
    // 繰り返し宣言の処理
    if (node.target && node.declarations) {
      const targetType = await this.visitNode(node.target);

      if (Array.isArray(node.declarations)) {
        for (const decl of node.declarations) {
          await this.visitNode(decl);
        }
      }

      return targetType;
    }

    return undefined;
  }

  private async visitMappingBlock(node: ASTNode): Promise<string | undefined> {
    // マッピングブロックの処理
    if (node.entries && Array.isArray(node.entries)) {
      for (const entry of node.entries) {
        await this.visitNode(entry);
      }
    }

    return 'object';
  }

  private async visitMappingEntry(node: ASTNode): Promise<string | undefined> {
    // マッピングエントリの処理
    if (node.key && node.value) {
      await this.visitNode(node.key);
      const valueType = await this.visitNode(node.value);
      return valueType;
    }

    return undefined;
  }

  private async visitUseStatement(node: ASTNode): Promise<string | undefined> {
    // use文の処理 - 標準ライブラリ関数をインポート
    const identifier = node.identifier?.name;
    if (identifier && typeof identifier === 'string') {
      this.symbolTable.defineStandardLibraryFunction(identifier);

      if (process.env.DEBUG) {
        console.log('[DEBUG] Use statement - imported:', identifier);
      }
    }
    return undefined;
  }

  /**
   * Check if a variable assignment is for a schema-defined property
   * Returns true only for schema property assignments, not for free variable declarations
   */
  private isSchemaPropertyAssignment(variableName: string): boolean {
    // Schema validation should only apply to variables that are defined in the schema
    // and are at the top level (not inside functions, structs, etc.)

    // Check if this variable is defined in the schema
    const schemaProperty = this.schemaDefinition.get(variableName);
    if (!schemaProperty) {
      return false; // Not a schema property, so it's a free variable declaration
    }

    // Additional check: only validate if we're in a config file
    if (!this.currentFilePath || !this.currentFilePath.includes('config.canon')) {
      return false;
    }

    // TODO: In the future, we might want to check if we're at the top level
    // For now, we assume all schema property assignments are valid for validation
    return true;
  }

  /**
   * Visit CallExpression - handle function calls and struct instantiation
   */
  private async visitCallExpression(node: ASTNode): Promise<string | undefined> {
    const calleeName = node.callee?.name;

    if (!calleeName) {
      return 'any';
    }

    // Check if this is a schema property instantiation
    if (this.schemaDefinition.has(calleeName)) {
      // This is a schema property instantiation like PluginHeader { ... }
      this.schemaPropertyInstances.add(calleeName);

      if (process.env.DEBUG) {
        console.log(`[DEBUG] Schema property instantiated: ${calleeName}`);
      }

      // Process the lambda expression arguments if present
      if (node.arguments && Array.isArray(node.arguments)) {
        for (const arg of node.arguments) {
          await this.visitNode(arg);
        }
      }

      return calleeName; // Return the type of the instantiated struct
    }

    // Handle regular function calls
    return this.visitFunctionCall(node);
  }

  private async visitLambdaExpression(node: ASTNode): Promise<string | undefined> {
    if (process.env.DEBUG) {
      console.log(`[DEBUG] visitLambdaExpression called for node:`, JSON.stringify(node, null, 2));
    }

    // パラメータの型を推論
    const parameterTypes: string[] = [];

    if (node.parameters && Array.isArray(node.parameters)) {
      for (const param of node.parameters) {
        const paramType = await this.visitParameter(param);
        parameterTypes.push(paramType || 'any');
      }
    }

    // 新しいスコープを作成
    this.symbolTable.enterScope('lambda');

    // パラメータを現在のスコープに定義
    if (node.parameters && Array.isArray(node.parameters)) {
      for (const param of node.parameters) {
        if (param.name) {
          const paramType = await this.visitParameter(param);
          try {
            this.symbolTable.define({
              name: param.name,
              type: 'variable',
              dataType: paramType || 'any',
              location: this.getLocation(param),
            });
          } catch {
            // パラメータが重複している場合のエラー処理
            this.addError({
              message: `Parameter '${param.name}' is already defined`,
              type: 'NameError',
              location: this.getLocation(param),
            });
          }
        }
      }
    }

    // 本体の型を推論
    const bodyType = node.body ? await this.visitNode(node.body) : 'void';

    // スコープを抜ける
    this.symbolTable.exitScope();

    // 関数型文字列を構築
    const paramTypesStr = parameterTypes.length > 0 ? parameterTypes.join(', ') : '';
    const functionType = `(${paramTypesStr}) -> ${bodyType || 'void'}`;

    if (process.env.DEBUG) {
      console.log(`[DEBUG] visitLambdaExpression result: ${functionType}`);
    }

    return functionType;
  }
}
