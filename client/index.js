import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

import './assets/style/global.styl'

import store from './store/store'

// 路由
import createRouter from './config/router'
Vue.use(VueRouter)
const router = createRouter()

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  next()
  // if (to.fullPath === '/app') {
  //   next({ path: '/login' })
  // } else {
  //   next()
  // }
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked')
})
// const root = document.createElement('div')
// document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
