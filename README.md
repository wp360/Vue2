# 开发流程
## 一、 Node服务端
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

11. 添加路由（注册）
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
const gravatar = require("gravatar");
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
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
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
17. 身份（权限管理）
* 模型添加身份字段
```js
// 模型User.js
  identity: {
    type: String,
    required: true
  },
```
* 路由对应添加
```js
// api >> users.js
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    avatar,
    password: req.body.password,
    identity: req.body.identity
  });

// 登录处添加
  const rule = {
    id: user.id,
    name: user.name,
    avatar: user.avater,
    identity: user.identity
  };

// 验证后返回添加
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email,
    identity: req.user.identity
  });
```
18. 信息数据接口
* 新建模型
```js
// models >> Profile.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  type: {
    type: String
  },
  describe: {
    type: String
  },
  income: {
    type: String,
    required: true
  },
  expend: {
    type: String,
    required: true
  },
  cash: {
    type: String,
    required: true
  },
  remark: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Profile = mongoose.model("profile", ProfileSchema);
```
19. 新建路由api
> api >> profiles.js
```js
// 信息数据接口
const express = require("express");
const router = express.Router();
// passport
const passport = require("passport");
const Profile = require("../../models/Profile");

// 测试
// $route GET api/profiles/test
// @desc 返回的请求的json数据
// @access public
router.get("/test", (req, res) => {
  res.json({ msg: "profile works"});
});

// 添加
// $route POST api/profiles/add
// @desc 创建信息接口
// @access Private
router.post("/add",passport.authenticate("jwt", {session: false}), (req, res) => {
  const profileFields = {};

  if (req.body.type) profileFields.type = req.body.type;
  if (req.body.describe) profileFields.describe = req.body.describe;
  if (req.body.income) profileFields.income = req.body.income;
  if (req.body.expend) profileFields.expend = req.body.expend;
  if (req.body.cash) profileFields.cash = req.body.cash;
  if (req.body.remark) profileFields.remark = req.body.remark;

  new Profile(profileFields).save().then(profile => {
    res.json(profile);
  });
});

module.exports = router;
```
20. 引入profile模型
```js
// server.js
// 引入profiles.js
const profiles = require("./routes/api/profiles");

// 使用routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);
```
21. 获取所有信息
```js
// api > profiles.js
// 获取
// $route GET api/profiles
// @desc 获取所有信息
// @access Private
router.get("/", passport.authenticate("jwt", {session: false}), (req,res) => {
  Profile.find()
    .then(profile => {
      if(!profile) {
        return res.status(404).json("没有任何内容");
      }
      res.json(profile);
    }).catch(err => res.status(404).json(err));
});

// $route GET api/profiles/:id
// @desc 获取单个信息
// @access Private
router.get("/:id", passport.authenticate("jwt", {session: false}), (req, res) => {
  Profile.findOne({_id: req.params.id})
    .then(profile => {
      if (!profile) {
        return res.status(404).json("没有任何内容");
      }
      res.json(profile);
    }).catch(err => res.status(404).json(err));
});

```
22. 编辑信息接口
```js
// api > profiles.js
// 编辑
// $route POST api/profiles/edit
// @desc 编辑信息接口
// @access Private
router.post("/edit/:id", passport.authenticate("jwt", {
  session: false
}), (req, res) => {
  const profileFields = {};

  if (req.body.type) profileFields.type = req.body.type;
  if (req.body.describe) profileFields.describe = req.body.describe;
  if (req.body.income) profileFields.income = req.body.income;
  if (req.body.expend) profileFields.expend = req.body.expend;
  if (req.body.cash) profileFields.cash = req.body.cash;
  if (req.body.remark) profileFields.remark = req.body.remark;

  Profile.findOneAndUpdate(
    {_id: req.params.id},
    {$set: profileFields},
    {new: true}
  ).then(profile => res.json(profile))
});

```
23. 删除信息接口
```js
// api > profiles.js
// 删除
// $route DELETE api/profiles/delete/:id
// @desc 删除信息接口
// @access Private
router.delete("/delete/:id", passport.authenticate("jwt", {
  session: false
}), (req, res) => {
  Profile.findOneAndRemove({_id: req.params.id}).then(profile => {
    profile.save().then(profile => res.json(profile));
  }).catch(err => res.status(404).json("删除失败！"));
});

```
## 二、Vue客户端
> 2.0版本
1. 新建项目
`vue init webpack client`
```
? Project name client
? Project description A Vue.js project
? Author haidebaozi
? Vue build (Use arrow keys)
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) npm

   vue-cli · Generated "client".


# Installing project dependencies ...
```
> 3.0版本
```
*** 先更新cli ***
npm uninstall -g vue-cli
npm install -g @vue/cli
```
`vue create client3`
2. 前后端连载
`npm i concurrently`
3. 配置
```json
// client >> package.json
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "serve": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js",
    "start": "npm run serve"
  },

// package.json
  "scripts": {
    "client-install": "npm install --prefix client",
    "client": "npm start --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
4. 启动
`npm run dev`
## Element-UI
1. 安装
`npm i element-ui -S`
2. 引入
```js
// main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```
## 注册页
1. 新建页面
2. 添加路由
3. 使用ElementUI组件添加Form表单
4. 添加判断
5. 使用axios
* 创建
```js
// client >> src >> http.js
import axios from 'axios'

// 请求拦截

// 响应拦截

export default axios
```
* 引入
```js
// client >> src >> main.js
import axios from './http'

// 省略

// 全局使用axios
Vue.prototype.$axios = axios
```
* 调整
```js
// client >> src >> http.js
import axios from 'axios'
import {Loading, Message} from 'element-ui'
//定义loading变量
let loading

// 使用Element loading-start 方法
function startLoading() {
  loading = Loading.service({
    lock: true,
    text: '加载中...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
}
// 使用Element loading-close 方法
function endLoading() {
  loading.close()
}

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
  // 加载
  startLoading()
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
  endLoading()
  return response
}, error => {
  // 错误提醒
  endLoading()
  Message.error(error.response.data)
  return Promise.reject(error)
})

export default axios

```
6. 跨域请求
* 如果是Vue-cli3.0直接新增配置文件 client >> vue.config.js
* 如果是旧版
```js
// client >> config >> index.js
  // 代理解决跨域问题
  proxyTable: {
    '/api': {
      target: 'http://localhost:5000/api/',
      // secure: false, // 如果是https接口，需要配置这个参数
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },
```
7. 提交表单
```js
// Register.vue
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('注册成功！')
          this.$axios
            .post('/api/users/register', this.registerUser)
            .then(res => {
              // 注册成功
              this.$message({
                message: '注册成功！',
                type: 'success'
              })
              // this.$router.push('/login')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
```
8. 提交测试

