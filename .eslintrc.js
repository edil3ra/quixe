module.exports = {
  extends: ['@react-native-community', 'eslint-config-prettier'],
  rules: {
    'react-native/no-inline-styles': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['off', { allowAsProps: true }],
    '@typescript-eslint/no-unused-vars': 'warn',
  },
}
