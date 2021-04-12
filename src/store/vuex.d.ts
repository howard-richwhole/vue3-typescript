import { Store } from 'vuex'
import { rootState } from './getters'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<rootState>
  }
}
