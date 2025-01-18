import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import user from './moduleUser';
import post from './modulePost';

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {

  },
  modules: {
    user,
    post
  }
})

export default store
