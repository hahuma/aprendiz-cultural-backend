module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  ignorePatterns: 'dist',
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort': 'warn',
  },
}
