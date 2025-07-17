/**
 * Canon言語の数学関連組み込み関数とmath構造体
 */

import { CanonValue } from '../values/CanonValue';
import { IntValue, FloatValue } from '../values/PrimitiveValues';
import { StructValue } from '../values/StructValue';
import { ListValue } from '../values/ListValue';
import { BuiltinFunctionValue } from '../values/FunctionValue';
import { CanonRuntimeError } from './ErrorBuiltins';

/**
 * 数学関数のヘルパー
 */
function requireNumericArg(arg: CanonValue, functionName: string): number {
  if (arg instanceof IntValue || arg instanceof FloatValue) {
    return arg.getValue();
  }
  throw new CanonRuntimeError(
    `${functionName} requires numeric argument, got ${arg.getTypeName()}`
  );
}

function requireTwoNumericArgs(args: CanonValue[], functionName: string): [number, number] {
  if (args.length !== 2) {
    throw new CanonRuntimeError(`${functionName} expects exactly 2 arguments, got ${args.length}`);
  }
  return [requireNumericArg(args[0], functionName), requireNumericArg(args[1], functionName)];
}

/**
 * math構造体を作成
 */
export function createMathStruct(): StructValue {
  const mathFields = new Map<string, CanonValue>();

  // 数学定数
  mathFields.set('pi', new FloatValue(Math.PI));

  // 基本数学関数
  mathFields.set(
    'max',
    new BuiltinFunctionValue(
      'max',
      (args: CanonValue[]): CanonValue => {
        const [a, b] = requireTwoNumericArgs(args, 'max');
        const result = Math.max(a, b);
        return args[0] instanceof FloatValue || args[1] instanceof FloatValue
          ? new FloatValue(result)
          : new IntValue(result);
      },
      2
    )
  );

  mathFields.set(
    'min',
    new BuiltinFunctionValue(
      'min',
      (args: CanonValue[]): CanonValue => {
        const [a, b] = requireTwoNumericArgs(args, 'min');
        const result = Math.min(a, b);
        return args[0] instanceof FloatValue || args[1] instanceof FloatValue
          ? new FloatValue(result)
          : new IntValue(result);
      },
      2
    )
  );

  mathFields.set(
    'abs',
    new BuiltinFunctionValue(
      'abs',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('abs expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'abs');
        const result = Math.abs(value);
        return args[0] instanceof FloatValue ? new FloatValue(result) : new IntValue(result);
      },
      1
    )
  );

  mathFields.set(
    'pow',
    new BuiltinFunctionValue(
      'pow',
      (args: CanonValue[]): CanonValue => {
        const [base, exponent] = requireTwoNumericArgs(args, 'pow');
        const result = Math.pow(base, exponent);
        return Number.isInteger(result) &&
          args[0] instanceof IntValue &&
          args[1] instanceof IntValue
          ? new IntValue(result)
          : new FloatValue(result);
      },
      2
    )
  );

  mathFields.set(
    'sqrt',
    new BuiltinFunctionValue(
      'sqrt',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('sqrt expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'sqrt');
        if (value < 0) {
          throw new CanonRuntimeError('Cannot compute square root of negative number');
        }
        return new FloatValue(Math.sqrt(value));
      },
      1
    )
  );

  mathFields.set(
    'round',
    new BuiltinFunctionValue(
      'round',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('round expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'round');
        return new IntValue(Math.round(value));
      },
      1
    )
  );

  mathFields.set(
    'floor',
    new BuiltinFunctionValue(
      'floor',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('floor expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'floor');
        return new IntValue(Math.floor(value));
      },
      1
    )
  );

  mathFields.set(
    'ceil',
    new BuiltinFunctionValue(
      'ceil',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('ceil expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'ceil');
        return new IntValue(Math.ceil(value));
      },
      1
    )
  );

  // 角度変換
  mathFields.set(
    'deg',
    new BuiltinFunctionValue(
      'deg',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('deg expects exactly 1 argument');
        }
        const radians = requireNumericArg(args[0], 'deg');
        return new FloatValue((radians * 180.0) / Math.PI);
      },
      1
    )
  );

  mathFields.set(
    'rad',
    new BuiltinFunctionValue(
      'rad',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('rad expects exactly 1 argument');
        }
        const degrees = requireNumericArg(args[0], 'rad');
        return new FloatValue((degrees * Math.PI) / 180.0);
      },
      1
    )
  );

  // 三角関数
  mathFields.set(
    'sin',
    new BuiltinFunctionValue(
      'sin',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('sin expects exactly 1 argument');
        }
        const angle = requireNumericArg(args[0], 'sin');
        return new FloatValue(Math.sin(angle));
      },
      1
    )
  );

  mathFields.set(
    'cos',
    new BuiltinFunctionValue(
      'cos',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('cos expects exactly 1 argument');
        }
        const angle = requireNumericArg(args[0], 'cos');
        return new FloatValue(Math.cos(angle));
      },
      1
    )
  );

  mathFields.set(
    'tan',
    new BuiltinFunctionValue(
      'tan',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('tan expects exactly 1 argument');
        }
        const angle = requireNumericArg(args[0], 'tan');
        return new FloatValue(Math.tan(angle));
      },
      1
    )
  );

  mathFields.set(
    'asin',
    new BuiltinFunctionValue(
      'asin',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('asin expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'asin');
        return new FloatValue(Math.asin(value));
      },
      1
    )
  );

  mathFields.set(
    'acos',
    new BuiltinFunctionValue(
      'acos',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('acos expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'acos');
        return new FloatValue(Math.acos(value));
      },
      1
    )
  );

  mathFields.set(
    'atan',
    new BuiltinFunctionValue(
      'atan',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('atan expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'atan');
        return new FloatValue(Math.atan(value));
      },
      1
    )
  );

  mathFields.set(
    'atan2',
    new BuiltinFunctionValue(
      'atan2',
      (args: CanonValue[]): CanonValue => {
        const [y, x] = requireTwoNumericArgs(args, 'atan2');
        return new FloatValue(Math.atan2(y, x));
      },
      2
    )
  );

  // 双曲線関数
  mathFields.set(
    'sinh',
    new BuiltinFunctionValue(
      'sinh',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('sinh expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'sinh');
        return new FloatValue(Math.sinh(value));
      },
      1
    )
  );

  mathFields.set(
    'cosh',
    new BuiltinFunctionValue(
      'cosh',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('cosh expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'cosh');
        return new FloatValue(Math.cosh(value));
      },
      1
    )
  );

  mathFields.set(
    'tanh',
    new BuiltinFunctionValue(
      'tanh',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('tanh expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'tanh');
        return new FloatValue(Math.tanh(value));
      },
      1
    )
  );

  // 指数・対数関数
  mathFields.set(
    'exp',
    new BuiltinFunctionValue(
      'exp',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('exp expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'exp');
        return new FloatValue(Math.exp(value));
      },
      1
    )
  );

  mathFields.set(
    'log',
    new BuiltinFunctionValue(
      'log',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('log expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'log');
        if (value <= 0) {
          throw new CanonRuntimeError('Cannot compute logarithm of non-positive number');
        }
        return new FloatValue(Math.log(value));
      },
      1
    )
  );

  mathFields.set(
    'log10',
    new BuiltinFunctionValue(
      'log10',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('log10 expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'log10');
        if (value <= 0) {
          throw new CanonRuntimeError('Cannot compute logarithm base 10 of non-positive number');
        }
        return new FloatValue(Math.log10(value));
      },
      1
    )
  );

  // その他の数学関数
  mathFields.set(
    'ldexp',
    new BuiltinFunctionValue(
      'ldexp',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 2) {
          throw new CanonRuntimeError('ldexp expects exactly 2 arguments');
        }
        const value = requireNumericArg(args[0], 'ldexp');
        const exponent = requireNumericArg(args[1], 'ldexp');
        if (!Number.isInteger(exponent)) {
          throw new CanonRuntimeError('ldexp exponent must be integer');
        }
        return new FloatValue(value * Math.pow(2, exponent));
      },
      2
    )
  );

  mathFields.set(
    'frexp',
    new BuiltinFunctionValue(
      'frexp',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('frexp expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'frexp');
        if (value === 0.0) {
          return new ListValue([new FloatValue(0.0), new IntValue(0)]);
        }
        const exponent = Math.floor(Math.log2(Math.abs(value)));
        const mantissa = value / Math.pow(2, exponent);
        return new ListValue([new FloatValue(mantissa), new IntValue(exponent)]);
      },
      1
    )
  );

  mathFields.set(
    'modf',
    new BuiltinFunctionValue(
      'modf',
      (args: CanonValue[]): CanonValue => {
        if (args.length !== 1) {
          throw new CanonRuntimeError('modf expects exactly 1 argument');
        }
        const value = requireNumericArg(args[0], 'modf');
        const integerPart = value >= 0 ? Math.floor(value) : Math.ceil(value);
        const fractionalPart = value - integerPart;
        return new ListValue([new FloatValue(fractionalPart), new FloatValue(integerPart)]);
      },
      1
    )
  );

  mathFields.set(
    'fmod',
    new BuiltinFunctionValue(
      'fmod',
      (args: CanonValue[]): CanonValue => {
        const [x, y] = requireTwoNumericArgs(args, 'fmod');
        if (y === 0) {
          throw new CanonRuntimeError('Division by zero');
        }
        return new FloatValue(x - y * Math.floor(x / y));
      },
      2
    )
  );

  return new StructValue('math', mathFields);
}
