/**
 * Canon言語の実行時値の基底クラス
 */

export abstract class CanonValue {
  abstract readonly type: string;

  /**
   * 値の文字列表現を取得
   */
  abstract toString(): string;

  /**
   * 値のJavaScriptネイティブ表現を取得
   */
  abstract toNative(): any;

  /**
   * 値が真偽値として評価される場合の真偽値を取得
   */
  abstract toBool(): boolean;

  /**
   * 値の型名を取得
   */
  getTypeName(): string {
    return this.type;
  }

  /**
   * 値が指定された型と等しいかチェック
   */
  isType(typeName: string): boolean {
    return this.type === typeName;
  }

  /**
   * 値の等価性をチェック
   */
  abstract equals(other: CanonValue): boolean;

  /**
   * 値のディープコピーを作成
   */
  abstract clone(): CanonValue;
}

/**
 * プリミティブ値の基底クラス
 */
export abstract class PrimitiveValue extends CanonValue {
  protected constructor(protected readonly value: any) {
    super();
  }

  toNative(): any {
    return this.value;
  }

  getValue(): any {
    return this.value;
  }
}

/**
 * NULL値
 */
export class NullValue extends CanonValue {
  readonly type = 'null';

  private static instance: NullValue | undefined;

  private constructor() {
    super();
  }

  static getInstance(): NullValue {
    if (!NullValue.instance) {
      NullValue.instance = new NullValue();
    }
    return NullValue.instance;
  }

  toString(): string {
    return 'null';
  }

  toNative(): any {
    return null;
  }

  toBool(): boolean {
    return false;
  }

  equals(other: CanonValue): boolean {
    return other instanceof NullValue;
  }

  clone(): CanonValue {
    return NullValue.getInstance();
  }
}
