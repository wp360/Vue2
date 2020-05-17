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
        <Location @click="selectAddress" :address="address" />
    </div>
    <div class="area">
      <div class="area_list">
          <ul class="area_item" v-for="item in areaList" :key='item.id' >
              <li @click="selectAddress(item)">
                <h4>{{item.name}}</h4>
                <p>{{item.district}}{{item.address}}</p>
              </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '../components/Header'
import Location from '../components/Location'
import AMap from 'AMap'
export default {
  name: 'Address',
  data () {
    return {
      city: '', // 当前城市
      search_val: '', // 搜索内容
      areaList: []
    }
  },
  beforeRouteEnter (to, from, next) {
    // console.log(to)
    next(vm => {
      vm.city = to.params.city
    })
  },
  components: {
    Header,
    Location
  },
  computed: {
    address () {
      return this.$store.getters.location.length > 0 ? this.$store.getters.location.formattedAddress : '定位失效，无法获取到对应地址信息'
    }
  },
  watch: {
    search_val () {
      this.searchPlace()
    }
  },
  methods: {
    searchPlace () {
      // console.log(this.search_val)
      AMap.plugin('AMap.Autocomplete', () => {
        // 实例化Autocomplete
        var autoOptions = {
          // city 限定城市，默认全国
          city: this.city
        }
        var autoComplete = new AMap.Autocomplete(autoOptions)
        // keyword
        autoComplete.search(this.search_val, (status, result) => {
          // 搜索成功时，result即是对应的匹配数据
          // console.log(result)
          this.areaList = result.tips
        })
      })
    },
    selectAddress (item) {
      // console.log(item)
      if (item) {
        // 设置地址
        this.$store.dispatch('setAddress', item.district + item.address + item.name)
      } else {
        this.$store.dispatch('setAddress', this.address)
      }
      // 跳转首页
      this.$router.push('/home')
    }
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
