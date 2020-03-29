// 引入查询方法
const {
  querySql
} = require('../db')

function login(username, password) {
  // 查询
  return querySql(`select * from admin_user where username='${username}' and password='${password}'`)
  // .then(results => {
  //   // console.log(results)
  // }).catch(err => {
  //   // console.log(err)
  // })
}

module.exports = {
  login
}