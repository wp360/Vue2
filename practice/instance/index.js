import Vue from 'vue'

// const div = document.createElement('div')
// document.body.appendChild(div)

// new Vue({
//   // el: div,
//   el: '#root',
//   template: '<div>内容</div>'
// })
const app = new Vue({
  template: '<div>内容</div>'
})
app.$mount('#root')

// $on 一直触发  $once 触发一次
app.$once('test', (a, b) => {
  console.log(`test emited ${1} ${b}`)
})

setInterval(() => {
  app.$emit('test', 1, 2)
}, 1000)
