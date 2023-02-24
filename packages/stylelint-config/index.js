// https://stylelint.io/user-guide/get-started
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-vue',
  ],
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    // {
    //   files: '**/*.scss',
    //   customSyntax: 'postcss-scss',
    // },
    // 若项目中存在less文件，添加以下配置
    {
      files: '**/*.less',
      customSyntax: 'postcss-less',
    },
  ],
  rules: {
    'no-empty-source': null,
    'unit-no-unknown': null,
    'value-no-vendor-prefix': null,
    'selector-class-pattern': null,
    'at-rule-no-unknown': null,
    'color-no-invalid-hex': true,
  },
}
