/**
 * シンボルテーブル - スコープ管理とシンボル解決のためのデータ構造
 */

export type SymbolType = 'variable' | 'function' | 'struct' | 'union' | 'parameter' | 'property';

export interface Symbol {
  name: string;
  type: SymbolType;
  dataType: string; // 'int', 'string', 'MyStruct', etc.
  isPrivate?: boolean;
  isOptional?: boolean;
  value?: any; // 定数値またはAST node
  location?: {
    line: number;
    column: number;
  };
}

export interface Scope {
  name: string;
  parent?: Scope;
  symbols: Map<string, Symbol>;
  children: Scope[];
}

/**
 * シンボルテーブル - ハッシュマップのスタックとして実装
 */
export class SymbolTable {
  private scopes: Scope[] = [];
  private globalScope: Scope;

  constructor() {
    this.globalScope = {
      name: 'global',
      symbols: new Map(),
      children: [],
    };
    this.scopes.push(this.globalScope);
    this.initializePredefinedSymbols();
  }

  /**
   * 新しいスコープを作成して現在のスコープにする
   */
  enterScope(name: string): void {
    const currentScope = this.getCurrentScope();
    const newScope: Scope = {
      name,
      parent: currentScope,
      symbols: new Map(),
      children: [],
    };
    currentScope.children.push(newScope);
    this.scopes.push(newScope);
  }

  /**
   * 現在のスコープを終了して親スコープに戻る
   */
  exitScope(): void {
    if (this.scopes.length <= 1) {
      throw new Error('Cannot exit global scope');
    }
    this.scopes.pop();
  }

  /**
   * 現在のスコープを取得
   */
  getCurrentScope(): Scope {
    return this.scopes[this.scopes.length - 1];
  }

  /**
   * グローバルスコープを取得
   */
  getGlobalScope(): Scope {
    return this.globalScope;
  }

  /**
   * シンボルを現在のスコープに定義
   */
  define(symbol: Symbol): void {
    const currentScope = this.getCurrentScope();
    if (currentScope.symbols.has(symbol.name)) {
      throw new Error(`Symbol '${symbol.name}' is already defined in scope '${currentScope.name}'`);
    }
    currentScope.symbols.set(symbol.name, symbol);
  }

  /**
   * シンボルを現在のスコープから上に向かって検索
   */
  resolve(name: string): Symbol | undefined {
    for (let i = this.scopes.length - 1; i >= 0; i--) {
      const symbol = this.scopes[i].symbols.get(name);
      if (symbol) {
        return symbol;
      }
    }
    return undefined;
  }

  /**
   * 現在のスコープ内でローカル検索を行い、見つからない場合はグローバルスコープから検索
   */
  resolveLocalFirst(name: string): Symbol | undefined {
    // まず現在のスコープで検索
    const currentSymbol = this.getCurrentScope().symbols.get(name);
    if (currentSymbol) {
      return currentSymbol;
    }

    // 見つからない場合はグローバルスコープのみ検索
    return this.globalScope.symbols.get(name);
  }

  /**
   * 指定されたスコープ内でのみシンボルを検索
   */
  resolveInScope(name: string, scope?: Scope): Symbol | undefined {
    const targetScope = scope || this.getCurrentScope();
    return targetScope.symbols.get(name);
  }

  /**
   * シンボルが定義されているかチェック
   */
  isDefined(name: string): boolean {
    return this.resolve(name) !== undefined;
  }

  /**
   * 現在のスコープ内でシンボルが定義されているかチェック
   */
  isDefinedInCurrentScope(name: string): boolean {
    return this.getCurrentScope().symbols.has(name);
  }

  /**
   * 全スコープの情報をデバッグ用に出力
   */
  debug(): void {
    console.log('=== Symbol Table Debug ===');
    this.debugScope(this.globalScope, 0);
  }

  private debugScope(scope: Scope, depth: number): void {
    const indent = '  '.repeat(depth);
    console.log(`${indent}Scope: ${scope.name}`);

    for (const [name, symbol] of scope.symbols) {
      console.log(`${indent}  ${name}: ${symbol.type} (${symbol.dataType})`);
    }

    for (const child of scope.children) {
      this.debugScope(child, depth + 1);
    }
  }

  /**
   * 事前定義されたシンボル（組み込み関数・型など）を初期化
   */
  private initializePredefinedSymbols(): void {
    // 基本型
    this.define({
      name: 'int',
      type: 'struct',
      dataType: 'int',
    });

    this.define({
      name: 'float',
      type: 'struct',
      dataType: 'float',
    });

    this.define({
      name: 'string',
      type: 'struct',
      dataType: 'string',
    });

    this.define({
      name: 'bool',
      type: 'struct',
      dataType: 'bool',
    });

    // 組み込み関数
    this.define({
      name: 'error',
      type: 'function',
      dataType: 'function',
    });

    // IntRange と FloatRange (PRELUDE.mdから)
    this.define({
      name: 'IntRange',
      type: 'struct',
      dataType: 'IntRange',
    });

    this.define({
      name: 'FloatRange',
      type: 'struct',
      dataType: 'FloatRange',
    });

    // math構造体の関数群
    const mathFunctions = [
      'max',
      'min',
      'abs',
      'pow',
      'sqrt',
      'round',
      'floor',
      'ceil',
      'deg',
      'rad',
      'sin',
      'cos',
      'tan',
      'asin',
      'acos',
      'atan',
      'atan2',
      'sinh',
      'cosh',
      'tanh',
      'exp',
      'log',
      'log10',
      'ldexp',
      'frexp',
      'modf',
      'fmod',
    ];

    for (const funcName of mathFunctions) {
      this.define({
        name: `math.${funcName}`,
        type: 'function',
        dataType: 'function',
      });
    }

    // math定数
    this.define({
      name: 'math.pi',
      type: 'variable',
      dataType: 'float',
      value: Math.PI,
    });

    // IntRange と FloatRange 用の infix 関数
    this.define({
      name: 'IntRange.step',
      type: 'function',
      dataType: 'function -> IntRange',
    });

    this.define({
      name: 'FloatRange.step',
      type: 'function',
      dataType: 'function -> FloatRange',
    });
  }
}
