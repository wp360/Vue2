<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'

export default {
  name: 'app',
  components: {
    HeaderNav
  },
  data () {
    return {

    }
  }
}
</script>
