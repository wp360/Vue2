import Vue from 'vue';
import VueRouter from 'vue-router';

//主体
import App from './components/app.vue';
import Home from './components/home.vue';
import Music from './components/music.vue';
import Movie from './components/movie.vue';
import List from './components/list.vue';
import Detail from './components/detail.vue';
import NotFound from './components/notFound.vue';
// 音乐子组件
import Oumei from './components/oumei.vue';
import Guochan from './components/guochan.vue';

//安装插件
Vue.use(VueRouter); //挂载属性

//创建路由对象并配置路由规则
//let router = new VueRouter();
//router.addRoutes([])
let router = new VueRouter({
    routes: [
        //重定向
        //{path: '/',redirect: '/home'},
        //{path: '/home', component: Home},
        {path: '/',redirect: {name:'home'}},
        {name: 'home', path: '/home', component: Home},
        // 一个个对象
        { name: 'music', path: '/music', component: Music,children:[
                //-> 这里很灵活，如果你写上/xxx  就是绝对路径， /oumei
                //如果你不写/  ,那么就是相对路径 /music/oumei
                {
                    name: 'music_oumei',
                    path: 'oumei',
                    component: Oumei
                },
                //标识一下，当前路由之间的关系，格式不是必须的
                {
                    name: 'music_guochan',
                    path: 'guochan',
                    component: Guochan
                }
        ]},
        { name: 'movie', path: '/movie', component: Movie },
        { name: 'list', path: '/list', component: List },
        { name: 'detail', path: '/detail', component: Detail },
        { name: 'details', path: '/detail/:id', component: Detail },
        // 最终无法匹配 404
        {
            path: '*',
            component: NotFound
        }
    ]
}); 

// new Vue 启动
new Vue({
    el: '#app',
    // 让vue知道我们的路由规则
    router: router, // 简写router
    render: c => c(App)
});