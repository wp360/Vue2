<template>
    <div class='banner'>
        <h3>用户页面</h3>
        <div class="page">
          <h3>这是列表页</h3>
          <button class="btn" @click="skip()">跳转到详情页</button>
          <button class="btn" @click="changeData()">改变数据</button>
          <!-- 组件调用 来自列表页的数据 -->
          <!-- <ListItem :message="listdata"></ListItem> -->
          <ListItem :message="count"></ListItem>
          <br>
          <h3>父组件</h3>
          <p>子组件传递的数据：{{msg}}</p>
          <child @change='getVal'></child>
        </div>
    </div>
</template>

<script>
// 引入组件
import ListItem from '@/components/ticketlist/listitem'
import child from './child'
export default {
  data () {
    return {
      // listdata: '',
      count: 100,
      msg: ''
    }
  },
  components: {
    // 注册组件
    ListItem,
    child
  },
  methods: {
    // 单击按钮改变listdata数据
    changeData () {
      this.listdata = '单击按钮之后的数据'
    },
    getVal (val) {
      this.msg = val
    }
  }
}
</script>

<style scoped>
</style>
