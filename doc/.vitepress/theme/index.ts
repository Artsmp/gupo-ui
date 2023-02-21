import DefaultTheme from 'vitepress/theme'
import GupoUI from 'gupo-ui'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(GupoUI)
  },
}
