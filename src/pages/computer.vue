<template>
    <div class="page">
        <computer>
            <div slot="CPU">Intel Core i7</div>
            <div slot="GPU">GTX980Ti</div>
            <div slot="Memory">Kingston 32G</div>
            <div slot="Hard-drive">Samsung SSD 1 T</div>
        </computer>
    </div>
</template>
<script>
import computer from './parts'
export default {
  data () {
    return {}
  },
  components: {
    computer
  }
}
</script>
