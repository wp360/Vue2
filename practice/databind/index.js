import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div :id="name" :class="[{ active: isActive }]" :style="styles" @click="handleClick">
      {{arr.join(' ')}}
      <p v-html="html"></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>文字</span>',
    name: 'main',
    styles: {
      color: 'red'
    }
  },
  methods: {
    handleClick () {
      alert('点击事件') // eslint-disable-line
    }
  }
})
