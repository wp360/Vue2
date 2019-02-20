// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from '@/store'
import router from './router'
// import iView from 'iview'
// 导入样式
import './assets/style/reset.css'
import 'iview/dist/styles/iview.css'

import axios from 'axios'
// 只能把axios挂载到vue的原型上
Vue.prototype.$axios = axios

Vue.config.productionTip = false
// Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
