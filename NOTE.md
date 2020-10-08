## 开发步骤

> 环境搭建

* 1. 安装
`npm i -g npx`

* 2. 新建项目
`npx create-nuxt-app meituan`

> 安装选项
```
create-nuxt-app v3.3.0
✨  Generating Nuxt.js project in meituan
? Project name: meituan
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Element
? Nuxt.js modules: Axios
? Linting tools: ESLint
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Version control system: Git
```

* 3. 启动项目
```
cd meituan
npm install --updata-binary
npm run dev
```

[针对【create-nuxt-app新版本v3.2.0】构建项目时没有server配置以及运行后弹出收集匿名数据选项等问题的解决方法](https://blog.csdn.net/jokerjiaojiao/article/details/108041009)

* 4. 安装sass
`npm i sass-loader node-sass -S`

* 5. 启动项目

> 项目开发

* 1. 添加图片、基本样式文件

* 2. 首页布局

* 3. 首页开发

```
*** 需求分析 （接口设计） ***
======== 用户类接口 ==========
/users/signup
/users/signin
/users/verify
/users/exit
/users/getUser
```

> 安装插件
* server/interface/users.js
`npm i koa koa-router koa-redis nodemailer`

* server/interface/utils/axios.js
`npm i axios`

* server/interface/utils/passport.js
`npm i koa-passport passport-local`


#### 环境搭建
> MongoDB
1. 安装MongoDB
下载地址： http://dl.mongodb.org/dl/win32/x86_64
2. 配置环境变量
目录：C:\Program Files\MongoDB\Server\3.X\bin
> cd C:/Program Files/MongoDB/Server/3.2/bin
3. 开机命令：cmd
> mongod --dbpath E:\MongoDB
* --dbpath就是选择数据库文档所在的文件夹。
* E:\MongoDB可以自定义
4. 运行
> mongo

> Redis
1. Window 下安装
下载地址：https://github.com/MSOpenTech/redis/releases。

2. 下载 Redis-x64-xxx.zip压缩包到自定义的文件夹，解压后，将文件夹重新命名为 redis。

3. 运行
* 打开一个 cmd 窗口 使用 cd 命令切换目录到 E:\redis 运行：
> redis-server.exe redis.windows.conf

[参考文档：https://www.runoob.com/redis/redis-install.html](https://www.runoob.com/redis/redis-install.html)


#### 数据库导入
> mongoimport -d dbs -c test pois.dat

`mongoimport -d student -c areas areas.dat`
`mongoimport -d student -c category category.dat`
`mongoimport -d student -c cities cities.dat`
`mongoimport -d student -c maps maps.dat`
`mongoimport -d student -c menus menus.dat`
`mongoimport -d student -c pois pois.dat`
`mongoimport -d student -c provinces provinces.dat`
`mongoimport -d student -c regions regions.dat`
`mongoimport -d student -c topsearches topsearches.dat`

* 需要导入的数据库文档：areas、category、cities、maps、menus、pois、provinces、regions、topsearches

#### 接口签名
> axios.get(`http://cp-tools.cn/geo/getPosition?sign=${sign}`)
> http://cp-tools.cn/sign 请输入用户id 获取

#### koa-passport学习笔记
[https://www.jianshu.com/p/622561ec7be2](https://www.jianshu.com/p/622561ec7be2)

#### 参考笔记
[https://www.cnblogs.com/xiaozhumaopao/p/10368420.html](https://www.cnblogs.com/xiaozhumaopao/p/10368420.html)

[Centos7在线安装MongoDB 3.6以及创建用户建立远程连接](https://blog.csdn.net/weixin_43849575/article/details/103886117)

## 补充内容:

> Git-命令行-删除本地和远程分支
```
切换到要操作的项目文件夹
命令行 : $ cd <ProjectPath>


查看项目的分支们(包括本地和远程)
命令行 : $ git branch -a


删除本地分支
命令行 : $ git branch -d <BranchName>


删除远程分支
命令行 : $ git push origin --delete <BranchName>


查看删除后分支们
命令行 : $ git branch -a
```

## 上传github
```
git remote add origin https://github.com/wp360/Vue2.git

git checkout -b meituan

git status

git add .

git commit -m "项目初始化"

git push

git push --set-upstream origin meituan
```