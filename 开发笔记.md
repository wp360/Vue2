## 开发步骤
1. 安装依赖
`npm init`

`npm i mint-ui vue-preview axios vue-router moment@1.1.1 vue --save`

`npm i webpack html-webpack-plugin css-loader style-loader less less-loader autoprefixer-loader babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime url-loader file-loader vue-loader vue-template-compiler webpack-dev-server --save-dev`

2. webpack.config.js

3. 新建文件夹
> src > components、static(css,img,vendor)

4. 初始文件
> index.html、main.js、app.vue

5. 路由
* 引入路由
* 配置路由规则
```js
import VueRouter from 'vue-router';

import Home from './components/home/home.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        // 配置路由规则
        { path: '/',redirect: {name:'home'}},
        //重定向
        { name: 'home',path: '/home',component: Home}
    ]
});
```
* 新建home.vue
* app.vue添加<router-view></router-view>

6. mint-ui
[mint-ui 官方文档](https://mint-ui.github.io/#!/zh-cn)

7. MUI
[MUI 文档链接](http://www.dcloud.io/hellomui/)

8. 自定义图标
[阿里巴巴矢量图标库](http://www.iconfont.cn/)
> 选购好图标，登录下载后，找到对应ttf文件替换MUI里默认的图标文件，然后，再更新对应的css样式，替换上class即可。