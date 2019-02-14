<template>
  <div class="banner">
    <h3>首页</h3>
    <div class="calPrice">
      <h3>计算价格</h3>
      <ul>
        <!--v-for遍历,绑定click监听,切换active-->
        <li v-for="(item,index) in items" @click="toggleActive(item)" :class="{'active':item.active}" :key="index">
          {{item.name}}
          <span>{{item.price}}</span>
        </li>
      </ul>
      <p>total:
        <span>{{total()}}</span>
      </p>
    </div>
    <div class="page">
      <div :style="styles">绑定内联样式</div>
      <p>{{msg}}</p>
      <ul>
        <li v-for="book in books" :key="book.name">{{book.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Web Development',
          price: 3000,
          active: false
        },
        {
          name: 'Python',
          price: 1000,
          active: false
        },
        {
          name: 'Java',
          price: 2000,
          active: false
        },
        {
          name: 'GO',
          price: 2200,
          active: false
        }
      ],
      msg: '',
      books: [
        {name: '《JavaScript 高级程序设计》'},
        {name: '《JavaScript 语言精粹》'},
        {name: '《JavaScript 经典实例》'}
      ],
      styles: {
        border: '1px solid #000',
        fontSize: 22 + 'px'
      }
    }
  },
  // 钩子函数的设置位置
  mounted () {
    // 调用后台接口获得数据
    this.$axios
      .get(
        '../../static/health.json'
      )
      .then(res => {
        // then()中如果只传入一个处理函数，那么默认是处理请求成功的情况
        // 打印后台获得的结果
        // console.log(res.data);

        this.msg = res.data
      })
      .catch(err => {
        // 未获得成功之后的报错信息
        console.log(err)
      })
  },
  methods: {
    toggleActive: function (i) {
      i.active = !i.active // 简单的写法切换true/false
    },
    total: function () {
      var total = 0
      this.items.forEach(function (s) {
        // 用js的forEach遍历数组
        if (s.active) {
          total += s.price
        }
      })
      return total
    }
  },
  components: {}
}
</script>

<style scoped>
ul {
  font-size: 20px;
  text-align: left;
  margin: 20px 0 15px;
}

ul li {
  padding: 20px 30px;
  background-color: #e0c921;
  margin-bottom: 8px;
  cursor: pointer;
}

ul li span {
  float: right;
}

ul li.active {
  background-color: #8ec16d;
}

p {
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 15px 30px;
  font-size: 20px;
  text-align: left;
}

p span {
  float: right;
}
</style>
