module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    es2022: true,
    jest: true,
  },
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_|ctx|node|error|offendingSymbol|symbol|maxLineNumber|e',
        varsIgnorePattern: '^_|ErrorCollection|ErrorNote|tree|cleanedMsg',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // Allow any for parser contexts

    // General rules
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-console': 'off', // Allow console for this project since it's a CLI tool
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-case-declarations': 'off', // Allow case declarations for switch statements

    // Prettier integration
    'prettier/prettier': 'error',
  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'src/generated/', // Ignore ANTLR generated files
    '*.js', // Ignore JS files in root
    'jest.config.js',
    '.eslintrc.js',
  ],
};
