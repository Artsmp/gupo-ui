import DefaultTheme from 'vitepress/theme'
import GupoUI from 'gupo-ui'

import 'prism-theme-vars/base.css'
import './style.css'

// ui lib
// import 'ant-design-vue/dist/antd.less'
import 'gupo-ui/index.less'
// @ts-ignore
import Demo from '../components/demo.vue'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(GupoUI)
    app.component('Demo', Demo)
  },
}
