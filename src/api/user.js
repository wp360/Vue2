import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/login', //  /vue-element-admin/user/login
    method: 'post',
    data
  })
}

// token
export function getInfo() {
  return request({
    url: '/user/info', // /vue-element-admin/user/info
    method: 'get'
    // ,params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout', // /vue-element-admin/user/logout
    method: 'post'
  })
}
