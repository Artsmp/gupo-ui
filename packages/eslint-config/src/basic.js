module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
}
