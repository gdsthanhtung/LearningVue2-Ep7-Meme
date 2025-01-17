<template>
  <div id="user-login-page">
    <div class="ass1-login">
      <div class="ass1-login__logo">
        <router-link to="/" class="ass1-logo">GDS-Meme</router-link>
      </div>
      <div class="ass1-login__content">
        <p>Đăng nhập</p>
        <div class="ass1-login__form">
          <form action="#">
            <input type="text" class="form-control" placeholder="Email" required="">
            <div class="ass1-input-copy">
              <input type="password" class="form-control" placeholder="Mật khẩu" required="">
              <a href="#">Copy</a>
            </div>
            <div class="ass1-login__send">
              <router-link to="/user/register">Đăng ký</router-link>
              <button type="submit" class="ass1-btn">Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-login-page',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style></style>
