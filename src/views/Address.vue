<template>
  <div class="address">
    <Header :isLeft="true" title="选择收获地址" />
    <!-- 搜索 -->
    <div class="city_search">
        <div class="search">
            <span class="city" @click="$router.push('/city')">
                {{city}}
                <i class="fa fa-angle-down"></i>
            </span>
            <i class="fa fa-search"></i>
            <input type="text" v-model="search_val" placeholder="小区/写字楼/学校等" />
        </div>
        <Location :address="address" />
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Location from '../components/Location'
export default {
  name: 'Address',
  data () {
    return {
      city: '',
      search_val: ''
    }
  },
  computed: {
    address () {
      return this.$store.getters.location.length > 0 ? this.$store.getters.location.formattedAddress : '定位失效，无法获取到对应地址信息'
    }
  },
  components: {
    Header,
    Location
  },
  beforeRouteEnter (to, from, next) {
    // console.log(to)
    next(vm => {
      vm.city = to.params.city
    })
  }
}
</script>
<style scoped>
.address {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;
}
.city_search {
  background-color: #fff;
  padding: 10px 20px;
  color: #333;
}
.search {
  background-color: #eee;
  height: 40px;
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 40px;
}
.search .city {
  padding: 0 10px;
  font-size:12px;
}
.city i {
  margin-right: 10px;
}
.search input {
  margin-left: 10px;
  background-color: #eee;
  outline: none;
  border: none;
  font-size:12px;
}
.area {
  margin-top: 5px;
  background: #fff;
}
.area ul {
    list-style-type:none;
}
.area li {
  border-bottom: 1px solid #eee;
  padding: 8px 16px;
  color: #aaa;
  font-size:12px;
  line-height: 15px;
}
.area li h4 {
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}
</style>
