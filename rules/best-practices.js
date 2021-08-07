module.exports = {
  rules: {
    /*
     * https://eslint.org/docs/rules/accessor-pairs
     *
     * enforce getter and setter pairs in objects and classes
     */
    'accessor-pairs': 'off',

    /*
     * https://eslint.org/docs/rules/array-callback-return
     *
     * enforce `return` statements in callbacks of array methods
     */
    'array-callback-return': [
      'error', {
        allowImplicit: true,
      },
    ],

    /*
     * https://eslint.org/docs/rules/block-scoped-var
     *
     * enforce the use of variables within the scope they are defined
     */
    'block-scoped-var': 'error',

    /*
     * https://eslint.org/docs/rules/class-methods-use-this
     *
     * enforce that class methods utilize `this`
     */
    'class-methods-use-this': 'off',

    /*
     * https://eslint.org/docs/rules/complexity
     *
     * enforce a maximum cyclomatic complexity allowed in a program
     */
    complexity: 'off',

    /*
     * https://eslint.org/docs/rules/consistent-return
     *
     * require `return` statements to either always or never specify values
     */
    'consistent-return': 'error',

    /*
     * https://eslint.org/docs/rules/curly
     *
     * enforce consistent brace style for all control statements
     */
    curly: 'error',

    /*
     * https://eslint.org/docs/rules/default-case
     *
     * require `default` cases in `switch` statements
     */
    'default-case': 'error',

    /*
     * https://eslint.org/docs/rules/default-case-last
     *
     * enforce default clauses in switch statements to be last
     */
    'default-case-last': 'error',

    /*
     * https://eslint.org/docs/rules/default-param-last
     *
     * enforce default parameters to be last
     */
    'default-param-last': 'error',

    /*
     * https://eslint.org/docs/rules/dot-location
     *
     * enforce consistent newlines before and after dots
     */
    'dot-location': 'off',

    /*
     * https://eslint.org/docs/rules/dot-notation
     *
     * enforce dot notation whenever possible
     */
    'dot-notation': 'error',

    /*
     * https://eslint.org/docs/rules/eqeqeq
     *
     * require the use of `===` and `!==`
     */
    eqeqeq: [
      'error', 'always', {
        null: 'ignore',
      },
    ],

    /*
     * https://eslint.org/docs/rules/grouped-accessor-pairs
     *
     * require grouped accessor pairs in object literals and classes
     */
    'grouped-accessor-pairs': 'error',

    /*
     * https://eslint.org/docs/rules/guard-for-in
     *
     * require `for-in` loops to include an `if` statement
     */
    'guard-for-in': 'error',

    /*
     * https://eslint.org/docs/rules/max-classes-per-file
     *
     * enforce a maximum number of classes per file
     */
    'max-classes-per-file': 'error',

    /*
     * https://eslint.org/docs/rules/no-alert
     *
     * disallow the use of `alert`, `confirm`, and `prompt`
     */
    'no-alert': 'warn',

    /*
     * https://eslint.org/docs/rules/no-caller
     *
     * disallow the use of `arguments.caller` or `arguments.callee`
     */
    'no-caller': 'error',

    /*
     * https://eslint.org/docs/rules/no-case-declarations
     *
     * disallow lexical declarations in case clauses
     */
    'no-case-declarations': 'error',

    /*
     * https://eslint.org/docs/rules/no-constructor-return
     *
     * disallow returning value from constructor
     */
    'no-constructor-return': 'error',

    /*
     * https://eslint.org/docs/rules/no-div-regex
     *
     * disallow division operators explicitly at the beginning of regular expressions
     */
    'no-div-regex': 'off',

    /*
     * https://eslint.org/docs/rules/no-else-return
     *
     * disallow `else` blocks after `return` statements in `if` statements
     */
    'no-else-return': [
      'error', {
        allowElseIf: false,
      },
    ],

    /*
     * https://eslint.org/docs/rules/no-empty-function
     *
     * disallow empty functions
     */
    'no-empty-function': 'error',

    /*
     * https://eslint.org/docs/rules/no-empty-pattern
     *
     * disallow empty destructuring patterns
     */
    'no-empty-pattern': 'error',

    /*
     * https://eslint.org/docs/rules/no-eq-null
     *
     * disallow `null` comparisons without type-checking operators
     */
    'no-eq-null': 'off',

    /*
     * https://eslint.org/docs/rules/no-eval
     *
     * disallow the use of `eval()`
     */
    'no-eval': 'error',

    /*
     * https://eslint.org/docs/rules/no-extend-native
     *
     * disallow extending native types
     */
    'no-extend-native': 'error',

    /*
     * https://eslint.org/docs/rules/no-extra-bind
     *
     * disallow unnecessary calls to `.bind()`
     */
    'no-extra-bind': 'error',

    /*
     * https://eslint.org/docs/rules/no-extra-label
     *
     * disallow unnecessary labels
     */
    'no-extra-label': 'error',

    /*
     * https://eslint.org/docs/rules/no-fallthrough
     *
     * disallow fallthrough of `case` statements
     */
    'no-fallthrough': 'error',

    /*
     * https://eslint.org/docs/rules/no-floating-decimal
     *
     * disallow leading or trailing decimal points in numeric literals
     */
    'no-floating-decimal': 'error',

    /*
     * https://eslint.org/docs/rules/no-global-assign
     *
     * disallow assignments to native objects or read-only global variables
     */
    'no-global-assign': 'error',

    /*
     * https://eslint.org/docs/rules/no-implicit-coercion
     *
     * disallow shorthand type conversions
     */
    'no-implicit-coercion': [
      'error', {
        number: false,
      },
    ],

    /*
     * https://eslint.org/docs/rules/no-implicit-globals
     *
     * disallow declarations in the global scope
     */
    'no-implicit-globals': 'off',

    /*
     * https://eslint.org/docs/rules/no-implied-eval
     *
     * disallow the use of `eval()`-like methods
     */
    'no-implied-eval': 'error',

    /*
     * https://eslint.org/docs/rules/no-invalid-this
     *
     * disallow `this` keywords outside of classes or class-like objects
     */
    'no-invalid-this': 'error',

    /*
     * https://eslint.org/docs/rules/no-iterator
     *
     * disallow the use of the `__iterator__` property
     */
    'no-iterator': 'error',

    /*
     * https://eslint.org/docs/rules/no-labels
     *
     * disallow labeled statements
     */
    'no-labels': 'error',

    /*
     * https://eslint.org/docs/rules/no-lone-blocks
     *
     * disallow unnecessary nested blocks
     */
    'no-lone-blocks': 'error',

    /*
     * https://eslint.org/docs/rules/no-loop-func
     *
     * disallow function declarations that contain unsafe references inside loop statements
     */
    'no-loop-func': 'error',

    /*
     * https://eslint.org/docs/rules/no-magic-numbers
     *
     * disallow magic numbers
     */
    'no-magic-numbers': 'off',

    /*
     * https://eslint.org/docs/rules/no-multi-spaces
     *
     * disallow multiple spaces
     */
    'no-multi-spaces': 'error',

    /*
     * https://eslint.org/docs/rules/no-multi-str
     *
     * disallow multiline strings
     */
    'no-multi-str': 'error',

    /*
     * https://eslint.org/docs/rules/no-new
     *
     * disallow `new` operators outside of assignments or comparisons
     */
    'no-new': 'warn',

    /*
     * https://eslint.org/docs/rules/no-new-func
     *
     * disallow `new` operators with the `Function` object
     */
    'no-new-func': 'error',

    /*
     * https://eslint.org/docs/rules/no-new-wrappers
     *
     * disallow `new` operators with the `String`, `Number`, and `Boolean` objects
     */
    'no-new-wrappers': 'error',

    /*
     * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
     *
     * disallow `\8` and `\9` escape sequences in string literals
     */
    'no-nonoctal-decimal-escape': 'error',

    /*
     * https://eslint.org/docs/rules/no-octal
     *
     * disallow octal literals
     */
    'no-octal': 'error',

    /*
     * https://eslint.org/docs/rules/no-octal-escape
     *
     * disallow octal escape sequences in string literals
     */
    'no-octal-escape': 'error',

    /*
     * https://eslint.org/docs/rules/no-param-reassign
     *
     * disallow reassigning `function` parameters
     */
    'no-param-reassign': 'warn',

    /*
     * https://eslint.org/docs/rules/no-proto
     *
     * disallow the use of the `__proto__` property
     */
    'no-proto': 'error',

    /*
     * https://eslint.org/docs/rules/no-redeclare
     *
     * disallow variable redeclaration
     */
    'no-redeclare': 'error',

    /*
     * https://eslint.org/docs/rules/no-restricted-properties
     *
     * disallow certain properties on certain objects
     */
    'no-restricted-properties': [
      'error', {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      }, {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],

    /*
     * https://eslint.org/docs/rules/no-return-assign
     *
     * disallow assignment operators in `return` statements
     */
    'no-return-assign': ['error', 'always'],

    /*
     * https://eslint.org/docs/rules/no-return-await
     *
     * disallow unnecessary `return await`
     */
    'no-return-await': 'error',

    /*
     * https://eslint.org/docs/rules/no-script-url
     *
     * disallow `javascript:` urls
     */
    'no-script-url': 'error',

    /*
     * https://eslint.org/docs/rules/no-self-assign
     *
     * disallow assignments where both sides are exactly the same
     */
    'no-self-assign': 'error',

    /*
     * https://eslint.org/docs/rules/no-self-compare
     *
     * disallow comparisons where both sides are exactly the same
     */
    'no-self-compare': 'error',

    /*
     * https://eslint.org/docs/rules/no-sequences
     *
     * disallow comma operators
     */
    'no-sequences': 'error',

    /*
     * https://eslint.org/docs/rules/no-throw-literal
     *
     * disallow throwing literals as exceptions
     */
    'no-throw-literal': 'error',

    /*
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     *
     * disallow unmodified loop conditions
     */
    'no-unmodified-loop-condition': 'off',

    /*
     * https://eslint.org/docs/rules/no-unused-expressions
     *
     * disallow unused expressions
     */
    'no-unused-expressions': 'error',

    /*
     * https://eslint.org/docs/rules/no-unused-labels
     *
     * disallow unused labels
     */
    'no-unused-labels': 'error',

    /*
     * https://eslint.org/docs/rules/no-useless-call
     *
     * disallow unnecessary calls to `.call()` and `.apply()`
     */
    'no-useless-call': 'error',

    /*
     * https://eslint.org/docs/rules/no-useless-catch
     *
     * disallow unnecessary `catch` clauses
     */
    'no-useless-catch': 'error',

    /*
     * https://eslint.org/docs/rules/no-useless-concat
     *
     * disallow unnecessary concatenation of literals or template literals
     */
    'no-useless-concat': 'error',

    /*
     * https://eslint.org/docs/rules/no-useless-escape
     *
     * disallow unnecessary escape characters
     */
    'no-useless-escape': 'error',

    /*
     * https://eslint.org/docs/rules/no-useless-return
     *
     * disallow redundant return statements
     */
    'no-useless-return': 'error',

    /*
     * https://eslint.org/docs/rules/no-void
     *
     * disallow `void` operators
     */
    'no-void': 'error',

    /*
     * https://eslint.org/docs/rules/no-warning-comments
     *
     * disallow specified warning terms in comments
     */
    'no-warning-comments': 'off',

    /*
     * https://eslint.org/docs/rules/no-with
     *
     * disallow `with` statements
     */
    'no-with': 'error',

    /*
     * https://eslint.org/docs/rules/prefer-named-capture-group
     *
     * enforce using named capture group in regular expression
     */
    'prefer-named-capture-group': 'off',

    /*
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     *
     * require using Error objects as Promise rejection reasons
     */
    'prefer-promise-reject-errors': [
      'error', {
        allowEmptyReject: true,
      },
    ],

    /*
     * https://eslint.org/docs/rules/prefer-regex-literals
     *
     * disallow use of the `RegExp` constructor in favor of regular expression literals
     */
    'prefer-regex-literals': 'error',

    /*
     * https://eslint.org/docs/rules/radix
     *
     * enforce the consistent use of the radix argument when using `parseInt()`
     */
    radix: 'error',

    /*
     * https://eslint.org/docs/rules/require-await
     *
     * disallow async functions which have no `await` expression
     */
    'require-await': 'off',

    /*
     * https://eslint.org/docs/rules/require-unicode-regexp
     *
     * enforce the use of `u` flag on RegExp
     */
    'require-unicode-regexp': 'off',

    /*
     * https://eslint.org/docs/rules/vars-on-top
     *
     * require `var` declarations be placed at the top of their containing scope
     */
    'vars-on-top': 'error',

    /*
     * https://eslint.org/docs/rules/wrap-iife
     *
     * require parentheses around immediate `function` invocations
     */
    'wrap-iife': 'error',

    /*
     * https://eslint.org/docs/rules/yoda
     *
     * require or disallow "Yoda" conditions
     */
    yoda: 'error',
  },
};
