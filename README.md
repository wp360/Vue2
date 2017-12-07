## 【webpack篇】
* webpack属性配置
```js
webpack.config.js >>>
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/main.js' // main是默认入口，也可以是多入口
    },
    output:{
        filename: './build.js', //指定js文件
        path: path.join(__dirname,'..','dist')
    },
    // 关于模块配置
    module:{
        // 模块规则（配置 loader、解析器等选项） webpack2.X之后新增 rules
        loaders:[
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                //loader:'url-loader?limit=4096&name=[name].[ext]',
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: '[name].[ext]'
                }
            },
            {
                //处理ES6的js
                test: /\.js$/,
                loader: 'babel-loader',
                //排除 node_modules下的所有
                exclude: /node_modules/,
                options: {
                    //关键字
                    presets: ['es2015'],
                    //函数
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    plugins:[
        //插件的执行顺序是依次执行的
        new htmlWebpackPlugin({
            template:'./src/index.html',
        })
        //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
    ]
}
```
[webpack参考使用文档](https://doc.webpack-china.org/concepts/)
## 【ES6篇】
### webpack-ES6的处理
* ES6的模块,vue本身默认支持es6的模块导入导出
* babel
    - babel-loader(内部依赖babel-core)
        + 关键字(presets  es2015)
        + 函数(plugins babel-plugin-transform-runtime)

#### ES6中的模块
* 默认
    - 导入 `import [,..xxx] [,..from] './xxx.ext'`
    - 导出 `export default obj;`
[ES6使用参考：ECMAScript 6 入门](http://es6.ruanyifeng.com/)
## 【Vue2.0初始篇】
1. vue单文件方式
* 单文件就是以*.vue结尾的文件。最终通过webpack也会编译成*.js在浏览器运行
* 内容： <template></template> + <script></script> + <style></style>
    - 1:template中只能有一个根节点 2.x
    - 2:script中  按照 export default {配置} 来写
    - 3:style中 可以设置scoped属性，让其只在template中生效

2. 以单文件的方式启动
* webpack找人来理解你的单文件代码
    - vue-loader,vue-template-compiler,代码中依赖vue
* 启动命令
* `..\\node_modules\\.bin\\webpack-dev-server --inline --hot --open`
```js
package.json >>>
  "scripts": {
    //此为node_modules在最外层，多个项目文件夹公共使用
    "dev": "..\\node_modules\\.bin\\webpack-dev-server --inline --hot --open --port 8008",
    "build": "webpack"
    }
```

3. vue中常用的v-指令演示
* 常用指令 
* v-text 是元素的innerText只能在双标签中使用
* v-html 是元素的innerHTML，不能包含<!--{{xxx}} -->
* v-if 元素是否移除或者插入
* v-show 元素是否显示或隐藏
* v-model 双向数据绑定，v-bind是单向数据绑定(内存js改变影响页面)

4. class结合v-bind使用
* 需要根据可变的表达式的结果来给class赋值，就需要用到v-bind:class="xxx"
* v-bind:属性名="表达式"，最终表达式运算结束的结果赋值给该属性名
    - 简化的写法是: `:属性名="表达式"`
* class:结果的分类
    - 一个样式: 返回字符串(三元表达式和key和样式的清单对象)
    - 多个样式：返回对象(样式做key，true或flase做值)

5. methods和v-on的使用
* 绑定事件的方法
    - `v-on:事件名="表达式||函数名"`
    - 简写: `@事件名="表达式||函数名"`
* 函数名如果没有参数，可以省略()  只给一个函数名称
* 声明组件内函数，在export default这个对象的根属性加上methods属性，其是一个对象
    - key 是函数名 值是函数体
* 在export default这个对象的根属性加上data属性，其是一个函数，返回一个对象
    - 对象的属性是我们初始化的变量的名称
* 凡是在template中使用变量或者函数，不需要加this
* 在script中使用就需要加上this

6. v-for的使用
* 可以使用操作数组 (item,index)
* 可以使用操作对象 (value,key,index)

* key 是类似trank by 的一个属性
* 为的是告诉vue，js中的元素，与页面之间的关联，当识图删除元素的时候，是单个元素的删除而不是正版替换，所以需要关联其关系，设置(必须,性能)
* 2.2.0+ 的版本里，当在组件中使用 v-for 时，key 现在是必须的。

7. 父子组件使用
* 父和子，使用的是父，被用的是子
* 父需要声明子组件，引入子组件对象，声明方式如下
```javascript
import 子组件对象 from './xxx.vue';

    {
        components:{
            组件名:子组件对象
        }
    }
```
* 全局组件，使用更为方便，不需要声明，直接用
* 在main.js中引入一次，在main.js中使用 `vue.component('组件名',组件对象);`
* 所有的组件就可以直接通过组件名使用

8. 父传子
* 父组件通过子组件的属性将值进行传递
    - 方式有2:
        + 常量:  prop1="常量值"
        + 变量:  (v-bind):prop2="变量名"
* 子组件需要声明
    - 根属性props:['prop1','prop2']
    - 在页面中直接使用{{prop1}}
    - 在js中应该如何使用prop1？   this.prop1获取

9. 看文档的对象分类
* 1:全局的代表Vue.的
* 2:实例的代表this.或者new Vue().
* 3:选项代表 new Vue() 的参数
* 或者 export default里边的属性

10. 子向父组件通信（vuebus）(扩展)
* 通过new Vue()这样的一个对象，来$on('事件名',fn(prop1,pro2))
* 另一个组件引入同一个vuebus,  来$emit('事件名',prop1,pro2)

### 总结
* -1 : 已经存在node_modules包，已经存在package.json和webpack.config.js文件
* 1: 创建index.html,看看其所在文件和webpack.config.js文件中描述的关系
* 2: 在index.html div->id->app
* 3: 创建main.js,看看其所在文件和webpack.config.js文件中描述的关系
* 4: 在main.js中引入vue,和相关组件对象
* 5: new Vue(选项options) , 目的地el   渲染内容 render:c=>c(App) 渲染App的内容
* 6: 编写app.vue
    - template 在2.x以后只能有一个根节点
    - script 格式是export default { 选项options}
    - style 加上scoped（范围的）之后，样式只对当前模板有效
* 7: 可能使用组件或者使用函数或者接受参数
    - options(根属性):
        + data 是一个函数,return一个对象
        + methods 是一个对象,key是函数名,value是函数体
        + components 是一个对象,key是组件名,值是组件对象
        + props 是一个数组,元素是多个接受的参数
* 8: 套路总结
    - 凡是在上边可以使用的东西
    - 在下边就可以使用，通过this.
* 9:启动
    - 进入到webpack.config.js 和package.json文件同在的目录中启动命令行
    - 输入: 正在编码:  npm run dev
        + 报错: 检查命令所执行的../ 上级,是否存在node_modules目录及相关文件是否存在
    - 输入: 代码编写完毕，提交到公司 :  npm run build

## 【Vue2.0进阶篇】
1. 过滤器
* content | 过滤器,vue中没有提供相关的内置过滤器,可以自定义过滤器
* 组件内的过滤器 + 全局过滤器
    - 组件内过滤器就是options中的一个filters的属性（一个对象）
        + 多个key就是不同过滤器名,多个value就是与key对应的过滤方式函数体
    - `Vue.filter(名,fn)`
* 输入的内容做一个反转
```js
    filters:{
        myFilter: function(value){
            // value就是text
            //输入的内容做一个反转：转换成数组，反转数组，转换成字符串
            return value.split('').reverse().join('');//return 1;
        }
    }
```
* 总结
    - 全局 ：范围大，如果出现同名时，权利小
    - 组件内: 如果出现同名时，权利大，范围小

2. 获取DOM元素
* 救命稻草, 前端框架就是为了减少DOM操作，但是特定情况下，也给你留了后门
* 在指定的元素上，添加ref="名称A"
* 在获取的地方加入 this.$refs.名称A
    - 如果ref放在了原生DOM元素上，获取的数据就是原生DOM对象
        + 可以直接操作
    - 如果ref放在了组件对象上，获取的就是组件对象
        + 1:获取到DOM对象,通过this.$refs.sub.$el,进行操作
    - 对应的事件
        + created 完成了数据的初始化，此时还未生成DOM，无法操作DOM
        + mounted 将数据已经装载到了DOM之上,可以操作DOM

3. mint-ui
* 组件库
* 饿了么出品,element-ui 在PC端使用的
* 移动端版本 mint-ui
* https://mint-ui.github.io/#!/zh-cn
* 注意:
    - 如果是全部安装的方式
        + 1:在template中可以直接使用组件标签
        + 2:在script中必须要声明，也就是引入组件对象（按需加载）

4. wappalyzer
* 获取到当前网站的使用的技术
* https://wappalyzer.com/download

5. Vue路由
### vue-router
* 前端路由 核心就是锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据
* ui-router:锚点值改变，如何获取模板？ajax
* vue中，模板数据不是通过ajax请求来，而是调用函数获取到模板内容
* 核心：锚点值改变
* 以后看到vue开头，就知道必须Vue.use
* vue的核心插件:
    - vue-router 路由
    - vuex 管理全局共享数据
* 使用方式
    - 1:下载 `npm i vue-router -S`
    - 2:在main.js中引入 `import VueRouter from 'vue-router';`
    - 3:安装插件 `Vue.use(VueRouter);`
    - 4:创建路由对象并配置路由规则
        + `let router = new VueRouter({ routes:[ {path:'/home',component:Home}  ]   });`
    - 5:将其路由对象传递给Vue的实例，options中
        + options中加入 `router:router`
    - 6:在app.vue中留坑 ` <router-view></router-view>`

### 命名路由
* 需求，通过a标签点击，做页面数据的跳转
* 使用router-link标签
    - 1:去哪里 `<router-link to="/beijing">去北京</router-link>`
    - 2:去哪里 `<router-link :to="{name:'bj'}">去北京</router-link>`
        + 更利于维护，如果修改了path，只修改路由配置中的path，该a标签会根据修改后的值生成href属性

### 参数router-link
* 在vue-router中，有两大对象被挂载到了实例this
* $route(只读、具备信息的对象)、$router(具备功能函数)
* 查询字符串
    - 1:去哪里 `<router-link :to="{name:'detail',query:{id:1}  } ">xxx</router-link>`
    - 2:导航(查询字符串path不用改) `{ name:'detail' , path:'/detail',组件}`
    - 3:去了干嘛,获取路由参数(要注意是query还是params和对应id名)
        + `this.$route.query.id`
* path方式
    - 1:去哪里 `<router-link :to="{name:'detail',params:{name:1}  } ">xxx</router-link>`
    - 2:导航(path方式需要在路由规则上加上/:xxx) 
    - `{ name:'detail' , path:'/detail/:name',组件}`
    - 3:去了干嘛,获取路由参数(要注意是query还是params和对应name名)
        + `this.$route.params.name`

### 编程导航
* 不能保证用户一定会点击某些按钮
* 并且当前操作，除了路由跳转以外，还有一些别的附加操作
* this.$router.go 根据浏览器记录 前进1 后退-1
* this.$router.push(直接跳转到某个页面显示)
    - push参数: 字符串 /xxx
    - 对象 :  `{name:'xxx',query:{id:1},params:{name:2}  }`

### 复习
* 过滤器，全局，组件内
* 获取DOM元素 ，在元素上ref="xxx"
* 在代码中通过this.$refs.xxx 获取其元素
    - 原生DOM标签获取就是原生DOM对象
    - 如果是组件标签，获取的就是组件对象  $el继续再获取DOM元素
* 声明周期事件(钩子)回调函数
    - created: 数据的初始化、DOM没有生成
    - mounted: 将数据装载到DOM元素上，此时有DOM
* 路由
    - `window.addEventListener('hashchange',fn);`
    - 根据你放`<router-view></router-view><div id="xxx"></div>` 作为一个DOM上的标识
    - 最终当锚点值改变触发hashchange的回调函数，我们将指定的模板数据插入到DOM标识上
```html
    <!--代码参考-->
    <div class="h">我是头部</div>
    <div id="content" class="b"></div>
    <div class="f">我是底部</div>
    <script type="text/javascript">
    //监视锚点值的改变
    window.addEventListener('hashchange', function() {
        var text = '';
        switch (location.hash) {
            case '#/music':
                text = '各种音乐的数据';
                break;
            case '#/movie':
                text = '各种电影的数据';
                break;
        }
        document.getElementById('content').innerHTML = text;
    })
    </script>
```
### 重定向和404
* 进入后，默认就是/
* 重定向 `{ path:'/' ,redirect:'/home'  }`
* 重定向 `{ path:'/' ,redirect:{name:'home'}  }`
* 404 : 在路由规则的最后的一个规则
    - 写一个很强大的匹配
    - `{ path:'*' , component:notFoundVue}`

### 多视图
* 以前可以一次放一个坑对应一个路由和显示一个组件
    - 一次行为 = 一个坑 + 一个路由 + 一个组件
    - 一次行为 = 多个坑 + 一个路由 + 多个组件
* components 多视图 是一个对象 对象内多个key和value
    - key对应视图的name属性
    - value 就是要显示的组件对象
* 多个视图`<router-view></router-view>` -> name就是default
* `<router-view name='xxx'></router-view>` -> name就是xxx

### 嵌套路由
* 用单页去实现多页应用，复杂的嵌套路由
* 开发中一般会需要使用
* 视图包含视图
* 路由父子级关系路由

```javascript
    //期组件内包含着第一层router-view
    {
        name:'music' ,path:'/music', component:Music ,
        children:[   子路由的path /就是绝对路径   不/就是相对父级路径
            {name:'music.oumei' ,path:'oumei', component:Oumei },
            {name:'music.guochan' ,path:'guochan', component:Guochan }
        ]
    }
```
### axios
* axios:
    - 开始:
        + 跨域 + 默认的头是因为你的数据是对象，所以content-type:application/json
        + 有OPTIONS预检请求（浏览器自动发起）
    - 最终:
       + 当我们调整为字符串数据，引起content-type变为了www键值对
       + 没有那个OPTIONS预检请求
    - 总结： 跨域 + application/json 会引起OPTIONS预检请求，并且自定义一个头(提示服务器，这次的content-type较为特殊)，content-type的值
    - 服务器认为这个是一次请求，而没有允许content-type的头，
    - 浏览器就认为服务器不一定能处理掉这个特殊的头的数据
    - 抛出异常
    - 在node服务器 response.setHeader("Access-Control-Allow-Headers","content-type,多个");
    - formdata的样子:  key=value&key=value
    
* axios属性关系
    - options: headers、baseURL、params
    - 默认全局设置(大家都是这么用)
        + Axios.defaults-> options对象
    - 针对个别请求来附加options
    - axios.get(url,options)
    - axios.post(url,data,options)

* 合并请求
* axios.all([请求1,请求2])
* 分发响应  axios.spread(fn)
* fn:对应参数(res)和请求的顺序一致
* 应用场景:
    - 必须保证两次请求都成功，比如，分头获取省、市的数据
* 执行特点: 只要有一次失败就算失败，否则成功

### 拦截器
* 过滤，在每一次请求与响应中、添油加醋
* axios.interceptors.request.use(fn)  在请求之前
* function(config){ config.headers = { xxx }}   config 相当于options对象
* 默认设置 defaults 范围广、权利小
* 单个请求的设置options get(url,options)  范围小、权利中
* 拦截器 范围广、权利大

### token(扩展)
* cookie 和session的机制，cookie自动带一个字符串
* cookie只在浏览器
* 移动端原生应用，也可以使用http协议，1:可以加自定义的头、原生应用没有cookie
* 对于三端来讲，token可以作为类似cookie的使用，并且可以通用
* 拦截器可以用在添加token上

### 拦截器操作loadding
* 在请求发起前open，在响应回来后close

### 监视
* watch 可以对（单个）变量进行监视，也可以深度监视
* 如果需求是对于10个变量进行监视？
* 计算属性computed 可以监视多个值，并且指定返回数据，并且可以显示在页面
* 都是options中的根属性
    - watch监视单个
    - computed可以监视多个this相关属性值的改变,如果和原值一样
    - 不会触发函数的调用，并且可以返回对象
