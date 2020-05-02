<template>
  <div class="list">
    <ul>
      <li v-for="item in list" :key="item.name">
        {{ item.name }} —— {{ item.addr }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'list',
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    // const { data } = await axios.get('/list')
    // if (data && data.code === 0) {
    //   this.list = data.list
    // }
    const { data: { list } } = await axios.get('/list')
    this.list = list
  }
}
</script>
