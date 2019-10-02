const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

// 引入users.js
const users = require("./routes/api/users");

// DB config
const db = require("./config/keys").mongoURI;

// 使用body-parser中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// passport初始化
app.use(passport.initialize());

// 连接数据库
mongoose.connect(db)
  .then(()=> console.log("数据库连接成功！"))
  .catch(err => console.log(err));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
require("./config/passport")(passport);

// 使用routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`服务运行端口${port}`);
});
