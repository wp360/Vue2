## 管理后台Node API接口

## 用户登录
* 1.搭建 https 服务
* 2.创建 /user/login API
* 3.body-parser的使用，作用是对post请求的请求体进行解析。
> npm i -S body-parser
```js
// app.js
const bodyParser = require('body-parser')

// 创建 express 应用
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
```
[参考文档：https://www.cnblogs.com/chyingp/p/nodejs-learning-express-body-parser.html](https://www.cnblogs.com/chyingp/p/nodejs-learning-express-body-parser.html)
* 4.解决跨域
> npm i -S cors
```js
// app.js
const cors = require('cors')

// ...
app.use(cors())
```
* 5.连接数据库
> npm i -S mysql
* 6.登录用户数据库查询
* 7.密码加密 安装 crypto 库
> npm i -S crypto
* 8.express-validator
> express-validator 是一个功能强大的表单验证器，它是 validator.js 的中间件
`npm i -S express-validator`
* 9.JWT基本概念
```
【Token 简析】Token 是什么
Token 本质是字符串，用于请求时附带在请求头中，校验请求是否合法及判断用户身份

【Token 与 Session、Cookie 的区别】
· Session 保存在服务端，用于客户端与服务端连接时，临时保存用户信息，当用户释放连接后，Session 将被释放；
· Cookie 保存在客户端，当客户端发起请求时，Cookie 会附带在 http header 中，提供给服务端辨识用户身份；
· Token 请求时提供，用于校验用户是否具备访问接口的权限。

【Token 的用途】

Token 的用途主要有三点：

· 拦截无效请求，降低服务器处理压力；
· 实现第三方 API 授权，无需每次都输入用户名密码鉴权；
· 身份校验，防止 CSRF 攻击。

【JWT 简析】
JSON Web Token（JWT）是非常流行的跨域身份验证解决方案。
```
* 10.安装 jsonwebtoken
> npm i -S jsonwebtoken
* 11.JWT 认证
> npm i -S express-jwt

## 文件上传接口
[express文件上传中间件Multer详解](https://www.cnblogs.com/LChenglong/p/8435141.html)

## Book对象解析

## 上传github
```
git remote add origin https://github.com/wp360/Vue2.git

git checkout -b ele-admin-node

git status

git add .

git commit -m "初始化"

git push

git push --set-upstream origin ele-admin-node
```