const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const indexHTML = (() => {
    return fs.readFileSync(path.resolve(__dirname,'./index.html'),'utf-8');
})();

// 加载静态资源
app.use('/dist',express.static(path.resolve(__dirname,'./dist')));

app.get('*',(req,res) => {
    res.write(indexHTML); // 'hello vue'
    res.end();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`服务开启，端口${port}`);
});
