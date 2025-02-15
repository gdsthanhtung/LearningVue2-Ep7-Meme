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

      let response = await axiosInstance.get(endpoint, { params });
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
    } catch (error) {
      console.log("error", error);
    } finally {
      commit('SET_IS_LOADING', false, { root: true });
    }
  },

  async getPostById({ commit, dispatch }, { postId }) {
    commit('SET_IS_LOADING', true, { root: true });
    try {
      let response = await axiosInstance.get('post/post.php', { params: { postid: postId } });
      let rs = response.data;
      if (rs.status === 200) {
        commit('SET_POST_DETAIL', rs.data);
        await dispatch('user/getUserById', { userId: rs.data.post.USERID }, { root: true });
      } else {
        commit('SET_POST_DETAIL', null);
        console.log('error', rs.message);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      commit('SET_IS_LOADING', false, { root: true });
    }
  }
}
