/**
 * Canon言語の関数値クラス
 */

import { CanonValue } from './CanonValue';
import { ASTNode } from '../../parser';

export interface CanonFunction {
  name: string;
  parameters: string[];
  call(args: CanonValue[], context: any): CanonValue;
}

/**
 * ユーザー定義関数値
 */
export class UserFunctionValue extends CanonValue {
  readonly type = 'function';

  constructor(
    private readonly functionName: string,
    private readonly parameters: string[],
    private readonly body: ASTNode,
    private readonly closure: Map<string, CanonValue>
  ) {
    super();
  }

  toString(): string {
    return `function ${this.functionName}(${this.parameters.join(', ')})`;
  }

  toNative(): any {
    return {
      type: 'function',
      name: this.functionName,
      parameters: this.parameters,
    };
  }

  toBool(): boolean {
    return true;
  }

  equals(other: CanonValue): boolean {
    return other instanceof UserFunctionValue && other.functionName === this.functionName;
  }

  clone(): CanonValue {
    const clonedClosure = new Map<string, CanonValue>();
    for (const [key, value] of this.closure) {
      clonedClosure.set(key, value.clone());
    }
    return new UserFunctionValue(this.functionName, [...this.parameters], this.body, clonedClosure);
  }

  // 関数の呼び出し
  call(args: CanonValue[], interpreter: any): CanonValue {
    if (args.length !== this.parameters.length) {
      throw new Error(
        `Function ${this.functionName} expects ${this.parameters.length} arguments, got ${args.length}`
      );
    }

    // 新しいスコープを作成し、パラメータをバインド
    const scope = new Map(this.closure);
    for (let i = 0; i < this.parameters.length; i++) {
      scope.set(this.parameters[i], args[i]);
    }

    // 関数本体を実行
    return interpreter.evaluateWithScope(this.body, scope);
  }

  getFunctionName(): string {
    return this.functionName;
  }

  getParameters(): string[] {
    return [...this.parameters];
  }

  getBody(): ASTNode {
    return this.body;
  }

  getClosure(): Map<string, CanonValue> {
    return new Map(this.closure);
  }
}

/**
 * 組み込み関数値
 */
export class BuiltinFunctionValue extends CanonValue {
  readonly type = 'builtin_function';

  constructor(
    private readonly functionName: string,
    private readonly implementation: (args: CanonValue[]) => CanonValue,
    private readonly parameterCount?: number
  ) {
    super();
  }

  toString(): string {
    return `builtin function ${this.functionName}`;
  }

  toNative(): any {
    return {
      type: 'builtin_function',
      name: this.functionName,
    };
  }

  toBool(): boolean {
    return true;
  }

  equals(other: CanonValue): boolean {
    return other instanceof BuiltinFunctionValue && other.functionName === this.functionName;
  }

  clone(): CanonValue {
    return new BuiltinFunctionValue(this.functionName, this.implementation, this.parameterCount);
  }

  // 組み込み関数の呼び出し
  call(args: CanonValue[]): CanonValue {
    if (this.parameterCount !== undefined && args.length !== this.parameterCount) {
      throw new Error(
        `Builtin function ${this.functionName} expects ${this.parameterCount} arguments, got ${args.length}`
      );
    }

    return this.implementation(args);
  }

  getFunctionName(): string {
    return this.functionName;
  }
}
