import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import AMap from 'vue-amap'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(AMap)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
