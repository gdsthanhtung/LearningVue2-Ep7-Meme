import axiosInstance from "../../plugins/axios";

export default {
  async getListPostHasPaging({ commit }, { pagesize = 3, currPage = 1 }) {
    try {
      var response = await axiosInstance.get(
        'post/getListPagination.php',
        {
          params: {
            pagesize,
            currPage
          }
        }
      );
      let rs = response.data;
      if (rs.status === 200) {
        commit('SET_LIST_POST', rs.posts);
      }else {
        console.log('error', rs.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
}
