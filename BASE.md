## 基础知识
* 1. 项目构建
```
> 脚手架
npm install -g @vue/cli
> 验证安装
vue -V
> 创建项目
vue create [options] 项目名称 （options可以不加）

cd 切换目录

npm run serve
```
* 2. 模板语法
> 文本、原始HTML、特性、表达式、指令、修饰符、缩写
* 3. 自定义指令
```js
// n.js
import Vue from 'vue'

Vue.directive('n', {
  bind: (el, binding) => {
    // el指绑定的元素
    el.textContent = Math.pow(binding.value, 2)
  },
  update: (el, binding) => {
    el.textContent = Math.pow(binding.value, 2)
  }
})
// 使用：引入，添加v-n = "3"
```
* 4. 计算属性
> 应用场景： 具有依赖关系的数据监听
* 5. 类与样式
```
:class="[a1,a2]"
:class="'hover': a3}"
```
* 6. 条件&列表渲染
* 7. 事件处理
* 8. 组件