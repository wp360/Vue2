import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
// Element UI的使用
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// Vuex状态管理
import store from './store'
import App from './App.vue'
// import env from './env'

// mock 模拟数据 开关
const mock = false // true
if(mock) {
  require('./mock/api')
}

// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api'
// easy-mock地址
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d99a991896b9432186c1e7f/bikeapi'
axios.defaults.timeout = 8000

// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// axios接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data
  // 获取路径
  let path = location.hash
  if(res.status === 0) {
    return res.data
  } else if(res.status === 10) {
    if (path != '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    // alert(res.msg)
    // Message.warning(res.msg)
    this.$message.warning(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

// message对象扩展
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
