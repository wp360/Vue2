<template>
  <div class="events">
    <button type="button" name="button" @click="msg('s', $event)">测试</button>
    <div class="parent" @click="parent">
      <p>父级元素</p>
      <p>父级元素</p>
      <p>父级元素</p>
    </div>
    <div class="child" @click.stop="child">
      <p>子元素</p>
    </div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      msg: function (a, b) {
        window.console.log(Math.random(),a,b)
      },
      parent: function () {
        window.console.log('parent')
      },
      child: function () {
        window.console.log('child')
      }
    }
  }
</script>
