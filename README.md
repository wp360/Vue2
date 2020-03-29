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