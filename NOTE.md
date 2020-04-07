# 小米商城项目

## 前期准备
* 1. git安装
[安装地址： https://git-scm.com/downloads](https://git-scm.com/downloads)
* 2. 配置VSCode的Git地址
```
打开 文件-首选项-设置-搜索git.path 打开setting.json

添加“git.path”： Git实际安装地址
```
* 3. git配置ssh公钥
`git config --list`

`git clone git项目链接地址`

`git config --global credential.helper store`

> 公钥
`ssh-keygen -t rsa -C "2897406527@qq.com"`

#### 注意：无需输入密码，两次回车即可

* 4. VScode操作Git
* 5. VueCli4.0安装
```
npm install -g @vue/cli
or
yarn global add @vue/cli
vue --version
```
* 6. vue项目可视化管理
> vue ui

## 项目构建
* 1. 创建项目
`vue create xiaomi`
```
 $ cd xiaomi
 $ npm run serve
```
* 2. 安装插件依赖
`cnpm i axios vue-router vuex -S`
* 3. vue-devtools安装使用
```
第一种方法，直接谷歌商店里搜索，然后安装下载插件
第二种方法，手动安装
网址：https://github.com/vuejs/vue-devtools
选择master分支

· Clone this repo
· npm install (Or yarn install if you are using yarn as the package manager)
· npm run build
· Open Chrome extension page
· Check "developer mode"
· Click "load unpacked extension", and choose shells/chrome.
```
[参考文档：VUE 配置vue-devtools调试工具](https://www.imooc.com/article/294527)

## 项目基础架构
* 1. 前端跨域
```
· CORS跨域
· JSONP跨域
· 代理跨域
```
> 接口代理 - 通过修改nginx服务器配置来实现 （说明：前端修改，后台不动）
#### 操作步骤：
```js
// 新建文件：vue.config.js
module.exports= {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
```
## 需求梳理
* 熟悉文档、查看原型、读懂需求
* 了解前端设计稿 - 设计前端业务架构
* 了解后台接口文档 - 制定相关对接规范
* 协调资源
* 搭建前端架构
## 目录结构设置
* 1. 去除App.vue里多余的内容
* 2. src文件夹下新建api接口文件夹
> src >> api >> index.js
* 3. src文件夹下新建utils文件夹
> src >> utils >> index.js
* 4. src文件夹下新建storage文件夹(前端数据存储的工具箱)
> src >> storage >> index.js
* 5. src文件夹下新建store文件夹(vuex)
> src >> store
* 6. src文件夹下新建router.js(路由文件)
> src >> router.js
* 7. src文件夹下新建pages文件夹(页面)
> src >> pages
## 基本插件
`cnpm i vue-lazyload element-ui node-sass sass-loader swiper vue-awesome-swiper vue-axios vue-cookie --save-dev`
## 路由
```js
// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'product/:id',
          name: 'product',
          component: Product
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: Detail
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm
        },
        {
          path: 'list',
          name: 'order-list',
          component: OrderList
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: AliPay
        }
      ]
    }
  ]
})

// main.js引入路由

import router from './router'
// ...
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```
## Storage封装
* Cookie、localStorage、sessionStorage
```
· 存储大小： Cookie 4K   Storage 5M
· 有效期： Cookie有有效期  Storage永久存储
· Cookie会发送到服务器端，存储在内存中  Storage只存储在浏览器端
· 路径： Cookie有路径限制，Storage只存储在域名下
· API： Cookie没有特定的API，Storage有对应的API
```

* 为什么要封装Storage，本身不是已经有API？
```
· Storage本身有API，但是只是简单的key/value形式
· Storage只存储字符串，需要人工转换成json对象
· Storage只能一次性清空，不能单个清空
```
## 接口错误拦截
* 统一报错
* 未登录统一拦截
* 请求值、返回值的统一处理
## 接口环境设置
* 开发上线的不同阶段，需要不同的配置
* 不同的跨域方式，配置不同
* 打包的时候统一注入环境参数，统一管理环境，输出不同的版本包
```js
// 新建文件env.js
let baseURL;
switch(process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default {
  baseURL
}
```
* 修改package.json
```json
  "scripts": {
    "serve": "vue-cli-service serve --mode=development",
    "build": "vue-cli-service build --mode=production",
    "test": "vue-cli-service build --mode=test",
    "lint": "vue-cli-service lint"
  },
```
> 在node中，有全局变量process表示的是当前的node进程。process.env包含着关于系统环境的信息。但是process.env中并不存在NODE_ENV这个东西。NODE_ENV是用户一个自定义的变量，在webpack中它的用途是判断生产环境或开发环境的依据的。
[process.env.NODE_ENV详解：](https://juejin.im/post/5d907b6751882502c5534694)

## Mock设置
* 开发阶段，为了高效率，需要提前Mock（模拟数据）
* 减少代码冗余、灵活插拔
* 减少沟通、减少接口联调时间

* 本地创建json
* easy-mock平台
* 集成Mock API
`cnpm i mockjs --save-dev`

## 首页
* 1. 头部组件
* 2. 头部导航
* 3. 轮播图
* 4. 导航列表
* 5. 广告位
* 6. 商品展示
* 7. 底部组件

## 登录

## Vuex状态管理
> Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
* 1. 新建store文件夹，添加index.js
```js
// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  username: '', // 登录用户名
  cartCount: 0 // 购物车商品数量
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
```
* 2. mutation
> 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
```js
// mutations.js
/**
 * 商城Vuex-mutations
 */
export default {

}
```
* 3. action
> Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作。
```js
// action.js
/**
 * 商城Vuex-actions
 */
export default {

}
```
* 4. main.js设置store
```js
// ...
// Vuex状态管理
import store from './store'

new Vue({
  store,
  // ...
}).$mount('#app')

```
* 5. 用户名及购物车数量显示
```js
// action.js
export default {
  saveUserName(context, username) {
    context.commit('saveUserName', username)
  },
  saveCartCount(context, count) {
    context.commit('saveCartCount', count)
  }
}

// mutations.js
export default {
  saveUserName(state, username) {
    state.username = username
  },
  saveCartCount(state, count) {
    state.cartCount = count
  }
}

// NavHeader.vue
// 使用计算属性方法，可以解决数据还未加载状态信息已经展示
computed: {
  username() {
    return this.$store.state.username
  },
  cartCount() {
    return this.$store.state.cartCount
  }
},

// login.vue
// 保存用户信息 使用Vuex
this.$store.dispatch('saveUserName',res.username);

// App.vue
getUser() {
  this.axios.get('/user').then((res) => {
    // 保存到Vuex里面
    this.$store.dispatch('saveUserName',res.username)
  })
},
getCartCount() {
  this.axios.get('/carts/products/sum').then((res) => {
    // 保存到Vuex里面
    this.$store.dispatch('saveCartCount',res)
  })
}
```
* 6. mapActions的使用
```js
import { mapActions } from 'vuex'
// ...

// this.$store.dispatch('saveUserName',res.username);
// 使用mapActions
this.saveUserName(res.username);

//...
...mapActions(['saveUserName']),
```
* 7. mapState的使用
```js
// NavHeader.vue
import { mapState } from 'vuex'
// ...
computed: {
  // username() {
  //   return this.$store.state.username
  // },
  // cartCount() {
  //   return this.$store.state.cartCount
  // }
  ...mapState(['username', 'cartCount'])
},
```

## 产品页

## 购物车

#### 相关知识点：

[css中的mixin及其用法](https://blog.csdn.net/liya_nan/article/details/81479995)

[vue-awesome-swiper轮播图文档](https://github.com/surmon-china/vue-awesome-swiper)

[vue-lazyload文档](https://github.com/hilongjw/vue-lazyload)