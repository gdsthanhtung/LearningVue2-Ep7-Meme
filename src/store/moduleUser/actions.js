import axiosInstance from "../../plugins/axios";

export default {
  async getUserById({ commit }, { userId }) {
    try {
      var response = await axiosInstance.get('/member/member.php', { params: { userid: userId } });
      let rs = response.data;
      if (rs.status === 200) {
        commit('SET_USER_INFO', rs.user);
        return { status: true, data: rs.user };
      } else {
        return { status: false, message: rs.message };
      }
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}
