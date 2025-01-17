export default {
  SET_ISLOGGED(state, data) {
    console.log('SET_ISLOGGED', data);

    state.isLogged = data;
  }
}
