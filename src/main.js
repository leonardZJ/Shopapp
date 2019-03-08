import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'
import {Button} from 'mint-ui'
import './mock/mockServer' //加载mockServer模块
import './filters' //加载filter模块


import VueLazyload from 'vue-lazyload'
import loading from './common/images/懒加载.gif'


Vue.component(Button.name,Button) //全局注册，所有组件都可以使用<mt-button></mt-button>
Vue.use(VueLazyload,{  //该操作内部自定义了一个指令lazy
	loading
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,  //注册vue-router
  store    //注册vuex
})
