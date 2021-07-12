module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {},
    },
  ],
}
