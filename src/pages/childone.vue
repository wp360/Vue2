<template>
    <div class="page">
        <h3>子组件1</h3>
        <button class="btn" @click="fn">子组件传值到父组件</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      num: '10'
    }
  },
  methods: {
    fn () {
      this.$emit('change', this.num)
    }
  }
}
</script>
<style scoped>
.page {
    border: 1px solid #000;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
