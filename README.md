# dm

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 初始化项目目录结构
```
|-- build (项目构造(webpack)相关代码)
    |-- build.js (生产环境构造代码)
    |-- check-version.js (检查node 、npm等版本)
    |-- utils.js (构造工具相关)
    |-- webpack.base.conf.js (webpack 基础配置)
    |-- webpack.dev.conf.js ( webpack开发环境配置)
    |-- webpack.prod.conf.js (webpack生产环境配置)
    |-- vue-loader.conf.js (loader的配置文件)
|-- config (构建配置目录)
    |-- dev.env.js (开发环境变量)
    |-- index.js (项目一些配置变量)
    |-- prod.env.js (生产环境变量)
|-- node_modules (依赖的node工具包目录)
|-- src (源码目录)
    |-- assets (资源目录)
    |-- components (组件目录)
    |-- router (路由配置目录)
    |-- App.vue (页面级Vue组件)
    |-- main.js (页面入口JS文件)
|-- static (静态文件目录，比如一些图片，json数据等)
|-- index.html (入口文件)
|-- package.json (项目描述文件)
|-- .editorconfig (ES语法检查配置｝
|-- .babelrc (ES6语法编译配置)
|-- .gitignore (git 上传需要忽略的文件格式)
|-- README.md (项目说明)
```

##iview 按需引入vue项目中
1. `npm install babel-plugin-import --save-dev`
2. .babelrc
```js
  "plugins": [
    ["import", {
      "libraryName": "iview",
      "libraryDirectory": "src/components"
    }],
    // ...省略
  ]
```
3. main.js添加样式
```js
import 'iview/dist/styles/iview.css'
```

## 自定义事件及$emit 方法
> 语法： this.$emit('event',val)
> $emit为实例方法，用来触发事件监听。其中，参数event代表自定义事件名称，参数val代表通过自定义事件传递的值， 注意这里的val为可选参数。

## git远程上传
```
git remote add origin https://github.com/wp360/Vue2.git

git checkout -b dm

git status

git add .

git commit -m "初始化文件上传"

git push

git push --set-upstream origin dm
```