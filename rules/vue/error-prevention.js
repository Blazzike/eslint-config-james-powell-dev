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
     * https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
     *
     * disallow using deprecated object declaration on data (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-data-object-declaration': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
     *
     * disallow using deprecated destroyed and beforeDestroy lifecycle hooks (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-destroyed-lifecycle': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
     *
     * disallow using deprecated $listeners (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-dollar-listeners-api': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
     *
     * disallow using deprecated $scopedSlots (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-dollar-scopedslots-api': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-events-api.html
     *
     * disallow using deprecated events api (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-events-api': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-filter.html
     *
     * disallow using deprecated filters syntax (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-filter': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
     *
     * disallow using deprecated the functional template (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-functional-template': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
     *
     * disallow using deprecated the is attribute on HTML elements (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-html-element-is': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
     *
     * disallow using deprecated inline-template attribute (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-inline-template': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
     *
     * disallow deprecated this access in props default function (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-props-default-this': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
     *
     * disallow deprecated scope attribute (in Vue.js 2.5.0+)
     */
    'vue/no-deprecated-scope-attribute': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
     *
     * disallow deprecated slot attribute (in Vue.js 2.6.0+)
     */
    'vue/no-deprecated-slot-attribute': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
     *
     * disallow deprecated slot-scope attribute (in Vue.js 2.6.0+)
     */
    'vue/no-deprecated-slot-scope-attribute': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
     *
     * disallow use of deprecated .sync modifier on v-bind directive (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-v-bind-sync': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
     *
     * disallow using deprecated .native modifiers (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-v-on-native-modifier': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
     *
     * disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-v-on-number-modifiers': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
     *
     * disallow using deprecated Vue.config.keyCodes (in Vue.js 3.0.0+)
     */
    'vue/no-deprecated-vue-config-keycodes': 'error',

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
     * https://eslint.vuejs.org/rules/no-setup-props-destructure.html
     *
     * disallow destructuring of props passed to setup
     */
    'vue/no-setup-props-destructure': 'error',

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
     * https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
     *
     * disallow key of <template v-for> placed on child elements
     */
    'vue/no-v-for-template-key-on-child': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-watch-after-await.html
     *
     * disallow asynchronously registered watch
     */
    'vue/no-watch-after-await': 'error',

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
     * https://eslint.vuejs.org/rules/require-slots-as-functions.html
     *
     * enforce properties of $slots to be used as a function
     */
    'vue/require-slots-as-functions': 'error',

    /*
     * https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
     *
     * require control the display of the content inside <transition>
     */
    'vue/require-toggle-inside-transition': 'off',

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
     * https://eslint.vuejs.org/rules/return-in-emits-validator.html
     *
     * enforce that a return statement is present in emits validator
     */
    'vue/return-in-emits-validator': 'error',

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
     * https://eslint.vuejs.org/rules/valid-v-is.html
     *
     * enforce valid v-is directives
     */
    'vue/valid-v-is': 'error',

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
