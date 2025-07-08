/**
 * Canon言語のリスト値クラス
 */

import { CanonValue } from './CanonValue';

export class ListValue extends CanonValue {
  readonly type = 'list';

  constructor(private readonly elements: CanonValue[]) {
    super();
  }

  toString(): string {
    const elementStrings = this.elements.map((elem) => elem.toString());
    return `[${elementStrings.join(', ')}]`;
  }

  toNative(): any[] {
    return this.elements.map((elem) => elem.toNative());
  }

  toBool(): boolean {
    return this.elements.length > 0;
  }

  equals(other: CanonValue): boolean {
    if (!(other instanceof ListValue)) {
      return false;
    }
    if (this.elements.length !== other.elements.length) {
      return false;
    }
    return this.elements.every((elem, index) => elem.equals(other.elements[index]));
  }

  clone(): CanonValue {
    return new ListValue(this.elements.map((elem) => elem.clone()));
  }

  // リスト操作メソッド
  getElements(): readonly CanonValue[] {
    return this.elements;
  }

  getElementAt(index: number): CanonValue | undefined {
    if (index < 0 || index >= this.elements.length) {
      return undefined;
    }
    return this.elements[index];
  }

  getLength(): number {
    return this.elements.length;
  }

  slice(start?: number, end?: number): ListValue {
    const sliced = this.elements.slice(start, end);
    return new ListValue(sliced);
  }

  // リストに要素を追加した新しいリストを返す
  append(element: CanonValue): ListValue {
    return new ListValue([...this.elements, element]);
  }

  // リストを連結した新しいリストを返す
  concat(other: ListValue): ListValue {
    return new ListValue([...this.elements, ...other.elements]);
  }
}
