import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    carPanelData: []
  },
  getters: {
    totalCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        count += goods.count
      })
      return count
    },
    totalPrice(state) {
      let price = 0
      state.carPanelData.forEach((goods) => {
        price += goods.price * goods.count
      })
      return price
    },
  },
  mutations: {
    addCarPanelData (state,data) {
      let bOff = true
      state.carPanelData.forEach((goods) => {
        if(goods.sku_id === data.sku_id) {
          goods.count ++
          bOff = false
        }
      })
      if(bOff) {
        let goodsData = data
        Vue.set(goodsData,'count',1)
        state.carPanelData.push(goodsData)
      }
      console.log(state.carPanelData)
    }
  }
})

export default store