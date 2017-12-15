'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Search from './components/search/search.vue';
import NewsList from './components/news/newsList.vue';
import NewsDetail from './components/news/newsDetail.vue';
import PhotoShare from './components/photo/photoShare.vue';
import PhotoDetail from './components/photo/photoDetail.vue';

Vue.use(VueRouter);

//Mint:引入mint-ui
import Mint from 'mint-ui';
//Mint:引入css
import 'mint-ui/lib/style.css';
//Mint:安装插件
Vue.use(Mint);
//MUI:引入mui的样式
import './static/vendor/mui/dist/css/mui.css';
//全局样式
import './static/css/global.css';
//Axios:引入axios
import Axios from 'axios';
//挂载原型
Vue.prototype.$ajax = Axios;
//默认配置
//Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';
Axios.defaults.baseURL = 'https://wp360.github.io/api/';
// Moment: 引入moment
import Moment from 'moment';

//引入全局组件
import NavBar from './components/common/navBar.vue';

Vue.component('navBar', NavBar);

//定义过滤器，全局使用
Vue.filter('convertDate',function(value){
    return Moment(value).format('YYYY-MM-DD');
});

//引入vue-preview
import VuePreview from 'vue-preview';
//使用vue-preview
Vue.use(VuePreview);

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        // 配置路由规则
        { path: '/', redirect: { name: 'home' } }, //重定向
        { name: 'home', path: '/home', component: Home },//首页
        { name: 'member', path: '/member', component: Member }, //会员
        { name: 'shopcart', path: '/shopcart', component: Shopcart }, //购物车
        { name: 'search', path: '/search', component: Search }, //查找
        { name: 'newsList',path: '/news/list',component: NewsList },//新闻列表
        { name: 'newsDetail',path: '/news/detail',component: NewsDetail },//新闻详情
        { name: 'photoShare', path: '/photo/share', component: PhotoShare },//图文分享
        { name: 'photoDetail', path: '/photo/detail/:id', component: PhotoDetail }//图片详情
    ]
});

new Vue({
    el: '#app',
    router,
    render: c => c(App)
});