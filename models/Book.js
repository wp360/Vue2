const {
  MIME_TYPE_EPUB,
  UPLOAD_PATH,
  UPLOAD_URL
} = require('../utils/constant')
const fs = require('fs')
const Epub = require('../utils/epub')

class Book {
  constructor(file, data) {
    if(file) {
      this.createBookFromFile(file)
    } else {
      this.createBookFromData(data)
    }
  }

  createBookFromFile(file) {
    console.log('createBookFromFile: ', file)
    const {
      destination,
      filename,
      mimetype = MIME_TYPE_EPUB,
      path,
      originalname
    } = file
    // 电子书的文件名后缀
    const suffix = mimetype === MIME_TYPE_EPUB ? '.epub' : ''
    // 电子书的原有路径
    const oldBookPath = path
    // 电子书的新的路径
    const bookPath = `${destination}/${filename}${suffix}`
    // 电子书的下载URL
    const url = `${UPLOAD_URL}/book/${filename}${suffix}`
    // 电子书解压后的文件夹路径
    const unzipPath = `${UPLOAD_PATH}/unzip/${filename}`
    // 电子书解压后的文件夹URL
    const unzipUrl = `${UPLOAD_URL}/unzip/${filename}`
    if(!fs.existsSync(unzipPath)) {
      fs.mkdirSync(unzipPath, {recursive: true}) // 创建电子书解压后的目录
    }

    if (fs.existsSync(oldBookPath) && !fs.existsSync(bookPath)) {
      fs.renameSync(oldBookPath, bookPath) // 重命名文件
    }

    this.fileName = filename // 文件名
    this.path = `/book/${filename}${suffix}` // epub文件路径
    this.filePath = this.path // epub文件路径
    this.url = url // epub文件url
    this.title = '' // 标题
    this.author = '' // 作者
    this.publisher = '' // 出版社
    this.contents = [] // 目录
    this.cover = '' // 封面图片URL
    this.coverPath = '' // 封面图片的路径
    this.category = -1 // 分类ID
    this.categoryText = '' // 分类名称
    this.language = '' // 语种
    this.unzipPath = `/unzip/${filename}` // 解压后的电子书目录
    this.unzipUrl = unzipUrl // 解压后的电子书链接
    this.originalName = originalname // 电子书文件的原名
  }

  createBookFromData(data) {
    this.fileName = data.fileName
    this.cover = data.coverPath
    this.title = data.title
    this.author = data.author
    this.publisher = data.publisher
    this.bookId = data.fileName
    this.language = data.language
    this.rootFile = data.rootFile
    this.originalName = data.originalName
    this.path = data.path || data.filePath
    this.filePath = data.path || data.filePath
    this.unzipPath = data.unzipPath
    this.coverPath = data.coverPath
    this.createUser = data.username
    this.createDt = new Date().getTime()
    this.updateDt = new Date().getTime()
    this.updateType = data.updateType === 0 ? data.updateType : UPDATE_TYPE_FROM_WEB
    this.contents = data.contents
  }

  parse() {
    return new Promise((resolve, reject) => {
      const bookPath = `${UPLOAD_PATH}${this.filePath}`
      if (!fs.existsSync(bookPath)) {
        reject(new Error('电子书不存在'))
      }
      // resolve()
      const epub = new Epub(bookPath)
      epub.on('error', err => {
        reject(err)
      })
      epub.on('end', err => {
        if(err) {
          reject(err)
        } else {
          console.log(epub.metadata)
          let {
            title,
            language,
            creator,
            creatorFileAs,
            publisher,
            cover
          } = epub.metadata
          if (!title) {
            reject(new Error('图书标题为空'))
          } else {
            this.title = title
            this.language = language || 'en'
            this.author = creator || creatorFileAs || 'unknown'
            this.publisher = publisher || 'unknown'
            this.rootFile = epub.rootFile
            const handleGetImage = (error, imgBuffer, mimeType) => {
              // console.log(error, imgBuffer, mimeType)
              if(error) {
                reject(error)
              } else {
                const suffix = mimeType.split('/')[1]
                const coverPath = `${UPLOAD_PATH}/img/${this.fileName}.${suffix}`
                const coverUrl = `${UPLOAD_URL}/img/${this.fileName}.${suffix}`
                fs.writeFileSync(coverPath, imgBuffer, 'binary') // 文件写入
                this.coverPath = `/img/${this.fileName}.${suffix}`
                this.cover = coverUrl
                resolve(this)
              }
            }
            epub.getImage(cover, handleGetImage)
            // resolve(this)
          }
        }
      })
      epub.parse()
    })
  }
}

module.exports = Book