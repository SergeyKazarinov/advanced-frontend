module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
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
  ],
  rules: {
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
    'react/jsx-props-no-spreading': ['error', {
      html: 'ignore',
      exceptions: ['Link'],
    }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
