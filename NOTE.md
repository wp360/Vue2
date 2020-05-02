## eslint的使用
* 1. 安装
`npm install -g eslint`
* 2. 项目里eslint设置
`eslint --init`
```
? How would you like to use ESLint?
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style
? What type of modules does your project use? (Use arrow keys)
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
? Which framework does your project use? (Use arrow keys)
  React
> Vue.js
  None of these
? Does your project use TypeScript? (y/N) n
? Where does your code run? (Press <space> toselect, <a> to toggle all, <i> to invert selection)
>(*) Browser
 ( ) Node
? How would you like to define a style for your project? (Use arrow keys)
> Use a popular style guide
  Answer questions about your style
  Inspect your JavaScript file(s)
? Which style guide do you want to follow? (Use arrow keys)
  Airbnb: https://github.com/airbnb/javascript
> Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
? What format do you want your config file to be in? (Use arrow keys)
> JavaScript
  YAML
  JSON
eslint-plugin-vue@latest eslint-config-standard@latest eslint@>=6.2.2 eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0
? Would you like to install them now with npm? (Y/n) y
```
* 3. 安装 eslint-plugin-vue
`npm install eslint-plugin-vue -D`
* 4. 直接设置package.json
```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "lint-fix": "vue-cli-service lint --fix"
  },
```
## 自定义指令
* 1. 新建文件
```js
// vue-lesson/src/directive/make-red.js
import Vue from 'vue'

Vue.directive('make-red', {
  inserted (el) {
    el.style.color = 'red'
  }
})

```
* 2. 引入指令文件
```js
// main.js
import './directive/make-red'
```
* 3. 使用自定义指令
```
<h1 v-make-red>{{ msg }}</h1>
```
## mock数据
* 1. 新建mock数据
> mock >> list.json、user.json
* 2. vue.config.js设置
```js
module.exports = {
  devServer: {
    proxy: {
      '/user': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/user': 'user.json'
        }
      },
      '/list': {
        target: 'http://localhost:8081',
        pathRewrite: {
          '/list': 'list.json'
        }
      }
    }
  }
}
```
* mock文件夹下启动服务
> http-server .
## 异步操作Promise
* 1. 安装axios
`npm i axios`
## 上传github
```
git remote add origin https://github.com/wp360/Vue2.git

git checkout -b vue-lesson

git status

git add .

git commit -m "自定义指令"

git push

git push --set-upstream origin vue-lesson
```