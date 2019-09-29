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

// $route GET api/users/test
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