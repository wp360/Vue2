<template>
  <div class="author">
    <h2>作者</h2>
    <ul>
      <li v-for="item in authors" :key="item.toString()">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'author',
  data () {
    return {
      authors: {}
    }
  },
  async mounted () {
    const { data: { allAuthors } } = await axios.get('/author')
    // console.log(allAuthors)
    const author = new Proxy(allAuthors, {
      has (target, key) {
        // 静态方法 Reflect.ownKeys()返回一个由目标对象自身的属性键组成的数组。
        // Reflect.ownKeys({z: 3, y: 2, x: 1}); // [ "z", "y", "x" ]
        const keys = Reflect.ownKeys(target).slice(0, -2)
        for (const item of keys) {
          if (target[item].includes(key)) {
            return true
          }
        }
        return false
      }
    })
    // 遍历
    // 自定义迭代器 Symbol.iterator
    author[Symbol.iterator] = function * () {
      const all = this
      const keys = Reflect.ownKeys(this).slice(0, -2)
      let values = []
      while (1) {
        if (!values.length) {
          if (keys.length) {
            values = [].concat(all[keys[0]])
            keys.shift()
            yield values.shift()
          } else {
            return false
          }
        } else {
          yield values.shift()
        }
      }
    }
    // this.authors = allAuthors
    // 判断是否存在某个作者
    console.log('h' in author)
    this.authors = author
  }
}
</script>
