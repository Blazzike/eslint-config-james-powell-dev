module.exports = {
  extends: [
    './index',
    './rules/vue/base',
    './rules/vue/error-prevention',
    './rules/vue/improving-readability',
    './rules/vue/minimizing-arbitrary-choices',
    './rules/vue/uncategorized',
    './rules/vue/extension',
  ].map(require.resolve),
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
};
