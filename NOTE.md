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

## 选择收获地址和城市页面头部展示

## 展示所有城市列表
* 1. 根据城市数据接口获取对应城市信息
* 2. 使用getCityInfo方法处理key 计算key
* 3. 新建Alphabet.vue字母表组件
```vue
<template>
  <div class="alphabet">
    字母表
  </div>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cityInfo: Object,
    keys: Array
  }
}
</script>
```
* 4. 引入字母表组件到City.vue
```
<Alphabet :cityInfo="cityInfo" :keys="keys" />

import Alphabet from '../components/Alphabet'

  components: {
    Location,
    Alphabet
  },
```
* 5. Alphabet.vue页面调整

## 使用BScroll实现滚动
* 1. 安装better-scroll
`npm install better-scroll --save`
* 2. 引入BScroll
* 3. 连接数据

## 字母索引和选择城市
* 1. 使用selectKey方法，根据索引值获取对应城市数据
* 2. 根据下标，滚动到相对应的元素上，然后滚动到对应的位置上
* 3. 通过$emit实现子组件向父组件通信
```
// 字母表组件点击城市名称
@click="$emit('selectCity', city)"
// City父组件
<Alphabet @selectCity="selectCity" ref="allCity" :cityInfo="cityInfo" :keys="keys" />
// 获取城市
methods: {
  // 省略
  selectCity (citty) {
    console.log(city)
  }
}
```

## 根据关键字检索城市及优化
```js
// City.vue
data () {
  return {
    // ...
    allCities: [],
    searchList: []
  }
},
// ...
// 监听搜索
  watch: {
    city_val () {
      // console.log(this.city_val)
      // 搜索城市
      this.searchCity()
    }
  },
// ...
  methods: {
    getCityInfo () {
      this.$axios('/api/posts/cities')
        .then(res => {
          // ...
          // 存储所有城市， 用来搜索过滤
        })
        .catch(err => {
          console.log(err)
        })
    },
    searchCity () {
      if (!this.city_val) {
        // 如果搜索框为空, 数组置空
        this.searchList = []
      } else {
        // 根据输入框的关键字检索城市 并存入到searchList数组中
        this.searchList = this.allCities.filter(item => {
          return item.name.indexOf(this.city_val) !== -1
        })
        // console.log(this.searchList)
      }
    }
  }
```

## 首页
* 1. Mint-UI的使用
> 安装
`npm install --save mint-ui`
> main.js引入
```js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

// 请求拦截
axios.interceptors.request.use(config => {
  // 加载动画
  Indicator.open()
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  Indicator.close()
  return response
}, error => {
  // 错误提醒
  Indicator.close()
  return Promise.reject(error)
})
```
#### vue-axios interceptors(拦截器)实际应用
```js
Vue.use(qs)
// 注：qs，使用axios，必须得安装 qs，所有的Post 请求，我们都需要 qs,对参数进行序列化。

// 在 request 拦截器实现
axios.interceptors.request.use(
 config => {
  config.baseURL = '/api/'
  config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
  config.timeout = 6000
  let token = sessionStorage.getItem('access_token')
  let csrf = store.getters.csrf
  if (token) {
   config.headers = {
    'access-token': token,
    'Content-Type': 'application/x-www-form-urlencoded'
   }
  }
  if (config.url === 'refresh') {
   config.headers = {
    'refresh-token': sessionStorage.getItem('refresh_token'),
    'Content-Type': 'application/x-www-form-urlencoded'
   }
  }
  return config
 },
 error => {
  return Promise.reject(error)
 }
)
//在 response 拦截器实现
axios.interceptors.response.use(
 response => {
  // 定时刷新access-token
  if (!response.data.value && response.data.data.message === 'token invalid') {
   // 刷新token
   store.dispatch('refresh').then(response => {
    sessionStorage.setItem('access_token', response.data)
   }).catch(error => {
    throw new Error('token刷新' + error)
   })
  }
  return response
 },
 error => {
  return Promise.reject(error)
 }
)
```
[vue+axios 实现登录拦截权限验证](https://www.jianshu.com/p/78dac627d9ea)

* 2. 轮播图
* 3. 实现分类和推荐商家
* 4. 组件显示隐藏遮罩
* 5. 选择排序条件
* 6. 展示筛选条件
* 7. 选择筛选条件

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
