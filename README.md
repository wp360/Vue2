# vue-webpack-demo

`npm i webpack-merge -D`

`npm i rimraf -D`
```js
// 每次打包前去掉之前的dist文件夹
// package.json
"scripts": {
  // ... 省略
  "clean": "rimraf dist"
}
```

## 关于cssModules的使用
```js
// 在vue-loader.config.js
module.exports = (isDev) => {
    return {
    //  ... 省略
        cssModules: {
            // 命名
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            // 驼峰
            camelCase: true
        },
    //  ... 省略
}
// 还可以在webpack.config.client.js
if (isDev) {
    //  ... 省略
        module: {
            rules: [
                {
                test: /\.styl$/,
                use: [
                    'vue-style-loader',
                    // 'css-loader', 改成
                    {
                      loader: 'css-loader',
                      options: {
                        module: true,
                        localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]'
                      }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
    //  ... 省略
```
#### 使用举例：
```vue
<template>
  <header class="main-header">
    <h1>任务列表</h1>
  </header>
</template>
<style lang="stylus" scoped>

改成

<template>
  <header :class="$style.mainHeader">
    <h1>任务列表</h1>
  </header>
</template>
<style lang="stylus" module>

页面渲染后显示
class="client-layout--header-随机hash值"
```
#### 再举一例
```jsx
import '../assets/style/footer.styl'
export default {
  // 省略
  render() {
    return (
      <footer id="footer">
// 改成
import className from '../assets/styles/footer.styl'
export default {
  // 省略
  render() {
    return (
      <footer id={className.footer}>
```
## Eslint代码校验
`npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D`

vue的话，eslint无法直接查看vue里的js代码，所以还需安装 `npm i eslint-plugin-html -D`
```js
// .eslintrc里
{
    "extends": "standard",
    "plugins": [
        "html"
    ]
}

// package.json
  "scripts": {
    // ...省略
    "lint": "eslint --ext .js --ext .jsx --ext .vue client/",
  // 自动修复
    "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue client/",
```
`npm i eslint-loader babel-eslint -D`

```js
// .eslintrc
{
// ...省略
    "parser": "babel-eslint"
}
// webpack.config.base.js
module: {
  rules: [
    {
      test: /\.(vue|js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    }
  ]
}
```
## .editorconfig配置
```js
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```
## precommit的使用
#### 【注意】 先要git init 有一个git仓库
`npm i husky -D`
```js
// package.json
  "scripts": {
    // ...省略
    "precommit": "npm run lint",
```
## 关于webpack升级4.0
#### 备注：现在默认安装webpack就是版本4，如果先要安装3，需要：`npm i webpack@^3.0.0.0 -D`
* 首先，卸载旧版本 `npm uninstall webpack webpack-dev-server webpack-merge -D`
* 然后，安装新版本 `npm i webpack webpack-dev-server webpack-merge webpack-cli -D`
* 再者，启动会报WARN警告，那就卸载相关旧版本的依赖包；卸载后再重新安装即可。
* 在webpack文件修改相关配置后，可能会eslint报错，那就更新一下 `npm i eslint-loader@^2.0.0 -D`

## [webpack 4.0.0快速上手](https://github.com/chinadbo/webpack4-start)
## [A Vue.js Parcel-Bundler](https://github.com/chinadbo/vue-parcel)


## 关于historyApiFallback
```js
// webpack.config.client.js
historyApiFallback: {
  index: 'index.html'
}
```

`npm i babel-plugin-syntax-dynamic-import -D`
```js
// 修改.babelrc
{
  // ... 省略
    "syntax-dynamic-import"
  ]
}

```

`npm i vuex -S`

