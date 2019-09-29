// 登录与注册
const express = require("express");
const router = express.Router();

router.get("/login", (req,res) => {
  res.json({ msg: "login works" });
});

module.exports = router;