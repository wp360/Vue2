import Vue from 'vue'
// import router from './router'
// import store from './store'
import store from './store/index'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // router,
  store
}).$mount('#app')
