import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugins'

export default defineConfig({
  title: 'GUPO-UI',
  description: 'Based on ant-design-vue',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/docs/button', activeMatch: '/docs/.*' },
    ],
    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: '按钮', link: '/docs/button' },
          { text: '数字动画', link: '/docs/count-to' },
        ],
      },
    ],
  },
  markdown: {
    config: (md) => mdPlugin(md),
  },
})
