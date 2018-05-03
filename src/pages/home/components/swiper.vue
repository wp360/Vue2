<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="img in list" :key="img.id">
        <img class="swiper-img" :src="img.imgUrl" :alt="img.imgAlt">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true // 循环轮播
      }
      // swiperList: [
      //   {
      //     id: '001',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/15/9250dbc86a456302.jpg_640x200_4c7220d4.jpg',
      //     imgAlt: '去哪儿门票'
      //   },
      //   {
      //     id: '002',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/14/21f410d1016c8702.jpg_640x200_84d0effe.jpg',
      //     imgAlt: '去哪儿门票'
      //   },
      //   {
      //     id: '003',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/5c/969bfa7af00a2702.jpg_640x200_e1b76963.jpg',
      //     imgAlt: '去哪儿门票'
      //   },
      //   {
      //     id: '004',
      //     imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/45/0ac34e31b4a1fb02.jpg_640x200_7b7e09c7.jpg',
      //     imgAlt: '去哪儿门票'
      //   }
      // ]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
