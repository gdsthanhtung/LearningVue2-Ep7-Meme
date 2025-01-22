import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import user from './moduleUser';
import post from './modulePost';

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isLoading: false
  },
  mutations: {
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {
    setIsLoading({commit}, isLoading = false) {
      commit('SET_IS_LOADING', isLoading);
    }
  },
  modules: {
    user,
    post
  }
})

export default store
