<template>
  <div class="user-register-page">
    <div class="ass1-login">
      <div class="ass1-login__logo">
        <router-link to="/" class="ass1-logo">GDS-Meme</router-link>
      </div>
      <div class="ass1-login__content">
        <p>Đăng ký một tài khoản</p>
        <div class="ass1-login__form">
          <form action="#">
            <input type="text" class="form-control" placeholder="Tên hiển thị" required="">
            <input type="email" class="form-control" placeholder="Email" required="">
            <input type="password" class="form-control" placeholder="Mật khẩu" required="">
            <input type="password" class="form-control" placeholder="Nhập lại mật khẩu" required="">
            <div class="ass1-login__send">
              <router-link to="/user/login">Đăng nhập</router-link>
              <button type="submit" class="ass1-btn">Đăng ký</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-register-page',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style></style>
