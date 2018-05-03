# Travel

#### 项目介绍
Vue2.0 开发旅游WebApp网站

#### 项目架构
* 项目架构说明

#### 安装工具

1. 安装 Node
2. 安装 Git
3. 安装 VScode 编辑器

#### 开发步骤

1. 代码管理
* 使用码云
#### 操作步骤：
    注册账号 （https://gitee.com/）
    注册好后，选择项目Private + 创建项目
    生成SSH公钥 （https://gitee.com/profile/sshkeys）
    （具体查看帮助文档：http://git.mydoc.io/?t=154712） 注：windows使用git-bash输入命令
    克隆/下载
    选择SSH，复制链接。命令行里输入 `git clone XXX`

    E:\node\vue2>git clone git@gitee.com:wp360/Travel.git
    Cloning into 'Travel'...
    remote: Counting objects: 4, done.
    remote: Compressing objects: 100% (4/4), done.
    remote: Total 4 (delta 0), reused 0 (delta 0)
    Receiving objects: 100% (4/4), done.
    Checking connectivity... done.

2. 命令行工具 (CLI)

[https://cn.vuejs.org/v2/guide/installation.html](https://cn.vuejs.org/v2/guide/installation.html)

```
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack Travel
# 安装依赖，走你
E:\node\vue2>vue init webpack Travel

? Target directory exists. Continue? Yes
  A newer version of vue-cli is available.

  latest:    2.9.3
  installed: 2.8.2

? Project name travel
? Project description A Vue.js project
? Author wp360 <2897406527@qq.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "Travel".


# Installing project dependencies ...
# ========================

$ cd Travel
$ npm run dev
```
3. 代码提交
```
git status
git add .
git commit -m '项目初始化'
git push
```

4. ESlint自动修复
```js
// pakeage.json 下添加对应代码
  "scripts": {
    // 省略
    "lint-fix": "eslint --fix --ext .js,.vue src",
  },
// 运行 npm run lint-fix会自动修复
```

5. 项目初始化
* html meta viewport调整
```
<meta name="viewport" content="width=device-width,initial-scale=1.0">
调整为：
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```
* 300毫秒延迟解决方案
`npm i fastclick --save`
```js
// main.js
// 300毫秒延迟解决方案
import fastClick from 'fastclick'

fastClick.attach(document.body)
```
* stylus的使用
`npm i stylus --save`
`npm i stylus-loader --save`

* rem的使用
1rem = html font-size = 50px
设计图尺寸是实际的2倍
86/100
.86rem

* 文件路径别名
```js
// webpack.base.conf.js
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'styles': resolve('src/assets/styles')
    }
```
* 首页轮播图
  * 新建分支 index-swiper
  * git pull 命令用于从另一个存储库或本地分支获取并集成(整合)。git pull命令的作用是：取回远程主机某个分支的更新，再与本地的指定分支合并，它的完整格式稍稍有点复杂。
  * git checkout index-swiper 切换分支
  * 采用vue-awesome-swiper插件

  [https://github.com/surmon-china/vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

  `npm install vue-awesome-swiper@2.6.7 --save`
  * 全局引入
  ```js
    // main.js
    import VueAwesomeSwiper from 'vue-awesome-swiper'

    // require styles
    import 'swiper/dist/css/swiper.css'

    Vue.use(VueAwesomeSwiper, /* { default global options } */)
  ```
* 分支合并
```
把分支index-swiper上的内容合并到master分支上
首先，切换到master分支 git checkout master
再者，合并 git merge origin/index-swiper
最后，提交 git push
```
#### [备注]
> 如果忘了git 合并代码到master分支，可以先git branch查看一下，然后git merge index-recommend即可

* axios的使用
`npm i axios --save`
> 模拟数据放在static/mock/文件夹下
```
axios.get('/api/index.json') 其中api请求网址替换
config文件夹下 index.js，修改proxyTable
    proxyTable: {
      '/api': {
        target: 'http://localhost: 8081',
        pathRewrite: {
          '^/api': '/static/mock'
        }
      }
    },
```

## 父子组件数据传递
```
举例：
【home.vue】
<home-header></home-header>
改成
<home-header :city="city"></home-header>
data () {
  return {
    city: ''
  }
}
// 获取数据
getHomeInfoSucc (res) {
  // console.log(res)
  res = res.data
  if (res.ret && res.data) {
    const data = res.data
    this.city = data.city
  }
}
【header.vue】
<div class="header-right">城市</div>
改成：
<div class="header-right">{{this.city}}</div>
// 添加属性
props: {
  city: String
},
```

#### 参考网站
[http://piao.qunar.com/touch/](http://piao.qunar.com/touch/)
