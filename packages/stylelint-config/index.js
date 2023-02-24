// https://stylelint.io/user-guide/get-started
module.exports = {
  extends: [
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
    // https://github.com/stormwarning/stylelint-config-recess-order
    'stylelint-config-recess-order',
    // https://github.com/prettier/stylelint-prettier
    'stylelint-prettier/recommended',
    // https://github.com/ota-meshi/stylelint-config-html
    'stylelint-config-html',
    // https://stylelint.io/user-guide/get-started#linting-css-like-languages-and-css-within-containers
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
  ],
  // plugins: [
  //   // https://github.com/hudochenkov/stylelint-order
  //   'stylelint-order',
  // ],
  plugins: ['stylelint-less'],
  rules: {
    'no-empty-source': null,
    'unit-no-unknown': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'color-no-invalid-hex': true,
    'less/color-no-invalid-hex': true,
  },
}
