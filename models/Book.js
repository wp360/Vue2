const {
  MIME_TYPE_EPUB,
  UPLOAD_PATH,
  UPLOAD_URL
} = require('../utils/constant')
const fs = require('fs')
// 路径
const path = require('path')
const Epub = require('../utils/epub')
// 引入xml2js库
const xml2js = require('xml2js').parseString

class Book {
  constructor(file, data) {
    if(file) {
      this.createBookFromFile(file)
    } else {
      this.createBookFromData(data)
    }
  }

  createBookFromFile(file) {
    // console.log('createBookFromFile: ', file)
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

  // 创建图书数据
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
    this.updateType = data.updateType === 0 ? data.updateType : 1
    this.contents = data.contents || []
    this.category = data.category || 99 // 分类
    this.categoryText = data.categoryText || '自定义'
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
          // console.log(epub.metadata)
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
              if (error) {
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
            try {
              // 解压epub电子书
              this.unzip() // 同步的方法
              // 解析电子书目录
              this.parseContents(epub).then(({
                    chapters,
                    chapterTree
                  }) => {
                this.contents = chapters
                this.contentsTree = chapterTree
                epub.getImage(cover, handleGetImage)
              })
            } catch (e) {
              reject(e)
            }
            // resolve(this)
          }
        }
      })
      epub.parse()
    })
  }

  // 解压方法
  unzip() {
    const AdmZip = require('adm-zip')
    const zip = new AdmZip(Book.genPath(this.path))
    // 第二个参数表示是否覆盖
    zip.extractAllTo(Book.genPath(this.unzipPath), true)
  }

  // 解析目录
  parseContents(epub) {
    // ncx目录文件
    function getNcxFilePath() {
      const spine = epub && epub.spine
      // console.log('spine', spine)
      const manifest = epub && epub.manifest
      const ncx = spine.toc && spine.toc.href
      const id = spine.toc && spine.toc.id
      // console.log('spine', spine.toc, ncx, id, manifest[id].href)
      if(ncx) {
        return ncx
      } else {
        return manifest[id].href
      }
    }

    // 获取目录对象
    function findParent(array, level = 0, pid = '') {
      return array.map(item => {
        // return item
        item.level = level
        item.pid = pid
        if (item.navPoint && item.navPoint.length > 0) {
          item.navPoint = findParent(item.navPoint, level + 1, item['$'].id)
        } else if (item.navPoint) {
          item.navPoint.level = level + 1
          item.navPoint.pid = item['$'].id
        }
        return item
      })
    }

    // 解决树状结构目录
    function flatten(array) {
      return [].concat(...array.map(item => {
        if (item.navPoint && item.navPoint.length > 0) {
          return [].concat(item, ...flatten(item.navPoint))
        } else if (item.navPoint) {
          return [].concat(item, item.navPoint)
        }
        return item
      }))
    }

    const ncxFilePath = Book.genPath(`${this.unzipPath}/${getNcxFilePath()}`)
    // console.log('ncxFilePath', ncxFilePath)
    if(fs.existsSync(ncxFilePath)) {
      return new Promise((resolve, reject) => {
        const xml = fs.readFileSync(ncxFilePath, 'utf-8')
        const dir = path.dirname(ncxFilePath).replace(UPLOAD_PATH, '') // 去掉文件名，返回目录
        // console.log('dir', dir)
        const fileName = this.fileName
        const unzipPath = this.unzipPath
        // xml2js方法使用，传入3个参数：xml文件、配置文件、回调函数
        xml2js(xml, {
          explicitArray: false,
          ignoreAttrs: false
        }, function(err, json) {
          if(err) {
            reject(err)
          } else {
            // console.log('xml', json)
            const navMap = json.ncx.navMap
            // console.log('xml', JSON.stringify(navMap))
            // console.log(navMap.navPoint)
            if(navMap.navPoint && navMap.navPoint.length > 0) {
              navMap.navPoint = findParent(navMap.navPoint)
              const newNavMap = flatten(navMap.navPoint)
              // console.log(newNavMap === navMap.navPoint)
              const chapters = []
              // console.log(epub.flow)
              // console.log(epub.flow, newNavMap)
              // epub.flow
              newNavMap.forEach((chapter, index) => {
                // if(index + 1 > newNavMap.length) {
                //   return
                // }
                // 电子书解压后的路径
                // const nav = newNavMap[index]
                const src = chapter.content['$'].src
                chapter.id = `${src}`
                chapter.href = `${dir}/${src}`.replace(unzipPath, '')
                // chapter.text = `${UPLOAD_URL}/unzip/${fileName}/${chapter.href}`
                chapter.text = `${UPLOAD_URL}${dir}/${src}`
                // console.log(chapter.text)
                // if (nav && nav.navLabel) {
                //   chapter.label = nav.navLabel.text || ''
                // } else {
                //   chapter.label = ''
                // }
                chapter.label = chapter.navLabel.text || ''
                // chapter.level = nav.level
                // chapter.pid = nav.pid
                // chapter.navId = nav['$'].id
                chapter.navId = chapter['$'].id
                chapter.fileName = fileName
                chapter.order = index + 1
                // console.log(chapter)
                chapters.push(chapter)
                // console.log(chapters)
              })
              // 树状目录
              const chapterTree = []
              chapters.forEach(c => {
                c.children = []
                if(c.pid === '') {
                  chapterTree.push(c)
                } else {
                  const parent = chapters.find(_ => _.navId === c.pid)
                  parent.children.push(c)
                }
              })
              // console.log(chapterTree)
              resolve({chapters, chapterTree})
            } else {
              reject(new Error('目录解析失败， 目录数为0'))
            }
          }
        })
      })
    } else {
      throw new Error('目录文件不存在')
    }
  }

  toDb() {
    return {
      fileName: this.fileName,
      cover: this.cover,
      title: this.title,
      author: this.author,
      publisher: this.publisher,
      bookId: this.bookId,
      updateType: this.updateType,
      language: this.language,
      rootFile: this.rootFile,
      originalName: this.originalName,
      filePath: this.filePath,
      unzipPath: this.unzipPath,
      coverPath: this.coverPath,
      createUser: this.createUser,
      createDt: this.createDt,
      updateDt: this.updateDt,
      updateType: this.updateType,
      category: this.category,
      categoryText: this.categoryText
    }
  }

  // 获取目录方法
  getContents() {
    return this.contents
  }

  // 重置
  reset() {
    console.log(this.fileName)
    if(Book.pathExists(this.filePath)) {
      // console.log('删除文件...')
      fs.unlinkSync(Book.genPath(this.filePath))
    }
    if (Book.pathExists(this.coverPath)) {
      // console.log('删除封面...')
      fs.unlinkSync(Book.genPath(this.coverPath))
    }
    if (Book.pathExists(this.unzipPath)) {
      // console.log('删除解压目录...')
      // 低版本node中recursive不支持
      fs.rmdirSync(Book.genPath(this.unzipPath), {recursive: true})
    }
  }

  // 获取实际路径方法
  static genPath(path) {
    if(!path.startsWith('/')) {
      path = `/${path}`
    }
    return `${UPLOAD_PATH}${path}`
  }

  // 判断路径是否存在
  static pathExists(path) {
    if(path.startsWith(UPLOAD_PATH)) {
      return fs.existsSync(path)
    } else {
      return fs.existsSync(Book.genPath(path))
    }
  }
}

module.exports = Book