/* eslint-disable max-len */

module.exports = {
  rules: {
    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
     *
     * Enforces consistent naming for boolean props
     */
    'react/boolean-prop-naming': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
     *
     * Forbid "button" element without an explicit "type" attribute
     */
    'react/button-has-type': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
     *
     * Enforce all defaultProps are defined and not "required" in propTypes.
     */
    'react/default-props-match-prop-types': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
     *
     * Enforce consistent usage of destructuring assignment of props, state, and context
     */
    'react/destructuring-assignment': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     *
     * Prevent missing displayName in a React component definition
     */
    'react/display-name': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
     *
     * Forbid certain props on components
     */
    'react/forbid-component-props': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-dom-props.md
     *
     * Forbid certain props on DOM Nodes
     */
    'react/forbid-dom-props': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-elements.md
     *
     * Forbid certain elements
     */
    'react/forbid-elements': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-foreign-prop-types.md
     *
     * Forbid using another component's propTypes
     */
    'react/forbid-foreign-prop-types': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     *
     * Forbid certain propTypes
     */
    'react/forbid-prop-types': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     *
     * Standardize the way function component get defined
     */
    'react/function-component-definition': ['error', {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-access-state-in-setstate.md
     *
     * Reports when this.state is accessed within setState
     */
    'react/no-access-state-in-setstate': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-adjacent-inline-elements.md
     *
     * Prevent adjacent inline elements not separated by whitespace.
     */
    'react/no-adjacent-inline-elements': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     *
     * Prevent usage of Array index in keys
     */
    'react/no-array-index-key': 'warn',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md
     *
     * Prevent passing of children as props.
     */
    'react/no-children-prop': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     *
     * Prevent usage of dangerous JSX props
     */
    'react/no-danger': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
     *
     * Report when a DOM element is using both children and dangerouslySetInnerHTML
     */
    'react/no-danger-with-children': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     *
     * Prevent usage of deprecated methods
     */
    'react/no-deprecated': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     *
     * Prevent usage of setState in componentDidMount
     */
    'react/no-did-mount-set-state': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     *
     * Prevent usage of setState in componentDidUpdate
     */
    'react/no-did-update-set-state': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     *
     * Prevent direct mutation of this.state
     */
    'react/no-direct-mutation-state': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
     *
     * Prevent usage of findDOMNode
     */
    'react/no-find-dom-node': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     *
     * Prevent usage of isMounted
     */
    'react/no-is-mounted': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     *
     * Prevent multiple component definition per file
     */
    'react/no-multi-comp': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-redundant-should-component-update.md
     *
     * Flag shouldComponentUpdate when extending PureComponent
     */
    'react/no-redundant-should-component-update': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
     *
     * Prevent usage of the return value of React.render
     */
    'react/no-render-return-value': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     *
     * Prevent usage of setState
     */
    'react/no-set-state': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     *
     * Prevent string definitions for references and prevent referencing this.refs
     */
    'react/no-string-refs': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-this-in-sfc.md
     *
     * Report "this" being used in stateless components
     */
    'react/no-this-in-sfc': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-typos.md
     *
     * Prevent common typos
     */
    'react/no-typos': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
     *
     * Detect unescaped HTML entities, which might represent malformed tags
     */
    'react/no-unescaped-entities': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     *
     * Prevent usage of unknown DOM property
     */
    'react/no-unknown-property': 'warn',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
     *
     * Prevent usage of unsafe lifecycle methods
     */
    'react/no-unsafe': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
     *
     * Prevent creating unstable components inside components
     */
    'react/no-unstable-nested-components': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     *
     * Prevent definitions of unused prop types
     */
    'react/no-unused-prop-types': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-state.md
     *
     * Prevent definition of unused state fields
     */
    'react/no-unused-state': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-will-update-set-state.md
     *
     * Prevent usage of setState in componentWillUpdate
     */
    'react/no-will-update-set-state': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     *
     * Enforce ES5 or ES6 class for React Components
     */
    'react/prefer-es6-class': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-read-only-props.md
     *
     * Require read-only props.
     */
    'react/prefer-read-only-props': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     *
     * Enforce stateless components to be written as a pure function
     */
    'react/prefer-stateless-function': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     *
     * Prevent missing props validation in a React component definition
     */
    'react/prop-types': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     *
     * Prevent missing React when using JSX
     */
    'react/react-in-jsx-scope': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     *
     * Enforce a defaultProps definition for every prop that is not a required prop.
     */
    'react/require-default-props': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
     *
     * Enforce React components to have a shouldComponentUpdate method
     */
    'react/require-optimization': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
     *
     * Enforce ES5 or ES6 class for returning value in render function
     */
    'react/require-render-return': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     *
     * Prevent extra closing tags for components without children
     */
    'react/self-closing-comp': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     *
     * Enforce component methods order
     */
    'react/sort-comp': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     *
     * Enforce propTypes declarations alphabetical sorting
     */
    'react/sort-prop-types': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
     *
     * State initialization in an ES6 class component should be in a constructor
     */
    'react/state-in-constructor': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
     *
     * Defines where React component static properties should be positioned.
     */
    'react/static-property-placement': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
     *
     * Enforce style prop value is an object
     */
    'react/style-prop-object': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
     *
     * Prevent passing of children to void DOM elements (e.g. <br />).
     */
    'react/void-dom-elements-no-children': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     *
     * Enforce boolean attributes notation in JSX
     */
    'react/jsx-boolean-value': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-child-element-spacing.md
     *
     * Ensures inline tags are not rendered without spaces between them
     */
    'react/jsx-child-element-spacing': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     *
     * Validate closing bracket location in JSX
     */
    'react/jsx-closing-bracket-location': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md
     *
     * Validate closing tag location for multiline JSX
     */
    'react/jsx-closing-tag-location': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
     *
     * Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX
     * expressions on literals in JSX children or attributes
     */
    'react/jsx-curly-brace-presence': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-newline.md
     *
     * Enforce consistent line breaks inside jsx curly
     */
    'react/jsx-curly-newline': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     *
     * Enforce or disallow spaces inside of curly braces in JSX attributes
     */
    'react/jsx-curly-spacing': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     *
     * Disallow or enforce spaces around equal signs in JSX attributes
     */
    'react/jsx-equals-spacing': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     *
     * Restrict file extensions that may contain JSX
     */
    'react/jsx-filename-extension': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
     *
     * Ensure proper position of the first property in JSX
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
  },
};
