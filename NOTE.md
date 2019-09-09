## 新建项目
1. 项目设置
```
vue init webpack-simple support-center
cd support-center
npm install
npm install --save babel-polyfill
npm install --save-dev stylus stylus-loader
```
2. 6个主要页面：
```
 主页
 公共FAQ页面
 登录页面
 工单页面
 发送新工单的页面
 显示工单详情和对话的页面
```
3. 路由
* html模板添加路由出口<router-view />
```vue
<!-- 模板 -->
<template>
  <div class="app-layout">
    <header class="header">
      <div>
        <img class="img" src="../assets/logo.svg" />
      </div>
      <div>My shirt shop</div>
    </header>
    <!-- 菜单将放在这里 -->
    <router-view />
  </div>
</template>
```
```html
<!-- 路由出口 -->
<!-- 路由匹配到的组件将渲染在这里 -->
<router-view></router-view>
```
* 新建路由文件router.js
```js
// router.js
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import FAQ from "./components/FAQ.vue";

Vue.use(VueRouter);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 路由将放在这里
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ
  }
];

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes,
})

// 4. 导出
export default router
```
* 创建和挂载根实例。
> 通过 router 配置参数注入路由，从而让整个应用都有路由功能
```js
// main.js
// 省略
import router from './router'

new Vue({
  el: "#app",
  render: h => h(AppLayout),
  // 将路由器提供给应用
  router
});

```
* 路由的 history 模式
> vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。
> 这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```
* NavMenu菜单组件
```vue
<template>
  <nav class="menu">
    <!-- 链接在这里 -->
    <router-link :to="{ name:'home' }">Home</router-link>
    <router-link :to="{ name:'faq' }">FAQ</router-link>
  </nav>
</template>
```
* 路由器链接
> vue-router 插件为我们提供了另一个方便的特殊组件——<router-link>。当这个组件被点击时，就会变为指定路由，这要归功于它的to prop。默认情况下，它将是一个HTML<a>元素，但可以使用tag prop 来自定义。
* active class
> 路由器链接在与其关联的路由当前处于激活状态时获取active class。默认情况下，组件使用router-link-active CSS 类，因此你可以相应地更改其视觉效果。
* 将exact属性添加到Home链接上，确保默认高亮显示。