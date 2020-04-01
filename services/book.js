const Book = require('../models/Book')
const db = require('../db')
const _ = require('lodash')

function exists(book) {
  // return false
  const {title, author, publisher} = book
  const sql = `select * from book where title='${title}' and author='${author}' and publisher='${publisher}'`
  return db.queryOne(sql)
}

async function removeBook(book) {
  if(book) {
    book.reset()
    if(book.fileName) {
      const removeBookSql = `delete from book where fileName=$'${book.fileName}'`
      const removeContentsSql = `delete from contents where fileName=$'${book.fileName}'`
      await db.querySql(removeBookSql)
      await db.querySql(removeContentsSql)
    }
  }
}

async function insertContents(book) {
  const contents = book.getContents()
  // console.log('contents', contents)
  if(contents && contents.length > 0) {
    for(let i=0;i<contents.length;i++) {
      const content = contents[i]
      const _content = _.pick(content, [
        'fileName',
        'id',
        'href',
        'text',
        'order',
        'level',
        'label',
        'pid',
        'navId'
      ])
      console.log('_content', _content)
      await db.insert(_content, 'contents')
    }
  }
}

function insertBook(book) {
  return new Promise(async (resolve, reject) => {
    try {
      if(book instanceof Book) {
        const result = await exists(book)
        // 移除已有电子书
        if(result) {
          await removeBook(book)
          reject(new Error('电子书已存在'))
        } else {
          await db.insert(book.toDb(), 'book') // 电子书信息
          await insertContents(book) // 电子书目录
          resolve()
        }
      } else {
        reject(new Error('添加的图书对象不合法'))
      }
    } catch (e) {
      reject(e)
    }
  })
}

// 更新电子书
function updateBook(book) {
  return new Promise(async (resolve, reject) => {
    try {
      if(book instanceof Book) {
        const result = await getBook(book.fileName)
        // console.log(result)
        if(result) {
          const model = book.toDb()
          if(+result.updateType === 0) {
            reject(new Error('内置图书不能编辑'))
          } else {
            await db.update(model, 'book', `where fileName='${book.fileName}'`)
            resolve()
          }
        }
      } else {
        reject(new Error('添加的图书对象不合法'))
      }
    } catch(e) {
      reject(e)
    }
  })
}

function getBook(fileName) {
  return new Promise(async (resolve, reject) => {
    const bookSql = `select * from book where fileName='${fileName}'`
    const contentsSql = `select * from contents where fileName='${fileName}' order by \`order\``
    const book = await db.queryOne(bookSql)
    const contents = await db.querySql(contentsSql)
    if(book) {
      // 封面
      book.cover = Book.genCoverUrl(book)
      // 目录
      book.contentsTree = Book.genContentsTree(contents)
      resolve(book)
    } else {
      reject(new Error('电子书不存在'))
    }
  })
}

// 图书列表
async function getCategory() {
  const sql = 'select * from category order by category asc'
  const result = await db.querySql(sql)
  const categoryList = []
  result.forEach(item => {
    console.log(item)
    categoryList.push({
      label: item.categoryText,
      value: item.category,
      num: item.num
    })
  })
  return categoryList
}

module.exports = {
  insertBook,
  getBook,
  updateBook,
  getCategory
}