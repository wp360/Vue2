<template>
    <div class="page">
        <button @click="handleIncrease"> 增加 1 </button>
        <button @click="handleReduce"> 减小 1 </button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    handleIncrease () {
      this.counter++
      this.$emit('increase', this.counter)
    },
    handleReduce () {
      this.counter--
      this.$emit('reduce', this.counter)
    }
  }
}
</script>

<style scoped>
button {
  border: 0;
  margin-right: 5px;
  padding: 5px 10px;
  background-color: #3385ff;
  color: #fff;
  font-size: 14px;
}
</style>
