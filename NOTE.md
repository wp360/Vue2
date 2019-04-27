#### 利用babel-cli搭建支持ES6的node环境
1. 执行命令，全局安装babel-cli。
> npm install babel-cli -g
2. 安装babel-preset-es2015
> npm i babel-preset-es2015
3. 修改package.json，添加--exec babel-node
```js
  "dev": "cross-env NODE_ENV=development nodemon server/index.js --watch server --exec babel-node",
  "build": "nuxt build",
  "start": "cross-env NODE_ENV=production node server/index.js --exec babel-node",
```

#### 环境搭建
> MongoDB
1. 安装MongoDB
下载地址： http://dl.mongodb.org/dl/win32/x86_64
2. 配置环境变量
目录：C:\Program Files\MongoDB\Server\3.X\bin
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

#### 首页开发
> 需求分析（接口设计）
1. 用户类接口
```
/users/signup
/users/signin
/users/verify
/users/exit
/users/getUser
```

#### 参考笔记
[https://www.cnblogs.com/xiaozhumaopao/p/10368420.html](https://www.cnblogs.com/xiaozhumaopao/p/10368420.html)
