const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://mayuanyuan:ECMA-262@localhost:27017/myproject';


router.post('/regsave', (req, res, next) => {
	// console.log(req.body);
	let resData = {
		code: 0,
		msg: '注册成功'
	}
	MongoClient.connect(url, (err, client) => {
		if(err) {
			console.log('数据库连接错误');
		} else {
			let userscoll = client.db('myproject').collection('users');

			userscoll.find({ 'telphone': req.body.telphone }).toArray((err, docs) => {
				if(err) {
					console.log('用户表查询错误');
				} else {
					if(docs != '') {
						resData.code = 1;
						resData.msg = '此手机号已经被注册';
						res.json(resData);
					} else {
						userscoll.insertOne({
							'telphone': req.body.telphone,
							'password': req.body.password,
							'username': req.body.username,
							'department': req.body.department
						}, (err, result) => {
							if(err) throw err;
							res.json(resData);
						});
					}
				}

				client.close();
			});

		}

	});
});

router.post('/logcheck', (req, res, next) => {
	let resData = {
		code: 0,
		msg: '登录成功'
	}
	MongoClient.connect(url, (err, client) => {
		if(err) throw err;

		let userscoll = client.db('myproject').collection('users');

		userscoll.find({ telphone: req.body.telphone }).toArray((err, docs) => {
			if(err) throw err;

			if(docs == '') {
				resData.code = 1;
				resData.msg = '用户不存在';
				res.json(resData);
				return;
			} else if (docs[0].password != req.body.password) {
				resData.code = 2;
				resData.msg = '密码不正确';
				res.json(resData);
				return;
			} else {
				res.json(resData);
			}
		});

	});
});

module.exports = router;