const http = require("http");
const express = require("express");
//var bodyParser = require("body-parser");
var  nodemailer = require('nodemailer');
var app = express();
app.listen(1234);

//app.use(bodyParser.urlencoded({extended:false}));
app.get("/email",(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    var yourName = req.query.yourName || "aaa";
    var telephone = req.query.telephone || "123";
    console.log(req.query.yourName);
    var transporter = nodemailer.createTransport({
        service: 'qq',//邮箱服务器
        auth: {
            user: '173581251@qq.com',//默认邮箱账号
            pass: 'obgxxitdayzybigf'        //授权码
        }
    });
    var mailOptions = {
        from: '173581251@qq.com',
        to:[//发送邮箱列表
            "984244155@qq.com"//实验账号
            //"HR@ipartyfamily.com",
            //"LP@ipartyfamily.com",
            //"dazhifan@ipartyfamily.com",
            //"jenny@ipartyfamily.com",
            //"104564861@qq.com",
            //"250815795@qq.com ",
            //"2862369272@qq.com",
            //"455810306@qq.com"
        ],
        subject: yourName+" : "+telephone,
        text: "" ,
        html:yourName+" : "+telephone
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(!error){
            res.json({code: 1});
        }else{
            console.log(error);
            res.json({code: 0});
        }
    });
});