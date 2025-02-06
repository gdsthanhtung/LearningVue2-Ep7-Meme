import { get } from "jquery";
import axiosInstance from "../../plugins/axios";

export default {
  async getListPost({ commit }, { pagesize = 3, currPage = 1, categoryId = null }) {
    commit('SET_IS_LOADING', true, { root: true });
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
        if(currPage == 1) {
          commit('SET_LIST_POST', checkedList);
        }else{
          commit('PUSH_LIST_POST', checkedList);
        }
      } else {
        console.log('error', rs.message);
      }
      commit('SET_IS_LOADING', false, { root: true });
    } catch (error) {
      console.log("error", error);
    }
  },

  async getPostById({ commit }, { postId }) {
    commit('SET_IS_LOADING', true, { root: true });
    try {
      var response = await axiosInstance.get('post/post.php', { params: { postid: postId } });
      let rs = response.data;
      if (rs.status === 200) {
        commit('SET_POST_DETAIL', rs.data);
      } else {
        console.log('error', rs.message);
      }
      commit('SET_IS_LOADING', false, { root: true });
    } catch (error) {
      console.log("error", error);
    }
  }
}
