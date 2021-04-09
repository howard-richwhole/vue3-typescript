import { Commit } from 'vuex'

export interface State {
  count: number
}
const state = (): State => {
  return {
    count: 55,
  }
}

const mutations = {
  increment(state: State): void {
    state.count++
  },
}
const actions = {
  increment({ commit }: { commit: Commit }): void {
    commit('increment')
  },
}

export default { namespaced: true, state, mutations, actions }
