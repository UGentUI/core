// eslint.config.js
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': eslintPlugin
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      ...eslintPlugin.configs['recommended-requiring-type-checking'].rules
    },
    ignores: ['node_modules/**']
  },
  eslintPluginPrettierRecommended
];
