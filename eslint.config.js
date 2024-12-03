// eslint.config.js
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'storybook-static/**']
  },
  {
    files: [
      'lib/**/*.{ts,tsx}',
      'stories/**/*.{ts,tsx}',
      'scripts/**/*.{ts,tsx}'
    ],
    languageOptions: {
      parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      prettier: prettierPlugin
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      ...eslintPlugin.configs['recommended-requiring-type-checking'].rules,
      'prettier/prettier': 'error'
    }
  }
];
