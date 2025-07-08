/**
 * Canon言語の型変換関連組み込み関数
 */

import { CanonValue } from '../values/CanonValue';
import { IntValue, FloatValue, StringValue, BoolValue } from '../values/PrimitiveValues';
import { BuiltinFunctionValue } from '../values/FunctionValue';
import { CanonRuntimeError } from './ErrorBuiltins';

/**
 * int型変換関数の実装
 */
export function createIntFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'int',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 1) {
        throw new CanonRuntimeError('int function expects exactly 1 argument');
      }

      const value = args[0];

      if (value instanceof IntValue) {
        return value;
      } else if (value instanceof FloatValue) {
        return new IntValue(Math.trunc(value.getValue()));
      } else if (value instanceof StringValue) {
        const parsed = parseInt(value.getValue(), 10);
        if (isNaN(parsed)) {
          throw new CanonRuntimeError(`Cannot convert "${value.getValue()}" to int`);
        }
        return new IntValue(parsed);
      } else if (value instanceof BoolValue) {
        return new IntValue(value.getValue() ? 1 : 0);
      } else {
        throw new CanonRuntimeError(`Cannot convert ${value.getTypeName()} to int`);
      }
    },
    1
  );
}

/**
 * float型変換関数の実装
 */
export function createFloatFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'float',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 1) {
        throw new CanonRuntimeError('float function expects exactly 1 argument');
      }

      const value = args[0];

      if (value instanceof FloatValue) {
        return value;
      } else if (value instanceof IntValue) {
        return new FloatValue(value.getValue());
      } else if (value instanceof StringValue) {
        const parsed = parseFloat(value.getValue());
        if (isNaN(parsed)) {
          throw new CanonRuntimeError(`Cannot convert "${value.getValue()}" to float`);
        }
        return new FloatValue(parsed);
      } else if (value instanceof BoolValue) {
        return new FloatValue(value.getValue() ? 1.0 : 0.0);
      } else {
        throw new CanonRuntimeError(`Cannot convert ${value.getTypeName()} to float`);
      }
    },
    1
  );
}

/**
 * string型変換関数の実装
 */
export function createStringFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'string',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 1) {
        throw new CanonRuntimeError('string function expects exactly 1 argument');
      }

      const value = args[0];
      return new StringValue(value.toString());
    },
    1
  );
}

/**
 * bool型変換関数の実装
 */
export function createBoolFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue(
    'bool',
    (args: CanonValue[]): CanonValue => {
      if (args.length !== 1) {
        throw new CanonRuntimeError('bool function expects exactly 1 argument');
      }

      const value = args[0];
      return new BoolValue(value.toBool());
    },
    1
  );
}
