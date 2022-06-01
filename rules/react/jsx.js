/* eslint-disable max-len */

module.exports = {
  rules: {
    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
     *
     * Enforce shorthand or standard form for React fragments
     */
    'react/jsx-fragments': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     *
     * Enforce event handler naming conventions in JSX
     */
    'react/jsx-handler-names': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     *
     * Validate JSX indentation
     */
    'react/jsx-indent': ['error', 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     *
     * Validate props indentation in JSX
     */
    'react/jsx-indent-props': ['error', 2],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     *
     * Report missing key props in iterators/collection literals
     */
    'react/jsx-key': 'warn',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
     *
     * Validate JSX maximum depth
     */
    'react/jsx-max-depth': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     *
     * Limit maximum of props on a single line in JSX
     */
    'react/jsx-max-props-per-line': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-newline.md
     *
     * Require or prevent a new line after jsx elements and expressions.
     */
    'react/jsx-newline': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     *
     * Prevents usage of Function.prototype.bind and arrow functions in React component props
     */
    'react/jsx-no-bind': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
     *
     * Comments inside children section of tag should be placed inside braces
     */
    'react/jsx-no-comment-textnodes': 'warn',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-constructed-context-values.md
     *
     * Prevents JSX context provider values from taking values that will cause needless rerenders.
     */
    'react/jsx-no-constructed-context-values': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     *
     * Enforce no duplicate props
     */
    'react/jsx-no-duplicate-props': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     *
     * Prevent using string literals in React component definition
     */
    'react/jsx-no-literals': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
     *
     * Forbid javascript: URLs
     */
    'react/jsx-no-script-url': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
     *
     * Forbid target="_blank" attribute without rel="noreferrer"
     */
    'react/jsx-no-target-blank': 'warn',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     *
     * Disallow undeclared variables in JSX
     */
    'react/jsx-no-undef': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     *
     * Disallow unnecessary fragments
     */
    'react/jsx-no-useless-fragment': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
     *
     * Limit to one expression per line in JSX
     */
    'react/jsx-one-expression-per-line': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     *
     * Enforce PascalCase for user-defined JSX components
     */
    'react/jsx-pascal-case': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-multi-spaces.md
     *
     * Disallow multiple spaces between inline JSX props
     */
    'react/jsx-props-no-multi-spaces': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     *
     * Prevent JSX prop spreading
     */
    'react/jsx-props-no-spreading': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-default-props.md
     *
     * Enforce default props alphabetical sorting
     */
    'react/jsx-sort-default-props': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     *
     * Enforce props alphabetical sorting
     */
    'react/jsx-sort-props': 'off',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md
     *
     * Validate whitespace in and around the JSX opening and closing brackets
     */
    'react/jsx-tag-spacing': ['error', {
      beforeSelfClosing: 'always',
    }],

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     *
     * Prevent React to be marked as unused
     */
    'react/jsx-uses-react': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     *
     * Prevent variables used in JSX to be marked as unused
     */
    'react/jsx-uses-vars': 'error',

    /*
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
     *
     * Prevent missing parentheses around multilines JSX
     */
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
  },
};
