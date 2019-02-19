<template>
    <div class="list">
        <ul>
            <li @click="handleClick()">这是第一条数据</li>
        </ul>
        <!-- 在页面中把接收的数据显示出来 -->
        <!-- <p>{{message}}</p> -->
        <p>{{receive}}</p>
    </div>
</template>
<script>
export default {
  props: ['message'],
  data () {
    return {
      receive: this.message
    }
  },
  methods: {
    handleClick () {
      console.log('点击')
    }
  }
}
</script>
<style scoped>
    .list {
        color: #f00;
    }
    .list p {
        font-weight: 700;
    }
</style>
