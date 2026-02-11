import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['src/js/vendor/*.js'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'prettier/prettier': 'warn',
      'no-console': 'warn',
    },
  },
];
