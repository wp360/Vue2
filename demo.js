const express = require('express')

// 创建 express 应用
const app = express()

// 监听 / 路径的 get 请求
// app.get('/', function (req, res) {
//   res.send('hello node')
// })

// 异常处理
app.get('/', function (req, res) {
  throw new Error('something has error...')
})

const errorHandler = function (err, req, res, next) {
  console.log('errorHandler...')
  res.status(500)
  res.send('down...')
}

app.use(errorHandler)

// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function () {
  const {
    address,
    port
  } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})