import Vue from 'vue'
import Vuex from 'vuex'
import { state, getters, mutations, actions} from './store/index'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
})

store.commit('initialize');
export default store