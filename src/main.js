import Vue from 'vue'
import App from './App.vue'
// 引入自定义指令
import './directive/make-red'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
