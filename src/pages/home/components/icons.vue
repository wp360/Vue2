<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="icon in page" :key="icon.id">
          <div class="icon-img">
            <img :src="icon.imgUrl" :alt="icon.desc" class="icon-img-content">
          </div>
          <p class="icon-desc">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default{
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
      // iconList: [
      //   {
      //     id: '001',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //     desc: '景点门票'
      //   },
      //   {
      //     id: '002',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //     desc: '一日游'
      //   },
      //   {
      //     id: '003',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      //     desc: '必游榜单'
      //   },
      //   {
      //     id: '004',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
      //     desc: '动植物园'
      //   },
      //   {
      //     id: '005',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
      //     desc: '踏青赏花'
      //   },
      //   {
      //     id: '006',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
      //     desc: '城市观光'
      //   },
      //   {
      //     id: '007',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png',
      //     desc: '古镇'
      //   },
      //   {
      //     id: '008',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
      //     desc: '杜莎蜡像馆'
      //   },
      //   {
      //     id: '009',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png',
      //     desc: '上海迪士尼'
      //   },
      //   {
      //     id: '010',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
      //     desc: '全部玩乐'
      //   }
      // ]
    }
  },
  computed: {
    pages () {
      const pages = []
      // iconList
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: .22rem
        left: 0
        right: 0
        bottom: .22rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
