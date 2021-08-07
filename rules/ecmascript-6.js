module.exports = {
  rules: {
    /*
     https://eslint.org/docs/rules/arrow-body-style

     require braces around arrow function bodies
     */
    'arrow-body-style': 'error',

    /*
     https://eslint.org/docs/rules/arrow-parens

     require parentheses around arrow function arguments
     */
    'arrow-parens': 'error',

    /*
     https://eslint.org/docs/rules/arrow-spacing

     enforce consistent spacing before and after the arrow in arrow functions
     */
    'arrow-spacing': 'error',

    /*
     https://eslint.org/docs/rules/constructor-super

     require `super()` calls in constructors
     */
    'constructor-super': 'error',

    /*
     https://eslint.org/docs/rules/generator-star-spacing

     enforce consistent spacing around `*` operators in generator functions
     */
    'generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],

    /*
     https://eslint.org/docs/rules/no-class-assign

     disallow reassigning class members
     */
    'no-class-assign': 'error',

    /*
     https://eslint.org/docs/rules/no-confusing-arrow

     disallow arrow functions where they could be confused with comparisons
     */
    'no-confusing-arrow': 'error',

    /*
     https://eslint.org/docs/rules/no-const-assign

     disallow reassigning `const` variables
     */
    'no-const-assign': 'error',

    /*
     https://eslint.org/docs/rules/no-dupe-class-members

     disallow duplicate class members
     */
    'no-dupe-class-members': 'error',

    /*
     https://eslint.org/docs/rules/no-duplicate-imports

     disallow duplicate module imports
     */
    'no-duplicate-imports': 'error',

    /*
     https://eslint.org/docs/rules/no-new-symbol

     disallow `new` operators with the `Symbol` object
     */
    'no-new-symbol': 'error',

    /*
     https://eslint.org/docs/rules/no-restricted-exports

     disallow specified names in exports
     */
    'no-restricted-exports': ['error', {
      restrictedNamedExports: [
        'default',
        'then',
      ],
    }],

    /*
     https://eslint.org/docs/rules/no-restricted-imports

     disallow specified modules when loaded by `import`
     */
    'no-restricted-imports': 'off',

    /*
     https://eslint.org/docs/rules/no-this-before-super

     disallow `this`/`super` before calling `super()` in constructors
     */
    'no-this-before-super': 'error',

    /*
     https://eslint.org/docs/rules/no-useless-computed-key

     disallow unnecessary computed property keys in objects and classes
     */
    'no-useless-computed-key': 'error',

    /*
     https://eslint.org/docs/rules/no-useless-constructor

     disallow unnecessary constructors
     */
    'no-useless-constructor': 'error',

    /*
     https://eslint.org/docs/rules/no-useless-rename

     disallow renaming import, export, and destructured assignments to the same name
     */
    'no-useless-rename': 'error',

    /*
     https://eslint.org/docs/rules/no-var

     require `let` or `const` instead of `var`
     */
    'no-var': 'error',

    /*
     https://eslint.org/docs/rules/object-shorthand

     require or disallow method and property shorthand syntax for object literals
     */
    'object-shorthand': 'error',

    /*
     https://eslint.org/docs/rules/prefer-arrow-callback

     require using arrow functions for callbacks
     */
    'prefer-arrow-callback': 'error',

    /*
     https://eslint.org/docs/rules/prefer-const

     require `const` declarations for variables that are never reassigned after declared
     */
    'prefer-const': 'error',

    /*
     https://eslint.org/docs/rules/prefer-destructuring

     require destructuring from arrays and/or objects
     */
    'prefer-destructuring': ['error'],

    /*
     https://eslint.org/docs/rules/prefer-numeric-literals

     disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
     */
    'prefer-numeric-literals': 'error',

    /*
     https://eslint.org/docs/rules/prefer-rest-params

     require rest parameters instead of `arguments`
     */
    'prefer-rest-params': 'error',

    /*
     https://eslint.org/docs/rules/prefer-spread

     require spread operators instead of `.apply()`
     */
    'prefer-spread': 'error',

    /*
     https://eslint.org/docs/rules/prefer-template

     require template literals instead of string concatenation
     */
    'prefer-template': 'error',

    /*
     https://eslint.org/docs/rules/require-yield

     require generator functions to contain `yield`
     */
    'require-yield': 'error',

    /*
     https://eslint.org/docs/rules/rest-spread-spacing

     enforce spacing between rest and spread operators and their expressions
     */
    'rest-spread-spacing': 'error',

    /*
     https://eslint.org/docs/rules/sort-imports

     enforce sorted import declarations within modules
     */
    'sort-imports': 'off',

    /*
     https://eslint.org/docs/rules/symbol-description

     require symbol descriptions
     */
    'symbol-description': 'error',

    /*
     https://eslint.org/docs/rules/template-curly-spacing

     require or disallow spacing around embedded expressions of template strings
     */
    'template-curly-spacing': 'error',

    /*
     https://eslint.org/docs/rules/yield-star-spacing

     require or disallow spacing around the `*` in `yield*` expressions
     */
    'yield-star-spacing': ['error', 'after'],
  }
};
