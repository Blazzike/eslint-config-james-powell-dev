module.exports = {
  rules: {
    /*
     * https://eslint.vuejs.org/rules/comment-directive.html
     *
     * support comment-directives in <template>
     */
    'vue/comment-directive': 'error',

    /*
     * https://eslint.vuejs.org/rules/jsx-uses-vars.html
     *
     * prevent variables used in JSX to be marked as unused
     */
    'vue/jsx-uses-vars': 'error',
  },
};
