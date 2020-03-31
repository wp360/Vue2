const express = require('express')
const router = require('./router')
// 搭建 https 服务
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
// 跨域
const cors = require('cors')
// 创建 express 应用
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}))
app.use(bodyParser.json({
  limit: '50mb'
}))
app.use('/', router)

// 设置https秘钥及证书
// const privateKey = fs.readFileSync('https/book_youbaobao_xyz.key', 'utf8')
// const certificate = fs.readFileSync('https/book_youbaobao_xyz.pem', 'utf8')
// const credentials = {
//   key: privateKey,
//   cert: certificate
// }
// const httpsServer = https.createServer(credentials, app)
// const SSLPORT = 18082
// httpsServer.listen(SSLPORT, function () {
//   console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT)
// })

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function () {
  const {
    address,
    port
  } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})