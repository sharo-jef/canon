/**
 * Canon言語の構造体値クラス
 */

import { CanonValue } from './CanonValue';

export class StructValue extends CanonValue {
  readonly type = 'struct';

  constructor(
    private readonly structName: string,
    private readonly fields: Map<string, CanonValue>
  ) {
    super();
  }

  toString(): string {
    const fieldEntries = Array.from(this.fields.entries());
    const fieldStrings = fieldEntries.map(([key, value]) => `${key}: ${value.toString()}`);
    return `${this.structName} { ${fieldStrings.join(', ')} }`;
  }

  toNative(): Record<string, any> {
    const result: Record<string, any> = {};
    for (const [key, value] of this.fields) {
      try {
        result[key] = value.toNative();
      } catch (error) {
        console.error(`Error converting field '${key}' in struct '${this.structName}':`, error);
        result[key] = `[Error: ${error}]`;
      }
    }
    return result;
  }

  toBool(): boolean {
    return this.fields.size > 0;
  }

  equals(other: CanonValue): boolean {
    if (!(other instanceof StructValue)) {
      return false;
    }
    if (this.structName !== other.structName) {
      return false;
    }
    if (this.fields.size !== other.fields.size) {
      return false;
    }
    for (const [key, value] of this.fields) {
      const otherValue = other.fields.get(key);
      if (!otherValue || !value.equals(otherValue)) {
        return false;
      }
    }
    return true;
  }

  clone(): CanonValue {
    const clonedFields = new Map<string, CanonValue>();
    for (const [key, value] of this.fields) {
      clonedFields.set(key, value.clone());
    }
    return new StructValue(this.structName, clonedFields);
  }

  // 構造体操作メソッド
  getStructName(): string {
    return this.structName;
  }

  getField(name: string): CanonValue | undefined {
    return this.fields.get(name);
  }

  /**
   * すべてのフィールドを取得
   */
  getFields(): Map<string, CanonValue> {
    return this.fields;
  }

  /**
   * フィールド値を設定
   */
  setField(name: string, value: CanonValue): void {
    this.fields.set(name, value);
  }

  /**
   * 構造体名を取得
   */
  getFieldNames(): string[] {
    return Array.from(this.fields.keys());
  }

  // 新しいフィールドを追加した構造体を返す
  withField(name: string, value: CanonValue): StructValue {
    const newFields = new Map(this.fields);
    newFields.set(name, value);
    return new StructValue(this.structName, newFields);
  }

  // フィールドを削除した構造体を返す
  withoutField(name: string): StructValue {
    const newFields = new Map(this.fields);
    newFields.delete(name);
    return new StructValue(this.structName, newFields);
  }
}
