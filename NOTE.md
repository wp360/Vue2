## 项目初始化

```
git clone https://github.com/PanJiaChen/vue-element-admin

cd vue-element-admin

cnpm i

npm run dev
```

#### 如果出现报错
* 1. 不识别es6语法
`cnpm install core-js@2`
* 2. vue.config.js 中 open:true 注释掉

## 项目精简
* 删除 src/views下的源码，保留：
- dashboard： 首页
- error-page: 异常页面
- login:      登录
- redirect:   重定向

* 对src/router/index 进行相应修改
* 删除src/router/modules文件夹
* 删除src/vendor文件夹

## 上传github
```
git remote add origin https://github.com/wp360/Vue2.git

git checkout -b ele-admin

git status

git add .

git commit -m "初始化"

git push

git push --set-upstream origin ele-admin
```