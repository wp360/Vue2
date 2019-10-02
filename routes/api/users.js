// 登录与注册
const express = require("express");
const router = express.Router();
const User = require("../../models/User");
// 加密
const bcrypt = require("bcrypt");
// 头像
const gravatar = require('gravatar');
// token
const jwt = require("jsonwebtoken");
// secret
const keys = require("../../config/keys");

// 登录
// $route POST api/users/login
// @desc 返回token jwt passport
// @access public
router.post("/login", (req,res) => {
  const email = req.body.email;
  const password = req.body.password;
  // 查询数据库
  User.findOne({email})
    .then(user => {
      if(!user) {
        return res.status(404).json({email: "用户不存在！"});
      }
      // 密码匹配
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            const rule = {id: user.id, name: user.name};
            // jwt.sign("规则", "加密名字", "过期时间", "箭头函数")
            // 3600 = 1小时
            jwt.sign(rule, keys.secretOrKey, {expiresIn: 3600}, (err,token) => {
              if(err) throw err;
              res.json({
                success: true,
                token: "bao" + token
              });
            });
            // res.json({msg: "success"});
          } else {
            return res.status(400).json({password: "密码错误！"});
          }
        });
    });
});

// 注册
router.post("/register", (req,res) => {
  console.log(req.body);
  // 查询数据库中是否拥有邮箱
  User.findOne({email: req.body.email}).then((user) => {
    if(user) {
      return res.status(400).json({email: "邮箱已被注册！"});
    } else {
      const avatar = gravatar.url(req.body.email,
      {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      //进行加密
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw err;
        }
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          newUser.password = hash;
          newUser.save()
          .then(user => res.json(user))
          .catch(err=> console.log(err));
        });
      });
    }
  });
});

module.exports = router;