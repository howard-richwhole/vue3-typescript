import { GetterTree } from 'vuex'
import { rootState } from './index'

const getters: GetterTree<rootState, rootState> = {
  token: state => state.web.token,
}

export default getters
