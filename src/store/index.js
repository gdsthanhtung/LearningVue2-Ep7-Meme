import Vue from 'vue';
import Vuex from 'vuex';

import moduleUser from './moduleUser';
import modulePost from './modulePost';

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {

  },
  modules: {
    moduleUser, modulePost
  }
})

export default store
