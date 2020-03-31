// 加密
const crypto = require('crypto')
// 解密
const jwt = require('jsonwebtoken')
const {
  PRIVATE_KEY
} = require('./constant')

// 判断是否对象
function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]'
}

function md5(s) {
  // 注意参数需要为 String 类型，否则会出错
  return crypto.createHash('md5')
    .update(String(s)).digest('hex');
}

function decoded(req) {
  const authorization = req.get('Authorization')
  let token = ''
  if (authorization.indexOf('Bearer') >= 0) {
    token = authorization.replace('Bearer ', '')
  } else {
    token = authorization
  }
  return jwt.verify(token, PRIVATE_KEY)
}

module.exports = {
  md5,
  decoded,
  isObject
}