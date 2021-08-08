module.exports = {
  extends: [
    './index',
    './rules/react/base',
    './rules/react/jsx',
  ].map(require.resolve),
  plugins: ['react'],
};
