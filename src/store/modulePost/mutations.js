export default {
  SET_LIST_POST(state, data) {
    state.listPost = data;
  },
  PUSH_LIST_POST(state, data) {
    state.listPost = [...state.listPost, ...data];
  }
}
