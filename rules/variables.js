module.exports = {
  rules: {
    /*
     * https://eslint.org/docs/rules/init-declarations
     *
     * require or disallow initialization in variable declarations
     */
    'init-declarations': 'off',

    /*
     * https://eslint.org/docs/rules/no-delete-var
     *
     * disallow deleting variables
     */
    'no-delete-var': 'error',

    /*
     * https://eslint.org/docs/rules/no-label-var
     *
     * disallow labels that share a name with a variable
     */
    'no-label-var': 'error',

    /*
     * https://eslint.org/docs/rules/no-restricted-globals
     *
     * disallow specified global variables
     */
    'no-restricted-globals': [
      'error',

      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead',
      },

      /*
       * thank you
       * https://github.com/facebook/create-react-app/blob/main/packages/confusing-browser-globals
       */
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],

    /*
     * https://eslint.org/docs/rules/no-shadow
     *
     * disallow variable declarations from shadowing variables declared in the outer scope
     */
    'no-shadow': 'error',

    /*
     * https://eslint.org/docs/rules/no-shadow-restricted-names
     *
     * disallow identifiers from shadowing restricted names
     */
    'no-shadow-restricted-names': 'error',

    /*
     * https://eslint.org/docs/rules/no-undef
     *
     * disallow the use of undeclared variables unless mentioned in `/!* global *!/` comments
     */
    'no-undef': 'error',

    /*
     * https://eslint.org/docs/rules/no-undef-init
     *
     * disallow initializing variables to `undefined`
     */
    'no-undef-init': 'error',

    /*
     * https://eslint.org/docs/rules/no-undefined
     *
     * disallow the use of `undefined` as an identifier
     */
    'no-undefined': 'error',

    /*
     * https://eslint.org/docs/rules/no-unused-vars
     *
     * disallow unused variables
     */
    'no-unused-vars': 'error',

    /*
     * https://eslint.org/docs/rules/no-use-before-define
     *
     * disallow the use of variables before they are defined
     */
    'no-use-before-define': 'error',
  },
};
