/**
 * Canon言語のプリミティブ値クラス
 */

import { CanonValue, PrimitiveValue } from './CanonValue';

/**
 * 整数値
 */
export class IntValue extends PrimitiveValue {
  readonly type = 'int';

  constructor(value: number) {
    if (!Number.isInteger(value)) {
      throw new Error(`IntValue requires integer, got ${value}`);
    }
    super(value);
  }

  toString(): string {
    return this.value.toString();
  }

  toBool(): boolean {
    return this.value !== 0;
  }

  equals(other: CanonValue): boolean {
    return other instanceof IntValue && other.value === this.value;
  }

  clone(): CanonValue {
    return new IntValue(this.value);
  }

  // 算術演算
  add(other: IntValue | FloatValue): IntValue | FloatValue {
    if (other instanceof FloatValue) {
      return new FloatValue(this.value + other.getValue());
    }
    return new IntValue(this.value + other.getValue());
  }

  subtract(other: IntValue | FloatValue): IntValue | FloatValue {
    if (other instanceof FloatValue) {
      return new FloatValue(this.value - other.getValue());
    }
    return new IntValue(this.value - other.getValue());
  }

  multiply(other: IntValue | FloatValue): IntValue | FloatValue {
    if (other instanceof FloatValue) {
      return new FloatValue(this.value * other.getValue());
    }
    return new IntValue(this.value * other.getValue());
  }

  divide(other: IntValue | FloatValue): FloatValue {
    const otherVal = other.getValue();
    if (otherVal === 0) {
      throw new Error('Division by zero');
    }
    return new FloatValue(this.value / otherVal);
  }

  modulo(other: IntValue | FloatValue): IntValue | FloatValue {
    const otherVal = other.getValue();
    if (otherVal === 0) {
      throw new Error('Division by zero');
    }
    if (other instanceof FloatValue) {
      return new FloatValue(this.value % otherVal);
    }
    return new IntValue(this.value % otherVal);
  }

  power(other: IntValue | FloatValue): IntValue | FloatValue {
    const result = Math.pow(this.value, other.getValue());
    if (other instanceof FloatValue || !Number.isInteger(result)) {
      return new FloatValue(result);
    }
    return new IntValue(result);
  }

  // 比較演算
  lessThan(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value < other.getValue());
  }

  lessThanOrEqual(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value <= other.getValue());
  }

  greaterThan(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value > other.getValue());
  }

  greaterThanOrEqual(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value >= other.getValue());
  }
}

/**
 * 浮動小数点値
 */
export class FloatValue extends PrimitiveValue {
  readonly type = 'float';

  constructor(value: number) {
    super(value);
  }

  toString(): string {
    return this.value.toString();
  }

  toBool(): boolean {
    return this.value !== 0.0;
  }

  equals(other: CanonValue): boolean {
    return other instanceof FloatValue && other.value === this.value;
  }

  clone(): CanonValue {
    return new FloatValue(this.value);
  }

  // 算術演算
  add(other: IntValue | FloatValue): FloatValue {
    return new FloatValue(this.value + other.getValue());
  }

  subtract(other: IntValue | FloatValue): FloatValue {
    return new FloatValue(this.value - other.getValue());
  }

  multiply(other: IntValue | FloatValue): FloatValue {
    return new FloatValue(this.value * other.getValue());
  }

  divide(other: IntValue | FloatValue): FloatValue {
    const otherVal = other.getValue();
    if (otherVal === 0) {
      throw new Error('Division by zero');
    }
    return new FloatValue(this.value / otherVal);
  }

  modulo(other: IntValue | FloatValue): FloatValue {
    const otherVal = other.getValue();
    if (otherVal === 0) {
      throw new Error('Division by zero');
    }
    return new FloatValue(this.value % otherVal);
  }

  power(other: IntValue | FloatValue): FloatValue {
    return new FloatValue(Math.pow(this.value, other.getValue()));
  }

  // 比較演算
  lessThan(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value < other.getValue());
  }

  lessThanOrEqual(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value <= other.getValue());
  }

  greaterThan(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value > other.getValue());
  }

  greaterThanOrEqual(other: IntValue | FloatValue): BoolValue {
    return new BoolValue(this.value >= other.getValue());
  }
}

/**
 * 文字列値
 */
export class StringValue extends PrimitiveValue {
  readonly type = 'string';

  constructor(value: string) {
    super(value);
  }

  toString(): string {
    return this.value;
  }

  toBool(): boolean {
    return this.value.length > 0;
  }

  equals(other: CanonValue): boolean {
    return other instanceof StringValue && other.value === this.value;
  }

  clone(): CanonValue {
    return new StringValue(this.value);
  }

  // 文字列連結
  concat(other: StringValue): StringValue {
    return new StringValue(this.value + other.getValue());
  }

  // 文字列比較
  lessThan(other: StringValue): BoolValue {
    return new BoolValue(this.value < other.getValue());
  }

  lessThanOrEqual(other: StringValue): BoolValue {
    return new BoolValue(this.value <= other.getValue());
  }

  greaterThan(other: StringValue): BoolValue {
    return new BoolValue(this.value > other.getValue());
  }

  greaterThanOrEqual(other: StringValue): BoolValue {
    return new BoolValue(this.value >= other.getValue());
  }
}

/**
 * 真偽値
 */
export class BoolValue extends PrimitiveValue {
  readonly type = 'bool';

  constructor(value: boolean) {
    super(value);
  }

  toString(): string {
    return this.value.toString();
  }

  toBool(): boolean {
    return this.value;
  }

  equals(other: CanonValue): boolean {
    return other instanceof BoolValue && other.value === this.value;
  }

  clone(): CanonValue {
    return new BoolValue(this.value);
  }

  // 論理演算
  and(other: BoolValue): BoolValue {
    return new BoolValue(this.value && other.getValue());
  }

  or(other: BoolValue): BoolValue {
    return new BoolValue(this.value || other.getValue());
  }

  not(): BoolValue {
    return new BoolValue(!this.value);
  }
}
