import { LocalStorage } from 'storage-manager-js'
import { Commit } from 'vuex'

export interface State {
  token: string | null
  size: { vw: number; vh: number }
}

const state = (): State => {
  return {
    token: LocalStorage.get('token'),
    size: { vw: innerWidth, vh: innerHeight },
  }
}

const mutations = {
  SET_TOKEN(state: State, token: string): void {
    if (token) {
      state.token = token
      LocalStorage.set('token', state.token)
    } else {
      LocalStorage.delete('token')
    }
  },
  SET_SIZE(state: State): void {
    state.size = { vw: innerWidth, vh: innerHeight }
  },
}

const actions = {
  detectSize({ commit }: { commit: Commit }): void {
    commit('SET_SIZE')
    addEventListener('resize', () => {
      commit('SET_SIZE')
    })
  },
}

export default { namespaced: true, state, mutations, actions }
