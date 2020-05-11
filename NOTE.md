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
