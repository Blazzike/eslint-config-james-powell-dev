module.exports = {
  rules: {
    /*
     * https://eslint.org/docs/rules/array-bracket-newline
     *
     * enforce linebreaks after opening and before closing array brackets
     */
    'array-bracket-newline': ['error', 'consistent'],

    /*
     * https://eslint.org/docs/rules/array-bracket-spacing
     *
     * enforce consistent spacing inside array brackets
     */
    'array-bracket-spacing': ['error', 'never'],

    /*
     * https://eslint.org/docs/rules/array-element-newline
     *
     * enforce line breaks after each array element
     */
    'array-element-newline': ['error', 'consistent'],

    /*
     * https://eslint.org/docs/rules/block-spacing
     *
     * disallow or enforce spaces inside of blocks after opening block and before closing block
     */
    'block-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/brace-style
     *
     * enforce consistent brace style for blocks
     */
    'brace-style': ['error', '1tbs'],

    /*
     * https://eslint.org/docs/rules/camelcase
     *
     * enforce camelcase naming convention
     */
    camelcase: ['error', {
      properties: 'never',
    }],

    /*
     * https://eslint.org/docs/rules/capitalized-comments
     *
     * enforce or disallow capitalization of the first letter of a comment
     */
    'capitalized-comments': 'off',

    /*
     * https://eslint.org/docs/rules/comma-dangle
     *
     * require or disallow trailing commas
     */
    'comma-dangle': ['error', 'always-multiline'],

    /*
     * https://eslint.org/docs/rules/comma-spacing
     *
     * enforce consistent spacing before and after commas
     */
    'comma-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/comma-style
     *
     * enforce consistent comma style
     */
    'comma-style': ['error', 'last', {
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
     * https://eslint.org/docs/rules/computed-property-spacing
     *
     * enforce consistent spacing inside computed property brackets
     */
    'computed-property-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/consistent-this
     *
     * enforce consistent naming when capturing the current execution context
     */
    'consistent-this': 'off',

    /*
     * https://eslint.org/docs/rules/eol-last
     *
     * require or disallow newline at the end of files
     */
    'eol-last': 'error',

    /*
     * https://eslint.org/docs/rules/func-call-spacing
     *
     * require or disallow spacing between function identifiers and their invocations
     */
    'func-call-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/func-name-matching
     *
     * require function names to match the name of the variable or property to which they are
     * assigned
     */
    'func-name-matching': ['warn', 'always', {
      considerPropertyDescriptor: true,
    }],

    /*
     * https://eslint.org/docs/rules/func-names
     *
     * require or disallow named `function` expressions
     */
    'func-names': 'warn',

    /*
     * https://eslint.org/docs/rules/func-style
     *
     * enforce the consistent use of either `function` declarations or expressions
     */
    'func-style': 'off',

    /*
     * https://eslint.org/docs/rules/function-call-argument-newline
     *
     * enforce line breaks between arguments of a function call
     */
    'function-call-argument-newline': ['error', 'consistent'],

    /*
     * https://eslint.org/docs/rules/function-paren-newline
     *
     * enforce consistent line breaks inside function parentheses
     */
    'function-paren-newline': ['error', 'consistent'],

    /*
     * https://eslint.org/docs/rules/id-denylist
     *
     * disallow specified identifiers
     */
    'id-denylist': 'off',

    /*
     * https://eslint.org/docs/rules/id-length
     *
     * enforce minimum and maximum identifier lengths
     */
    'id-length': 'off',

    /*
     * https://eslint.org/docs/rules/id-match
     *
     * require identifiers to match a specified regular expression
     */
    'id-match': 'off',

    /*
     * https://eslint.org/docs/rules/implicit-arrow-linebreak
     *
     * enforce the location of arrow function bodies
     */
    'implicit-arrow-linebreak': ['error', 'beside'],

    /*
     * https://eslint.org/docs/rules/indent
     *
     * enforce consistent indentation
     */
    indent: [
      'error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
      },
    ],

    /*
     * https://eslint.org/docs/rules/jsx-quotes
     *
     * enforce the consistent use of either double or single quotes in JSX attributes
     */
    'jsx-quotes': 'off',

    /*
     * https://eslint.org/docs/rules/key-spacing
     *
     * enforce consistent spacing between keys and values in object literal properties
     */
    'key-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/keyword-spacing
     *
     * enforce consistent spacing before and after keywords
     */
    'keyword-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/line-comment-position
     *
     * enforce position of line comments
     */
    'line-comment-position': 'off',

    /*
     * https://eslint.org/docs/rules/linebreak-style
     *
     * enforce consistent linebreak style
     */
    'linebreak-style': 'error',

    /*
     * https://eslint.org/docs/rules/lines-around-comment
     *
     * require empty lines around comments
     */
    'lines-around-comment': 'off',

    /*
     * https://eslint.org/docs/rules/lines-between-class-members
     *
     * require or disallow an empty line between class members
     */
    'lines-between-class-members': 'off',

    /*
     * https://eslint.org/docs/rules/max-depth
     *
     * enforce a maximum depth that blocks can be nested
     */
    'max-depth': 'off',

    /*
     * https://eslint.org/docs/rules/max-len
     *
     * enforce a maximum line length
     */
    'max-len': ['error', 100, 2],

    /*
     * https://eslint.org/docs/rules/max-lines
     *
     * enforce a maximum number of lines per file
     */
    'max-lines': 'off',

    /*
     * https://eslint.org/docs/rules/max-lines-per-function
     *
     * enforce a maximum number of lines of code in a function
     */
    'max-lines-per-function': 'off',

    /*
     * https://eslint.org/docs/rules/max-nested-callbacks
     *
     * enforce a maximum depth that callbacks can be nested
     */
    'max-nested-callbacks': 'off',

    /*
     * https://eslint.org/docs/rules/max-params
     *
     * enforce a maximum number of parameters in function definitions
     */
    'max-params': ['error', 10],

    /*
     * https://eslint.org/docs/rules/max-statements
     *
     * enforce a maximum number of statements allowed in function blocks
     */
    'max-statements': 'off',

    /*
     * https://eslint.org/docs/rules/max-statements-per-line
     *
     * enforce a maximum number of statements allowed per line
     */
    'max-statements-per-line': 'off',

    /*
     * https://eslint.org/docs/rules/multiline-comment-style
     *
     * enforce a particular style for multiline comments
     */
    'multiline-comment-style': 'off',

    /*
     * https://eslint.org/docs/rules/multiline-ternary
     *
     * enforce newlines between operands of ternary expressions
     */
    'multiline-ternary': ['error', 'always-multiline'],

    /*
     * https://eslint.org/docs/rules/new-cap
     *
     * require constructor names to begin with a capital letter
     */
    'new-cap': ['error', {
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    /*
     * https://eslint.org/docs/rules/new-parens
     *
     * enforce or disallow parentheses when invoking a constructor with no arguments
     */
    'new-parens': 'error',

    /*
     * https://eslint.org/docs/rules/newline-per-chained-call
     *
     * require a newline after each call in a method chain
     */
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],

    /*
     * https://eslint.org/docs/rules/no-array-constructor
     *
     * disallow `Array` constructors
     */
    'no-array-constructor': 'error',

    /*
     * https://eslint.org/docs/rules/no-bitwise
     *
     * disallow bitwise operators
     */
    'no-bitwise': 'off',

    /*
     * https://eslint.org/docs/rules/no-continue
     *
     * disallow `continue` statements
     */
    'no-continue': 'off',

    /*
     * https://eslint.org/docs/rules/no-inline-comments
     *
     * disallow inline comments after code
     */
    'no-inline-comments': 'off',

    /*
     * https://eslint.org/docs/rules/no-lonely-if
     *
     * disallow `if` statements as the only statement in `else` blocks
     */
    'no-lonely-if': 'error',

    /*
     * https://eslint.org/docs/rules/no-mixed-operators
     *
     * disallow mixed binary operators
     */
    'no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],

    /*
     * https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     *
     * disallow mixed spaces and tabs for indentation
     */
    'no-mixed-spaces-and-tabs': 'error',

    /*
     * https://eslint.org/docs/rules/no-multi-assign
     *
     * disallow use of chained assignment expressions
     */
    'no-multi-assign': 'error',

    /*
     * https://eslint.org/docs/rules/no-multiple-empty-lines
     *
     * disallow multiple empty lines
     */
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],

    /*
     * https://eslint.org/docs/rules/no-negated-condition
     *
     * disallow negated conditions
     */
    'no-negated-condition': 'error',

    /*
     * https://eslint.org/docs/rules/no-nested-ternary
     *
     * disallow nested ternary expressions
     */
    'no-nested-ternary': 'error',

    /*
     * https://eslint.org/docs/rules/no-new-object
     *
     * disallow `Object` constructors
     */
    'no-new-object': 'error',

    /*
     * https://eslint.org/docs/rules/no-plusplus
     *
     * disallow the unary operators `++` and `--`
     */
    'no-plusplus': 'off',

    /*
     * https://eslint.org/docs/rules/no-restricted-syntax
     *
     * disallow specified syntax
     */
    'no-restricted-syntax': [
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
     * https://eslint.org/docs/rules/no-tabs
     *
     * disallow all tabs
     */
    'no-tabs': 'error',

    /*
     * https://eslint.org/docs/rules/no-ternary
     *
     * disallow ternary operators
     */
    'no-ternary': 'off',

    /*
     * https://eslint.org/docs/rules/no-trailing-spaces
     *
     * disallow trailing whitespace at the end of lines
     */
    'no-trailing-spaces': 'warn',

    /*
     * https://eslint.org/docs/rules/no-underscore-dangle
     *
     * disallow dangling underscores in identifiers
     */
    'no-underscore-dangle': 'off',

    /*
     * https://eslint.org/docs/rules/no-unneeded-ternary
     *
     * disallow ternary operators when simpler alternatives exist
     */
    'no-unneeded-ternary': ['error', {
      defaultAssignment: false,
    }],

    /*
     * https://eslint.org/docs/rules/no-whitespace-before-property
     *
     * disallow whitespace before properties
     */
    'no-whitespace-before-property': 'error',

    /*
     * https://eslint.org/docs/rules/nonblock-statement-body-position
     *
     * enforce the location of single-line statements
     */
    'nonblock-statement-body-position': 'error',

    /*
     * https://eslint.org/docs/rules/object-curly-newline
     *
     * enforce consistent line breaks after opening and before closing braces
     */
    'object-curly-newline': [
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
     * https://eslint.org/docs/rules/object-curly-spacing
     *
     * enforce consistent spacing inside braces
     */
    'object-curly-spacing': ['error', 'always'],

    /*
     * https://eslint.org/docs/rules/object-property-newline
     *
     * enforce placing object properties on separate lines
     */
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    /*
     * https://eslint.org/docs/rules/one-var
     *
     * enforce variables to be declared either together or separately in functions
     */
    'one-var': ['error', 'never'],

    /*
     * https://eslint.org/docs/rules/one-var-declaration-per-line
     *
     * require or disallow newlines around variable declarations
     */
    'one-var-declaration-per-line': ['error', 'always'],

    /*
     * https://eslint.org/docs/rules/operator-assignment
     *
     * require or disallow assignment operator shorthand where possible
     */
    'operator-assignment': 'error',

    /*
     * https://eslint.org/docs/rules/operator-linebreak
     *
     * enforce consistent linebreak style for operators
     */
    'operator-linebreak': ['error', 'before', {
      overrides: {
        '=': 'ignore',
      },
    }],

    /*
     * https://eslint.org/docs/rules/padded-blocks
     *
     * require or disallow padding within blocks
     */
    'padded-blocks': ['error', 'never'],

    /*
     * https://eslint.org/docs/rules/padding-line-between-statements
     *
     * require or disallow padding lines between statements
     */
    'padding-line-between-statements': [
      'error',

      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'break',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'continue',
      },
    ],

    /*
     * https://eslint.org/docs/rules/prefer-exponentiation-operator
     *
     * disallow the use of `Math.pow` in favor of the `**` operator
     */
    'prefer-exponentiation-operator': 'error',

    /*
     * https://eslint.org/docs/rules/prefer-object-spread
     *
     * disallow using Object.assign with an object literal as the first argument and prefer the use
     * of object spread instead.
     */
    'prefer-object-spread': 'error',

    /*
     * https://eslint.org/docs/rules/quote-props
     *
     * require quotes around object literal property names
     */
    'quote-props': ['error', 'as-needed', {
      keywords: false,
      numbers: false,
    }],

    /*
     * https://eslint.org/docs/rules/quotes
     *
     * enforce the consistent use of either backticks, double, or single quotes
     */
    quotes: ['error', 'single', {
      avoidEscape: true,
    }],

    /*
     * https://eslint.org/docs/rules/semi
     *
     * require or disallow semicolons instead of ASI
     */
    semi: 'error',

    /*
     * https://eslint.org/docs/rules/semi-spacing
     *
     * enforce consistent spacing before and after semicolons
     */
    'semi-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/semi-style
     *
     * enforce location of semicolons
     */
    'semi-style': 'error',

    /*
     * https://eslint.org/docs/rules/sort-keys
     *
     * require object keys to be sorted
     */
    'sort-keys': 'off',

    /*
     * https://eslint.org/docs/rules/sort-vars
     *
     * require variables within the same declaration block to be sorted
     */
    'sort-vars': 'off',

    /*
     * https://eslint.org/docs/rules/space-before-blocks
     *
     * enforce consistent spacing before blocks
     */
    'space-before-blocks': 'error',

    /*
     * https://eslint.org/docs/rules/space-before-function-paren
     *
     * enforce consistent spacing before `function` definition opening parenthesis
     */
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],

    /*
     * https://eslint.org/docs/rules/space-in-parens
     *
     * enforce consistent spacing inside parentheses
     */
    'space-in-parens': 'error',

    /*
     * https://eslint.org/docs/rules/space-infix-ops
     *
     * require spacing around infix operators
     */
    'space-infix-ops': 'error',

    /*
     * https://eslint.org/docs/rules/space-unary-ops
     *
     * enforce consistent spacing before or after unary operators
     */
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],

    /*
     * https://eslint.org/docs/rules/spaced-comment
     *
     * enforce consistent spacing after the `//` or `/*` in a comment
     */
    'spaced-comment': ['error', 'always', {
      line: {
        markers: ['!', '/'],
      },
      block: {
        markers: ['!'],
        balanced: true,
      },
    }],

    /*
     * https://eslint.org/docs/rules/switch-colon-spacing
     *
     * enforce spacing around colons of switch statements
     */
    'switch-colon-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/template-tag-spacing
     *
     * require or disallow spacing between template tags and their literals
     */
    'template-tag-spacing': 'error',

    /*
     * https://eslint.org/docs/rules/unicode-bom
     *
     * require or disallow Unicode byte order mark (BOM)
     */
    'unicode-bom': ['error', 'never'],

    /*
     * https://eslint.org/docs/rules/wrap-regex
     *
     * require parenthesis around regex literals
     */
    'wrap-regex': 'off',
  },
};
