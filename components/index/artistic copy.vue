<template>
  <div class="container">
    <ul @mouseleave="mouseleave">
      <li v-for="(item,idx) in navList" :key="idx" :class="item.type" @mouseenter="enter">
        {{ item.name }}
      </li>
    </ul>
    <div v-if="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <div v-for="(item,idx) in curdetail.child" :key="idx">
        <h4>{{ item.title }}</h4>
        <span>{{ item.subTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: '',
      navList: [
        {
          type: 'all',
          name: '全部',
          child: [
            {
              title: '北京饭店阳光咖啡厅',
              subTitle: '特价自助餐',
              price: '238',
              oldPrice: '298'
            },
            {
              title: '上海大富豪',
              subTitle: '特价晚宴',
              price: '188',
              oldPrice: '218'
            },
            {
              title: '广东美食街',
              subTitle: '粤菜',
              price: '318',
              oldPrice: '408'
            }
          ]
        },
        {
          type: 'date',
          name: '约会聚餐',
          child: [
            {
              title: '1234',
              subTitle: '特价自助餐',
              price: '338',
              oldPrice: '398'
            },
            {
              title: '5678',
              subTitle: '特价晚宴',
              price: '288',
              oldPrice: '318'
            },
            {
              title: '7890',
              subTitle: '粤菜',
              price: '328',
              oldPrice: '428'
            }
          ]
        }
      ]
    }
  },
  computed: {
    curdetail () {
      return this.navList.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseleave () {
      this._timer = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    enter (e) {
      /* eslint-disable */
      console.log(e.target.className)
      this.kind = e.target.className
    },
    sover () {
      clearTimeout(this._timer)
    },
    sout () {
      this.kind = ''
    }
  }
}
</script>
