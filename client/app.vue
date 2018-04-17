<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <p>{{count}}</p>
    <!--<Todo></Todo>-->
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <!--<router-link to="/login/exact">loginExact</router-link>-->
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <!--<router-view name="a"></router-view>-->
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'

console.log(Header.__docs)

export default {
  components: {
    Header,
    Todo,
    Footer
  },
  mounted () {
    console.log(this.$store)
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="stylus" scoped>
  #app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
  #cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background-color #999
    z-index -1
    opacity .2
</style>
