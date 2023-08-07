module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    // not needed as we are running React 17
    'react/prop-types': 0,
    'react/jsx-boolean-value': 2,
    'react/no-access-state-in-setstate': 2,
    'react/jsx-no-useless-fragment': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    'react/jsx-curly-brace-presence': [
      2,
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/no-array-index-key': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/defined-types-are-used': 0,
    'prefer-const': 0,
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
