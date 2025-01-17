export default {
  checkLogin({ commit }, data) {
    if (data.email === 'admin@gmail.com' && data.password === 'admin') {
      commit('SET_ISLOGGED', true);
      return true;
    }else{
      commit('SET_ISLOGGED', false);
      return false;
    }
  },
  logout({ commit }) {
    commit('SET_ISLOGGED', false);
  }
}