## 登录页
1. 新建文件
> views >> Login.vue
2. 复制Register.vue，以此基础修改Login.vue
3. 登录测试

## 路由守卫
```js
// client >> src >> router >> index.js
// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken
  // const isLogin = localStorage.eleToken ? true : false
  if (to.path === '/login' || to.path === '/register') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})

```
## 请求拦截
```js
// client >> src >> http.js
// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
  // 加载动画
  startLoading()
  if (localStorage.eleToken) config.headers.Authorization = localStorage.eleToken
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
  endLoading()
  return response
}, error => {
  // 错误提醒
  endLoading()
  Message.error(error.response.data)
  // 获取错误状态码
  const { status } = error.response
  if (status === 401) {
    Message.error('token值无效，请重新登录')
    // 清除token
    localStorage.removeItem('eleToken')
    // 页面跳转
    router.push('/login')
  }

  return Promise.reject(error)
})
```
> 测试时，可以修改routes >> api >> users.js里过期时间的值（expiresIn）

## jwt-decode的使用
> 当前端拿到后端返回的token，可以通过localStorage存储到本地，然后通过jwt-decode对token进行解析，jwt-decode是一种对token的解析包，通过npm install jwt-decode

[Vue2.0-token权限处理 https://www.cnblogs.com/zhoulifeng/p/9858605.html](https://www.cnblogs.com/zhoulifeng/p/9858605.html)

```js
// Login.vue
import jwtDecode from 'jwt-decode'

// 解析token
const decode = jwtDecode(token)
console.log(decode)
```

## Vuex设置
```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_USER: 'SET_USER'
}

const state = {
  isAuthenticated: false,
  user: {}
}

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  user: state => state.user
}

const mutations = {
  [types.SET_AUTHENTICATED] (state, isAuthenticated) {
    // 是否授权
    if (isAuthenticated) {
      state.isAuthenticated = isAuthenticated
    } else {
      state.isAuthenticated = false
    }
  },
  [types.SET_USER] (state, user) {
    // 是否存在user
    if (user) {
      state.user = user
    } else {
      state.user = {}
    }
  }
}

const actions = {
  setAuthenticated: ({commit}, isAuthenticated) => {
    commit(types.SET_AUTHENTICATED, isAuthenticated)
  },
  setUser: ({commit}, user) => {
    commit(types.SET_USER, user)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

```
## 使用Vuex
```js
// Login.vue
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('登录成功！')
          this.$axios
            .post('/api/users/login', this.loginUser)
            .then(res => {
              // ...省略
              // 解析token
              const decoded = jwtDecode(token)
              // console.log(decoded)
              // token存储到vuex中
              this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded))
              this.$store.dispatch('setUser', decoded)
              // 登录成功跳转管理后台首页
              this.$router.push('/index')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 判断是否为空
    isEmpty (value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      )
    }
  }

// Index.vue
import jwtDecode from 'jwt-decode'
export default {
  name: 'index',
  components: {

  },
  created () {
    if (localStorage.eleToken) {
      // 解析token
      const decoded = jwtDecode(localStorage.eleToken)
      // token存储到vuex中
      this.$store.dispatch('setAuthenticated', !this.isEmpty(decoded))
      this.$store.dispatch('setUser', decoded)
    }
  },
  methods: {
    // 判断是否为空
    isEmpty (value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
      )
    }
  }
}
```

## vue踩坑总结 & 优化点
> 特别“Module build failed: Error: No PostCSS Config found”报错处理，修改utils.js
* 参考 —— 1.11 js文件中引入的css不会自动加前缀(新的脚手架已解决该问题)
[https://www.cnblogs.com/adelina-blog/p/8336548.html](https://www.cnblogs.com/adelina-blog/p/8336548.html)