import type { App } from 'vue'
import Button from './gp-button'
import CountTo from './gp-count-to'

export * from './gp-button'

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
