<template>
  <div id="app">
    <m-header></m-header>
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import Tab from 'components/tab/tab'
export default {
  // name: 'App'
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"

  #app
    color: $color-theme
</style>
