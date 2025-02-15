import axiosInstance from "../../plugins/axios";

export default {
  async getUserById({ commit }, { userId }) {
    try {
      let response = await axiosInstance.get('/member/member.php', { params: { userid: userId } });
      let rs = response.data;
      if (rs.status === 200) {
        commit('SET_USER_INFO', rs.user);
        return { status: true, data: rs.user };
      } else {
        return { status: false, message: rs.error };
      }
    } catch (error) {
      return { status: false, message: error.error };
    }
  },

  async login({ commit }, { email, password }) {
    try {
      let response = await axiosInstance.post('/member/login.php', { email, password });
      let rs = response.data;
      if (rs.status === 200) {
        commit('SET_CURRENT_USER', rs.user);
        commit('SET_TOKEN', rs.token);
        return { status: true, data: rs.user };
      } else {
        return { status: false, message: rs.error };
      }
    } catch (error) {
      return { status: false, message: error.error };
    }
  }
}
