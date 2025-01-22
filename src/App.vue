<template>
  <div id="app">
    <comp-loading v-bind:class="{ show: isLoading }" />
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
import CompLoading from './components/CompLoading.vue'
import { mapState } from 'vuex';
export default {
  components: { CompHeader, CompFooter, CompLoading },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['isLoading']),

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
