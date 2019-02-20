<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/bar">关于我们</router-link>
      </li>
      <li>
        <router-link to="/user">账户中心</router-link>
      </li>
      <li>
        <router-link to="/login">登录</router-link>
      </li>
      <li>
        <router-link to="/map">地图</router-link>
      </li>
    </ul>
    <router-view/>
    <button class="btn" @click="backHandler">后退</button>
    <button class="btn" @click="forwardHandler">前进</button>
    <button class="btn" @click="goHandler">跳步-2</button>
    <button class="btn" @click="pushHandler">push</button>
    <button class="btn" @click="replaceHandler">replace</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    backHandler () {
      this.$router.go(-1)
    },
    forwardHandler () {
      this.$router.go(1)
    },
    goHandler () {
      this.$router.go(-2)
    },
    pushHandler () {
      // 字符串用法
      this.$router.push('/bar')
    },
    replaceHandler () {
      // 字符串用法
      this.$router.replace('/bar')
    }
  }
}
</script>

<style>
#app {
  width: 500px;
  margin: 0 auto;
}
.nav {
  width: 500px;
  height: 45px;
  line-height: 45px;
  background: #f8f8f8;
  margin: 20px auto 0;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
}
.nav li {
  float: left;
  width: 80px;
  text-align: center;
  color: #666;
}
.banner {
  padding: 10px 0;
}
.banner h3 {
  font-size: 24px;
}

.btn {
  padding: 5px 15px;
  background: #008083;
  color: #fff;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
}
</style>
