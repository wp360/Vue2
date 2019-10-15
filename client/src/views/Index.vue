<template>
  <div class="index">
    初始化页面
  </div>
</template>
<script>
import jwtDecode from 'jwt-decode'
export default {
  name: 'index',
  components: {

  },
  created () {
    if (localStorage.eleToken) {
      // 解析token
      const decoded = jwtDecode(localStorage.eleToken)
      // token存储到vuex中
      this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded))
      this.$store.dispatch('setUser', decoded)
    }
  },
  methods: {
    // 判断是否为空
    isEmpty (value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      )
    }
  }
}
</script>
