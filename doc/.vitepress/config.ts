import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GUPO-UI',
  description: 'Based on ant-design-vue',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: [
      {
        text: '基础组件',
        items: [
          { text: '按钮', link: '/components/button' },
          { text: '图标', link: '/components/icon' },
        ],
      },
    ],
  },
})
