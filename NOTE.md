# 小米商城项目

## 前期准备
* 1. git安装
[安装地址： https://git-scm.com/downloads](https://git-scm.com/downloads)
* 2. 配置VSCode的Git地址
```
打开 文件-首选项-设置-搜索git.path 打开setting.json

添加“git.path”： Git实际安装地址
```
* 3. git配置ssh公钥
`git config --list`

`git clone git项目链接地址`

`git config --global credential.helper store`

> 公钥
`ssh-keygen -t rsa -C "2897406527@qq.com"`

#### 注意：无需输入密码，两次回车即可

* 4. VScode操作Git
* 5. VueCli4.0安装
```
npm install -g @vue/cli
or
yarn global add @vue/cli
vue --version
```
* 6. vue项目可视化管理
> vue ui

## 项目构建
* 1. 创建项目
`vue create xiaomi`
```
 $ cd xiaomi
 $ npm run serve
```
* 2. 安装插件依赖
`cnpm i axios vue-router vuex -S`
* 3. vue-devtools安装使用
```
第一种方法，直接谷歌商店里搜索，然后安装下载插件
第二种方法，手动安装
网址：https://github.com/vuejs/vue-devtools
选择master分支

· Clone this repo
· npm install (Or yarn install if you are using yarn as the package manager)
· npm run build
· Open Chrome extension page
· Check "developer mode"
· Click "load unpacked extension", and choose shells/chrome.
```
[参考文档：VUE 配置vue-devtools调试工具](https://www.imooc.com/article/294527)

## 项目基础架构
* 1. 前端跨域
```
· CORS跨域
· JSONP跨域
· 代理跨域
```
> 接口代理 - 通过修改nginx服务器配置来实现 （说明：前端修改，后台不动）
#### 操作步骤：
```js
// 新建文件：vue.config.js
module.exports= {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
```