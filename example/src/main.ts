import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import GupoUI from 'gupo-ui'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
console.log('GupoUI: ', GupoUI)

createApp(App).use(GupoUI).use(antd).mount('#app')
