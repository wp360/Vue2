## 构建环境及基础知识
1. [git - 简易指南](http://www.bootcss.com/p/git-guide/)
2. [webpack中文参考文档](https://doc.webpack-china.org/)
3. [npm scripts 使用指南](http://ruanyifeng.com/blog/2016/10/npm_scripts.html)
4. [babel如何使用 Polyfill](https://babeljs.cn/docs/usage/polyfill/)
5. [ES6和Babel你不知道的事儿](http://www.imooc.com/article/21866)
6. [ESLint官方中文文档](http://eslint.cn/docs/user-guide/configuring)
7. [ES6英文文档](http://es6-features.org/#Constants)
8. [SASS中文文档](http://sass.bootcss.com/)
9. [Vue.js中文文档](https://cn.vuejs.org/index.html)
## 技术选型
1. 构建工具
2. MVVM框架选择
3. 模块化设计
4. 自适应方案设计
5. 代码维护及复用性设计思考（需求变更、产品迭代、Bug定位、新功能开发）
## 工程构建安装
1. 安装调试
```js
git clone https://github.com/cucygh/JDFinance.git
cd JDFinance
npm install
```
2. [组件化思维与技巧之京东金融实战初始配置代码](https://github.com/cucygh/JDFinance)
## 项目设计与原理
1. 自适应基本概念
* css像素、设备像素、逻辑像素、设备像素比
[CSS像素、物理像素、逻辑像素、设备像素比、PPI、Viewport](https://github.com/jawil/blog/issues/21)
* viewport
* rem
2. 工作原理
* 利用viewport和设备像素比调整基准像素
* 利用px2rem自动转化css单位
3. SPA设计
* 设计意义
    a、前后端分离
    b、减轻服务器压力
    c、增强用户体验
    d、Prerender预渲染优化SEO
    [http://codingfishman.github.io/2016/05/06/prerender%E9%A2%84%E6%B8%B2%E6%9F%93%E4%BC%98%E5%8C%96SEO/](http://codingfishman.github.io/2016/05/06/prerender%E9%A2%84%E6%B8%B2%E6%9F%93%E4%BC%98%E5%8C%96SEO/)
* 工作原理
    a、History API
    b、Hash
## 轮播组件
[使用vue-awesome-swiper滑块插件](https://www.npmjs.com/package/vue-awesome-swiper)
## hotcss
[移动端布局终极解决方案 --- 让移动端布局开发更加容易](https://github.com/imochen/hotcss)