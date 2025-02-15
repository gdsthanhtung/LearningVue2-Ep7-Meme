<template>
  <div id="user-login-page">
    <div class="ass1-login">
      <div class="ass1-login__logo">
        <router-link to="/" class="ass1-logo">GDS-Meme</router-link>
      </div>
      <div class="ass1-login__content">
        <p>Đăng nhập</p>
        <div class="ass1-login__form">
          <form action="#" @submit.prevent="handleSubmitLogin">
            <input type="text" class="form-control" placeholder="Email" required="" v-model="email">
            <div class="ass1-input-copy">
              <input type="password" class="form-control" placeholder="Mật khẩu" required="" v-model="password">
              <a href="#">Copy</a>
            </div>
            <div class="ass1-login__send">
              <router-link to="/user/register">Đăng ký</router-link>
              <button type="submit" class="ass1-btn">Đăng nhập</button>
            </div>
          </form>

          <ul v-if="loginMsg">
            <li v-if="typeof loginMsg === 'string'" class="text-danger">{{ loginMsg }}</li>
            <li v-else v-for="(msg, index) in loginMsg" :key="index" class="text-danger">{{ msg }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'user-login-page',
  data() {
    return {
      email: 'gds.admin@gmail.com',
      password: 'admin123',
      loginMsg: []
    }
  },
  methods: {
    ...mapActions({
      'login': 'user/login'
    }),
    handleSubmitLogin() {
      this.login({ email: this.email, password: this.password })
        .then(rs => {
          if (!rs.status) {
            this.loginMsg = rs.message;
          }
          console.log(rs);
        })
        .catch(err => {
          console.error(err);
        });
    },
  }
}
</script>

<style></style>
