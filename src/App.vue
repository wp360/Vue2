<template>
  <div id="app">
    <router-view></router-view>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
// import jsonp from 'jsonp'
// import storage from './storage'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      // data: ''
      res: {}
    }
  },
  mounted() {
    // let url = 'https://www.easy-mock.com/mock/5d99a991896b9432186c1e7f/bikeapi/table/list'
    // axios跨域实例：
    // axios.get(url).then(() => {
    //   // Access-Control-Allow-Credentials:true
    // })
    // jsonp跨域实例：
    // let url = 'https://www.imooc.com/search/hotwords'
    // jsonp(url, (err, res) => {
    //   let result = res
    //   this.data = result
    // })
    // 代理实例：
    // let url = '/api/search/hotwords'
    // jsonp(url, (err, res) => {
    //   let result = res
    //   this.data = result
    // })
    // 存储实例：
    // storage.setItem('a', 1)
    // storage.setItem('user', {a:1})
    // storage.setItem('sex', { a: 1}, 'user')
    // storage.clear('a')
    // storage.clear('sex', 'user')

    // json模拟数据 Mock 本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res) => {
    //   this.res = res
    // })
    // 通过easy-mock平台实现数据mock
    // this.axios.get('/table/list').then((res) => {
    //   this.res = res
    // })
    // 本地集成mockjs实现数据mock
    // this.axios.get('/user/login').then((res) => {
    //   this.res = res
    // })
    if(this.$cookie.get('userId')) {
      // 获取用户信息
      this.getUser()
      // 获取购物车数据
      this.getCartCount()
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res={}) => {
        // 保存到Vuex里面
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res=0) => {
        // 保存到Vuex里面
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
