/**
 * Canon言語の標準ライブラリ関数
 */

import { CanonValue } from '../values/CanonValue';
import { StringValue, FloatValue } from '../values/PrimitiveValues';
import { NullValue } from '../values/CanonValue';
import { BuiltinFunctionValue } from '../values/FunctionValue';
import { CanonRuntimeError } from './ErrorBuiltins';

/**
 * getEnv関数の実装
 * 環境変数を取得する
 */
export function createGetEnvFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'getEnv',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 1) {
        throw new CanonRuntimeError('getEnv function expects exactly 1 argument');
      }

      const keyArg = args[0];
      if (!(keyArg instanceof StringValue)) {
        throw new CanonRuntimeError('getEnv function expects a string argument');
      }

      const envValue = process.env[keyArg.getValue()];
      return envValue ? new StringValue(envValue) : NullValue.getInstance();
    },
    1
  );
}

/**
 * random関数の実装
 * 0.0から1.0の間のランダムな浮動小数点数を返す
 */
export function createRandomFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'random',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 0) {
        throw new CanonRuntimeError('random function expects no arguments');
      }

      return new FloatValue(Math.random());
    },
    0
  );
}

/**
 * print関数の実装
 * 標準出力にメッセージを出力する
 */
export function createPrintFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'print',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 1) {
        throw new CanonRuntimeError('print function expects exactly 1 argument');
      }

      const message = args[0].toString();
      console.log(message);
      return NullValue.getInstance();
    },
    1
  );
}
