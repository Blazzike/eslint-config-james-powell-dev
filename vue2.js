module.exports = {
  extends: [
    './index',
    './rules/vue/base',
    './rules/vue2/error-prevention',
    './rules/vue2/improving-readability',
    './rules/vue2/minimizing-arbitrary-choices',
    './rules/vue/uncategorized',
    './rules/vue/extension',
  ].map(require.resolve),
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
};
