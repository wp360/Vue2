<template>
  <div class="m-geo">
    <i class="el-icon-location" />{{$store.state.geo.position.city}}
    <nuxt-link class="changeCity" to="/changeCity">
      城市切换
    </nuxt-link>[香河 廊坊 天津]
  </div>
</template>
<script>
export default {

}
</script>
