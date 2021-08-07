module.exports = {
  extends: [
    './index',
    './rules/vue2/base',
    './rules/vue2/error-prevention',
    './rules/vue2/improving-readability',
    './rules/vue2/minimizing-arbitrary-choices',
    './rules/vue2/uncategorized',
    './rules/vue2/extension',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
};
