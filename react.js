module.exports = {
  extends: [
    './index',
    './rules/react/base',
    './rules/react/jsx',
    './rules/react/hooks',
  ].map(require.resolve),
  plugins: ['react', 'react-hooks'],
};
