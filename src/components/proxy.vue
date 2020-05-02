<template>
  <div class="price">
    <ul>
      <li v-for="item in price" :key="item">
        {{ item }}
      </li>
    </ul>
    <button type="button" name="button" @click="up">升序</button>
    <button type="button" name="button" @click="down">降序</button>
    <button type="button" name="button" @click="reset">重置</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'proxy',
  data () {
    return {
      price: [],
      proxy: ''
    }
  },
  async mounted () {
    const { data: { price } } = await axios.get('/proxy')
    // this.price = price
    // 冷冻
    Object.freeze(price)
    this.proxy = new Proxy({}, {
      get (target, key) {
        if (key === 'up') {
          return [].concat(price).sort((a, b) => a - b)
        } else if (key === 'down') {
          return [].concat(price).sort((a, b) => b - a)
        } else {
          return price
        }
      },
      set () {
        return false
      }
    })
    this.price = this.proxy.default
  },
  methods: {
    up () {
      console.log('升序')
      this.price = this.proxy.up
    },
    down () {
      console.log('降序')
      this.price = this.proxy.down
    },
    reset () {
      console.log('重置')
      this.price = this.proxy.default
    }
  }
}
</script>
