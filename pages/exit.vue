<template>
  <div class="blank" />
</template>

<script>
export default {
  lauout: 'blank',
  // 调用退出接口
  middleware: async (ctx) => {
    const { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>
