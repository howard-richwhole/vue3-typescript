// store.ts
import { InjectionKey } from 'vue'
import {
  createStore,
  useStore as baseUseStore,
  Store,
  Module,
  GetterTree,
} from 'vuex'
import user, { State as userState } from './modules/user'
import web, { State as webState } from './modules/web'
import getters, { rootState } from './getters'

interface Opt {
  modules: { user: Module<userState, Opt>; web: Module<webState, Opt> }
  getters: GetterTree<rootState, rootState>
}

const key: InjectionKey<Store<Opt>> = Symbol()
// define your own `useStore` composition function
export function useStore(): Store<Opt> {
  return baseUseStore(key)
}

export default createStore<rootState>({
  getters,
  modules: {
    user,
    web,
  },
})
