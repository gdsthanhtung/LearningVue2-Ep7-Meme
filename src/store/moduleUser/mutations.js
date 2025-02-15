import Vue from 'vue';

export default {
  SET_CURRENT_USER(state, user) {
    state.currentUser = user;
  },
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem('token', token);
  },
  SET_USER_INFO(state, user) {
    Vue.set(state.users, user.USERID, user);
  }
}
