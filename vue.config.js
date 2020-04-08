module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // publicPath: '/xiaomi',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}