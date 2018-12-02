<template>
  <div class="page">
    第二页
    <div class="b">{{$store.state.count.count}}</div>
    <button type="button" name="button" @click="add(2)">增加</button>
    <button type="button" name="button" @click="reduce">减少</button>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    methods: mapActions('count',['add','reduce'])
  }
</script>