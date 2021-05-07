import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ct:"广州",
    ci:20,
  },
  mutations: {
    picker(state,arr){
      state.ct=arr[0];
      state.ci=arr[1];
      console.log(state.ct);
      console.log(state.ci);
    },
  },
  actions: {
    picker({commit},arr){
      commit('picker',arr)
    },
  },
  modules: {
  }
})
