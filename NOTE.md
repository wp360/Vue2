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