import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    // state存放所有共享数据
    state: {
        count: 0
    },
    // 状态的变化
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    }
})