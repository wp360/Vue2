## 知识要点：
1. EditorConfig 介绍
```js
// .editorconfig
root = true

[*]
charset = utf-8 // 文件编码
indent_style = space // 缩进类型
indent_size = 2 // 缩进数量
end_of_line = lf // 换行符格式
insert_final_newline = true // 是否在文件的最后插入一个空行
trim_trailing_whitespace = true // 是否删除行尾的空格

```

2. Webpack 使用
`npm install webpack@3.5.5 --save-dev`

`npm install webpack-dev-middleware@1.12.0 webpack-hot-middleware@2.18.2 --save-dev`

[使用webpack-dev-middleware 和 webpack-hot-middleware 配置一个dev-server](http://blog.csdn.net/lla520/article/details/77803773)

### webpack打包：
`node ./node_modules/webpack/bin/webpack --config ./build/webpack.base.config.js`

3. Eslint 设置
```js
    "eslint": "^4.5.0",
    "eslint-config-standard": "^10.2.1",
    "eslint-loader": "^1.9.0",
    "eslint-plugin-html": "^3.2.0",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-node": "^5.1.1",
    "eslint-plugin-promise": "^3.5.0",
    "eslint-plugin-standard": "^3.0.1",
```