<template>
  <div id="app">
    <comp-header v-if="isRenderHeader" />
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <comp-footer v-if="isRenderFooter" />
  </div>
</template>

<script>
import CompFooter from './components/CompFooter.vue'
import CompHeader from './components/CompHeader.vue'
export default {
  components: { CompHeader, CompFooter },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    isRenderHeader() {
      let noRender = ['user-login-page', 'user-register-page']
      return (noRender.indexOf(this.$route.name) !== -1) ? false : true;
    },
    isRenderFooter() {
      let noRender = ['home-page', 'post-detail-page']
      return (noRender.indexOf(this.$route.name) !== -1) ? false : true;
    }
  }
}
</script>

<style>

</style>
