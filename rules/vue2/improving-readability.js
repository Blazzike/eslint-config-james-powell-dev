module.exports = {
  rules: {
    /*
     * https://eslint.vuejs.org/rules/attribute-hyphenation.html
     *
     * enforce attribute naming style on custom components in template
     */
    'vue/attribute-hyphenation': 'error',

    /*
     * https://eslint.vuejs.org/rules/component-definition-name-casing.html
     *
     * enforce specific casing for component definition name
     */
    'vue/component-definition-name-casing': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
     *
     * require or disallow a line break before tag's closing brackets
     */
    'vue/html-closing-bracket-newline': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
     *
     * require or disallow a space before tag's closing brackets
     */
    'vue/html-closing-bracket-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-end-tags.html
     *
     * enforce end tag style
     */
    'vue/html-end-tags': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-indent.html
     *
     * enforce consistent indentation in <template>
     */
    'vue/html-indent': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-quotes.html
     *
     * enforce quotes style of HTML attributes
     */
    'vue/html-quotes': ['error', 'double', {
      avoidEscape: true,
    }],

    /*
     * https://eslint.vuejs.org/rules/html-self-closing.html
     *
     * enforce self-closing style
     */
    'vue/html-self-closing': 'error',

    /*
     * https://eslint.vuejs.org/rules/max-attributes-per-line.html
     *
     * enforce the maximum number of attributes per line
     */
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
    }],

    /*
     * https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
     *
     * require a line break before and after the contents of a multiline element
     */
    'vue/multiline-html-element-content-newline': 'error',

    /*
     * https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
     *
     * enforce unified spacing in mustache interpolations
     */
    'vue/mustache-interpolation-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-multi-spaces.html
     *
     * disallow multiple spaces
     */
    'vue/no-multi-spaces': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
     *
     * disallow spaces around equal signs in attribute
     */
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-template-shadow.html
     *
     * disallow variable declarations from shadowing variables declared in the outer scope
     */
    'vue/no-template-shadow': 'error',

    /*
     * https://eslint.vuejs.org/rules/one-component-per-file.html
     *
     * enforce that each component should be in its own file
     */
    'vue/one-component-per-file': 'error',

    /*
     * https://eslint.vuejs.org/rules/prop-name-casing.html
     *
     * enforce specific casing for the Prop name in Vue components
     */
    'vue/prop-name-casing': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-default-prop.html
     *
     * require default value for props
     */
    'vue/require-default-prop': 'off',

    /*
     * https://eslint.vuejs.org/rules/require-prop-types.html
     *
     * require type definitions in props
     */
    'vue/require-prop-types': 'error',

    /*
     * https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
     *
     * require a line break before and after the contents of a singleline element
     */
    'vue/singleline-html-element-content-newline': 'off',

    /*
     * https://eslint.vuejs.org/rules/v-bind-style.html
     *
     * enforce v-bind directive style
     */
    'vue/v-bind-style': 'error',

    /*
     * https://eslint.vuejs.org/rules/v-on-style.html
     *
     * enforce v-on directive style
     */
    'vue/v-on-style': 'error',

    /*
     * https://eslint.vuejs.org/rules/v-slot-style.html
     *
     * enforce v-slot directive style
     */
    'vue/v-slot-style': 'error',
  },
};
