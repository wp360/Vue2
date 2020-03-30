const {env} = require('./env');
const UPLOAD_PATH = env === 'dev' ? '../upload/admin-upload-ebook' : 'root/upload/admin-upload/ebook';

module.exports = {
  CODE_ERROR: -1,
  CODE_SUCCESS: 0,
  CODE_TOKEN_EXPIRED: -2, // token错误码
  debug: true,
  PWD_SALT: 'admin_node',
  PRIVATE_KEY: 'admin_node_haidebaozi_key', // 私钥
  JWT_EXPIRED: 60 * 60, // 以秒计，此为1小时
  UPLOAD_PATH
}