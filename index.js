module.exports = {
  extends: [
    './rules/best-practices',
    './rules/ecmascript-6',
    './rules/possible-errors',
    './rules/strict-mode',
    './rules/stylistic-issues',
    './rules/variables',
  ].map(require.resolve),
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
