const express = require("express");
const mongoose = require("mongoose");
const app = express();

// 引入users.js
const users = require("./routes/api/users");

// DB config
const db = require("./config/keys").mongoURI;

// 连接数据库
mongoose.connect(db)
  .then(()=> console.log("数据库连接成功！"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 使用routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`服务运行端口${port}`);
});
