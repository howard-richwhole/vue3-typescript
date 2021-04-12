import globalComp from './components'
import globalUtils from './utils'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store, { key } from './store'
import './style/index.sass'

createApp(App)
  .use(store, key)
  .use(router)
  .use(globalComp)
  .use(globalUtils)
  .mount('#app')
