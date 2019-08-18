const express = require('express');
const path = require('path');
const art_express = require('express-art-template');

// 创建app对象，负责管理中间件
const app = express();

// 设置art的模板引擎
app.engine('art', art_express);

// 用express提供的静态目录的中间件
app.use(express.static(path.join(__dirname, 'public')));

// 动态的请求
app.get('/user/list', (req, res) => {
    // render方法第一个参数是模板的文件名，默认从根目录下的views文件夹进行搜索
    // 第二个参数是给模板的数据
    res.render('userlist.art', {
        title: '你好啊！'
    });
});

app.listen(59999, () => {
    console.log('http://localhost:59999');
});