[前端工程化之自动构建gulp及模块打包webpack和parcel简介](https://github.com/chinadbo/web-front-end/issues/6)


## 目录
1. 通过webpack搭建vue工程workflow;
2. .vue文件开发模式;
3. vue使用jsx进行开发的方式;
4. vue组件间通信的基本方式;
5. webpack打包优化的基本点

## 通过webpack搭建vue工程
  根目录webpack.config.js
  ```javascript
  const config = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      }
    }
  }
  ```
  查看更多[webpack.config.js](https://github.com/chinadbo/vue-webpack-demo/blob/master/webpack.config.js)

## .vue文件开发模式
  在入口index.js文件中，声明Vue，并且挂在到$el元素上。
  ```javascript
  new Vue({
    render: (h) => h(App)
  }).$mount($el)
  ```
  熟悉Vue之后可使用Vue官方推荐路由Vue-router
  ```javascript
  import Vue from 'vue'
  import App from './App'
  import router from './router'

  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
  ```
  组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。在有些情况下，组件也可以表现为用 is 特性进行了扩展的原生 HTML 元素。

  所有的 Vue 组件同时也都是 Vue 的实例，所以可接受相同的选项对象 (除了一些根级特有的选项) 并提供相同的生命周期钩子。

  ```javascript
  import Header from './todo/header.vue' // 引入组件
  export default {
    components: {
      Header,
    }
  }
  ```
  ```html
  <template>
    <div id='app'>
      <Header/>  <!-- Header组件 -->
  </template>
  ```

### css预处理、后处理
  开发过程中使用Sass、Less、Stylus等css预处理
  ```javascript
  // webpack.config.js
  {
    // 基本的css loader
    test: /\.css$/,
    use: [
      'style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.styl$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  }
  ```
  更进一步，加载postcss后处理器
  ```javascript
  // webpack.config.js
  {
    test: /\.styl$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  }
  ```
  根目录新建postcss.config.js配置文件
  ```javascript
  const autoprefixer = require('autoprefixer') // 加载autoprefixer（浏览器兼容前缀）
  module.exports = {
    plugins: [
      autoprefixer()
    ]
  }
  ```

## JSX
  > React的核心机制之一就是可以在内存中创建虚拟的DOM元素。React利用虚拟DOM来减少对实际DOM的操作从而提升性能。

  JSX就是Javascript和XML结合的一种格式。React发明了JSX，利用HTML语法来创建虚拟DOM。当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。

  如何在vue中使用jsx？
  ```javascript
  // webpack.config.js
  {
    test: /\.jsx$/,
    loader: 'babel-loader'
  }

  // 需要的package
  "babel-core": "^6.26.0",
  "babel-helper-vue-jsx-merge-props": "^2.0.3",
  "babel-loader": "^7.1.2",
  "babel-plugin-syntax-jsx": "^6.18.0",
  "babel-plugin-transform-vue-jsx": "^3.5.0"

  // .babelrc
  {
    "presets": [
      "env"
    ],
    "plugins":[
      "transform-vue-jsx"
    ]
  }

  // jsx文件
  import '../assets/style/footer.styl'
  export default {
    data() {
      return {
        author: 'Ioodu'
      }
    },
    render() {
      return (
        <footer id="footer">
          <span>Written by {this.author}</span>
        </footer>
      )
    }
  }
  ```
  facebook.github.io [JSX语法](http://facebook.github.io/jsx/)

## vue组件间通信
  > 组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。父组件的数据需要通过 prop 才能下发到子组件中。

  父组件
  ```vue
   <item
      :todo="todo"
      v-for="todo in filterTodos"
      :key="todo.id"
      @del="deleteTodo"
    />
    <Tabs
      :filter="filter"
      :todos="todos"
      @toggle="toggleFilter"
      @clearAll="clearAllcompleted"
    />
  ```
  父组件业务逻辑处理
  ```javascript
  // 引入组件
  components: {
    Item,
    Tabs,
  },
  methods: {
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
  }
  ```
  子组件
  ```vue
  <label for="content">{{todo.content}}</label>
  <button class="delete" @click="deleteTodo"></button>
  ```
  ```javascript
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo(){
      this.$emit('del', this.todo.id) // 触发事件 并且带参数
    }
  }

  ```
## webpack打包优化的基本点

1. 优化插件
- OccurenceOrderPlugin :为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
- UglifyJsPlugin：压缩JS代码；
- ExtractTextPlugin：分离CSS和JS文件
2. 缓存

- hash

- clean-webpack-plugin

...
