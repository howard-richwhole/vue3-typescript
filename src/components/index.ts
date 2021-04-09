import 'lodash'
import { App } from 'vue'
import veeValidate from './veeValidate'
import modal from './modal.vue'

export default {
  install(app: App): void {
    app.use(veeValidate)
    app.component('Modal', modal)
  },
}
