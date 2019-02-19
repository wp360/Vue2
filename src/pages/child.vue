<template>
    <div class="page">
        <h1>子组件</h1>
        <button class="btn" @click="fn">单击子组件传值父组件</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      cMsg: 'child要传递的信息'
    }
  },
  methods: {
    fn () {
      this.$emit('change', this.cMsg)
    }
  }
}
</script>
