## 前端框架搭建

## 项目初始化

```
git clone https://github.com/PanJiaChen/vue-element-admin

cd vue-element-admin

cnpm i

npm run dev
```

#### 如果出现报错
* 1. 不识别es6语法
`cnpm install core-js@2`
* 2. vue.config.js 中 open:true 注释掉

## 项目精简
* 删除 src/views下的源码，保留：
- dashboard： 首页
- error-page: 异常页面
- login:      登录
- redirect:   重定向

* 对src/router/index 进行相应修改
* 删除src/router/modules文件夹
* 删除src/vendor文件夹

## 全局配置
* showSettings：是否显示右侧悬浮配置按钮
* tagsView：是否显示页面标签功能条
* fixedHeader：是否将头部布局固定
* sidebarLogo：菜单栏中是否显示LOGO
* errorLog：默认显示错误日志的环境


## 后端框架搭建
* 1.Node简介
> Chrome 浏览器同样是集成了 V8 引擎的 Javascript 运行环境，与 Node 不同的是他们向 Javascript 注入的内容不同，Chrome 向 Javascript 注入了 window 对象，Node 注入的是 global，这使得两者应用场景完全不同，Chrome 的 Javascript 所有指令都需要通过 Chrome 浏览器作为中介实现
* 2.Express 简介
> express 是一个轻量级的 Node Web 服务端框架，同样是一个人气超高的项目，它可以帮助我们快速搭建基于 Node 的 Web 应用
## 项目初始化
* 1.创建项目
```
mkdir admin-imooc-node
cd admin-imooc-node
npm init -y
```
* 2.安装依赖
```
npm i -S express
```
* 3.创建 app.js
```js
const express = require('express')

// 创建 express 应用
const app = express()

// 监听 / 路径的 get 请求
app.get('/', function(req, res) {
  res.send('hello node')
})

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})
```
## Express 三大基础概念
* 1.中间件
> 中间件是一个函数，在请求和响应周期中被顺序调用
`提示：中间件需要在响应结束前被调用`
* 2. 路由
> 应用如何响应请求的一种规则
* 3.异常处理
> 通过自定义异常处理中间件处理请求中产生的异常
```
使用时需要注意两点：

第一，参数一个不能少，否则会视为普通的中间件
第二，中间件需要在请求之后引用
```

## 参考文档
[http://www.youbaobao.xyz/admin-docs/guide/base/vue-element-admin.html](http://www.youbaobao.xyz/admin-docs/guide/base/vue-element-admin.html)

## 上传github
```
git remote add origin https://github.com/wp360/Vue2.git

git checkout -b ele-admin

git status

git add .

git commit -m "初始化"

git push

git push --set-upstream origin ele-admin
```