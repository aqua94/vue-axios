import Vue from 'vue/dist/vue.esm'
import router from './router/router'
import store from './store/store'
import App from './App'
import VueRouter from 'vue-router';
import Vuex from 'vuex';


// dependencies column
[
  VueRouter, 
  Vuex
].forEach(data => Vue.use(data))


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
