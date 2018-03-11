# vue-music

> Vue2.0 开发音乐App

## Vue-cli构建项目

`vue init webpack vue-music`

```
Project name vue-music  // 项目名称
Project description Vue2.0 开发音乐App // 项目说明
Author wp360 <2897406527@qq.com> // 作者
Vue build
Runtime + Compiler: recommended for most users
√ Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere
Install vue-router? (Y/n) Y
Use ESLint to lint your code? (Y/n) Y
> Standard (https://github.com/standard/standard)
  Airbnb (https://github.com/airbnb/javascript)
  none (configure it yourself)
Set up unit tests (Y/n) n
Setup e2e tests with Nightwatch? (Y/n) n
Should we run `npm install` for you after the project has been created? (recommended) (Use arrow keys)
> Yes, use NPM
  Yes, use Yarn
  No, I will handle that myself
```
开始安装，安装完后：

``` bash
cd vue-music

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

## 项目开发
1. 样式 stylus

`npm i stylus stylus-loader --save-dev`

2. eslint
```js
rules:{
    // ... 省略
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'eol-last': 0,
    'space-before-function-paren': 0
}
```
3. 路径设置
```js
// webpack.base.conf.js
    alias: {
      '@': resolve('src'),
      // 路径别名设置
      'common': resolve('src/common'),
      'components': resolve('src/components')
    }
```

4. 安装依赖
`npm i babel-runtime fastclick --save`
> babel-runtime 语法转义
> fastclick 移动端点击300毫秒延迟解决方法
`npm i babel-polyfill --save-dev`
> ES6 Api

5. 引入依赖包
```js
// main.js
import 'babel-polyfill'
//... 省略
import fastclick from 'fastclick'
// 去掉点击延迟
fastclick.attach(document.body)
```

6. 首页头部制作
* 新建文件 components => m-header => m-header.vue
* App.vue导入
```vue
<template>
  <div id="app">
    <m-header></m-header>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
export default {
  // name: 'App'
  components: {
    MHeader
  }
}
</script>
```
> 编辑器设置——不要保存后格式化 "format_on_save": false
7. JSONP跨域请求
`npm install jsonp`

[https://github.com/webmodules/jsonp](https://github.com/webmodules/jsonp)

8. axios
`npm install --save axios`
