<template>
  <div class="banner">
    <computer>
        <div slot="CPU">Intel Core i7</div>
        <div slot="GPU">GTX980Ti</div>
        <div slot="Memory">Kingston 32G</div>
        <div slot="Hard-drive">Samsung SSD 1 T</div>
    </computer>
    <p> {{ total }} </p>
    <counter @increase="handleGetTotal" @reduce="handleGetTotal"></counter>
    <button type='button'>登录</button>
    <ul class="pagination">
      <li v-show="current != 1" @click="current-- && goto(current)">
        <a href="#">上一页</a>
      </li>
      <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
        <a href="#">{{index}}</a>
      </li>
      <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">
        <a href="#">下一页</a>
      </li>
    </ul>
  </div>
</template>

<script>
import computer from './parts'
import counter from './counter'
export default {
  data () {
    return {
      total: 0,
      current: 1,
      showItem: 5,
      allpage: 15
    }
  },
  components: {
    computer,
    counter
  },
  computed: {
    pages: function () {
      let pag = []
      if (this.current < this.showItem) {
        // 如果当前的激活的项 小于要显示的条数
        // 总页数和要显示的条数那个大就显示多少条
        let i = Math.min(this.showItem, this.allpage)
        while (i) {
          pag.unshift(i--)
        }
      } else {
        // 当前页数大于显示页数了
        // 对一个数进行下舍入
        // 从哪里开始
        let middle = this.current - Math.floor(this.showItem / 2)
        let i = this.showItem
        if (middle > this.allpage - this.showItem) {
          middle = this.allpage - this.showItem + 1
        }
        while (i--) {
          pag.push(middle++)
        }
      }
      return pag
    }
  },
  methods: {
    handleGetTotal (total) {
      this.total = total
    },
    goto (index) {
      if (index === this.current) return
      this.current = index
      // 这里可以发送ajax请求
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
  font-size: 28px;
}
button {
  margin: 20px 0;
  padding:5px 15px;
  background: #398BFB;
  color: #fff;
  border-radius: 4px;
}
li {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  width: 600px;
  margin: 30px auto;
}
.pagination {
  position: relative;
}

.pagination li {
  display: inline-block;
  margin: 0 5px;
}

.pagination li a {
  padding: .2rem .4rem;
  display: inline-block;
  border: 1px solid #ddd;
  background: #fff;

  color: #0e90d2;
}

.pagination li a:hover {
  background: #eee;
}

.pagination li.active a {
  background: #0e90d2;
  color: #fff;
}
</style>
