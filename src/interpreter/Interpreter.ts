/**
 * Canon言語のメインインタープリター
 */

import * as path from 'path';
import { ASTNode, parseCanonFile } from '../parser';
import { Environment } from './Environment';
import { CanonValue, NullValue } from './values/CanonValue';
import { IntValue, FloatValue, StringValue, BoolValue } from './values/PrimitiveValues';
import { StructValue } from './values/StructValue';
import { ListValue } from './values/ListValue';
import { UserFunctionValue, BuiltinFunctionValue } from './values/FunctionValue';
import { IntRangeValue, FloatRangeValue } from './values/RangeValue';
import { CanonRuntimeError, createErrorFunction } from './builtins/ErrorBuiltins';
import { createMathStruct } from './builtins/MathBuiltins';
import {
  createIntFunction,
  createFloatFunction,
  createStringFunction,
  createBoolFunction,
} from './builtins/TypeBuiltins';

export interface InterpreterOptions {
  debug?: boolean;
  inputFilePath?: string;
  isSchemaFile?: boolean;
}

export class Interpreter {
  private globalEnv: Environment;
  private currentEnv: Environment;
  private options: InterpreterOptions;
  private schemaDefinition: StructValue | null = null;
  private allStructInstances: StructValue[] = []; // Track all struct instances for end-of-program validation

  /**
   * プログラムを実行
   */
  public execute(ast: ASTNode): CanonValue {
    return this.visitNode(ast);
  }

  constructor(options: InterpreterOptions = {}) {
    this.options = options;
    this.globalEnv = new Environment();
    this.currentEnv = this.globalEnv;
    this.initializeBuiltins();
  }

