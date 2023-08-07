module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'kss-fsd-imports',
    'unused-imports',
  ],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': [0],
    'react/react-default-props': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'no-shadow': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^__' }],
    'no-underscore-dangle': 'off',
    'react/jsx-props-no-spreading': ['error', { html: 'ignore', exceptions: ['Link'] }],
    'max-len': [2, { ignoreComments: true, code: 120 }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'kss-fsd-imports/path-checker': ['error', { alias: '@' }],
    'kss-fsd-imports/public-api-imports': ['error', {
      alias: '@',
      testFilesPatterns: ['**/*.test.ts', '**/*.test.ts', '**/StoreDecorator.tsx'],
    }],
    'kss-fsd-imports/layer-imports': ['error', {
      alias: '@',
      ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
    }],
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
    rules: { 'i18next/no-literal-string': 'off' },
  }],
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
};
