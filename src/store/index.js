import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ct:"广州",
    ci:20
  },
  mutations: {
    picker(state,val1,val2){
      state.ct=val1;
      state.ci=val2;
    }
  },
  actions: {
    picker({commit},val1,val2){
      commit('picker',val1,val2)
    }
  },
  modules: {
  }
})
