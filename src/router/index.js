import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Bar from '@/pages/bar'
import User from '@/pages/user'
import Login from '@/pages/login'
import Map from '@/pages/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // 我是关于我们
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    },
    // 我是账户中心
    {
      path: '/user',
      name: 'User',
      component: User
    },
    // 我是登录
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 百度地图
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
})
