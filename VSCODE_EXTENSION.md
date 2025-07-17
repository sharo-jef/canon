# Canon VSCode Extension Installation Guide

このディレクトリには、Canon言語用のVSCode拡張機能が含まれています。

## 拡張機能の機能

### 🎨 シンタックスハイライト

- Canon言語の完全なシンタックスハイライト
- キーワード、演算子、文字列、数値、コメントのハイライト
- テンプレート文字列の補間ハイライト
- アノテーションのハイライト

### 📝 コードスニペット

- 25以上のCanon構文用組み込みスニペット
- スキーマおよび構造体宣言
- 関数およびプロパティ定義
- 制御フロー文
- 組み込み型とアノテーション

### 🧠 Language Server Protocol (LSP) 機能

- **リアルタイム検証**: 自動エラー検出とレポート
- **ホバー情報**: キーワードと識別子のドキュメント表示
- **自動補完**: キーワード、型、アノテーションのインテリジェント補完
- **ドキュメントフォーマット**: 基本的なコードフォーマット

### 🛠️ コマンド

- `Canon: Parse File` - 現在のCanonファイルを解析してAST表示
- `Canon: Validate File` - 現在のCanonファイルを検証
- `Canon: Format File` - 現在のCanonファイルをフォーマット

## インストール方法

### 1. VSIXファイルからのインストール

拡張機能パッケージ (`canon-language-support-0.1.0.vsix`) は既にビルド済みです。

```bash
# VSCode のコマンドパレット (Ctrl+Shift+P) を開いて:
# "Extensions: Install from VSIX..." を選択
# canon-language-support-0.1.0.vsix ファイルを選択
```

または、コマンドラインから:

```bash
code --install-extension vscode-extension/canon-language-support-0.1.0.vsix
```

### 2. 開発者モードでのテスト

拡張機能を開発・テストする場合:

```bash
cd vscode-extension
npm install
npm run compile
# F5 キーを押して拡張機能開発ホストを起動
```

## 設定

VS Codeの設定で拡張機能をカスタマイズできます:

- `canon.enableValidation`: リアルタイム検証を有効化 (デフォルト: true)
- `canon.enableHover`: ホバー情報を有効化 (デフォルト: true)
- `canon.enableCompletion`: 自動補完を有効化 (デフォルト: true)
- `canon.canonInterpreterPath`: Canonインタープリターの実行可能ファイルパス

## 使用方法

1. 拡張機能をインストール
2. `.canon` ファイルを開く
3. 完全な言語サポートでコーディング開始！

## サンプルファイル

`vscode-extension/test-files/` にサンプルのCanonファイルがあります:

- `config.canon` - 設定ファイルの例
- `schema.canon` - スキーマ定義の例

## トラブルシューティング

### インタープリターが見つからない

拡張機能は以下の順序でCanonインタープリターを検索します:

1. `canon.canonInterpreterPath` 設定値
2. ワークスペース内の `src/canon-interpreter.ts`
3. ワークスペース内の `src/interpreter.ts`
4. システムPATHの `tsx` コマンド

### デバッグ情報

開発者ツール (F12) のコンソールで拡張機能のログを確認できます。

## 開発情報

### ファイル構造

```
vscode-extension/
├── package.json              # 拡張機能の定義
├── src/
│   ├── extension.ts          # メイン拡張機能コード
│   └── canonLanguageServer.ts # LSP実装
├── syntaxes/
│   └── canon.tmLanguage.json # TextMate文法定義
├── snippets/
│   └── canon.json           # コードスニペット
├── language-configuration/
│   └── canon.json          # 言語設定
└── test-files/             # テスト用ファイル
```

### ビルドコマンド

```bash
npm run compile      # TypeScriptコンパイル
npm run package      # Webpackバンドル
npm run watch        # 開発時の監視モード
npx vsce package     # VSIX パッケージ作成
```

## 既知の問題

- 高度な型チェックは開発中です
- 一部の複雑なシンタックスハイライトのエッジケースが完璧でない場合があります

## コントリビューション

この拡張機能はCanon言語プロジェクトの一部です。問題の報告や貢献については:
[https://github.com/sharo-jef/canon](https://github.com/sharo-jef/canon)

---

**Canonでのコーディングをお楽しみください！** 🚀
