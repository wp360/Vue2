const express = require('express')
// 引入result
const Result = require('../models/Result')
// 加密 解密
const {
  md5,
  decoded
} = require('../utils/index')
const {PWD_SALT,PRIVATE_KEY, JWT_EXPIRED} = require('../utils/constant')
// 验证
const { body, validationResult } = require('express-validator')
const boom = require('boom') // boom是一个兼容HTTP的错误对象，提供了一些标准的HTTP错误，比如400(参数错误)等。
// JWT
const jwt = require('jsonwebtoken')
// 查询
const {login, findUser} = require('../services/user')
const router = express.Router()

// 创建 /user/login API
router.post('/login',
  [
    body('username').isString().withMessage('username类型不正确'),
    body('password').isString().withMessage('password类型不正确')
  ],
  function(req, res, next) {
    const err = validationResult(req)
    // console.log(err)
    if(!err.isEmpty()) {
      const [{msg}] = err.errors
      next(boom.badRequest(msg))
    }
    // console.log(req.body)
    // new Result('登录成功').success(res)
    // res.json({
    //   code: 0,
    //   msg: '登录成功'
    // })
    let {username, password} = req.body
    // 密码加密
    password = md5(`${password}${PWD_SALT}`)
    // 登录判断
    login(username, password).then(user=> {
      if(!user || user.length === 0) {
        new Result('登录失败').fail(res)
      } else {
        // JWT设置
        const token = jwt.sign(
          {username},
          PRIVATE_KEY,
          {expiresIn: JWT_EXPIRED} // 过期时间
        )
        new Result({token}, '登录成功').success(res)
      }
    })

    // if(username === 'admin' && password === 'admin') {
    //   new Result('登录成功').success(res)
    // } else{
    //   new Result('登录失败').fail(res)
    // }
})

router.get('/info', function (req, res) {
  // res.json('user info...')
  const decode = decoded(req)
  // console.log(decode)
  if(decode && decode.username) {
    findUser(decode.username).then(user => {
      if(user) {
        user.roles = [user.role]
        new Result(user, '用户信息查询成功').success(res)
      } else {
        new Result('用户信息查询失败').fail(res)
      }
    })
  } else {
    new Result('用户信息查询失败').fail(res)
  }
})

module.exports = router