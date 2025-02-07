export default {
  // getBlogList: state => state.blogList,
  // getBlogById: state => id => state.blogList.find(blog => blog.id === id)
  getListPost: state => state.listPost,

  getCategories: state => state.categories,

  getPostDetail(state, getters, rootState) { //khong duoc xoa getters va rootState
    if (state.postDetail) {
      let userId = state.postDetail.post.USERID;
      let user = rootState.user.users[userId];

      let data = {
        post: {
          ...state.postDetail.post, //copy lai toan bo thuoc tinh cua postDetail.post
          fullname: user ? user.fullname : 'Unknown',
          profilepicture: user ? user.profilepicture : '/dist/images/default-avatar.png'
        },
        categories: state.postDetail.categories
      };

      return data;
    }
  }
}
