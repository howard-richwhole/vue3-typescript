import { State as userState } from './modules/user'
import { State as webState } from './modules/web'
import { GetterTree } from 'vuex'

const getters: GetterTree<rootState, rootState> = {
  token: state => state.web.token,
}

export interface rootState {
  web: webState
  user: userState
}
// export interface Getters {
//   token: (state: rootState) => string | null
// }
export default getters
