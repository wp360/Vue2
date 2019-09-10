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

## FAQ——使用API
1. 服务器设置
```
安装依赖并启动服务器：
cd server
npm install
npm start
```
2. fetch 用法的示例：
```js
fetch(url).then(response => {
  if (response.ok) {
    // 返回一个新的Promise
    return response.json()
  } else {
    return Promise.reject('error')
  }
}).then(result => {
  // 成功
  console.log('JSON:', result)
}).catch(e => {
  // 失败
  console.error(e)
})

// 实例
created() {
  fetch("http://localhost:3000/questions")
    .then(response => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        return Promise.reject("error");
      }
    })
    .then(result => {
      console.log('result:' + result);
      // 结果是来自服务器的JSON 解析而成的对象
      this.questions = result;
    })
    .catch(e => {
      this.error = e;
    });
}

// 使用JavaScript关键字async和await重写这段代码，使其看起来像同步执行的代码：
async created() {
  try {
    const response = await fetch('http://localhost:3000/questions')
    if (response.ok) {
      this.questions = await response.json()
    } else {
      throw new Error('error')
    }
  } catch (e) {
    this.error = e
  }
},

// try-catch的使用
try {
// 正常流程
} catch (e) {
// 如果是程序的错，就告诉用户不好意思没法执行
}

```
## Loading加载动画
1. 新建Loading组件
```vue
<!-- Loading.vue -->
<template>
  <div class="loading">
    <!-- 加载动画 -->
    <div></div>
  </div>
</template>
```
2. 全局组件添加
* 新建global-components.js
```js
import Vue from 'vue'
import Loading from './components/Loading.vue'

Vue.component('Loading', Loading)

```
3. main.js导入
```js
// 省略
import './global-components'

```
4. 页面添加
```vue
<!-- FAQ.vue -->
<!-- 模板添加 -->
<template>
  <main class="faq">
    <h1>Frenquently Asked Questions</h1>
    <Loading v-if="loading" />
    <!-- 省略 -->
  </main>
</template>
<script>
// 默认data设置false
export default {
  data() {
    return {
      // 省略
      loading: false,
    };
  },
  async created() {
    this.loading = true
    // fetch获取数据，省略
    this.loading = false
  }
};
</script>
```
5. 加载样式

## 用自己的插件扩展Vue
* 创建一个插件
> src >> plugins >> fetch.js
```js
export default {
  install(Vue) {
    console.log('Installed!')
  }
}

```
* 调用
```js
// main.js
import VueFetch from './plugins/fetch'
Vue.use(VueFetch)
```
> 在浏览器控制台中看到消息Installed!。
* 插件选项
> 使用options 参数配置插件
```js
// fetch.js
export default {
  install (Vue, options) {
    console.log('Installed!', options)
  },
}
```
