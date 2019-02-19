<template>
  <div class="banner">
    <computer>
        <div slot="CPU">Intel Core i7</div>
        <div slot="GPU">GTX980Ti</div>
        <div slot="Memory">Kingston 32G</div>
        <div slot="Hard-drive">Samsung SSD 1 T</div>
    </computer>
    <p> {{ total }} </p>
    <counter @increase="handleGetTotal" @reduce="handleGetTotal"></counter>
    <button type='button'>登录</button>
  </div>
</template>

<script>
import computer from './parts'
import counter from './counter'
export default {
  data () {
    return {
      total: 0
    }
  },
  components: {
    computer,
    counter
  },
  methods: {
    handleGetTotal (total) {
      this.total = total
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
  font-size: 28px;
}
button {
  margin-top: 20px;
  padding:5px 15px;
  background: #398BFB;
  color: #fff;
  border-radius: 4px;
}
</style>
