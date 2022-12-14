module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        'cypress/no-unnecessary-waiting': 0,
        'no-console': 'error',
        'no-alert': 'error',
        '@typescript-eslint/no-explicit-any': 0,
        'react/display-name': 0,
        'react-hooks/exhaustive-deps': 0,
        'sort-imports': 'off',
        'prettier/prettier': 'error',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'react/jsx-no-target-blank': 0,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-useless-return': 'error',
        'no-return-await': 'error',
        'no-else-return': 'error',
        '@typescript-eslint/no-var-requires': 0,
        'no-async-promise-executor': 0,
        'import/no-named-as-default': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/jsx-uses-react': 0,
        'react/react-in-jsx-scope': 0,
      },
    },
  ],
}
