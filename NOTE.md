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
`cnpm i vue-lazyload element-ui node-sass sass-loader vue-awesome-swiper vue-axios vue-cookie --save-dev`
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