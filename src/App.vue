<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      data: ''
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
    let url = '/api/search/hotwords'
    jsonp(url, (err, res) => {
      let result = res
      this.data = result
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
