import { Store } from 'vuex'
import { Opt } from './index'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<Opt>
  }
}
