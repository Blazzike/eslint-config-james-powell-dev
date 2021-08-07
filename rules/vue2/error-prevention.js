module.exports = {
  rules: {
    /*
     * https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
     *
     * disallow using arrow functions to define watcher
     */
    'vue/no-arrow-functions-in-watch': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
     *
     * disallow asynchronous actions in computed properties
     */
    'vue/no-async-in-computed-properties': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
     *
     * disallow custom modifiers on v-model used on the component
     */
    'vue/no-custom-modifiers-on-v-model': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-dupe-keys.html
     *
     * disallow duplication of field names
     */
    'vue/no-dupe-keys': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
     *
     * disallow duplicate conditions in v-if / v-else-if chains
     */
    'vue/no-dupe-v-else-if': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-duplicate-attributes.html
     *
     * disallow duplication of attributes
     */
    'vue/no-duplicate-attributes': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-multiple-template-root.html
     *
     * disallow adding multiple root nodes to the template
     */
    'vue/no-multiple-template-root': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-mutating-props.html
     *
     * disallow mutation of component props
     */
    'vue/no-mutating-props': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-parsing-error.html
     *
     * disallow parsing errors in <template>
     */
    'vue/no-parsing-error': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-reserved-keys.html
     *
     * disallow overwriting reserved keys
     */
    'vue/no-reserved-keys': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-shared-component-data.html
     *
     * enforce component's data property to be a function
     */
    'vue/no-shared-component-data': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
     *
     * disallow side effects in computed properties
     */
    'vue/no-side-effects-in-computed-properties': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-template-key.html
     *
     * disallow key attribute on <template>
     */
    'vue/no-template-key': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-textarea-mustache.html
     *
     * disallow mustaches in <textarea>
     */
    'vue/no-textarea-mustache': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-unused-components.html
     *
     * disallow registering components that are not used inside templates
     */
    'vue/no-unused-components': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-unused-vars.html
     *
     * disallow unused variable definitions of v-for directives or scope attributes
     */
    'vue/no-unused-vars': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
     *
     * disallow use v-if on the same element as v-for
     */
    'vue/no-use-v-if-with-v-for': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-v-for-template-key.html
     *
     * disallow key attribute on <template v-for>
     */
    'vue/no-v-for-template-key': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-v-model-argument.html
     *
     * disallow adding an argument to v-model used in custom component
     */
    'vue/no-v-model-argument': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-component-is.html
     *
     * require v-bind:is of <component> elements
     */
    'vue/require-component-is': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-prop-type-constructor.html
     *
     * require prop type to be a constructor
     */
    'vue/require-prop-type-constructor': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-render-return.html
     *
     * enforce render function to always return value
     */
    'vue/require-render-return': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-v-for-key.html
     *
     * require v-bind:key with v-for directives
     */
    'vue/require-v-for-key': 'off',

    /*
     * https://eslint.vuejs.org/rules/require-valid-default-prop.html
     *
     * enforce props default values to be valid
     */
    'vue/require-valid-default-prop': 'error',

    /*
     * https://eslint.vuejs.org/rules/return-in-computed-property.html
     *
     * enforce that a return statement is present in computed property
     */
    'vue/return-in-computed-property': 'error',

    /*
     * https://eslint.vuejs.org/rules/use-v-on-exact.html
     *
     * enforce usage of exact modifier on v-on
     */
    'vue/use-v-on-exact': 'off',

    /*
     * https://eslint.vuejs.org/rules/valid-template-root.html
     *
     * enforce valid template root
     */
    'vue/valid-template-root': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-bind-sync.html
     *
     * enforce valid .sync modifier on v-bind directives
     */
    'vue/valid-v-bind-sync': 'off',

    /*
     * https://eslint.vuejs.org/rules/valid-v-bind.html
     *
     * enforce valid v-bind directives
     */
    'vue/valid-v-bind': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-cloak.html
     *
     * enforce valid v-cloak directives
     */
    'vue/valid-v-cloak': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-else-if.html
     *
     * enforce valid v-else-if directives
     */
    'vue/valid-v-else-if': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-else.html
     *
     * enforce valid v-else directives
     */
    'vue/valid-v-else': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-for.html
     *
     * enforce valid v-for directives
     */
    'vue/valid-v-for': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-html.html
     *
     * enforce valid v-html directives
     */
    'vue/valid-v-html': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-if.html
     *
     * enforce valid v-if directives
     */
    'vue/valid-v-if': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-model.html
     *
     * enforce valid v-model directives
     */
    'vue/valid-v-model': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-on.html
     *
     * enforce valid v-on directives
     */
    'vue/valid-v-on': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-once.html
     *
     * enforce valid v-once directives
     */
    'vue/valid-v-once': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-pre.html
     *
     * enforce valid v-pre directives
     */
    'vue/valid-v-pre': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-show.html
     *
     * enforce valid v-show directives
     */
    'vue/valid-v-show': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-slot.html
     *
     * enforce valid v-slot directives
     */
    'vue/valid-v-slot': 'error',

    /*
     * https://eslint.vuejs.org/rules/valid-v-text.html
     *
     * enforce valid v-text directives
     */
    'vue/valid-v-text': 'error',
  },
};
