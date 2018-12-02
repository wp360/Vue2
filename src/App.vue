<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ev />
    <!-- <view-vuex></view-vuex> -->
    <pagea></pagea>
    <pageb></pageb>
    <com :age="age" @patch="msg">
      <h1 slot="a">我要加东西</h1>
      <p slot="b">我要加东西</p>
    </com>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ev from './components/events.vue'
import com from './components/com.vue'
// import viewVuex from './components/vuex.vue'
import pagea from './pages/a.vue'
import pageb from './pages/b.vue'
import './components/n'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com,
    // viewVuex,
    pagea,
    pageb
  },
  data () {
    return {
      age: 18
    }
  },
  methods: {
    msg: function (ag) {
      window.console.log('发送成功')
      this.age ++
      window.console.log(ag)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
