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
}

export class Interpreter {
  private globalEnv: Environment;
  private currentEnv: Environment;
  private options: InterpreterOptions;
  private schemaDefinition: StructValue | null = null;

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
  }

  /**
   * ASTを実行して結果を返す
   */
  evaluate(node: ASTNode): CanonValue {
    try {
      return this.visitNode(node);
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
      case 'UseStatement':
        return this.visitUseStatement(node);
      case 'SchemaImport':
        return this.visitSchemaImport(node);
      case 'StructDeclaration':
        return this.visitStructDeclaration(node);
      case 'VariableDeclaration':
        return this.visitVariableDeclaration(node);
      case 'FunctionDeclaration':
        return this.visitFunctionDeclaration(node);
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
        return this.visitRangeExpression(node);
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
      // First, process all variable declarations to ensure they're available
      for (const stmt of node.body) {
        if (stmt.type === 'VariableDeclaration') {
          this.visitNode(stmt);
        }
      }

      // Then process all other statements
      for (const stmt of node.body) {
        if (stmt.type !== 'VariableDeclaration') {
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
        // スキーマ定義から構造体を作成
        this.schemaDefinition = this.createSchemaStruct(schemaEnv);
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

    // Get the absolute path of the schema file
    const inputFilePath = this.options.inputFilePath || '';
    const inputDir = path.dirname(inputFilePath);
    const absoluteSchemaPath = path.resolve(inputDir, schemaPath);

    try {
      // Parse and analyze the schema file
      const schemaAst = parseCanonFile(absoluteSchemaPath);

      // Interpret the schema file to get schema definition
      const schemaInterpreter = new Interpreter({
        ...this.options,
        inputFilePath: absoluteSchemaPath,
      });

      schemaInterpreter.execute(schemaAst);

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

    // 構造体は型として登録（実際のインスタンス化は別途）
    const structConstructor = new BuiltinFunctionValue(
      structName,
      (args: CanonValue[]): CanonValue => {
        // 構造体リテラルの場合、フィールドマップとして渡される
        if (args.length === 1 && args[0] instanceof StructValue) {
          return new StructValue(structName, args[0].getFields() as Map<string, CanonValue>);
        }
        return new StructValue(structName, new Map());
      }
    );

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

    // Special handling for struct instantiation
    if (functionNode.type === 'Identifier') {
      const structName = functionNode.name;
      // Lookup struct definition (not needed for now)

      // Check if this is a struct instantiation
      if (args.length === 1 && args[0] instanceof UserFunctionValue) {
        // The argument is a lambda function that configures the struct
        const lambda = args[0] as UserFunctionValue;

        // Create an empty struct with the given name
        const fields = new Map<string, CanonValue>();
        const struct = new StructValue(structName, fields);

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

        return struct;
      }
    }

    // Regular function calls
    if (functionValue instanceof BuiltinFunctionValue) {
      return functionValue.call(args);
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
    return new StructValue('', fields);
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
    const varName = node.name?.name;
    if (!varName) {
      throw new CanonRuntimeError('Assignment missing variable name');
    }

    const value = this.visitNode(node.value);
    if (!this.currentEnv.set(varName, value)) {
      // 変数が存在しない場合は新しく定義
      this.currentEnv.define(varName, value);
    }
    return value;
  }

  /**
   * 式文を処理
   */
  private visitExpressionStatement(node: ASTNode): CanonValue {
    return this.visitNode(node.expression);
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
    return new StructValue('Schema', fields);
  }

  /**
   * 最終結果をJSONで出力
   */
  getResultAsJSON(): any {
    if (!this.schemaDefinition) {
      throw new CanonRuntimeError('No schema definition found');
    }
    return this.schemaDefinition.toNative();
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
}
