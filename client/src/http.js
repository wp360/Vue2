import axios from 'axios'
import {Loading, Message} from 'element-ui'
// 定义loading变量
let loading

// 使用Element loading-start 方法
function startLoading () {
  loading = Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
// 使用Element loading-close 方法
function endLoading () {
  loading.close()
}

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
  // 加载
  startLoading()
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
  endLoading()
  return response
}, error => {
  // 错误提醒
  endLoading()
  Message.error(error.response.data)
  return Promise.reject(error)
})

export default axios
