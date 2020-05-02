<template>
  <div class="list">
    <ul>
      <li v-for="item in list" :key="item.name">
        <!-- {{ item.name.replace(/-/g, '') }} 使用正则表达式去除“-” -->
        <!-- {{ item.name.trim() }} 使用trim()去除空格  -->
        {{ item.name }} —— {{ item.addr }}
      </li>
    </ul>
    {{ priceTxt }}
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      list: [],
      priceTxt: ''
    }
  },
  async mounted () {
    // const { data } = await axios.get('/list')
    // if (data && data.code === 0) {
    //   this.list = data.list
    // }
    const { data: { list, price, rate } } = await axios.get('/list')
    this.list = list
    this.priceTxt = navigator.language === 'zh-CN' ? `￥${price * rate}` : `$${price}`
  }
}
</script>
