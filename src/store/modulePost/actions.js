import axiosInstance from "../../plugins/axios";

export default {
  async getListPost({ commit }, { pagesize = 3, currPage = 1, categoryId = null }) {
    try {
      let endpoint = categoryId ? 'post/getListByCategory.php' : 'post/getListPagination.php';
      let params = {
        pagesize,
        currPage
      };
      if (categoryId) {
        params.tagIndex = categoryId;
      }

      var response = await axiosInstance.get(endpoint, { params });
      let rs = response.data;
      if (rs.status === 200) {
        let checkedList = rs.posts.filter(post => post.PID !== null);
        commit('SET_LIST_POST', checkedList);
      } else {
        console.log('error', rs.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
}
