module.exports = {
  rules: {
    /*
     https://eslint.org/docs/rules/for-direction

     enforce "for" loop update clause moving the counter in the right direction.
     */
    'for-direction': 'error',

    /*
     https://eslint.org/docs/rules/getter-return

     enforce `return` statements in getters
     */
    'getter-return': ['error', {
      allowImplicit: true,
    }],

    /*
     https://eslint.org/docs/rules/no-async-promise-executor

     disallow using an async function as a Promise executor
     */
    'no-async-promise-executor': 'error',

    /*
     https://eslint.org/docs/rules/no-await-in-loop

     disallow `await` inside of loops
     */
    'no-await-in-loop': 'off',

    /*
     https://eslint.org/docs/rules/no-compare-neg-zero

     disallow comparing against -0
     */
    'no-compare-neg-zero': 'error',

    /*
     https://eslint.org/docs/rules/no-cond-assign

     disallow assignment operators in conditional expressions
     */
    'no-cond-assign': ['error', 'always'],

    /*
     https://eslint.org/docs/rules/no-console

     disallow the use of `console`
     */
    'no-console': 'warn',

    /*
     https://eslint.org/docs/rules/no-constant-condition

     disallow constant expressions in conditions
     */
    'no-constant-condition': 'warn',

    /*
     https://eslint.org/docs/rules/no-control-regex

     disallow control characters in regular expressions
     */
    'no-control-regex': 'warn',

    /*
     https://eslint.org/docs/rules/no-debugger

     disallow the use of `debugger`
     */
    'no-debugger': 'warn',

    /*
     https://eslint.org/docs/rules/no-dupe-args

     disallow duplicate arguments in `function` definitions
     */
    'no-dupe-args': 'error',

    /*
     https://eslint.org/docs/rules/no-dupe-else-if

     disallow duplicate conditions in if-else-if chains
     */
    'no-dupe-else-if': 'error',

    /*
     https://eslint.org/docs/rules/no-dupe-keys

     disallow duplicate keys in object literals
     */
    'no-dupe-keys': 'error',

    /*
     https://eslint.org/docs/rules/no-duplicate-case

     disallow duplicate case labels
     */
    'no-duplicate-case': 'error',

    /*
     https://eslint.org/docs/rules/no-empty

     disallow empty block statements
     */
    'no-empty': 'error',

    /*
     https://eslint.org/docs/rules/no-empty-character-class

     disallow empty character classes in regular expressions
     */
    'no-empty-character-class': 'error',

    /*
     https://eslint.org/docs/rules/no-ex-assign

     disallow reassigning exceptions in `catch` clauses
     */
    'no-ex-assign': 'error',

    /*
     https://eslint.org/docs/rules/no-extra-boolean-cast

     disallow unnecessary boolean casts
     */
    'no-extra-boolean-cast': 'error',

    /*
     https://eslint.org/docs/rules/no-extra-parens

     disallow unnecessary parentheses

     NOTICE: collides with no-mixed-operators rule
     */
    'no-extra-parens': ['off', 'all', {
      ignoreJSX: 'multi-line'
    }],

    /*
     https://eslint.org/docs/rules/no-extra-semi

     disallow unnecessary semicolons
     */
    'no-extra-semi': 'error',

    /*
     https://eslint.org/docs/rules/no-func-assign

     disallow reassigning `function` declarations
     */
    'no-func-assign': 'error',

    /*
     https://eslint.org/docs/rules/no-import-assign

     disallow assigning to imported bindings
     */
    'no-import-assign': 'error',

    /*
     https://eslint.org/docs/rules/no-inner-declarations

     disallow variable or `function` declarations in nested blocks
     */
    'no-inner-declarations': 'error',

    /*
     https://eslint.org/docs/rules/no-invalid-regexp

     disallow invalid regular expression strings in `RegExp` constructors
     */
    'no-invalid-regexp': 'error',

    /*
     https://eslint.org/docs/rules/no-irregular-whitespace

     disallow irregular whitespace
     */
    'no-irregular-whitespace': 'error',

    /*
     https://eslint.org/docs/rules/no-loss-of-precision

     disallow literal numbers that lose precision
     */
    'no-loss-of-precision': 'error',

    /*
     https://eslint.org/docs/rules/no-misleading-character-class

     disallow characters which are made with multiple code points in character class syntax
     */
    'no-misleading-character-class': 'error',

    /*
     https://eslint.org/docs/rules/no-obj-calls

     disallow calling global object properties as functions
     */
    'no-obj-calls': 'error',

    /*
     https://eslint.org/docs/rules/no-promise-executor-return

     disallow returning values from Promise executor functions
     */
    'no-promise-executor-return': 'error',

    /*
     https://eslint.org/docs/rules/no-prototype-builtins

     disallow calling some `Object.prototype` methods directly on objects
     */
    'no-prototype-builtins': 'error',

    /*
     https://eslint.org/docs/rules/no-regex-spaces

     disallow multiple spaces in regular expressions
     */
    'no-regex-spaces': 'error',

    /*
     https://eslint.org/docs/rules/no-setter-return

     disallow returning values from setters
     */
    'no-setter-return': 'error',

    /*
     https://eslint.org/docs/rules/no-sparse-arrays

     disallow sparse arrays
     */
    'no-sparse-arrays': 'error',

    /*
     https://eslint.org/docs/rules/no-template-curly-in-string

     disallow template literal placeholder syntax in regular strings
     */
    'no-template-curly-in-string': 'error',

    /*
     https://eslint.org/docs/rules/no-unexpected-multiline

     disallow confusing multiline expressions
     */
    'no-unexpected-multiline': 'error',

    /*
     https://eslint.org/docs/rules/no-unreachable

     disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
     */
    'no-unreachable': 'warn',

    /*
     https://eslint.org/docs/rules/no-unreachable-loop

     disallow loops with a body that allows only one iteration
     */
    'no-unreachable-loop': 'error',

    /*
     https://eslint.org/docs/rules/no-unsafe-finally

     disallow control flow statements in `finally` blocks
     */
    'no-unsafe-finally': 'error',

    /*
     https://eslint.org/docs/rules/no-unsafe-negation

     disallow negating the left operand of relational operators
     */
    'no-unsafe-negation': 'error',

    /*
     https://eslint.org/docs/rules/no-unsafe-optional-chaining

     disallow use of optional chaining in contexts where the `undefined` value is not allowed
     */
    'no-unsafe-optional-chaining': ['error', {
      disallowArithmeticOperators: true,
    }],

    /*
     https://eslint.org/docs/rules/no-useless-backreference

     disallow useless backreferences in regular expressions
     */
    'no-useless-backreference': 'error',

    /*
     https://eslint.org/docs/rules/require-atomic-updates

     disallow assignments that can lead to race conditions due to usage of `await` or `yield`
     */
    'require-atomic-updates': 'error',

    /*
     https://eslint.org/docs/rules/use-isnan

     require calls to `isNaN()` when checking for `NaN`
     */
    'use-isnan': 'error',

    /*
     https://eslint.org/docs/rules/valid-typeof

     enforce comparing `typeof` expressions against valid strings
     */
    'valid-typeof': 'error',
  },
};
