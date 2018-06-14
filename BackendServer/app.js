const express = require('express');
const app = express();

const ejs = require('ejs');

// const multer = require('multer');
const bodyParser = require('body-parser');

// 模板引擎
app.engine('html', ejs.renderFile);
app.set('views', './views');
app.set('view engine', 'html');

// 静态目录
app.use(express.static('public'));

// 处理multipart/form-data类型的表单数据
// app.use(multer().array());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 路由分模块
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

// 404页面
app.get('*', function(req, res) {
	res.send('404 not found');
});

app.listen(3000, function() {
	console.log('listening...');
});
