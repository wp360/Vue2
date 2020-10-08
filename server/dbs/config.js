export default {
  // :27017
  // mongodb://root:abc123@ds243325.mlab.com:43325/meituan
  dbs: 'mongodb://127.0.0.1/student',
  redis: {
    get host () {
      return '127.0.0.1'
    },
    get port () {
      return 6379
    }
  },
  smtp: {
    get host () {
      return 'smtp.qq.com'
    },
    get user () {
      return '646734192@qq.com'
    },
    get pass () {
      return 'ttezlzehlhewbbdj'
    },
    // 验证码
    get code () {
      return () => {
        return Math.random().toString(16).slice(2, 6).toUpperCase()
      }
    },
    // 过期时间
    get expire () {
      return () => {
        return new Date().getTime() + 60*60*1000
      }
    }
  }
}
