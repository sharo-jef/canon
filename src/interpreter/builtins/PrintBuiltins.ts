/**
 * Print関数の組み込み実装
 */

import { CanonValue, NullValue } from '../values/CanonValue';
import { BuiltinFunctionValue } from '../values/FunctionValue';

export function createPrintFunction(): BuiltinFunctionValue {
  return new BuiltinFunctionValue('print', (args: CanonValue[]) => {
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
}
