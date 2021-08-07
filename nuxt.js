module.exports = {
  extends: [
    require.resolve('./vue2'),
  ],
  rules: {
    /*
     * https://eslint.vuejs.org/rules/no-unregistered-components.html
     *
     * disallow using components that are not registered inside templates
     *
     * NOTICE: nuxt supports auto imported components
     */
    'vue/no-unregistered-components': 'off',
  },
};
