<template>
  <section class="m-istyle">
    <dl @mouseover="over">
      <dt>有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li v-for="item in cur" :key="item.title">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.img" class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      kind: 'all',
      list: {
        all: [{
          title: '君兰SPA（静安店）',
          pos: '长寿路',
          price: '',
          img: '//p0.meituan.net/merchantpic/66d519861cd4c148de7a67340af8aeb976057.jpg@368w_208h_1e_1c',
          url: '//www.meituan.com/xiuxianyule/187395721/'
        },{
          title: '储缘蛋糕（西门路店）',
          pos: '南汇/野生动物园',
          price: '88',
          img: '//p0.meituan.net/bbia/99f0627530b781c30c6bf3b882ee163798851.jpg@368w_208h_1e_1c',
          url: '//www.meituan.com/meishi/6350296/'
        },{
          title: '和泰源穆斯林餐厅',
          pos: '人民广场/南京路',
          price: '116',
          img: '//p0.meituan.net/deal/be0e7d554006cf77f708197c3715c7c130489.jpg@368w_208h_1e_1c',
          url: '//www.meituan.com/meishi/70970946/'
        }],
        part: [{
          title: '苏浙汇（南京西路店）',
          pos: '人民广场/南京路',
          price: '1653',
          img: '//p0.meituan.net/msmerchant/0a6a0afd2aa71af166f98c2ecee028eb301441.jpg@368w_208h_1e_1c',
          url: '//www.meituan.com/meishi/403560/'
        },{
          title: 'théATRE 茶聚场（兴业太古汇店）',
          pos: '南京西路',
          price: '222',
          img: '//p0.meituan.net/bbia/99f0627530b781c30c6bf3b882ee163798851.jpg@368w_208h_1e_1c',
          url: '//www.meituan.com/meishi/6350296/'
        },{
          title: '储缘蛋糕（西门路店）',
          pos: '南汇/野生动物园',
          price: '88',
          img: '//p0.meituan.net/bbia/99f0627530b781c30c6bf3b882ee163798851.jpg@368w_208h_1e_1c',
          url: '//www.meituan.com/meishi/6350296/'
        }],
        spa: [],
        movie: [],
        travel: []
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },
  async mounted() {
    let self = this
    let {status,data: {count,pois}} = await self.$axios.get('/search/resultsByKeywords',{
      params: {
        keyword: '景点',
        city: self.$store.state.geo.position.city
      }
    })
    if(status === 200&&count>0) {
      let r = pois.filter(item => item.photos.length).map(item=>{
        return {
          title: item.name,
          pos: item.type.split(';')[0],
          price: item.biz_ext.cost || '暂无',
          img: item.photos[0].url,
          url: '//abc.com' // mock数据
        }
      })
      self.list[self.kind] = r.slice(0,9)
    } else {
      self.list[self.kind] = []
    }
  },
  methods: {
    over: async function(e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this
      if(tag==='dd') {
        this.kind = dom.getAttribute('kind')
        // 获取关键字
        let keyword = dom.getAttribute('keyword')
        let {status,data: {count,pois}} = await self.$axios.get('/search/resultsByKeywords',{
          params: {
            keyword,
            city: self.$store.state.geo.position.city
          }
        })
        if(status === 200&&count>0) {
          let r = pois.filter(item => item.photos.length).map(item=>{
            return {
              title: item.name,
              pos: item.type.split(';')[0],
              price: item.biz_ext.cost || '暂无',
              img: item.photos[0].url,
              url: '//abc.com' // mock数据
            }
          })
          self.list[self.kind] = r.slice(0,9)
        } else {
          self.list[self.kind] = []
        }
      }
    }
  }
}
</script>
<style lang="scss">
  @import "@/assets/css/index/artistic.scss";
</style>
