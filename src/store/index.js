import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    carPanelData: []
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