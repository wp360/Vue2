<template>
    <div id="page" ref="allmap"></div>
</template>
<script>
import BMap from 'BMap'
export default {
  props: ['mapitem'],
  data () {
    return {}
  },
  components: {},
  mounted () {
    this.mapdata()
  },
  methods: {
    mapdata () {
      // 创建Map实例
      var map = new BMap.Map('page')
      // 创建点坐标
      var point = new BMap.Point(116.331398, 39.897445)
      // var point = new BMap.Point(this.mapitem[0], this.mapitem[1])
      map.centerAndZoom(point, 15) // 初始化地图,设置中心点坐标和地图级别 注：数字越大，搜索的范围越大
      // map.panTo(point) // 这个没起作用
      // 创建标注
      var initMarker = new BMap.Marker(point)
      // 向地图中添加单个覆盖物时会触发此事件
      map.addOverlay(initMarker)
      // 开启标注拖曳功能
      initMarker.enableDragging()
      // 将标注点移动到中心位置
      /* panBy ：将地图在水平位置上移动x像素，垂直位置上移动y像素。如果指定的像素大于
            可视区域范围或者在配置中指定没有动画效果，则不执行滑动效果 */
      map.panBy(350, 225)
      // 添加地图默认控件
      map.addControl(new BMap.NavigationControl())
      // map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
      // 开启鼠标滚轮缩放
      map.enableScrollWheelZoom(true)
    }
  }
}
</script>
<style scoped>
   #page {
       width: 700px;
       height: 450px;
   }
</style>
