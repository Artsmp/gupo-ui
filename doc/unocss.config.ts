import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
import { resolve } from 'path'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      collections: {
        'material-symbols': () =>
          import('@iconify-json/material-symbols').then((i) => i.icons as any),
      },
    }),
  ],
  include: [resolve(__dirname, '**/*')],
  exclude: [resolve(__dirname, 'node_modules/**/*'), 'ant-design-vue'],
  theme: {
    colors: {
      primary: {
        DEFAULT: '#2563eb',
        deep: '#1d4ed8',
      },
    },
  },
  shortcuts: [['icon-btn', 'cursor-pointer text-18 hover:text-green']],
})
