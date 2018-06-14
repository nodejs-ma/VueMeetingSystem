const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://mayuanyuan:ECMA-262@localhost:27017/myproject'

router.get('/', (req, res, next) => {
	res.render('index');
});

router.get('/department', (req, res, next) => {
	MongoClient.connect(url, (err, client) => {
		if(err) {
			console.log('数据库连接失败');
		} else {
			console.log('数据库连接成功');

			let depcoll = client.db('myproject').collection('department');
			depcoll.find({}).toArray((err, docs) => {
				client.close();

				if(err) {
					console.log('查询失败');
				} else {
					res.json(docs);
				}
			});
		}
	});
});

module.exports = router;