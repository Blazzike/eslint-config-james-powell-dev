module.exports = {
  rules: {
    /*
     * https://eslint.vuejs.org/rules/block-tag-newline.html
     *
     * enforce line breaks after opening and before closing block-level tags
     */
    'vue/block-tag-newline': 'error',

    /*
     * https://eslint.vuejs.org/rules/component-name-in-template-casing.html
     *
     * enforce specific casing for the component naming style in template
     */
    'vue/component-name-in-template-casing': 'error',

    /*
     * https://eslint.vuejs.org/rules/custom-event-name-casing.html
     *
     * enforce specific casing for custom event name
     */
    'vue/custom-event-name-casing': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-button-has-type.html
     *
     * disallow usage of button without an explicit type attribute
     */
    'vue/html-button-has-type': 'off',

    /*
     * https://eslint.vuejs.org/rules/html-comment-content-newline.html
     *
     * enforce unified line brake in HTML comments
     */
    'vue/html-comment-content-newline': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-comment-content-spacing.html
     *
     * enforce unified spacing in HTML comments
     */
    'vue/html-comment-content-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/html-comment-indent.html
     *
     * enforce consistent indentation in HTML comments
     */
    'vue/html-comment-indent': 'error',

    /*
     * https://eslint.vuejs.org/rules/match-component-file-name.html
     *
     * require component name property to match its file name
     */
    'vue/match-component-file-name': 'error',

    /*
     * https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
     *
     * enforce new lines between multi-line properties in Vue components
     */
    'vue/new-line-between-multi-line-property': 'off',

    /*
     * https://eslint.vuejs.org/rules/next-tick-style.html
     *
     * enforce Promise or callback style in nextTick
     */
    'vue/next-tick-style': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
     *
     * disallow the use of bare strings in <template>
     */
    'vue/no-bare-strings-in-template': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-boolean-default.html
     *
     * disallow boolean defaults
     */
    'vue/no-boolean-default': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
     *
     * enforce inheritAttrs to be set to false when using v-bind="$attrs"
     */
    'vue/no-duplicate-attr-inheritance': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-empty-component-block.html
     *
     * disallow the <template> <script> <style> block to be empty
     */
    'vue/no-empty-component-block': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-invalid-model-keys.html
     *
     * require valid keys in model option
     */
    'vue/no-invalid-model-keys': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
     *
     * disallow to pass multiple objects into array to class
     */
    'vue/no-multiple-objects-in-class': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
     *
     * disallow a potential typo in your component property
     */
    'vue/no-potential-component-option-typo': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-reserved-component-names.html
     *
     * disallow the use of reserved names in component definitions
     */
    'vue/no-reserved-component-names': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-block.html
     *
     * disallow specific block
     */
    'vue/no-restricted-block': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
     *
     * disallow asynchronously called restricted methods
     */
    'vue/no-restricted-call-after-await': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-component-options.html
     *
     * disallow specific component option
     */
    'vue/no-restricted-component-options': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-custom-event.html
     *
     * disallow specific custom event
     */
    'vue/no-restricted-custom-event': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-props.html
     *
     * disallow specific props
     */
    'vue/no-restricted-props': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
     *
     * disallow specific attribute
     */
    'vue/no-restricted-static-attribute': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-v-bind.html
     *
     * disallow specific argument in v-bind
     */
    'vue/no-restricted-v-bind': 'off',

    /*
     * https://eslint.vuejs.org/rules/no-static-inline-styles.html
     *
     * disallow static inline style attributes
     */
    'vue/no-static-inline-styles': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-template-target-blank.html
     *
     * disallow target="_blank" attribute without rel="noopener noreferrer"
     */
    'vue/no-template-target-blank': 'warn',

    /*
     * https://eslint.vuejs.org/rules/no-unregistered-components.html
     *
     * disallow using components that are not registered inside templates
     */
    'vue/no-unregistered-components': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-unsupported-features.html
     *
     * disallow unsupported Vue.js syntax on the specified version
     */
    'vue/no-unsupported-features': ['error', {
      version: '^2.x',
    }],

    /*
     * https://eslint.vuejs.org/rules/no-unused-properties.html
     *
     * disallow unused properties
     */
    'vue/no-unused-properties': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-unused-refs.html
     *
     * disallow unused refs
     */
    'vue/no-unused-refs': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-useless-mustaches.html
     *
     * disallow unnecessary mustache interpolations
     */
    'vue/no-useless-mustaches': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-useless-v-bind.html
     *
     * disallow unnecessary v-bind directives
     */
    'vue/no-useless-v-bind': 'error',

    /*
     * https://eslint.vuejs.org/rules/padding-line-between-blocks.html
     *
     * require or disallow padding lines between blocks
     */
    'vue/padding-line-between-blocks': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-direct-export.html
     *
     * require the component to be directly exported
     */
    'vue/require-direct-export': 'off',

    /*
     * https://eslint.vuejs.org/rules/require-emit-validator.html
     *
     * require type definitions in emits
     */
    'vue/require-emit-validator': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-name-property.html
     *
     * require a name property in Vue components
     */
    'vue/require-name-property': 'warn',

    /*
     * https://eslint.vuejs.org/rules/script-indent.html
     *
     * enforce consistent indentation in <script>
     */
    'vue/script-indent': 'error',

    /*
     * https://eslint.vuejs.org/rules/sort-keys.html
     *
     * enforce sort-keys in a manner that is compatible with order-in-components
     */
    'vue/sort-keys': 'off',

    /*
     * https://eslint.vuejs.org/rules/static-class-names-order.html
     *
     * enforce static class names order
     */
    'vue/static-class-names-order': 'off',

    /*
     * https://eslint.vuejs.org/rules/v-for-delimiter-style.html
     *
     * enforce v-for directive's delimiter style
     */
    'vue/v-for-delimiter-style': ['error', 'of'],

    /*
     * https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
     *
     * enforce v-on event naming style on custom components in template
     */
    'vue/v-on-event-hyphenation': 'error',

    /*
     * https://eslint.vuejs.org/rules/v-on-function-call.html
     *
     * enforce or forbid parentheses after method calls without arguments in v-on directives
     */
    'vue/v-on-function-call': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-next-tick.html
     *
     * enforce valid nextTick function calls
     */
    'vue/valid-next-tick': 'error',
  },
};
