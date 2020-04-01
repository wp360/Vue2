const {env} = require('./env');
const UPLOAD_PATH = env === 'dev' ? '../upload/admin-upload-ebook' : 'root/upload/admin-upload/ebook';
const UPLOAD_URL = env === 'dev' ? 'http://localhost/upload/admin-upload-ebook' : 'root/admin-upload-ebook'; // root => 个人域名
const OLD_UPLOAD_URL = env === 'dev' ? '../upload/admin-upload-ebook' : 'root/admin-upload-ebook'; // root => 个人域名

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2, // token错误码
  debug: true,
  PWD_SALT: 'admin_node',
  PRIVATE_KEY: 'admin_node_haidebaozi_key', // 私钥
  JWT_EXPIRED: 60 * 60, // 以秒计，此为1小时
  UPLOAD_PATH,
  UPLOAD_URL,
  OLD_UPLOAD_URL,
  MIME_TYPE_EPUB: 'application/epub+zip'
}