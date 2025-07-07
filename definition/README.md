# Stria rule

## 言語について

- 語源
  - `Structura`: 構造 (ラテン語)
  - `Via`: 道 (ラテン語)
  - `Strict`: 厳格な (英語)
- 意味
  - 厳格 `Strict` な構造 `Structura`
  - 明確な道 `Via` を提供
- 拡張子: `.stria`

## スキーマと構造

- データ構造は `struct` を使用して定義する
- 実際の設定ファイルとスキーマファイルは `#schema` ディレクティブで関連付ける
- プロパティは `name: type = value` の形式で宣言し、それは required である
  - optional なプロパティは `name?: type = value` の形式で宣言する
  - デフォルト値を設定しない場合は `name: type` もしくは `name?: type` の形式で宣言する
  - 繰り返し可能なプロパティは `repeated name: type[] { ... } = value` の形式で宣言する
    - `value` は省略可能 (デフォルト値は無いので、代入しなければエラーになる)
    - `repeated` の `{ ... }` は省略可能で、省略した場合は `name() {}` のように呼び出す
    - `repeated` の `{ ... }` は、通常のコードブロックとは異なり、 switch 文のように identifier と型のマッピングを定義し、以下の例では `a() {}` と呼び出せば `struct1` 型のインスタンスを生成し、 `b() {}` と呼び出せば `struct2` 型のインスタンスを生成すして `name` プロパティに追加される
      ```
      union unionType = struct1 | struct2
      struct s {
        repeated name: unionType[] {
            a -> struct1
            b -> struct2
        }
      }
      ```

## 初期化

- `struct` は複数の `init` を持つことができ、オブジェクトの生成方法を複数提供できる
- `init` を省略した場合、 `init {}` と等価である
- 初期化パスは独立しており、同時に複数実行されることはない
  - パラメータ付き初期化: `init(param1: type) { this.param1 = param1 }` という関数形式で定義する
    - オーバーロード可能
      - 特に引数なしの場合は `init {}` のように定義できる
        - もちろん `init() {}` のように括弧を付けてもよい
  - プライマリコンストラクタ: `init(this.value1)` のように、引数を `this` に直接代入する形式で定義する
    - この形式は、引数を `this` のプロパティに直接代入するため、より簡潔な記述が可能
  - 定義上は後置ラムダを明示的に記述しないが、実際は以下の順序で評価される
    1. 代入引数 (以下における `this.value1` へ `'hoge'` を代入する処理)

       ```
       // schema.canon
       schema {
         A
       }

       struct A {
         init(this.value1)
         value1: string
       }

       // config.canon
       #schema './schema.canon'
       A('hoge')
       ```

    2. 以下における後置ラムダでの `this.value1` へ `'hoge'` を代入する処理

       ```
       // schema.canon
       schema {
         A
       }

       struct A {
         value1: string
       }

       // config.canon
       #schema './schema.canon'
       A {
         value1 = 'hoge'
       }
       // もしくは
       A() {
         value1: 'hoge'
       }
       ```

    3. `init` ブロック内の処理

  - `MyStruct(value1) { ... }` のように呼び出す
    - 後置ラムダは必須ではない

## 関数とロジック

- 呼び出し回数のルール
  - `struct` 内で定義された関数(メンバーメソッド)は、デフォルトで1回のみ呼び出し可能
  - 複数回呼び出すには `repeated` 修飾子で明示的に修飾する必要がある
  - `max` のようなグローバル/組込関数は、デフォルトで複数回呼び出し可能
- `private` 修飾子は、同じ `struct` 内でのみアクセス可能な関数を定義するために使用する
- `this` の挙動: `struct` 内の `init` やメソッド、ラムダにおける `this` は、常にその `struct` のインスタンスを指す(レキシカル `this`)
  - `bind` のような動的な `this` の挙動はサポートされない
- `use` 文を使用して標準ライブラリの関数をインポートできる(組込関数でサポートしたくないが、標準機能として提供する必要があるもの)
  - `use getEnv` のように、関数名を指定する
- `struct` には `get` 修飾子を用いて `getter` を定義できる
  - `getter` は何度でも呼び出せる
- RangeExpression は Range<T> のリテラルと捉えられる
  - `1..10` は `Range<int>` として解釈され、 `1..10 step 2` は `infix fun Range<int>.step(step: int): Range<int>` と解釈される
  - Range<T> は暗黙的に定義されているものとする

## アノテーション

