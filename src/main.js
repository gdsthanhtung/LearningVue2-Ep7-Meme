import Vue from 'vue'
import App from './App.vue'
import './plugins'
import './assets/style.css'

import router from './router';
import store from './store';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
