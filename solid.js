module.exports = {
  extends: [
    './index',
    './typescript',
    './rules/solid/base',
    './rules/solid/react',
    './rules/solid/jsx',
  ].map(require.resolve),
  plugins: ['react', 'solid'],
};
