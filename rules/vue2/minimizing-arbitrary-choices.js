module.exports = {
  rules: {
    /*
     * https://eslint.vuejs.org/rules/attributes-order.html
     *
     * enforce order of attributes
     */
    'vue/attributes-order': 'off',

    /*
     * https://eslint.vuejs.org/rules/component-tags-order.html
     *
     * enforce order of component top-level elements
     */
    'vue/component-tags-order': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-lone-template.html
     *
     * disallow unnecessary <template>
     */
    'vue/no-lone-template': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-multiple-slot-args.html
     *
     * disallow to pass multiple arguments to scoped slots
     */
    'vue/no-multiple-slot-args': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-v-html.html
     *
     * disallow use of v-html to prevent XSS attack
     */
    'vue/no-v-html': 'off',

    /*
     * https://eslint.vuejs.org/rules/order-in-components.html
     *
     * enforce order of properties in components
     */
    'vue/order-in-components': 'error',

    /*
     * https://eslint.vuejs.org/rules/this-in-template.html
     *
     * disallow usage of this in template
     */
    'vue/this-in-template': 'error',
  },
};
