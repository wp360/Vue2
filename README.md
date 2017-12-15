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

9. Vue-- vue-preview（图片查看器）的使用步骤：
```js
        1）下载
        2）配置：找到配置文件加入：
            {
                test: /vue-preview.src.*?js$/,
                loader: 'babel-loader'
            },
            在处理url（）请求的配置中加入：svg的配置
            {
                test: /\.(jpg|png|gif|ttf|svg)$/,
                loader: "url-loader?limit=40000"
            }

        3）在main.js加载：
            //引入vue-preview
            import VuePreview from 'vue-preview'
            //使用vue-preview
            Vue.use(VuePreview)

        4）在tamplate中引入html代码：
        // html —>> <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">

        5）得到list数据
        格式：
            list: [{
            src: 'https://placekitten.com/600/400',
                w: 600,
                h: 400
            }, {
            src: 'https://placekitten.com/1200/900',
                w: 1200,
                h: 900
            }]
```
[文档参考：一个Vue集成PhotoSwipe图片预览插件](https://github.com/LS1231/vue-preview)