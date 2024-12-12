import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'node_modules'] }, // Added 'node_modules' for better performance
  {
    files: ['**/*.{jsx,tsx}'], // Support TypeScript files
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Added Node.js globals for better compatibility
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off', // Disable to prevent overly strict rules
      'react/jsx-uses-react': 'off', // No need for React import with new JSX transform
      'react/react-in-jsx-scope': 'off', // No need for React in scope with new JSX transform
      'react/prop-types': 'off', // Disable prop-types for projects using TypeScript
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Warn on console.log usage
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Allow unused variables prefixed with _
    },
  },
];
