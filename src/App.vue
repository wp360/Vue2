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
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
  padding: 10px 0 ;
}
.banner h3 {
  font-size: 24px;
}
</style>
