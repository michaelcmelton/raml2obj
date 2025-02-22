const js = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const mochaPlugin = require('eslint-plugin-mocha');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  mochaPlugin.configs.flat.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.es6,
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
      },
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'mocha/no-mocha-arrows': 'off',
      'no-console': 'off',
      'prefer-const': 'error',
      eqeqeq: 'error',
      'no-useless-return': 'error',
    },
  },
];
