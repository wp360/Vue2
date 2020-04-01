const mysql = require('mysql')
const config = require('./config')
const {debug} = require('../utils/constant')
const {isObject} = require('../utils')

function connect() {
  return mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements: true
    // multipleStatements：允许每条 mysql 语句有多条查询.使用它时要非常注意，因为它很容易引起 sql 注入（默认：false）
  })
}

function querySql(sql) {
  const conn = connect()
  // console.log(conn)
  debug && console.log(sql)
  return new Promise((resolve, reject) => {
    try {
      conn.query(sql, (err, results) => {
        if (err) {
          debug && console.log('查询失败，原因:' + JSON.stringify(err))
          reject(err)
        } else {
          debug && console.log('查询成功', JSON.stringify(results))
          resolve(results)
        }
      })
    } catch (e) {
      reject(e)
    } finally {
      conn.end()
    }
  })
}

function queryOne(sql) {
  return new Promise((resolve, reject) => {
    querySql(sql)
      .then(results => {
        if (results && results.length > 0) {
          resolve(results[0])
        } else {
          resolve(null)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 新增
function insert(model, tableName) {
  return new Promise((resolve, reject) => {
    if(!isObject(model)) {
      reject(new Error('添加数据库失败，添加数据非对象'))
    } else {
      const keys = []
      const values = []
      Object.keys(model).forEach(key => {
        if(model.hasOwnProperty(key)) {
          keys.push(`\`${key}\``)
          values.push(`'${model[key]}'`)
        }
      })
      if (keys.length > 0 && values.length > 0) {
        // sql操作
        let sql = `INSERT INTO \`${tableName}\` (`
        const keysString = keys.join(',')
        const valuesString = values.join(',')
        sql = `${sql}${keysString}) VALUES (${valuesString})`
        // debug && console.log(sql)
        // 创建数据库连接
        const conn = connect()
        try {
          conn.query(sql, (err, result) => {
            if (err) {
              reject(err)
            } else {
              resolve(result)
            }
          })
        } catch (e) {
          reject(e)
        } finally {
          conn.end()
        }
      } else {
        reject(new Error('插入数据库失败，对象中没有任何属性'))
      }
    }
  })
}

// 更新
function update(model, tableName, where) {
  return new Promise((resolve, reject) => {
    if(!isObject(model)) {
      reject(new Error('插入数据库失败， 插入数据非对象'))
    } else {
      // insert into a,b values(c,d)
      // update tableName set a=v1,b=v2 where
      const entry = []
      Object.keys(model).forEach(key => {
        if(model.hasOwnProperty(key)) {
          entry.push(`\`${key}\`='${model[key]}'`)
        }
      })
      if(entry.length > 0) {
        let sql = `UPDATE \`${tableName}\` SET`
        sql = `${sql} ${entry.join(',')} ${where}`
        debug && console.log(sql)
        const conn = connect()
        try {
          conn.query(sql, (err, result) => {
            if(err) {
              reject(err)
            } else {
              resolve(result)
            }
          })
        } catch (e) {
          reject(e)
        } finally {
          conn.end()
        }
      }
    }
  })
}

module.exports = {
  querySql,
  queryOne,
  insert,
  update
}