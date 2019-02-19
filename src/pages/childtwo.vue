<template>
    <div class="page">
        <h3>子组件2</h3>
        <p>{{countval}}</p>
    </div>
</template>
<script>
export default {
  props: ['countval'],
  data () {
    return {}
  }
}
</script>
<style scoped>
.page {
    border: 1px solid #000;
    padding: 10px;
}
</style>
