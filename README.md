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