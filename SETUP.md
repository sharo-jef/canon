# Canon Project - ESLint & Prettier Setup

このプロジェクトにESLintとPrettierが正常に導入されました。

## 導入されたツール

### ESLint

- TypeScript専用のリンタールール
- 未使用変数、不要なコードの検出
- Canon固有のパターン（パーサーコンテキスト等）に対応

### Prettier

- 一貫性のあるコードフォーマット
- 自動コード整形
- エディタ統合サポート

### TypeScript設定

- 厳密な型チェック
- 最新のECMAScript機能サポート
- 生成ファイルの除外

## 利用可能なコマンド

```bash
# リンタの実行
npm run lint

# リンタの自動修正
npm run lint:fix

# コードフォーマット
npm run format

# フォーマットチェック
npm run format:check

# 型チェック
npm run typecheck

# 全体的なCIチェック
npm run ci
```

## VS Code設定

- 保存時自動フォーマット
- ESLintによるリアルタイム警告
- 推奨拡張機能の設定

## 設定ファイル

- `.eslintrc.js` - ESLint設定
- `.prettierrc.json` - Prettier設定
- `.prettierignore` - Prettierが無視するファイル
- `tsconfig.json` - TypeScript設定
- `.vscode/settings.json` - VS Code設定

すべての設定はCanonプロジェクトの特性に合わせて最適化されています。
