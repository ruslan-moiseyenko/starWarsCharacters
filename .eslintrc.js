module.exports = {
  env: {
    'jest/globals': true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'babel.config.js', 'metro.config.js'],
  extends: ['@react-native-community', 'plugin:jest/recommended', 'prettier'],
  plugins: ['prettier', 'jest'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-unused-vars': 1,
    'array-bracket-spacing': ['error', 'never'],
    curly: ['error', 'multi-line'],
    'object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: true, objectsInObjects: true },
    ],
    'react/default-props-match-prop-types': ['error'],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': ['error'],
    'react-native/no-color-literals': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/no-unused-styles': 1,
    'react-native/split-platform-components': 2,
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
      },
      {
        usePrettierrc: true,
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['**/*.spec.[j|t]s', '**/*.spec.[j|t]sx'],
      env: {
        jest: true,
      },
    },
  ],
};
