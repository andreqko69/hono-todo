module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true, // For React client-side code
    es2022: true,
    node: true, // For Node.js server-side code
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    '@typescript-eslint',
    'prettier',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Next.js doesn't require React in scope
    'react/prop-types': 'off', // If using TypeScript, you don't need PropTypes
    'node/no-unsupported-features/es-syntax': 'off', // Allow ES modules in Node.js
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['src/server/**/*.ts', 'src/server/**/*.tsx'], // Server-side files
      env: {
        browser: false,
        node: true,
      },
      rules: {
        'react/jsx-no-undef': 'off', // React-related rules unnecessary for server
        'react/react-in-jsx-scope': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
      },
    },
  ],
};
