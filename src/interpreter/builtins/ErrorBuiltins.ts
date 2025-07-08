/**
 * Canon言語のエラー関連組み込み関数
 */

import { CanonValue } from '../values/CanonValue';
import { StringValue } from '../values/PrimitiveValues';
import { BuiltinFunctionValue } from '../values/FunctionValue';

/**
 * Canon実行時エラークラス
 */
export class CanonRuntimeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'CanonRuntimeError';
  }
}

/**
 * error関数の実装
 * エラーメッセージを受け取って実行時エラーを投げる
 */
export function createErrorFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'error',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 1) {
        throw new CanonRuntimeError('error function expects exactly 1 argument');
      }

      const messageArg = args[0];
      if (!(messageArg instanceof StringValue)) {
        throw new CanonRuntimeError('error function expects a string argument');
      }

      throw new CanonRuntimeError(messageArg.getValue());
    },
    1
  );
}
