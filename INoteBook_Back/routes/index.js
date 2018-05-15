let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let userModel = require('./../model/user');
require('./../utils/util');

mongoose.connect('mongodb://127.0.0.1:27017/test');//；连接数据库

mongoose.connection.on('connected', function () {
    console.log('MongoDB connected success');
});

mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected');
});

/* GET home page. */
router.get('/', function (req, res) {

});

/* ucenter */
//user validation when log on
router.post('/ucenter/validation', function (req, res, next) {
    //console.log(req);
    let userName = req.body.params.userName;
    let pwd = req.body.params.pwd;
    console.log('userName', userName, 'pwd:', pwd);
    userModel.findOne({userName, pwd}, (error, userInfo) => {
        if (error) {
            res.json({
                status: '100',
                msg: 'can not find this user'
            });
        } else if (userInfo) {
            res.json({
                status: '0',
                msg: '',
                result: userInfo
            });
        }
    });
});

router.post('/note/getNoteList', function (req, res, next) {
    let userName = req.body.params.userName;
    userModel.findOne({userName}, (error, userInfo) => {
        if (error) {
            res.json({
                status: '1',
                msg: error.message || '查询失败！！'
            });
        } else if (userInfo) {
            res.json({
                status: '0',
                msg: '查询成功！！',
                result: userInfo.noteList
            });
        }
    });
});

router.post('/ucenter/addNote', function (req, res, next) {
    //console.log(req);
    let userName = req.body.params.userName;
    let noteTitle = req.body.params.noteTitle;
    let noteContent = req.body.params.noteContent;
    let createDate = new Date().Format('yyyy-MM-dd hh:mm:ss');
    userModel.findOne({userName}, (error, userInfo) => {
        if (error) {
            res.json({
                status: '1',
                msg: error.message || '入库失败！！'
            });
        } else if (userInfo) {
            userInfo._doc.noteList.push({
                noteTitle,
                noteContent,
                createDate
            });
            userInfo.save((error, result) => {
                if (error) {
                    res.json({
                        status: '1',
                        msg: error.message || '入库失败！！'
                    });
                } else {
                    res.json({
                        status: '0',
                        msg: '入库成功！！',
                        result: 'success'
                    });
                }
            });
        }
    });
});

module.exports = router;
