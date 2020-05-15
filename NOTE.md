## 饿了么 WebApp
> 构建项目

## 登录页
* 1. 新建文件Login.vue
* 2. 添加对应路由
```js
// router >> index.js
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]
```
* 3. 路由守卫
```js
// router >> index.js
// 路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = !!localStorage.ele_login
  if (to.path === '/login') {
    next()
  } else {
    // 是否在登录状态下
    isLogin ? next() : next('/login')
  }
})

```
* 4. 登录Input组件
> components >> InputGroup.vue
* 5. 登录页引入组件
* 6. 输入手机号判断
```js
  if (!this.phone) {
    this.errors = {
      phone: '手机号码不能为空'
    }
    return false
  } else if (!/^1[345678]\d{9}$/.test(this.phone)) {
    this.errors = {
      phone: '请填写正确的手机号码'
    }
    return false
  } else {
    this.errors = {}
    return true
  }
```
* 7. 验证码倒计时
```js
// validateBtn()
let time = 60
const timer = setInterval(() => {
  if (time === 0) {
    clearInterval(timer)
    this.btnTitle = '获取验证码'
    this.disabled = false
  } else {
    // 倒计时
    this.btnTitle = time + '秒后重试'
    this.disabled = true
    time--
  }
}, 1000)
```
* 8. 获取验证码
```
1. 使用聚合数据获取短信API服务
2. 安装axios（cnpm i axios --save）
3. main.js全局使用
4. 跨域请求，新建vue.config.js
5. 发送网络请求
```
* 9. 登录验证
* 10. 登录跳转
## tabBar组件
* 1. 新建对应页面(Home.vue、Order.vue、Me.vue)
* 2. 路由设置
* 3. 新建TabBar.vue组件
* 4. Index.vue引入组件
* 5. 添加字体图标样式
* 6. TabBar.vue组件制作
## vue中使用高德地图amap
* 1.安装插件:
`npm install vue-amap --save`
* 2.main.js中
```js
import AMap from 'vue-amap'
Vue.use(AMap);
```
* 3.index.html文件中
`<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=申请的key值"></script>`
## 实现定位显示
> 解决报错：'AMap' is not defined  no-undef 采用：/* eslint-disable no-undef */
## 搜索框和定位信息展示

## 根据关键字检索位置信息
* 高德地图——输入提示与POI搜索的使用
[https://lbs.amap.com/api/javascript-api/guide/services/autocomplete](https://lbs.amap.com/api/javascript-api/guide/services/autocomplete)

## 上传github
```
git remote add origin https://github.com/wp360/Vue2.git

git checkout -b ele-app

git status

git add .

git commit -m "项目初始化"

git push

git push --set-upstream origin ele-app
```
