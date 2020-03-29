const express = require('express')
// 引入result
const Result = require('../models/Result')
// 加密
const {md5} = require('../utils/index')
const {PWD_SALT} = require('../utils/constant')
// 查询
const {login} = require('../services/user')
const router = express.Router()

// 创建 /user/login API
router.post('/login', function(req,res) {
  console.log(req.body)
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
      new Result('登录成功').success(res)
    }
  })

  // if(username === 'admin' && password === 'admin') {
  //   new Result('登录成功').success(res)
  // } else{
  //   new Result('登录失败').fail(res)
  // }
})

router.get('/info', function (req, res, next) {
  res.json('user info...')
})

module.exports = router