- アノテーションは `@` で始まり、要素の直前に記述する
- 現時点ではユーザ定義のアノテーションはサポートされていない
- `@description`: 直後の要素に対する説明を記述するためのアノテーション
- `@jsonName`: JSON でのフィールド名を指定するためのアノテーション
- `@jsonFlatten`: JSON でのフラット化を指定するためのアノテーション
- `@deprecated`: 非推奨の要素に対して使用するアノテーション

## 言語の基本原則

- `struct` の初期化は必ず後置ラムダを受け取れる
- 副作用の禁止: 言語の組込関数は **冪等性** を壊す副作用(コンソール出力, ファイル書き込み等)を持ってはいけない
- 制御された非純粋性: `getenv` や `readFile` のような、設定に不可欠な読み取り専用の非純粋関数のみ、標準ライブラリとして提供する
  - ユーザは特にインストール等を行う必要はないが、明示的に `use` 文を使用する必要がある
- 式志向: 言語のすべての要素は、最終的に何らかの値を返す **式 (Expression)** であることが理想
  - 返り値を持たない関数等は原則として定義しないことが推奨される
    - この原則のため、関数の最後の文の値が暗黙的にその関数の返り値となる
  - バリデーション等は性質上返り値を持たないが、そのような関数は評価を停止させる `error()` 等を内部で使用することが推奨される
- 複数の `init` で共通のバリデーション等を使いたい場合は、 `private` 修飾子を使用して関数を定義し、各 `init` から呼び出すことが推奨される
- 構文のみでは解決できないことはアノテーションを利用する

## TODO

以下を実装し、それに伴うテストケースを success, error の両方で可能な限りあらゆるパターンをカバーするように実装してください。
success では output.yml と AST が一致するようなテストを、 error では error.txt とエラーメッセージが一致するようなテストを実装してください。

- [x] 四則演算: `+`, `-`, `*`, `/`, `%`
- [x] 比較演算: `==`, `!=`, `<`, `>`, `<=`, `>=`
- [x] 論理演算: `&&`, `||`, `!`
- [x] 代入・複合代入: `=`, `+=`, `-=`, `*=`, `/=`, `%=`
- [x] メンバーアクセス: `object.property`
- [x] 関数呼び出し: `function(args)`
- [x] if式: `if (condition) expression else expression`
- [x] 単項演算: `-value`, `!value`
- [x] null assertion: `value!`
- [x] テンプレート文字列: `[${expression}](http://_vscodecontentref_/1)`
- [x] リテラル: 文字列、数値、真偽値
- [x] 配列リテラル (この言語では配列のことを List と呼ぶこととします)
- [x] 配列インデックス
- [x] 配列スライス
- [x] スプレッド演算子
- [x] ビット演算子
- [x] べき乗演算子 `**`
- [x] ラムダ式 `{ x -> x * 2 }`
- [x] 無名関数 `fun() {}`
- [x] イテレータ `1..10`
- [x] 分割代入
- [x] パイプライン演算子
- [ ] ラベル付き break/continue
- [ ] `match` 式

## 今後の展望

一通り実装が終わってから検討する項目

- 型制約の導入

  ```
  type Port = int(min: 1, max: 65535)
  type Password = string(minLength: 8, maxLength: 64)
  type Email = string(format: 'email')
  type Url = string(format: 'url')
  type Role = string(enum('admin', 'user', 'guest')) // 'admin' | 'user' | 'guest' でもいいかも
  type Tags = string[](minLength: 1, maxLength: 10)
  type UniqueIdList = int[](unique: true)
  ```

- regex 関数
  - 環境毎に動作が変わってしまう可能性があるため、 `use` 文で明示的にインポートするようにしようかな

- エラーメッセージの更なる改修(以下の Rust のエラーメッセージのように、どう修正すればよいかを示す)

  ```
  error[E0384]: cannot assign twice to immutable variable `x`
  --> src\main.rs:4:5
    |
  2 |     let x = 5;
    |         - first assignment to `x`
  3 |     println!("The value of x is: {}", x);
  4 |     x = 6;
    |     ^^^^^ cannot assign twice to immutable variable
    |
  help: consider making this binding mutable
    |
  2 |     let mut x = 5;
    |         +++

  For more information about this error, try `rustc --explain E0384`.
  error: could not compile `rust-sandbox` (bin "rust-sandbox") due to 1 previous error
  ```

- スキーマ定義からリファレンス生成
  - HTML や Markdown 形式でのドキュメント生成

- VSCode 拡張機能の開発
  - シンタックスハイライト
  - スニペット
  - LSP
