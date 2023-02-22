import DefaultTheme from 'vitepress/theme'
import GupoUI from 'gupo-ui'

import 'uno.css'
import 'prism-theme-vars/base.css'
import './style.css'

// @ts-ignore
import Demo from '../components/demo.vue'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(GupoUI)
    app.component('Demo', Demo)
  },
}
