import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import FAQ from "./components/FAQ.vue";

Vue.use(VueRouter);

const routes = [
  // 路由将放在这里
  //   {
  //     path: '/some/path',
  //     name: 'my-route',
  //     component: ...
  //   }
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
})


export default router