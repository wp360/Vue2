const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/main.js' // main是默认入口，也可以是多入口
    },
    output: {
        filename: './build.js', //指定js文件
        path: path.join(__dirname, 'dist')
    },
    // 关于模块配置
    module: {
        // 模块规则（配置 loader、解析器等选项） webpack2.X之后新增 rules
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: '[name].[ext]'
                }
            },
            {
                //处理ES6的js
                test: /\.js$/,
                loader: 'babel-loader',
                //排除 node_modules下的所有
                exclude: /node_modules/,
                options: {
                    //关键字
                    presets: ['es2015'],
                    //函数
                    plugins: ['transform-runtime']
                }
            }
        ]
    },
    plugins: [
        //插件的执行顺序是依次执行的
        new htmlWebpackPlugin({
            template: './src/index.html',
        })
        //将src下的template属性描述的文件根据当前配置的output.path，将文件移动到该目录
    ]
}