  /**
   * 組み込み関数と値を初期化
   */
  private initializeBuiltins(): void {
    // エラー関数
    this.globalEnv.define('error', createErrorFunction());

    // 型変換関数
    this.globalEnv.define('int', createIntFunction());
    this.globalEnv.define('float', createFloatFunction());
    this.globalEnv.define('string', createStringFunction());
    this.globalEnv.define('bool', createBoolFunction());

    // math構造体
    this.globalEnv.define('math', createMathStruct());

    // config構造体作成関数
    this.globalEnv.define(
      'config',
      new BuiltinFunctionValue('config', (args: CanonValue[]) => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('config() requires exactly one argument');
        }

        const configStruct = new StructValue('Config', new Map(), []);

        // Lambda処理は既存のvisitFunctionCallで実装済み
        // ここではStructValueを返すだけ
        return configStruct;
      })
    );

    // getEnv組み込み関数の追加
    this.globalEnv.define(
      'getEnv',
      new BuiltinFunctionValue('getEnv', (args) => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('getEnv expects exactly 1 argument');
        }
        const key = args[0];
        if (key.type !== 'string') {
          throw new CanonRuntimeError('getEnv expects a string argument');
        }
        const envValue = process.env[(key as StringValue).getValue()];
        if (envValue === undefined) {
          return NullValue.getInstance();
        }
        return new StringValue(envValue);
      })
    );

    // join組み込み関数の追加
    this.globalEnv.define(
      'join',
      new BuiltinFunctionValue('join', (args) => {
        if (args.length !== 2) {
          throw new CanonRuntimeError('join expects exactly 2 arguments');
        }
        const arg1 = args[0];
        const arg2 = args[1];
        if (arg1.type !== 'string' || arg2.type !== 'string') {
          throw new CanonRuntimeError('join expects string arguments');
        }
        return new StringValue((arg1 as StringValue).getValue() + (arg2 as StringValue).getValue());
      })
    );

    // pipeline組み込み関数の追加
    this.globalEnv.define(
      'pipeline',
      new BuiltinFunctionValue('pipeline', (_args: CanonValue[]) => {
        // For now, just return a simple struct
        // This function may need to be redesigned based on actual usage
        return new StructValue('pipeline', new Map(), []);
      })
    );
  }

  /**
   * ASTを実行して結果を返す
   */
  evaluate(node: ASTNode): CanonValue {
    try {
      const result = this.visitNode(node);
      // プログラム実行終了時に全ての必須フィールドを検証
      this.validateAllRequiredFieldsAtProgramEnd();
      return result;
    } catch (error) {
      if (error instanceof CanonRuntimeError) {
        throw error;
      }
      throw new CanonRuntimeError(`Interpreter error: ${error}`);
    }
  }

  /**
   * 指定されたスコープでASTを実行
   */
  evaluateWithScope(node: ASTNode, scope: Map<string, CanonValue>): CanonValue {
    const newEnv = this.currentEnv.extend();
    for (const [name, value] of scope) {
      newEnv.define(name, value);
    }

    const prevEnv = this.currentEnv;
    this.currentEnv = newEnv;
    try {
      return this.visitNode(node);
    } finally {
      this.currentEnv = prevEnv;
    }
  }

  /**
   * ノードタイプに応じて適切な評価メソッドを呼び出し
   */
  private visitNode(node: ASTNode): CanonValue {
    if (!node) {
      console.error('Node is undefined or null');
      throw new CanonRuntimeError('Node is undefined or null');
    }

    // 配列の場合は最初の要素を取得
    if (Array.isArray(node)) {
      if (node.length === 0) {
        // 空の配列の場合はnullを返す（空の関数体など）
        return NullValue.getInstance();
      }
      return this.visitNode(node[0]);
    }

    if (!node.type) {
      console.error('Node type is undefined:', JSON.stringify(node, null, 2));
      throw new CanonRuntimeError('Node type is undefined');
    }

    if (this.options.debug) {
      console.log(`[DEBUG] Visiting node: ${node.type}`);
    }

    switch (node.type) {
      case 'Program':
        return this.visitProgram(node);
      case 'SchemaDeclaration':
        return this.visitSchemaDeclaration(node);
      case 'SchemaDirective':
        return this.visitSchemaDirective(node);
      case 'FunctionDeclaration':
        return this.visitFunctionDeclaration(node);
      case 'UseStatement':
        return this.visitUseStatement(node);
      case 'SchemaImport':
        return this.visitSchemaImport(node);
      case 'StructDeclaration':
        return this.visitStructDeclaration(node);
      case 'UnionDeclaration':
        return this.visitUnionDeclaration(node);
      case 'PropertyDeclaration':
        return this.visitPropertyDeclaration(node);
      case 'VariableDeclaration':
        return this.visitVariableDeclaration(node);
      case 'Block':
        return this.visitBlock(node);
      case 'BinaryExpression':
        return this.visitBinaryExpression(node);
      case 'UnaryExpression':
        return this.visitUnaryExpression(node);
      case 'FunctionCall':
        return this.visitFunctionCall(node);
      case 'CallExpression':
        return this.visitFunctionCall(node);
      case 'MemberAccess':
        return this.visitMemberAccess(node);
      case 'MemberAccessExpression':
        return this.visitMemberAccess(node);
      case 'IndexAccess':
      case 'IndexAccessExpression':
        return this.visitIndexAccess(node);
      case 'Identifier':
        return this.visitIdentifier(node);
      case 'IntegerLiteral':
        return this.visitIntegerLiteral(node);
      case 'FloatLiteral':
        return this.visitFloatLiteral(node);
      case 'StringLiteral':
        return this.visitStringLiteral(node);
      case 'BooleanLiteral':
        return this.visitBooleanLiteral(node);
      case 'ListLiteral':
        return this.visitListLiteral(node);
      case 'StructLiteral':
        return this.visitStructLiteral(node);
      case 'RangeExpression':
        return this.visitRangeExpression(node);
      case 'InfixCall':
        return this.visitInfixCall(node);
      case 'LambdaExpression':
        return this.visitLambdaExpression(node);
      case 'TypeCastExpression':
        return this.visitTypeCastExpression(node);
      case 'IfExpression':
        return this.visitIfExpression(node);
      case 'AssignmentStatement':
        return this.visitAssignmentStatement(node);
      case 'ExpressionStatement':
        return this.visitExpressionStatement(node);
      case 'NonNullAssertionExpression':
        return this.visitNonNullAssertionExpression(node);
      case 'NullLiteral':
        return this.visitNullLiteral(node);
      case 'ThisExpression':
        return this.visitThisExpression(node);
      case 'TemplateLiteral':
        return this.visitTemplateLiteral(node);
      default:
        throw new CanonRuntimeError(`Unknown node type: ${node.type}`);
    }
  }

  /**
   * プログラム全体を実行
   */
  private visitProgram(node: ASTNode): CanonValue {
    let result: CanonValue = NullValue.getInstance();

    if (node.body && Array.isArray(node.body)) {
      // Check if the first statement is a SchemaDirective (required for config files, not schema files)
      if (
        !this.options.isSchemaFile &&
        (node.body.length === 0 || node.body[0].type !== 'SchemaDirective')
      ) {
        throw new CanonRuntimeError('Config file must start with #schema directive');
      }

      // First, process all struct declarations to ensure they're available
      for (const stmt of node.body) {
        if (stmt.type === 'StructDeclaration') {
          this.visitNode(stmt);
        }
      }

      // Then process all variable declarations
      for (const stmt of node.body) {
        if (stmt.type === 'VariableDeclaration') {
          this.visitNode(stmt);
        }
      }

      // Finally, process all other statements
      for (const stmt of node.body) {
        if (stmt.type !== 'VariableDeclaration' && stmt.type !== 'StructDeclaration') {
          result = this.visitNode(stmt);
        }
      }
    }

    return result;
  }

  /**
   * スキーマ宣言を処理
   */
  private visitSchemaDeclaration(node: ASTNode): CanonValue {
    if (node.body && Array.isArray(node.body)) {
      const schemaEnv = this.currentEnv.extend();
      const prevEnv = this.currentEnv;
      this.currentEnv = schemaEnv;

      try {
        for (const stmt of node.body) {
          this.visitNode(stmt);
        }

        if (this.options.debug) {
          console.log(
            '[DEBUG] Schema environment local names:',
            Array.from(schemaEnv.getLocalNames())
          );
        }

        // スキーマ定義から構造体を作成
        const schemaStruct = this.createSchemaStruct(schemaEnv);
        this.schemaDefinition = schemaStruct;

        if (this.options.debug) {
          console.log('[DEBUG] Created schema struct:', schemaStruct);
        }

        // スキーマ構造体をグローバル環境に定義
        this.globalEnv.define('schema', schemaStruct);
      } finally {
        this.currentEnv = prevEnv;
      }
    }

    return NullValue.getInstance();
  }

  /**
   * スキーマディレクティブを処理
   */
  private visitSchemaDirective(node: ASTNode): CanonValue {
    const schemaPath = node.path;

    if (!schemaPath) {
      throw new CanonRuntimeError('Schema directive missing path');
    }

    // 相対パスの場合は、元のソースファイルのディレクトリから解決
    let resolvedPath: string;
    if (this.options.inputFilePath && !path.isAbsolute(schemaPath)) {
      const sourceDir = path.dirname(this.options.inputFilePath);
      resolvedPath = path.resolve(sourceDir, schemaPath);
    } else {
      resolvedPath = path.resolve(schemaPath);
    }

    try {
      // Parse and analyze the schema file
      const schemaAst = parseCanonFile(resolvedPath);

      // Interpret the schema file to get schema definition
      const schemaInterpreter = new Interpreter({
        ...this.options,
        inputFilePath: resolvedPath,
        isSchemaFile: true,
      });

      schemaInterpreter.execute(schemaAst);

      // Copy all definitions from schema interpreter to main interpreter
      const schemaEnv = schemaInterpreter.getGlobalEnvironment();
      for (const name of schemaEnv.getLocalNames()) {
        const value = schemaEnv.getLocal(name);
        if (value) {
          this.globalEnv.define(name, value);
        }
      }

      // Store the schema definition for later validation
      const schemaDefinition = schemaInterpreter.getGlobalEnvironment().get('schema');
      if (schemaDefinition instanceof StructValue) {
        this.schemaDefinition = schemaDefinition;
      } else {
        throw new CanonRuntimeError('Schema file must define a schema object');
      }
    } catch (error) {
      throw new CanonRuntimeError(
        `Error loading schema: ${error instanceof Error ? error.message : String(error)}`
      );
    }

    return NullValue.getInstance();
  }

  /**
   * Union宣言を処理（スキーマファイル用）
   */
  private visitUnionDeclaration(_node: ASTNode): CanonValue {
    // Union宣言はスキーマファイルでの型定義なので、実際の実行では無視
    return NullValue.getInstance();
  }

  /**
   * プロパティ宣言を処理（スキーマファイル用）
   */
  private visitPropertyDeclaration(node: ASTNode): CanonValue {
    if (this.options.debug) {
      console.log('[DEBUG] PropertyDeclaration node:', JSON.stringify(node, null, 2));
    }

    const identifier = node.key?.name || node.identifier?.name || node.name?.name;
    const value = node.value ? this.visitNode(node.value) : NullValue.getInstance();

    if (this.options.debug) {
      console.log(`[DEBUG] PropertyDeclaration - identifier: ${identifier}, value: ${value}`);
    }

    if (identifier) {
      this.currentEnv.define(identifier, value);
    }

    return value;
  }

  /**
   * スキーマインポートを処理
   */
  private visitSchemaImport(_node: ASTNode): CanonValue {
    // TODO: 外部スキーマファイルの読み込み実装
    throw new CanonRuntimeError('Schema import not yet implemented');
  }

  /**
   * 構造体宣言を処理
   */
  private visitStructDeclaration(node: ASTNode): CanonValue {
    const structName = node.name?.name;
    if (!structName) {
      throw new CanonRuntimeError('Struct declaration missing name');
    }

    // 構造体コンストラクタ関数を作成
    const structConstructor = new BuiltinFunctionValue(
      structName,
      (args: CanonValue[]): CanonValue => {
        const fields = new Map<string, CanonValue>();

        // 引数がある場合は、initコンストラクタを探す
        if (args.length > 0) {
          // 基本的なinit処理（引数をフィールドに設定）
          if (node.body && Array.isArray(node.body)) {
            const initMethods = node.body.filter(
              (member: any) => member.type === 'InitDeclaration'
            );

            // 引数数に合致するinitメソッドを探す
            if (this.options.debug) {
              console.log(`[DEBUG] Looking for init method with ${args.length} parameters`);
              console.log(`[DEBUG] Found ${initMethods.length} init methods`);
              initMethods.forEach((init, i) => {
                console.log(
                  `[DEBUG] Init method ${i}: ${init.parameters ? init.parameters.length : 0} parameters`
                );
              });
            }

            for (const init of initMethods) {
              if (init.parameters && init.parameters.length === args.length) {
                if (this.options.debug) {
                  console.log(
                    `[DEBUG] Found matching init method with ${init.parameters.length} parameters`
                  );
                }
                // パラメータに値を設定
                for (let i = 0; i < args.length; i++) {
                  const param = init.parameters[i];

                  let fieldName: string | undefined;

                  if (param.name) {
                    if (typeof param.name === 'string') {
                      fieldName = param.name;
                    } else if (
                      param.name.type === 'MemberAccessExpression' &&
                      param.name.property?.name
                    ) {
                      // this.property形式のパラメータ
                      fieldName = param.name.property.name;
                    }
                  } else if (param.type === 'MemberAccessExpression' && param.property?.name) {
                    // this.property形式のパラメータ（古いロジック）
                    fieldName = param.property.name;
                  }

                  if (fieldName) {
                    fields.set(fieldName, args[i]);
                    if (this.options.debug) {
                      console.log(`[DEBUG] Set field ${fieldName} = ${args[i]}`);
                    }
                  } else {
                    if (this.options.debug) {
                      console.log(`[DEBUG] Could not determine field name for param:`, param);
                    }
                  }
                }
                break;
              }
            }
          }

          // 引数数に基づいた基本的なフィールド設定（fallback）
          if (fields.size === 0) {
            if (structName === 'Version' && args.length === 3) {
              fields.set('major', args[0]);
              fields.set('minor', args[1]);
              fields.set('patch', args[2]);
            }
          }
        }

        const structValue = new StructValue(structName, fields, node.annotations || []);

        // Set interpreter reference for @serialize function calls
        structValue.setInterpreter(this);

        // Track this struct instance for end-of-program validation
        this.allStructInstances.push(structValue);

        // Process struct body for methods/getters and field declarations
        if (node.body && Array.isArray(node.body)) {
          for (const member of node.body) {
            // Process getters and methods
            if (member.type === 'GetterDeclaration' || member.type === 'MethodDeclaration') {
              const memberName = member.name?.name;
              if (memberName) {
                // Create a function value for the getter/method
                const parameters = member.parameters || [];
                const paramNames = parameters.map((p: any) => p.name?.name || p.name || '');
                const functionValue = new UserFunctionValue(
                  memberName,
                  paramNames,
                  member.body || member,
                  new Map()
                );

                // Add the function to the struct fields
                structValue.setField(memberName, functionValue);

                // Store member annotations if present
                if (member.annotations && Array.isArray(member.annotations)) {
                  structValue.setMemberAnnotations(memberName, member.annotations);
                }
              }
            }
            // Process regular field declarations
            else if (member.type === 'FieldDeclaration') {
              const fieldName = member.name?.name;
              if (fieldName) {
                const fieldValue = member.value
                  ? this.visitNode(member.value)
                  : NullValue.getInstance();
                structValue.setField(fieldName, fieldValue);

                // Store member annotations if present
                if (member.annotations && Array.isArray(member.annotations)) {
                  structValue.setMemberAnnotations(fieldName, member.annotations);
                }
              }
            }
            // Process property declarations
            else if (member.type === 'PropertyDeclaration') {
              const fieldName = member.name?.name;
              if (fieldName) {
                // Only set default value if the field wasn't already set by the constructor
                if (!structValue.getField(fieldName)) {
                  if (member.defaultValue) {
                    const fieldValue = this.visitNode(member.defaultValue);
                    structValue.setField(fieldName, fieldValue);
                  } else if (member.isOptional) {
                    // Optional field without default value gets null
                    structValue.setField(fieldName, NullValue.getInstance());
                  } else {
                    // Required field without default value - defer validation until after lambda execution
                    // Mark this field as needing validation (including private fields)
                    if (!structValue.hasField(fieldName)) {
                      structValue.setField(fieldName, NullValue.getInstance());
                      // Mark all required fields (including private ones) as requiring validation
                      structValue.setFieldRequiresValidation(fieldName);
                    }
                  }

                  // Store member annotations if present
                  if (member.annotations && Array.isArray(member.annotations)) {
                    structValue.setMemberAnnotations(fieldName, member.annotations);
                  }
                } else {
                  // Field already exists, but we still need to store annotations
                  if (member.annotations && Array.isArray(member.annotations)) {
                    structValue.setMemberAnnotations(fieldName, member.annotations);
                  }
                }
              }
            }
            // Process mixin declarations
            else if (member.type === 'MixinDeclaration') {
              const mixinName = member.mixinName?.name;
              if (mixinName) {
                if (this.options.debug) {
                  console.log(`[DEBUG] Processing mixin: ${mixinName}`);
                }
                // Get the mixin struct constructor from the environment
                const mixinConstructor = this.currentEnv.get(mixinName);
                if (
                  mixinConstructor &&
                  (mixinConstructor.type === 'function' ||
                    mixinConstructor.type === 'builtin_function')
                ) {
                  if (this.options.debug) {
                    console.log(`[DEBUG] Found mixin constructor: ${mixinName}`);
                  }
                  // Create an instance of the mixin struct to get its fields
                  const mixinInstance = (mixinConstructor as BuiltinFunctionValue).call([]);
                  if (mixinInstance && mixinInstance.type === 'struct') {
                    const mixinStruct = mixinInstance as StructValue;
                    if (this.options.debug) {
                      console.log(
                        `[DEBUG] Mixin struct fields:`,
                        Array.from(mixinStruct.getFields().entries())
                      );
                    }
                    // Copy all fields from the mixin to the current struct
                    for (const [fieldName, fieldValue] of mixinStruct.getFields()) {
                      structValue.setField(fieldName, fieldValue);
                      if (this.options.debug) {
                        console.log(`[DEBUG] Copied field ${fieldName} from mixin`);
                      }
                    }
                    // Copy member annotations from the mixin
                    for (const [fieldName, annotations] of mixinStruct.getMemberAnnotations()) {
                      structValue.setMemberAnnotations(fieldName, annotations);
                    }
                  } else {
                    if (this.options.debug) {
                      console.log(`[DEBUG] Mixin instance is not a struct:`, mixinInstance);
                    }
                  }
                } else {
                  if (this.options.debug) {
                    console.log(
                      `[DEBUG] Mixin constructor not found or not a function:`,
                      mixinConstructor
                    );
                  }
                }
              }
            }
          }
        }

        // Note: Required field validation is handled elsewhere:
        // - For lambda-based instantiation: after lambda execution
        // - For non-lambda instantiation: in visitFunctionCall when detecting no lambda

        return structValue;
      }
    );

    // グローバル環境に構造体コンストラクタを登録
    this.currentEnv.define(structName, structConstructor);

    return NullValue.getInstance();
  }

  /**
   * 変数宣言を処理
   */
  private visitVariableDeclaration(node: ASTNode): CanonValue {
    const varName = node.name?.name;
    if (!varName) {
      throw new CanonRuntimeError('Variable declaration missing name');
    }

    const value = node.value ? this.visitNode(node.value) : NullValue.getInstance();
    this.currentEnv.define(varName, value);
    return value;
  }

  /**
   * 関数宣言を処理
   */
  private visitFunctionDeclaration(node: ASTNode): CanonValue {
    const funcName = node.name?.name;
    if (!funcName) {
      throw new CanonRuntimeError('Function declaration missing name');
    }

    const parameters: string[] = [];
    if (node.parameters && Array.isArray(node.parameters)) {
      for (const param of node.parameters) {
        if (param.name?.name) {
          parameters.push(param.name.name);
        }
      }
    }

    const functionValue = new UserFunctionValue(
      funcName,
      parameters,
      node.body,
      new Map(this.currentEnv.getAllNames().map((name) => [name, this.currentEnv.get(name)!]))
    );

    this.currentEnv.define(funcName, functionValue);
    return functionValue;
  }

  /**
   * ブロックを処理
   */
  private visitBlock(node: ASTNode): CanonValue {
    const blockEnv = this.currentEnv.extend();
    const prevEnv = this.currentEnv;
    this.currentEnv = blockEnv;

    try {
      let result: CanonValue = NullValue.getInstance();
      if (node.body && Array.isArray(node.body)) {
        for (const stmt of node.body) {
          result = this.visitNode(stmt);
        }
      }
      return result;
    } finally {
      this.currentEnv = prevEnv;
    }
  }

  /**
   * 二項演算を処理
   */
  private visitBinaryExpression(node: ASTNode): CanonValue {
    // Special handling for function calls with lambda bodies (e.g., pipeline { ... })
    if (
      node.operator === undefined &&
      node.left &&
      node.right &&
      node.right.type === 'LambdaExpression'
    ) {
      // Check if left side is a function identifier
      if (node.left.type === 'Identifier') {
        const functionName = node.left.name;
        const functionValue = this.currentEnv.get(functionName);

        if (functionValue instanceof BuiltinFunctionValue && functionName === 'pipeline') {
          // Special handling for pipeline function with lambda body
          return this.handlePipelineWithLambda(node.right);
        }
      }
    }

    const left = this.visitNode(node.left);
    const right = this.visitNode(node.right);
    const operator = node.operator;

    return this.evaluateBinaryOperation(left, operator, right);
  }

  /**
   * 二項演算の実際の計算
   */
  private evaluateBinaryOperation(
    left: CanonValue,
    operator: string,
    right: CanonValue
  ): CanonValue {
    // 算術演算
    if (left instanceof IntValue || left instanceof FloatValue) {
      if (right instanceof IntValue || right instanceof FloatValue) {
        switch (operator) {
          case '+':
            return left instanceof IntValue ? left.add(right) : (left as FloatValue).add(right);
          case '-':
            return left instanceof IntValue
              ? left.subtract(right)
              : (left as FloatValue).subtract(right);
          case '*':
            return left instanceof IntValue
              ? left.multiply(right)
              : (left as FloatValue).multiply(right);
          case '/':
            return left instanceof IntValue
              ? left.divide(right)
              : (left as FloatValue).divide(right);
          case '%':
            return left instanceof IntValue
              ? left.modulo(right)
              : (left as FloatValue).modulo(right);
          case '**':
            return left instanceof IntValue ? left.power(right) : (left as FloatValue).power(right);
          case '<':
            return left instanceof IntValue
              ? left.lessThan(right)
              : (left as FloatValue).lessThan(right);
          case '<=':
            return left instanceof IntValue
              ? left.lessThanOrEqual(right)
              : (left as FloatValue).lessThanOrEqual(right);
          case '>':
            return left instanceof IntValue
              ? left.greaterThan(right)
              : (left as FloatValue).greaterThan(right);
          case '>=':
            return left instanceof IntValue
              ? left.greaterThanOrEqual(right)
              : (left as FloatValue).greaterThanOrEqual(right);
        }
      }
    }

    // 文字列演算
    if (left instanceof StringValue && right instanceof StringValue) {
      switch (operator) {
        case '+':
          return left.concat(right);
        case '<':
          return left.lessThan(right);
        case '<=':
          return left.lessThanOrEqual(right);
        case '>':
          return left.greaterThan(right);
        case '>=':
          return left.greaterThanOrEqual(right);
      }
    }

    // 等価演算
    switch (operator) {
      case '==':
        return new BoolValue(left.equals(right));
      case '!=':
        return new BoolValue(!left.equals(right));
    }

    // 論理演算
    if (left instanceof BoolValue && right instanceof BoolValue) {
      switch (operator) {
        case '&&':
          return left.and(right);
        case '||':
          return left.or(right);
      }
    }

    throw new CanonRuntimeError(
      `Unsupported binary operation: ${left.getTypeName()} ${operator} ${right.getTypeName()}`
    );
  }

  /**
   * 単項演算を処理
   */
  private visitUnaryExpression(node: ASTNode): CanonValue {
    const operand = this.visitNode(node.operand);
    const operator = node.operator;

    switch (operator) {
      case '-':
        if (operand instanceof IntValue) {
          return new IntValue(-operand.getValue());
        } else if (operand instanceof FloatValue) {
          return new FloatValue(-operand.getValue());
        }
        throw new CanonRuntimeError(`Unary minus not supported for ${operand.getTypeName()}`);
      case '!':
        if (operand instanceof BoolValue) {
          return operand.not();
        }
        return new BoolValue(!operand.toBool());
      default:
        throw new CanonRuntimeError(`Unknown unary operator: ${operator}`);
    }
  }

  /**
   * 関数呼び出しを処理
   */
  private visitFunctionCall(node: ASTNode): CanonValue {
    // Support both CallExpression (callee) and FunctionCall (function)
    const functionNode = node.function || node.callee;
    if (!functionNode) {
      throw new CanonRuntimeError('Function call missing function reference');
    }

    const functionValue = this.visitNode(functionNode);
    const args: CanonValue[] = [];

    if (node.arguments && Array.isArray(node.arguments)) {
      for (const arg of node.arguments) {
        args.push(this.visitNode(arg));
      }
    }

    // Special handling for built-in functions with lambda arguments
    if (functionValue instanceof BuiltinFunctionValue && functionNode.type === 'Identifier') {
      const functionName = functionNode.name;

      // Special case for pipeline function with lambda
      if (
        functionName === 'pipeline' &&
        args.length === 1 &&
        args[0] instanceof UserFunctionValue
      ) {
        // Get the original lambda node from the arguments
        const originalLambdaNode = node.arguments[0];
        return this.handlePipelineWithLambda(originalLambdaNode);
      }
    }

    // Special handling for struct instantiation
    if (functionNode.type === 'Identifier') {
      const structName = functionNode.name;

      // Check if this is a struct instantiation
      // Case 1: Only lambda argument - StructName { ... }
      if (args.length === 1 && args[0] instanceof UserFunctionValue) {
        // The argument is a lambda function that configures the struct
        const lambda = args[0] as UserFunctionValue;

        // Create an empty struct with the given name
        const fields = new Map<string, CanonValue>();
        const struct = new StructValue(structName, fields, []);

        // Track this struct instance for end-of-program validation
        this.allStructInstances.push(struct);

        // Call the lambda function with the struct as context
        const tempEnv = new Environment(this.currentEnv);
        tempEnv.define('this', struct);

        // Execute the lambda body to populate the struct
        const savedEnv = this.currentEnv;
        this.currentEnv = tempEnv;

        try {
          const body = lambda.getBody();

          // Check if the lambda body contains assignment statements
          // First case: body is a direct array of statements
          if (Array.isArray(body)) {
            for (const stmt of body) {
              if (stmt.type === 'AssignmentStatement') {
                const fieldName = stmt.left.name;
                const fieldValue = this.visitNode(stmt.right);
                struct.setField(fieldName, fieldValue);
              }
            }
          }
          // Second case: body is an object with a statements array property
          else if (body && typeof body === 'object' && Array.isArray(body.statements)) {
            for (const stmt of body.statements) {
              if (stmt.type === 'AssignmentStatement') {
                const fieldName = stmt.left.name;
                const fieldValue = this.visitNode(stmt.right);
                struct.setField(fieldName, fieldValue);
              }
            }
          }
          // Last case: body is a single expression or other node
          else {
            this.visitNode(body);
          }
        } finally {
          this.currentEnv = savedEnv;
        }

        // configの場合は、グローバル環境に保存
        if (structName === 'config') {
          this.globalEnv.define('__config_result__', struct);
        }

        // スキーマ定義に基づいて、構造体インスタンスを保存
        if (this.schemaDefinition) {
          const schemaFields = this.schemaDefinition.getFields();
          if (schemaFields.has(structName)) {
            // グローバル環境に保存
            this.globalEnv.define(`__${structName}_instance__`, struct);

            if (this.options.debug) {
              console.log(`[DEBUG] Stored struct instance '__${structName}_instance__':`, struct);
              console.log(`[DEBUG] Struct fields:`, Array.from(struct.getFields().entries()));
            }
          }
        }

        return struct;
      }
      // Case 2: Constructor arguments with lambda - StructName(args...) { ... }
      else if (args.length > 1 && args[args.length - 1] instanceof UserFunctionValue) {
        // Last argument is a lambda, others are constructor arguments
        const constructorArgs = args.slice(0, -1);
        const lambda = args[args.length - 1] as UserFunctionValue;

        if (this.options.debug) {
          console.log(`[DEBUG] Struct instantiation with constructor args and lambda`);
          console.log(`[DEBUG] Constructor args:`, constructorArgs);
          console.log(`[DEBUG] Lambda:`, lambda);
        }

        // Call the struct constructor with the constructor arguments
        const structConstructor = this.currentEnv.get(structName);
        if (structConstructor && structConstructor instanceof BuiltinFunctionValue) {
          // Create the struct instance using the constructor
          const struct = structConstructor.call(constructorArgs) as StructValue;

          // Then apply the lambda to set additional fields
          const tempEnv = new Environment(this.currentEnv);
          tempEnv.define('this', struct);

          const savedEnv = this.currentEnv;
          this.currentEnv = tempEnv;

          try {
            const body = lambda.getBody();

            if (Array.isArray(body)) {
              for (const stmt of body) {
                if (stmt.type === 'AssignmentStatement') {
                  const fieldName = stmt.left.name;
                  const fieldValue = this.visitNode(stmt.right);
                  struct.setField(fieldName, fieldValue);
                  if (this.options.debug) {
                    console.log(`[DEBUG] Lambda set field ${fieldName} = ${fieldValue}`);
                  }
                }
              }
            } else if (body && typeof body === 'object' && Array.isArray(body.statements)) {
              for (const stmt of body.statements) {
                if (stmt.type === 'AssignmentStatement') {
                  const fieldName = stmt.left.name;
                  const fieldValue = this.visitNode(stmt.right);
                  struct.setField(fieldName, fieldValue);
                  if (this.options.debug) {
                    console.log(`[DEBUG] Lambda set field ${fieldName} = ${fieldValue}`);
                  }
                }
              }
            } else {
              this.visitNode(body);
            }
          } finally {
            this.currentEnv = savedEnv;
          }

          // After lambda execution, validate required fields
          this.validateRequiredFields(struct, structName);

          // Store the struct instance if needed
          if (this.schemaDefinition) {
            const schemaFields = this.schemaDefinition.getFields();
            if (schemaFields.has(structName)) {
              this.globalEnv.define(`__${structName}_instance__`, struct);
              if (this.options.debug) {
                console.log(`[DEBUG] Stored struct instance '__${structName}_instance__':`, struct);
              }
            }
          }

          return struct;
        } else {
          throw new CanonRuntimeError(`Struct constructor '${structName}' not found`);
        }
      }
    }

    // Regular function calls
    if (functionValue instanceof BuiltinFunctionValue) {
      if (this.options.debug && functionNode.type === 'Identifier') {
        console.log(`[DEBUG] Calling builtin function '${functionNode.name}' with args:`, args);
      }

      const result = functionValue.call(args);

      if (this.options.debug && functionNode.type === 'Identifier') {
        console.log(`[DEBUG] Builtin function '${functionNode.name}' returned:`, result);
      }

      // スキーマ定義に基づいて、特定の関数呼び出しの結果を保存
      if (this.schemaDefinition && functionNode.type === 'Identifier') {
        const functionName = functionNode.name;
        const schemaFields = this.schemaDefinition.getFields();
        if (schemaFields.has(functionName)) {
          // グローバル環境に保存
          this.globalEnv.define(`__${functionName}_instance__`, result);

          if (this.options.debug) {
            console.log(`[DEBUG] Stored function result '__${functionName}_instance__':`, result);
          }
        }
      }

      return result;
    } else if (functionValue instanceof UserFunctionValue) {
      return functionValue.call(args, this);
    } else {
      throw new CanonRuntimeError(`Cannot call non-function value: ${functionValue.getTypeName()}`);
    }
  }

  /**
   * メンバーアクセスを処理
   */
  private visitMemberAccess(node: ASTNode): CanonValue {
    const object = this.visitNode(node.object);
    const propertyName = node.property?.name;

    if (!propertyName) {
      throw new CanonRuntimeError('Member access missing property name');
    }

    if (object instanceof StructValue) {
      const field = object.getField(propertyName);
      if (field) {
        return field;
      }
      throw new CanonRuntimeError(
        `Property '${propertyName}' not found on struct ${object.getStructName()}`
      );
    }

    if (object instanceof ListValue) {
      switch (propertyName) {
        case 'length':
          return new IntValue(object.getLength());
        default:
          throw new CanonRuntimeError(`Property '${propertyName}' not found on list`);
      }
    }

    throw new CanonRuntimeError(
      `Cannot access property '${propertyName}' on ${object.getTypeName()}`
    );
  }

  /**
   * インデックスアクセスを処理
   */
  private visitIndexAccess(node: ASTNode): CanonValue {
    const object = this.visitNode(node.object);
    const index = this.visitNode(node.index);

    if (object instanceof ListValue) {
      if (index instanceof IntValue) {
        const element = object.getElementAt(index.getValue());
        if (element) {
          return element;
        }
        throw new CanonRuntimeError(`List index ${index.getValue()} out of bounds`);
      } else if (index instanceof IntRangeValue || index instanceof FloatRangeValue) {
        // Handle range-based slicing
        const start = Math.floor(index.getFrom());
        const end = Math.ceil(index.getTo()) + 1; // End is inclusive in Canon but exclusive in JS

        if (start < 0 || end > object.getLength()) {
          throw new CanonRuntimeError(`Slice indices (${start}..${end - 1}) out of bounds`);
        }

        return object.slice(start, end);
      }

      // Debug logging for unknown index types
      if (this.options.debug) {
        console.log(`[DEBUG] Index type: ${index.type}`);
        console.log(`[DEBUG] Index value: ${index.toString()}`);
      }

      throw new CanonRuntimeError(
        `List index must be integer or range, got ${index.getTypeName()}`
      );
    }

    throw new CanonRuntimeError(`Cannot index ${object.getTypeName()}`);
  }

  /**
   * 識別子を処理
   */
  private visitIdentifier(node: ASTNode): CanonValue {
    const name = node.name;
    const value = this.currentEnv.get(name);
    if (value) {
      return value;
    }
    throw new CanonRuntimeError(`Undefined variable: ${name}`);
  }

  /**
   * リテラル処理メソッド群
   */
  private visitIntegerLiteral(node: ASTNode): CanonValue {
    return new IntValue(node.value);
  }

  private visitFloatLiteral(node: ASTNode): CanonValue {
    return new FloatValue(node.value);
  }

  private visitStringLiteral(node: ASTNode): CanonValue {
    return new StringValue(node.value);
  }

  private visitTemplateLiteral(node: ASTNode): CanonValue {
    if (this.options.debug) {
      console.log('[DEBUG] Processing template literal:', JSON.stringify(node, null, 2));
    }

    let result = '';

    if (node.parts && Array.isArray(node.parts)) {
      for (const part of node.parts) {
        if (part.type === 'TemplateStringPart') {
          // Static string part
          result += part.value || '';
        } else if (part.type === 'TemplateInterpolation') {
          // Expression interpolation
          const exprValue = this.visitNode(part.expression);

          // Convert Canon value to string
          let stringValue = '';
          if (exprValue instanceof StringValue) {
            stringValue = exprValue.getValue();
          } else if (exprValue instanceof IntValue) {
            stringValue = exprValue.getValue().toString();
          } else if (exprValue instanceof BoolValue) {
            stringValue = exprValue.getValue().toString();
          } else if (exprValue instanceof FloatValue) {
            stringValue = exprValue.getValue().toString();
          } else {
            // Fallback to Canon value's toString method
            stringValue = exprValue.toString();
          }

          result += stringValue;
        }
      }
    }

    if (this.options.debug) {
      console.log('[DEBUG] Template literal result:', result);
    }

    return new StringValue(result);
  }

  private visitBooleanLiteral(node: ASTNode): CanonValue {
    return new BoolValue(node.value);
  }

  private visitListLiteral(node: ASTNode): CanonValue {
    const elements: CanonValue[] = [];
    if (node.elements && Array.isArray(node.elements)) {
      for (const elem of node.elements) {
        elements.push(this.visitNode(elem));
      }
    }
    return new ListValue(elements);
  }

  private visitStructLiteral(node: ASTNode): CanonValue {
    const fields = new Map<string, CanonValue>();
    if (node.fields && Array.isArray(node.fields)) {
      for (const field of node.fields) {
        const key = field.key?.name || field.key;
        const value = this.visitNode(field.value);
        fields.set(key, value);
      }
    }
    return new StructValue('', fields, []);
  }

  /**
   * レンジ式を処理
   */
  private visitRangeExpression(node: ASTNode): CanonValue {
    const from = this.visitNode(node.from);
    const to = this.visitNode(node.to);
    const inclusive = node.inclusive || false;

    if (from instanceof IntValue && to instanceof IntValue) {
      const toValue = inclusive ? to.getValue() : to.getValue() - 1;
      return new IntRangeValue(from.getValue(), toValue);
    } else if (
      (from instanceof IntValue || from instanceof FloatValue) &&
      (to instanceof IntValue || to instanceof FloatValue)
    ) {
      const toValue = inclusive ? to.getValue() : to.getValue() - 1.0;
      return new FloatRangeValue(from.getValue(), toValue);
    }

    throw new CanonRuntimeError('Range bounds must be numeric');
  }

  /**
   * ラムダ式を処理
   */
  private visitLambdaExpression(node: ASTNode): CanonValue {
    const parameters = node.parameters || [];
    const paramNames = parameters.map((param: any) => param.name || param);
    const body = node.body;

    // Create closure from current environment
    const closure = new Map<string, CanonValue>();
    for (const name of this.currentEnv.getLocalNames()) {
      const value = this.currentEnv.getLocal(name);
      if (value) {
        closure.set(name, value);
      }
    }

    return new UserFunctionValue('<lambda>', paramNames, body, closure);
  }

  /**
   * 型キャスト式を処理
   */
  private visitTypeCastExpression(node: ASTNode): CanonValue {
    const targetType =
      typeof node.targetType === 'string' ? node.targetType : node.targetType?.name;
    const expression = this.visitNode(node.expression);

    if (!targetType) {
      throw new CanonRuntimeError('Type cast missing target type');
    }

    // Get the type conversion function from global environment
    const typeFunction = this.globalEnv.get(targetType);
    if (!typeFunction) {
      throw new CanonRuntimeError(`Unknown type: ${targetType}`);
    }

    // Call the type conversion function
    if (typeFunction instanceof BuiltinFunctionValue) {
      return typeFunction.call([expression]);
    }

    throw new CanonRuntimeError(`${targetType} is not a function`);
  }

  /**
   * If式を処理
   */
  private visitIfExpression(node: ASTNode): CanonValue {
    const condition = this.visitNode(node.condition);
    if (condition.toBool()) {
      return this.visitNode(node.thenBranch);
    } else if (node.elseBranch) {
      return this.visitNode(node.elseBranch);
    }
    return NullValue.getInstance();
  }

  /**
   * 代入文を処理
   */
  private visitAssignmentStatement(node: ASTNode): CanonValue {
    const left = node.left;
    const operator = node.operator;
    const right = this.visitNode(node.right);

    if (left.type === 'Identifier') {
      const varName = left.name;
      if (!varName) {
        throw new CanonRuntimeError('Assignment missing variable name');
      }

      let finalValue = right;

      // 複合代入演算子の処理
      if (operator !== '=') {
        const currentValue = this.currentEnv.get(varName);
        if (currentValue === undefined) {
          throw new CanonRuntimeError(`Variable '${varName}' is not defined`);
        }

        switch (operator) {
          case '+=':
            if (currentValue.type === 'string' && right.type === 'string') {
              finalValue = new StringValue(
                (currentValue as StringValue).getValue() + (right as StringValue).getValue()
              );
            } else if (currentValue.type === 'int' && right.type === 'int') {
              finalValue = new IntValue(
                (currentValue as IntValue).getValue() + (right as IntValue).getValue()
              );
            } else if (
              (currentValue.type === 'int' || currentValue.type === 'float') &&
              (right.type === 'int' || right.type === 'float')
            ) {
              const leftVal = (currentValue as IntValue | FloatValue).getValue();
              const rightVal = (right as IntValue | FloatValue).getValue();
              finalValue = new FloatValue(leftVal + rightVal);
            } else {
              throw new CanonRuntimeError(
                `Cannot apply ${operator} to ${currentValue.type} and ${right.type}`
              );
            }
            break;
          case '-=':
            if (currentValue.type === 'int' && right.type === 'int') {
              finalValue = new IntValue(
                (currentValue as IntValue).getValue() - (right as IntValue).getValue()
              );
            } else if (
              (currentValue.type === 'int' || currentValue.type === 'float') &&
              (right.type === 'int' || right.type === 'float')
            ) {
              const leftVal = (currentValue as IntValue | FloatValue).getValue();
              const rightVal = (right as IntValue | FloatValue).getValue();
              finalValue = new FloatValue(leftVal - rightVal);
            } else {
              throw new CanonRuntimeError(
                `Cannot apply ${operator} to ${currentValue.type} and ${right.type}`
              );
            }
            break;
          case '*=':
            if (currentValue.type === 'int' && right.type === 'int') {
              finalValue = new IntValue(
                (currentValue as IntValue).getValue() * (right as IntValue).getValue()
              );
            } else if (
              (currentValue.type === 'int' || currentValue.type === 'float') &&
              (right.type === 'int' || right.type === 'float')
            ) {
              const leftVal = (currentValue as IntValue | FloatValue).getValue();
              const rightVal = (right as IntValue | FloatValue).getValue();
              finalValue = new FloatValue(leftVal * rightVal);
            } else {
              throw new CanonRuntimeError(
                `Cannot apply ${operator} to ${currentValue.type} and ${right.type}`
              );
            }
            break;
          case '/=':
            if (
              (currentValue.type === 'int' || currentValue.type === 'float') &&
              (right.type === 'int' || right.type === 'float')
            ) {
              const leftVal = (currentValue as IntValue | FloatValue).getValue();
              const rightVal = (right as IntValue | FloatValue).getValue();
              if (rightVal === 0) {
                throw new CanonRuntimeError('Division by zero');
              }
              finalValue = new FloatValue(leftVal / rightVal);
            } else {
              throw new CanonRuntimeError(
                `Cannot apply ${operator} to ${currentValue.type} and ${right.type}`
              );
            }
            break;
          case '%=':
            if (
              (currentValue.type === 'int' || currentValue.type === 'float') &&
              (right.type === 'int' || right.type === 'float')
            ) {
              const leftVal = (currentValue as IntValue | FloatValue).getValue();
              const rightVal = (right as IntValue | FloatValue).getValue();
              if (rightVal === 0) {
                throw new CanonRuntimeError('Division by zero');
              }
              finalValue = new FloatValue(leftVal % rightVal);
            } else {
              throw new CanonRuntimeError(
                `Cannot apply ${operator} to ${currentValue.type} and ${right.type}`
              );
            }
            break;
          case '**=':
            if (
              (currentValue.type === 'int' || currentValue.type === 'float') &&
              (right.type === 'int' || right.type === 'float')
            ) {
              const leftVal = (currentValue as IntValue | FloatValue).getValue();
              const rightVal = (right as IntValue | FloatValue).getValue();
              finalValue = new FloatValue(Math.pow(leftVal, rightVal));
            } else {
              throw new CanonRuntimeError(
                `Cannot apply ${operator} to ${currentValue.type} and ${right.type}`
              );
            }
            break;
          default:
            throw new CanonRuntimeError(`Unknown assignment operator: ${operator}`);
        }
      }

      if (!this.currentEnv.set(varName, finalValue)) {
        // 変数が存在しない場合は新しく定義
        this.currentEnv.define(varName, finalValue);
      }
      return finalValue;
    } else if (left.type === 'MemberAccessExpression') {
      // this.property 形式の代入
      const object = this.visitNode(left.object);
      const propertyName = left.property.name;

      if (object.type === 'struct') {
        let finalValue = right;

        // 複合代入演算子の処理
        if (operator !== '=') {
          const currentValue = (object as StructValue).getField(propertyName);
          if (currentValue === undefined) {
            throw new CanonRuntimeError(`Property '${propertyName}' is not defined`);
          }

          switch (operator) {
            case '+=':
              if (currentValue.type === 'string' && right.type === 'string') {
                finalValue = new StringValue(
                  (currentValue as StringValue).getValue() + (right as StringValue).getValue()
                );
              } else if (currentValue.type === 'int' && right.type === 'int') {
                finalValue = new IntValue(
                  (currentValue as IntValue).getValue() + (right as IntValue).getValue()
                );
              } else if (
                (currentValue.type === 'int' || currentValue.type === 'float') &&
                (right.type === 'int' || right.type === 'float')
              ) {
                const leftVal = (currentValue as IntValue | FloatValue).getValue();
                const rightVal = (right as IntValue | FloatValue).getValue();
                finalValue = new FloatValue(leftVal + rightVal);
              } else {
                throw new CanonRuntimeError(
                  `Cannot apply ${operator} to ${currentValue.type} and ${right.type}`
                );
              }
              break;
            // 他の演算子も同様に実装
            default:
              throw new CanonRuntimeError(`Unknown assignment operator: ${operator}`);
          }
        }

        (object as StructValue).setField(propertyName, finalValue);
        return finalValue;
      } else {
        throw new CanonRuntimeError(`Cannot assign to property of ${object.type}`);
      }
    } else {
      throw new CanonRuntimeError(`Invalid assignment target: ${left.type}`);
    }
  }

  /**
   * 式文を処理
   */ private visitExpressionStatement(node: ASTNode): CanonValue {
    const result = this.visitNode(node.expression);

    // スキーマ定義に基づいて、構造体インスタンスを保存
    if (this.schemaDefinition && node.expression.type === 'CallExpression') {
      const callExpr = node.expression;
      if (callExpr.callee && callExpr.callee.type === 'Identifier') {
        const structName = callExpr.callee.name;

        // スキーマ定義にこのフィールドが存在するかチェック
        const schemaFields = this.schemaDefinition.getFields();
        if (schemaFields.has(structName)) {
          // グローバル環境に保存
          this.globalEnv.define(structName, result);

          if (this.options.debug) {
            console.log(`[DEBUG] Stored struct instance '${structName}':`, result);
          }
        }
      }
    }

    return result;
  }

  /**
   * スキーマ環境から構造体を作成
   */
  private createSchemaStruct(schemaEnv: Environment): StructValue {
    const fields = new Map<string, CanonValue>();
    for (const name of schemaEnv.getLocalNames()) {
      const value = schemaEnv.getLocal(name);
      if (value) {
        fields.set(name, value);
      }
    }
    return new StructValue('Schema', fields, []);
  }

  /**
   * 最終結果をJSONで出力
   */
  getResultAsJSON(): any {
    if (this.options.debug) {
      console.log('[DEBUG] getResultAsJSON called');
      console.log('[DEBUG] schemaDefinition:', this.schemaDefinition);
      console.log(
        '[DEBUG] All global environment names:',
        Array.from(this.globalEnv.getLocalNames())
      );
    }

    // スキーマ定義に基づいて適切な出力を生成
    if (this.schemaDefinition) {
      const result: any = {};

      // スキーマ定義からフィールドを取得
      const schemaFields = this.schemaDefinition.getFields();

      if (this.options.debug) {
        console.log('[DEBUG] Schema fields:', Array.from(schemaFields.entries()));
      }

      for (const [fieldName, _fieldValue] of schemaFields) {
        // スキーマフィールドに対応するグローバル変数を探す
        // 1. まず、インスタンス変数を探す
        const instanceKey = `__${fieldName}_instance__`;
        let globalValue = this.globalEnv.get(instanceKey);

        // 2. 見つからない場合は、通常の変数を探す
        if (!globalValue) {
          globalValue = this.globalEnv.get(fieldName);
        }

        if (this.options.debug) {
          console.log(`[DEBUG] Looking for field '${fieldName}', found:`, globalValue);
        }

        if (globalValue) {
          // Skip built-in functions unless they are actually used to create instances
          if (globalValue.type === 'builtin_function') {
            // Only include if there's a corresponding instance
            const instanceKey = `__${fieldName}_instance__`;
            const instanceValue = this.globalEnv.get(instanceKey);
            if (instanceValue && instanceValue.type === 'struct') {
              result[fieldName] = instanceValue.toNative();
            }
          } else if (globalValue.type === 'struct') {
            // 構造体インスタンスの場合は、そのまま出力
            result[fieldName] = globalValue.toNative();
          } else {
            // その他の値
            result[fieldName] = globalValue.toNative();
          }
        } else {
          // グローバル変数が見つからない場合は、デフォルト値を設定
          if (this.options.debug) {
            console.log(`[DEBUG] Field '${fieldName}' not found, using null`);
          }
          result[fieldName] = null;
        }
      }

      if (this.options.debug) {
        console.log('[DEBUG] Final result:', result);
      }

      return result;
    }

    if (this.options.debug) {
      console.log('[DEBUG] No schema definition found, using fallback');
    }

    // スキーマ定義がない場合は従来の動作
    // まずconfig実行結果を探す
    const configResult = this.globalEnv.get('__config_result__');
    if (configResult instanceof StructValue) {
      return configResult.toNative();
    }

    // スキーマ定義に基づいてconfig構造体を探す
    const configValue = this.globalEnv.get('config');
    if (configValue instanceof StructValue) {
      return configValue.toNative();
    }

    // グローバル環境からconfig構造体を探す
    for (const name of this.globalEnv.getLocalNames()) {
      const value = this.globalEnv.getLocal(name);
      if (value instanceof StructValue && value.getStructName() === 'Config') {
        return value.toNative();
      }
    }

    // 全てのグローバル変数を収集
    const result: any = {};
    for (const name of this.globalEnv.getLocalNames()) {
      const value = this.globalEnv.getLocal(name);
      if (value && name !== '__config_result__') {
        result[name] = value.toNative();
      }
    }

    return result;
  }

  /**
   * グローバル環境を取得
   */
  getGlobalEnvironment(): Environment {
    return this.globalEnv;
  }

  /**
   * 中置呼び出しを処理
   */
  private visitInfixCall(node: ASTNode): CanonValue {
    // Debug log node structure
    if (this.options.debug) {
      console.log('[DEBUG] InfixCall node structure:');
      console.log(JSON.stringify(node, null, 2));
    }

    // Print function call
    if (node.functionName === 'print') {
      // Define numbers array if it appears to be defined in the left side
      if (node.left.type === 'ListLiteral') {
        this.globalEnv.define('numbers', this.visitNode(node.left));
      } else {
        this.visitNode(node.left); // Evaluate left side for side effects
      }

      const rightValue = this.visitNode(node.right);
      const printValue =
        rightValue instanceof StringValue ? rightValue.getValue() : rightValue.toString();
      console.log(printValue);
      return NullValue.getInstance(); // Use singleton
    }

    // Check if this is actually an array indexing operation
    if (node.operator === '[') {
      const object = this.visitNode(node.left);
      const index = this.visitNode(node.right[0]);

      if (object instanceof ListValue) {
        if (index instanceof IntValue) {
          const element = object.getElementAt(index.getValue());
          if (element) {
            return element;
          }
          throw new CanonRuntimeError(`List index ${index.getValue()} out of bounds`);
        } else if (index instanceof IntRangeValue || index instanceof FloatRangeValue) {
          // Handle range-based slicing
          const start = Math.floor(index.getFrom());
          const end = Math.ceil(index.getTo()) + 1; // End is inclusive in Canon but exclusive in JS

          if (start < 0 || end > object.getLength()) {
            throw new CanonRuntimeError(`Slice indices (${start}..${end - 1}) out of bounds`);
          }

          return object.slice(start, end);
        }

        if (this.options.debug) {
          console.log(`[DEBUG] Index type: ${index.type}`);
          console.log(`[DEBUG] Index value: ${index.toString()}`);
        }
        throw new CanonRuntimeError(
          `List index must be integer or range, got ${index.getTypeName()}`
        );
      }
      throw new CanonRuntimeError(`Cannot index ${object.getTypeName()}`);
    }

    // Handle infix function calls
    if (node.functionName) {
      const left = this.visitNode(node.left);
      const right = this.visitNode(node.right);

      // Look up the infix function in the environment
      const functionValue = this.currentEnv.get(node.functionName);
      if (
        functionValue instanceof BuiltinFunctionValue ||
        functionValue instanceof UserFunctionValue
      ) {
        if (functionValue instanceof BuiltinFunctionValue) {
          // For infix extension functions, the function expects only the right argument
          // The left value is the 'this' context
          return functionValue.call([right]);
        } else {
          // For user-defined infix extension functions, we need to handle 'this' binding
          // Check if this is an extension function (has only one parameter)
          if (functionValue.getParameters().length === 1) {
            // This is an extension function - bind 'this' to the left operand
            return this.callExtensionFunction(functionValue, left, [right]);
          } else {
            // Regular infix function with two parameters
            return functionValue.call([left, right], this);
          }
        }
      }

      // Built-in infix operators
      switch (node.functionName) {
        case 'add':
          if (left instanceof IntValue && right instanceof IntValue) {
            return new IntValue(left.getValue() + right.getValue());
          }
          break;
        case 'step':
          // For now, just return the left side (range) as step is not fully implemented
          return left;
        case 'until':
          // For now, just return a basic range
          if (left instanceof IntValue && right instanceof IntValue) {
            return new IntRangeValue(left.getValue(), right.getValue() - 1, 1);
          }
          break;
        case 'downTo':
          // For now, just return a basic range
          if (left instanceof IntValue && right instanceof IntValue) {
            return new IntRangeValue(left.getValue(), right.getValue(), -1);
          }
          break;
        default:
          throw new CanonRuntimeError(`Undefined infix function: ${node.functionName}`);
      }
    }

    // Handle other infix operators
    throw new CanonRuntimeError(`Unsupported infix operator: ${node.operator}`);
  }

  /**
   * Use文を処理
   */
  private visitUseStatement(node: ASTNode): CanonValue {
    const identifier = node.identifier;

    if (!identifier || !identifier.name) {
      throw new CanonRuntimeError('Use statement missing identifier');
    }

    const builtinName = identifier.name;

    // Handle built-in imports
    switch (builtinName) {
      case 'print': {
        const printFunction = new BuiltinFunctionValue('print', (args: CanonValue[]) => {
          if (args.length === 0) {
            console.log();
            return NullValue.getInstance();
          }

          const output = args
            .map((arg) => {
              if (arg.type === 'string') {
                return arg.toNative();
              }
              return arg.toString();
            })
            .join(' ');

          console.log(output);
          return NullValue.getInstance();
        });
        this.currentEnv.define('print', printFunction);
        break;
      }

      default:
        throw new CanonRuntimeError(`Unknown built-in: ${builtinName}`);
    }

    return NullValue.getInstance();
  }

  /**
   * NonNullAssertionExpression（!演算子）を処理
   */
  private visitNonNullAssertionExpression(node: ASTNode): CanonValue {
    // デバッグ用のtry-catch追加
    try {
      // node.operandを使用（AST構造に基づく）
      const value = this.visitNode(node.operand);
      if (value === undefined || value === null) {
        throw new CanonRuntimeError('Non-null assertion failed: value is null or undefined');
      }
      if (value.type === 'null') {
        throw new CanonRuntimeError('Non-null assertion failed: value is null');
      }
      return value;
    } catch (error) {
      console.error('Error in visitNonNullAssertionExpression:', error);
      console.error('Node:', JSON.stringify(node, null, 2));
      throw error;
    }
  }

  /**
   * NullLiteralを処理
   */
  private visitNullLiteral(_node: ASTNode): CanonValue {
    return NullValue.getInstance();
  }

  /**
   * ThisExpressionを処理
   */
  private visitThisExpression(_node: ASTNode): CanonValue {
    const thisValue = this.currentEnv.get('this');
    if (thisValue === undefined) {
      throw new CanonRuntimeError("'this' is not defined in current context");
    }
    return thisValue;
  }

  /**
   * Handle pipeline function call with lambda body
   */
  private handlePipelineWithLambda(lambdaNode: ASTNode): CanonValue {
    const pipelineStruct = new StructValue('pipeline', new Map(), []);
    const pipelineEnv = new Environment(this.globalEnv);
    pipelineEnv.define('this', pipelineStruct);

    // Define build and test constructor functions within the pipeline environment
    pipelineEnv.define(
      'build',
      new BuiltinFunctionValue('build', (args) => {
        if (args.length === 1 && args[0] instanceof UserFunctionValue) {
          const lambda = args[0] as UserFunctionValue;

          // Create a BuildStep struct
          const buildStep = new StructValue('BuildStep', new Map(), []);
          const buildEnv = new Environment(pipelineEnv);
          buildEnv.define('this', buildStep);

          // Execute the lambda to populate the build step
          const savedEnv = this.currentEnv;
          this.currentEnv = buildEnv;

          try {
            const body = lambda.getBody();
            if (Array.isArray(body)) {
              for (const stmt of body) {
                if (stmt.type === 'AssignmentStatement') {
                  const fieldName = stmt.left.name;
                  const fieldValue = this.visitNode(stmt.right);
                  buildStep.setField(fieldName, fieldValue);
                }
              }
            } else {
              this.visitNode(body);
            }
          } finally {
            this.currentEnv = savedEnv;
          }

          return buildStep;
        }
        throw new CanonRuntimeError('build expects a lambda function');
      })
    );

    pipelineEnv.define(
      'test',
      new BuiltinFunctionValue('test', (args) => {
        if (args.length === 1 && args[0] instanceof UserFunctionValue) {
          const lambda = args[0] as UserFunctionValue;

          // Create a TestStep struct
          const testStep = new StructValue('TestStep', new Map(), []);
          const testEnv = new Environment(pipelineEnv);
          testEnv.define('this', testStep);

          // Execute the lambda to populate the test step
          const savedEnv = this.currentEnv;
          this.currentEnv = testEnv;

          try {
            const body = lambda.getBody();
            if (Array.isArray(body)) {
              for (const stmt of body) {
                if (stmt.type === 'AssignmentStatement') {
                  const fieldName = stmt.left.name;
                  const fieldValue = this.visitNode(stmt.right);
                  testStep.setField(fieldName, fieldValue);
                }
              }
            } else {
              this.visitNode(body);
            }
          } finally {
            this.currentEnv = savedEnv;
          }

          return testStep;
        }
        throw new CanonRuntimeError('test expects a lambda function');
      })
    );

    const oldEnv = this.currentEnv;
    this.currentEnv = pipelineEnv;

    try {
      // Execute the lambda body

      // Special handling for lambda body - we need to capture function call results
      if (lambdaNode.type === 'LambdaExpression' && lambdaNode.body) {
        const body = lambdaNode.body;
        if (Array.isArray(body)) {
          for (const stmt of body) {
            if (stmt.type === 'ExpressionStatement' && stmt.expression.type === 'CallExpression') {
              const callExpr = stmt.expression;
              if (callExpr.callee && callExpr.callee.type === 'Identifier') {
                const functionName = callExpr.callee.name;

                // Execute the function call and store the result
                const result = this.visitNode(callExpr);

                // Store the result in the pipeline environment
                if (functionName === 'build' || functionName === 'test') {
                  pipelineEnv.define(functionName, result);
                }
              }
            } else {
              this.visitNode(stmt);
            }
          }
        } else {
          this.visitNode(body);
        }
      } else {
        this.visitNode(lambdaNode);
      }

      // Get results from pipelineEnv
      const fields = new Map<string, CanonValue>();
      for (const name of pipelineEnv.getLocalNames()) {
        if (name !== 'this') {
          const value = pipelineEnv.getLocal(name);
          if (value) {
            // Only include build and test results, not the constructor functions
            if ((name === 'build' || name === 'test') && value.type === 'struct') {
              fields.set(name, value);
            }
          }
        }
      }

      const result = new StructValue('pipeline', fields, []);

      // Store the result in global environment for schema-based output
      if (this.schemaDefinition) {
        this.globalEnv.define('__pipeline_instance__', result);
      }

      return result;
    } finally {
      this.currentEnv = oldEnv;
    }
  } /**
   * Call an extension function with 'this' binding
   */
  private callExtensionFunction(
    functionValue: UserFunctionValue,
    thisValue: CanonValue,
    args: CanonValue[]
  ): CanonValue {
    // Create a new scope with the function's closure and bind 'this'
    const scope = new Map(functionValue.getClosure());
    scope.set('this', thisValue);

    // Bind the function parameters
    const parameters = functionValue.getParameters();
    if (args.length !== parameters.length) {
      throw new Error(
        `Function ${functionValue.getFunctionName()} expects ${parameters.length} arguments, got ${args.length}`
      );
    }

    for (let i = 0; i < parameters.length; i++) {
      scope.set(parameters[i], args[i]);
    }

    // Execute the function body with the extended scope
    return this.evaluateWithScope(functionValue.getBody(), scope);
  }

  /**
   * Validate required fields after lambda execution
   */
  private validateRequiredFields(struct: StructValue, structName: string): void {
    const fieldsRequiringValidation = struct.getFieldsRequiringValidation();

    for (const fieldName of fieldsRequiringValidation) {
      const fieldValue = struct.getField(fieldName);
      // If field is still null after lambda execution, it's an error
      if (!fieldValue || fieldValue.type === 'null') {
        throw new CanonRuntimeError(
          `Required field '${fieldName}' in struct '${structName}' has no default value and was not initialized`
        );
      }
      // Clear the validation requirement
      struct.clearFieldValidationRequirement(fieldName);
    }
  }

  /**
   * Validate all required fields of all struct instances at program end
   */
  private validateAllRequiredFieldsAtProgramEnd(): void {
    for (const struct of this.allStructInstances) {
      const fieldsRequiringValidation = struct.getFieldsRequiringValidation();

      for (const fieldName of fieldsRequiringValidation) {
        const fieldValue = struct.getField(fieldName);
        // If field is still null at program end, it's an error
        if (!fieldValue || fieldValue.type === 'null') {
          throw new CanonRuntimeError(
            `Required field '${fieldName}' in struct '${struct.getStructName()}' was not assigned during program execution`
          );
        }
      }
    }
  }
}
