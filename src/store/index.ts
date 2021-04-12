// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import user from './modules/user'
import web from './modules/web'
import getters, { rootState } from './getters'

export const key: InjectionKey<Store<rootState>> = Symbol()
// define your own `useStore` composition function
export function useStore(): Store<rootState> {
  return baseUseStore(key)
}

export default createStore<rootState>({
  getters,
  modules: {
    user,
    web,
  },
})
