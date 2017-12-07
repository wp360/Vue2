import Vue from 'vue';
//主体
import App from './components/app.vue';
//引入
import VueResource from 'vue-resource';
import Axios from 'axios';
Axios.defaults.baseURL = 'http://182.254.146.100:8899/api/';

//引入mini-ui
import Mint from 'mint-ui';
//import { Indicator } from 'mint-ui';
//引入css
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//安装插件
Vue.use(VueResource); //挂载属性
// 未来通过this.$http
// Vue是所有实例对象的构造函数
// Vue.prototype.$http -> 实例（this）就可以.$http
// 默认设置
Axios.defaults.headers = {
    accept: 'default'
};
//拦截器
Axios.interceptors.request.use(function(config){
    Mint.Indicator.open();
    //发起请求之前 显示loading
    return config;
});

Axios.interceptors.response.use(function (config) {
    //在响应回来之后 隐藏loading
    Mint.Indicator.close();
    return config;
});
// 给Vue原型挂载一个属性
Vue.prototype.$axios = Axios;

// new Vue 启动
new Vue({
    el: '#app',
    render: c => c(App)
});