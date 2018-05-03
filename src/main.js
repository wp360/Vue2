// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 轮播图
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

// 初始化样式
import 'styles/reset.css'
// 1像素边框问题解决方案
import 'styles/border.css'
// 图标
import 'styles/iconfont.css'
// 300毫秒延迟解决方案
import fastClick from 'fastclick'

fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
