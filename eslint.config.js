import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['coverage/**', 'node_modules/**'] },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022, // top-level await dans app.js
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    // au cas où les tests utilisent les globals Vitest sans import
    files: ['test/**/*.js'],
    languageOptions: {
      globals: { ...globals.node, describe: 'readonly', it: 'readonly', expect: 'readonly', vi: 'readonly', beforeEach: 'readonly', afterEach: 'readonly' },
    },
  },
]