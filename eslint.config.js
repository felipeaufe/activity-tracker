import js from '@eslint/js';
   import globals from 'globals';
   import react from 'eslint-plugin-react';
   import reactHooks from 'eslint-plugin-react-hooks';
   import tseslint from '@typescript-eslint/eslint-plugin';
   import tsParser from '@typescript-eslint/parser';
   import prettier from 'eslint-config-prettier';

   export default [
     {
       ignores: ['dist'],
     },
     {
       files: ['**/*.{ts,tsx}'],
       languageOptions: {
         ecmaVersion: 2020,
         sourceType: 'module',
         globals: globals.browser,
         parser: tsParser,
       },
       plugins: {
         react,
         'react-hooks': reactHooks,
         '@typescript-eslint': tseslint,
       },
       rules: {
         ...react.configs.recommended.rules,
         ...reactHooks.configs.recommended.rules,
         ...tseslint.configs.recommended.rules,
         'react/react-in-jsx-scope': 'off',
         '@typescript-eslint/explicit-module-boundary-types': 'off',
         'react/jsx-uses-react': 'off',
         'react/jsx-uses-vars': 'error',
       },
       settings: {
         react: {
           version: 'detect',
         },
       },
     },
     prettier,
   ];