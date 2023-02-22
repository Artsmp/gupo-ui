import type { App } from 'vue'
import Button from './src/gp-button'
import CountTo from './src/gp-count-to'

export * from './src/gp-button'

const components = [Button, CountTo]

export function install(app: App) {
  components.forEach((comp) => {
    if (comp.install!) {
      app.use(comp)
    } else {
      app.component(comp.name, comp)
    }
  })
}

export default { install, components }
