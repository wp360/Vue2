// 引入查询方法
const {
  querySql,
  queryOne
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

function findUser(username) {
  return queryOne(`select id,username,nickname,role,avatar from admin_user where username='${username}'`)
}

module.exports = {
  login,
  findUser
}