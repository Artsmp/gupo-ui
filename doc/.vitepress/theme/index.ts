import DefaultTheme from 'vitepress/theme'
import GupoUI from 'gupo-ui'
// @ts-ignore
import Demo from '../components/demo.vue'
import 'prismjs/themes/prism-funky.min.css'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(GupoUI)
    app.component('Demo', Demo)
  },
}
