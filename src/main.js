import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,  //注册vue-router
/*  store    //注册vuex*/
})
