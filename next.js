module.exports = {
  extends: [
    require.resolve('./react'),
  ],
  plugins: ['@next/next'],
  rules: {
    /*
     * https://nextjs.org/docs/messages/google-font-display
     *
     * Enforce optional or swap font-display behavior with Google Fonts
     */
    '@next/next/google-font-display': 'error',

    /*
     * https://nextjs.org/docs/messages/google-font-preconnect
     *
     * Enforce preconnect usage with Google Fonts
     */
    '@next/next/google-font-preconnect': 'error',

    // /*
    //  * https://nextjs.org/docs/messages/link-passhref
    //  *
    //  * Enforce passHref prop usage with custom Link components
    //  */
    // '@next/next/link-passhref': 'error',

    /*
     * https://nextjs.org/docs/messages/no-css-tags
     *
     * Prevent manual stylesheet tags
     */
    '@next/next/no-css-tags': 'error',

    /*
     * https://nextjs.org/docs/messages/no-document-import-in-page
     *
     * Disallow importing next/document outside of pages/document.js
     */
    '@next/next/no-document-import-in-page': 'error',

    /*
     * https://nextjs.org/docs/messages/no-head-import-in-document
     *
     * Disallow importing next/head in pages/document.js
     */
    '@next/next/no-head-import-in-document': 'error',

    /*
     * https://nextjs.org/docs/messages/no-html-link-for-pages
     *
     * Prohibit HTML anchor links to pages without a Link component
     */
    '@next/next/no-html-link-for-pages': 'error',

    /*
     * https://nextjs.org/docs/messages/no-img-element
     *
     * Prohibit usage of HTML <img> element
     */
    '@next/next/no-img-element': 'warn',

    /*
     * https://nextjs.org/docs/messages/no-head-element
     *
     * Prohibit usage of HTML <head> element
     */
    '@next/next/no-head-element': 'error',

    /*
     * https://nextjs.org/docs/messages/no-page-custom-font
     *
     * Prevent page-only custom fonts
     */
    '@next/next/no-page-custom-font': 'error',

    /*
     * https://nextjs.org/docs/messages/no-sync-scripts
     *
     * Forbid synchronous scripts
     */
    '@next/next/no-sync-scripts': 'error',

    /*
     * https://nextjs.org/docs/messages/no-title-in-document-head
     *
     * Disallow using <title> with Head from next/document
     */
    '@next/next/no-title-in-document-head': 'error',

    /*
     * https://nextjs.org/docs/messages/no-unwanted-polyfillio
     *
     * Prevent duplicate polyfills from Polyfill.io
     */
    '@next/next/no-unwanted-polyfillio': 'error',

    /*
     * https://nextjs.org/docs/messages/inline-script-id
     *
     * Enforce id attribute on next/script components with inline content
     */
    '@next/next/inline-script-id': 'error',

    /*
     * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
     *
     * Ensure no typos were made declaring Next.js's data fetching function
     */
    '@next/next/no-typos': 'error',

    /*
     * https://nextjs.org/docs/messages/next-script-for-ga
     *
     * Use the Script component to defer loading of the script until necessary.
     */
    '@next/next/next-script-for-ga': 'error',

    /*
     * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
     */
    '@next/next/no-server-import-in-page': 'error',

    // /*
    //  * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
    //  */
    // '@next/next/no-script-in-document': 'error',

    /*
     * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
     */
    '@next/next/no-duplicate-head': 'warn',

    /*
     * https://nextjs.org/docs/basic-features/eslint#eslint-plugin
     */
    '@next/next/no-script-component-in-head': 'error',
  },
};
