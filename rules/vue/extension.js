module.exports = {
  rules: {
    /*
     * https://eslint.vuejs.org/rules/array-bracket-newline.html
     *
     * enforce linebreaks after opening and before closing array brackets
     */
    'vue/array-bracket-newline': ['error', 'consistent'],

    /*
     * https://eslint.vuejs.org/rules/array-bracket-spacing.html
     *
     * enforce consistent spacing inside array brackets
     */
    'vue/array-bracket-spacing': ['error', 'never'],

    /*
     * https://eslint.vuejs.org/rules/arrow-spacing.html
     *
     * enforce consistent spacing before and after the arrow in arrow functions
     */
    'vue/arrow-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/block-spacing.html
     *
     * disallow or enforce spaces inside of blocks after opening block and before closing block
     */
    'vue/block-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/brace-style.html
     *
     * enforce consistent brace style for blocks
     */
    'vue/brace-style': ['error', '1tbs'],

    /*
     * https://eslint.vuejs.org/rules/camelcase.html
     *
     * enforce camelcase naming convention
     */
    'vue/camelcase': ['error', {
      properties: 'never',
    }],

    /*
     * https://eslint.vuejs.org/rules/comma-dangle.html
     *
     * require or disallow trailing commas
     */
    'vue/comma-dangle': ['error', 'always-multiline'],

    /*
     * https://eslint.vuejs.org/rules/comma-spacing.html
     *
     * enforce consistent spacing before and after commas
     */
    'vue/comma-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/comma-style.html
     *
     * enforce consistent comma style
     */
    'vue/comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    }],

    /*
     * https://eslint.vuejs.org/rules/dot-location.html
     *
     * enforce consistent newlines before and after dots
     */
    'vue/dot-location': 'off',

    /*
     * https://eslint.vuejs.org/rules/dot-notation.html
     *
     * enforce dot notation whenever possible
     */
    'vue/dot-notation': 'error',

    /*
     * https://eslint.vuejs.org/rules/eqeqeq.html
     *
     * require the use of === and !==
     */
    'vue/eqeqeq': ['error', 'always', {
      null: 'ignore',
    }],

    /*
     * https://eslint.vuejs.org/rules/func-call-spacing.html
     *
     * require or disallow spacing between function identifiers and their invocations
     */
    'vue/func-call-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/key-spacing.html
     *
     * enforce consistent spacing between keys and values in object literal properties
     */
    'vue/key-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/keyword-spacing.html
     *
     * enforce consistent spacing before and after keywords
     */
    'vue/keyword-spacing': 'error',

    /*
     * https://eslint.vuejs.org/rules/max-len.html
     *
     * enforce a maximum line length
     */
    'vue/max-len': ['error', 100, 2],

    /*
     * https://eslint.vuejs.org/rules/no-constant-condition.html
     *
     * disallow constant expressions in conditions
     */
    'vue/no-constant-condition': 'warn',

    /*
     * https://eslint.vuejs.org/rules/no-empty-pattern.html
     *
     * disallow empty destructuring patterns
     */
    'vue/no-empty-pattern': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-extra-parens.html
     *
     * disallow unnecessary parentheses
     */
    'vue/no-extra-parens': ['off', 'all', {
      ignoreJSX: 'multi-line',
    }],

    /*
     * https://eslint.vuejs.org/rules/no-irregular-whitespace.html
     *
     * disallow irregular whitespace
     */
    'vue/no-irregular-whitespace': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-restricted-syntax.html
     *
     * disallow specified syntax
     */
    'vue/no-restricted-syntax': [
      'error',

      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never '
          + 'what you want. Use for..of, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain '
          + 'and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict '
          + 'and optimize.',
      },
    ],

    /*
     * https://eslint.vuejs.org/rules/no-sparse-arrays.html
     *
     * disallow sparse arrays
     */
    'vue/no-sparse-arrays': 'error',

    /*
     * https://eslint.vuejs.org/rules/no-useless-concat.html
     *
     * disallow unnecessary concatenation of literals or template literals
     */
    'vue/no-useless-concat': 'error',

    /*
     * https://eslint.vuejs.org/rules/object-curly-newline.html
     *
     * enforce consistent line breaks after opening and before closing braces
     */
    'vue/object-curly-newline': [
      'error',

      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],

    /*
     * https://eslint.vuejs.org/rules/object-curly-spacing.html
     *
     * enforce consistent spacing inside braces
     */
    'vue/object-curly-spacing': ['error', 'always'],

    /*
     * https://eslint.vuejs.org/rules/object-property-newline.html
     *
     * enforce placing object properties on separate lines
     */
    'vue/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    /*
     * https://eslint.vuejs.org/rules/operator-linebreak.html
     *
     * enforce consistent linebreak style for operators
     */
    'vue/operator-linebreak': ['error', 'before', {
      overrides: {
        '=': 'ignore',
      },
    }],

    /*
     * https://eslint.vuejs.org/rules/prefer-template.html
     *
     * require template literals instead of string concatenation
     */
    'vue/prefer-template': 'error',

    /*
     * https://eslint.vuejs.org/rules/space-in-parens.html
     *
     * enforce consistent spacing inside parentheses
     */
    'vue/space-in-parens': 'error',

    /*
     * https://eslint.vuejs.org/rules/space-infix-ops.html
     *
     * require spacing around infix operators
     */
    'vue/space-infix-ops': 'error',

    /*
     * https://eslint.vuejs.org/rules/space-unary-ops.html
     *
     * enforce consistent spacing before or after unary operators
     */
    'vue/space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],

    /*
     * https://eslint.vuejs.org/rules/template-curly-spacing.html
     *
     * require or disallow spacing around embedded expressions of template strings
     */
    'vue/template-curly-spacing': 'error',
  },
};
