<template lang="html">
  <div>
    <vue-header></vue-header>
    <Slider></Slider>
  </div>
</template>

<script>
import vueHeader from "../public/header.vue"
import Slider from "./hslider.vue"
export default {
  components: {
    vueHeader,
    Slider
  }
}
</script>
