//引入 Vue
import Vue from 'vue';
import App from './app.vue';
//引入子组件对象
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';
//声明全局组件
Vue.component('headerVue',headerVue);
Vue.component('bodyVue', bodyVue);
Vue.component('footerVue', footerVue);
//创建全局过滤器
Vue.filter('myFilter',function(value){
    return '全局过滤器';
});
//创建一个Vue的实例
new Vue({
    // el:'#app', //目的地
    // render:'dom结构'//渲染的内容
    el: '#app',
    render: function (creater) {
        return creater(App); //App包含 template/script/style,最终生成DOM结构
    }// es6简写 render: creater => creater(App)
});
