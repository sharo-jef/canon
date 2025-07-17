/**
 * Canon言語の実行環境（スコープ管理）
 */

import { CanonValue } from './values/CanonValue';

export class Environment {
  private readonly bindings: Map<string, CanonValue>;
  private readonly parent: Environment | null;

  constructor(parent: Environment | null = null) {
    this.bindings = new Map();
    this.parent = parent;
  }

  /**
   * 変数を定義
   */
  define(name: string, value: CanonValue): void {
    this.bindings.set(name, value);
  }

  /**
   * 変数を取得（スコープチェーンを辿る）
   */
  get(name: string): CanonValue | undefined {
    const value = this.bindings.get(name);
    if (value !== undefined) {
      return value;
    }

    if (this.parent) {
      return this.parent.get(name);
    }

    return undefined;
  }

  /**
   * 変数が定義されているかチェック
   */
  has(name: string): boolean {
    return this.bindings.has(name) || (this.parent?.has(name) ?? false);
  }

  /**
   * 変数を更新（既存の変数のみ）
   */
  set(name: string, value: CanonValue): boolean {
    if (this.bindings.has(name)) {
      this.bindings.set(name, value);
      return true;
    }

    if (this.parent) {
      return this.parent.set(name, value);
    }

    return false;
  }

  /**
   * 現在のスコープの変数のみを取得
   */
  getLocal(name: string): CanonValue | undefined {
    return this.bindings.get(name);
  }

  /**
   * 現在のスコープに変数が定義されているかチェック
   */
  hasLocal(name: string): boolean {
    return this.bindings.has(name);
  }

  /**
   * 新しいスコープを作成（現在の環境を親とする）
   */
  extend(): Environment {
    return new Environment(this);
  }

  /**
   * 親スコープを取得
   */
  getParent(): Environment | null {
    return this.parent;
  }

  /**
   * 現在のスコープのすべての変数名を取得
   */
  getLocalNames(): string[] {
    return Array.from(this.bindings.keys());
  }

  /**
   * すべてのスコープの変数名を取得（重複除去）
   */
  getAllNames(): string[] {
    const names = new Set(this.bindings.keys());
    if (this.parent) {
      this.parent.getAllNames().forEach((name) => names.add(name));
    }
    return Array.from(names);
  }

  /**
   * 環境の複製を作成（浅いコピー）
   */
  clone(): Environment {
    const cloned = new Environment(this.parent);
    for (const [name, value] of this.bindings) {
      cloned.define(name, value);
    }
    return cloned;
  }

  /**
   * デバッグ用: 環境の内容を文字列で表示
   */
  toString(): string {
    const localBindings = Array.from(this.bindings.entries())
      .map(([name, value]) => `${name}: ${value.toString()}`)
      .join(', ');

    let result = `[${localBindings}]`;
    if (this.parent) {
      result += ` -> ${this.parent.toString()}`;
    }
    return result;
  }
}
