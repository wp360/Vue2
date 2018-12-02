<template>
  <div class="page">
    第一页
    <div class="a">{{$store.state.money.money}}</div>
    <button type="button" name="button" @click="add">增加</button>
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
    methods: mapActions('money',['add','reduce'])
  }
</script>