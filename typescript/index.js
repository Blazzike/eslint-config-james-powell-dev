module.exports = {
  extends: [
    ...[
      '../rules/best-practices',
      '../rules/ecmascript-6',
      '../rules/possible-errors',
      '../rules/strict-mode',
      '../rules/stylistic-issues',
      '../rules/variables',
    ].map(require.resolve),
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: [
    '@typescript-eslint',
    'import',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
