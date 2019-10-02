## 开发流程
1. 初始化
`npm init`
2. 构建服务
* 新建server.js
```js
const express = require("express");
const app = express();

app.get("/", (req,res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`服务运行端口${port}`);
});

```
3. express的使用
`npm i express`
4. mongodb数据库
5. mongoose
`npm i mongoose`
6. 连接数据库
* 新建config >> keys.js
```js
// keys.js
module.exports = {
  mongoURI: "mongodb://root:admin123@ds153824.mlab.com:53824/restful-api-prod"
}

// server.js
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// DB config
const db = require("./config/keys").mongoURI;

// 连接数据库
mongoose.connect(db)
  .then(()=> console.log("数据库连接成功！"))
  .catch(err => console.log(err));

// 省略
```
7. 路由
> 新建routes文件夹 >> api >> users.js
```js
// 登录与注册
const express = require("express");
const router = express.Router();

// $route GET api/users/login
// @desc 返回的请求的json数据
// @access public
router.get("/login", (req,res) => {
  res.json({ msg: "login works" });
});

module.exports = router;
```
8. 路由使用
```js
// server.js

// 引入users.js
const users = require("./routes/api/users");

// 使用routes
app.use("/api/users", users);
```
9. 创建模型
> 新建models文件夹 >> User.js
```js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

modeule.exports = User = mongoose.model("users", UserSchema);
```
10. body-parser中间件
> body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。
```js
// server.js
//引入
const bodyParser = require("body-parser");

// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

```

11. 添加路由
```js
// 引入模型
const User = require("../../models/User");

// $route POST api/users/register
// @desc 返回的请求的json数据
// @access public
router.post("/register", (req,res) => {
  console.log(req.body);
  // 查询数据库中是否拥有邮箱
  User.findOne({email: req.body.email}).then((user) => {
    if(user) {
      return res.status(400).json({email: "邮箱已被注册！"});
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        // avatar,
        password: req.body.password
      })
    }
});

```
12. bcrypt加密
`npm i bcrypt`
```js
// users.js
const bcrypt = require("bcrypt");
// 省略
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
```
13. avatar头像处理
`npm i gravatar`
```js
// api >> users.js
// 头像
const gravatar = require('gravatar');
// ...省略
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
// ...省略
```
14. 登录
```js
// api >> users.js
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
            res.json({msg: "success"});
          } else {
            return res.status(400).json({password: "密码错误！"});
          }
        });
    });
});
```
15. 返回token
`npm i jsonwebtoken`
```js
// api >> users.js
// 引入
const jwt = require("jsonwebtoken");
// secret
const keys = require("../../config/keys");
// ...省略
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
```
16. token验证
```js
// api >> users.js
// token验证
// $route GET api/users/current
// @desc return current user
// @access Private
router.get("/current", "验证token", (req,res) => {
  res.json({msg: "success"});
});
```
* 安装插件
`npm i passport passport-jwt`
* 引入passport
```js
// server.js
const passport = require("passport");

// passport初始化
app.use(passport.initialize());
```
* 新建passport.js
```js
const JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("../config/keys");

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
  }));
}
```
* 添加验证
```js
// api >> user.js
// passport
const passport = require("passport");
// 验证
router.get("/current", passport.authenticate("jwt", {session: false}), (req,res) => {
  res.json({msg: "success"});
});

```
* 修改token设置
```js
// api >> user.js
token: "Bearer " + token
```
* postman测试
> localhost:5000/api/users/login POST Body添加参数获取token
> localhost:5000/api/users/current GET Headers添加Authorization及token值点击发送获取返回信息
* passport设置
```js
// passport.js
module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // console.log(jwt_payload);
    User.findById(jwt_payload.id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  }));
}
```
* 修改验证返回
```js
// api >> users.js
router.get("/current", passport.authenticate("jwt", {session: false}), (req,res) => {
  // res.json({msg: "success"});
  // res.json(req.user);
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

```