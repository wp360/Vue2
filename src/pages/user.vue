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
        </div>
    </div>
</template>

<script>
// 引入组件
import ListItem from '@/components/ticketlist/listitem'
export default {
  data () {
    return {
      // listdata: '',
      count: 100
    }
  },
  components: {
    // 注册组件
    ListItem
  },
  methods: {
    // 单击按钮改变listdata数据
    changeData () {
      this.listdata = '单击按钮之后的数据'
    }
  }
}
</script>

<style scoped>
</style>
