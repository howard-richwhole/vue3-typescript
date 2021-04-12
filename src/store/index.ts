// store.ts
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import user, { State as userState } from './modules/user'
import web, { State as webState } from './modules/web'
import getters from './getters'

export const key: InjectionKey<Store<rootState>> = Symbol()
// define your own `useStore` composition function
export function useStore(): Store<rootState> {
  return baseUseStore(key)
}
export interface rootState {
  web: webState
  user: userState
}

export default createStore<rootState>({
  getters,
  modules: {
    user,
    web,
  },
})
