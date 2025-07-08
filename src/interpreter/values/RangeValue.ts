/**
 * Canon言語のレンジ値クラス
 */

import { CanonValue } from './CanonValue';
import { IntValue, FloatValue } from './PrimitiveValues';

/**
 * 整数レンジ値
 */
export class IntRangeValue extends CanonValue {
  readonly type = 'IntRange';

  constructor(
    private readonly from: number,
    private readonly to: number,
    private readonly step: number = 1
  ) {
    super();
    if (!Number.isInteger(from) || !Number.isInteger(to) || !Number.isInteger(step)) {
      throw new Error('IntRange requires integer values');
    }
    if (step === 0) {
      throw new Error('IntRange step cannot be zero');
    }
  }

  toString(): string {
    if (this.step === 1) {
      return `${this.from}..${this.to}`;
    } else if (this.step === -1) {
      return `${this.from} downTo ${this.to}`;
    } else {
      return `${this.from}..${this.to} step ${this.step}`;
    }
  }

  toNative(): { from: number; to: number; step: number } {
    return {
      from: this.from,
      to: this.to,
      step: this.step,
    };
  }

  // レンジの開始値を取得
  getStart(): number {
    return this.from;
  }

  // レンジの終了値を取得
  getEnd(): number {
    return this.to;
  }

  // レンジのステップ値を取得
  getStep(): number {
    return this.step;
  }

  toBool(): boolean {
    return this.from !== this.to;
  }

  equals(other: CanonValue): boolean {
    return (
      other instanceof IntRangeValue &&
      other.from === this.from &&
      other.to === this.to &&
      other.step === this.step
    );
  }

  clone(): CanonValue {
    return new IntRangeValue(this.from, this.to, this.step);
  }

  // レンジ操作メソッド
  getFrom(): number {
    return this.from;
  }

  getTo(): number {
    return this.to;
  }

  getStep(): number {
    return this.step;
  }

  // stepを設定した新しいレンジを返す
  withStep(step: number): IntRangeValue {
    if (!Number.isInteger(step)) {
      throw new Error('IntRange step must be integer');
    }
    if (step === 0) {
      throw new Error('IntRange step cannot be zero');
    }

    // ステップの方向をレンジの方向に合わせる
    const rangeDirection = this.to > this.from ? 1 : -1;
    const stepDirection = step > 0 ? 1 : -1;

    const correctedStep = rangeDirection !== stepDirection ? -step : step;

    return new IntRangeValue(this.from, this.to, correctedStep);
  }

  // レンジを配列に変換
  toArray(): IntValue[] {
    const result: IntValue[] = [];
    if (this.step > 0) {
      for (let i = this.from; i <= this.to; i += this.step) {
        result.push(new IntValue(i));
      }
    } else {
      for (let i = this.from; i >= this.to; i += this.step) {
        result.push(new IntValue(i));
      }
    }
    return result;
  }
}

/**
 * 浮動小数点レンジ値
 */
export class FloatRangeValue extends CanonValue {
  readonly type = 'FloatRange';

  constructor(
    private readonly from: number,
    private readonly to: number,
    private readonly step: number = 1.0
  ) {
    super();
    if (step === 0) {
      throw new Error('FloatRange step cannot be zero');
    }
  }

  toString(): string {
    if (this.step === 1.0) {
      return `${this.from}..${this.to}`;
    } else if (this.step === -1.0) {
      return `${this.from} downTo ${this.to}`;
    } else {
      return `${this.from}..${this.to} step ${this.step}`;
    }
  }

  toNative(): { from: number; to: number; step: number } {
    return {
      from: this.from,
      to: this.to,
      step: this.step,
    };
  }

  toBool(): boolean {
    return this.from !== this.to;
  }

  equals(other: CanonValue): boolean {
    return (
      other instanceof FloatRangeValue &&
      other.from === this.from &&
      other.to === this.to &&
      other.step === this.step
    );
  }

  clone(): CanonValue {
    return new FloatRangeValue(this.from, this.to, this.step);
  }

  // レンジ操作メソッド
  getFrom(): number {
    return this.from;
  }

  getTo(): number {
    return this.to;
  }

  getStep(): number {
    return this.step;
  }

  // stepを設定した新しいレンジを返す
  withStep(step: number): FloatRangeValue {
    if (step === 0) {
      throw new Error('FloatRange step cannot be zero');
    }

    // ステップの方向をレンジの方向に合わせる
    const rangeDirection = this.to > this.from ? 1 : -1;
    const stepDirection = step > 0 ? 1 : -1;

    const correctedStep = rangeDirection !== stepDirection ? -step : step;

    return new FloatRangeValue(this.from, this.to, correctedStep);
  }

  // レンジを配列に変換
  toArray(): FloatValue[] {
    const result: FloatValue[] = [];
    const epsilon = 1e-10; // 浮動小数点の誤差対策

    if (this.step > 0) {
      for (let i = this.from; i <= this.to + epsilon; i += this.step) {
        if (i > this.to + epsilon) break;
        result.push(new FloatValue(i));
      }
    } else {
      for (let i = this.from; i >= this.to - epsilon; i += this.step) {
        if (i < this.to - epsilon) break;
        result.push(new FloatValue(i));
      }
    }
    return result;
  }
}
