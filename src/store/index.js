import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// types
const types = {
  SET_LOCATION: 'SET_LOCATION',
  SET_ADDRESS: 'SET_ADDRESS'
}

// state
const state = {
  location: {},
  address: ''
}

// getters
const getters = {
  location: state => state.location,
  address: state => state.address
}

// mutations
// 使用常量替代 Mutation 事件类型
// 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
// [SOME_MUTATION](state) {
//   // mutate state
// }
const mutations = {
  [types.SET_LOCATION] (state, location) {
    if (location) {
      state.location = location
    } else {
      state.location = null
    }
  },
  [types.SET_ADDRESS] (state, address) {
    if (location) {
      state.address = address
    } else {
      state.address = ''
    }
  }
}

// actions
const actions = {
  setLocation: ({ commit }, location) => {
    commit(types.SET_LOCATION, location)
  },
  setAddress: ({ commit }, address) => {
    commit(types.SET_ADDRESS, address)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
