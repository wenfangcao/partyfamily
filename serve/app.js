const http = require("http");
const express = require("express");
var bodyParser = require("body-parser");
var  nodemailer = require('nodemailer');
var app = express();
app.listen(1234);
//app.use(bodyParser.urlencoded({extended:false}));
app.post("/email",(req,res)=>{
    var yourName = req.body.yourName;
    var telephone = req.body.telephone;
    var transporter = nodemailer.createTransport({
        service: 'qq',//邮箱服务器
        auth: {
            user: '173581251@qq.com',//默认邮箱账号
            pass: 'obgxxitdayzybigf'        //授权码
        }
    });
    var mailOptions = {
        from: '173581251@qq.com', 
        to:"984244155@qq.com", // list of receivers
        subject: yourName+" : "+telephone, 
        text: yourName+" : "+telephone , 
        html:"<h2>nodemailer</h2>"
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(!error){
            res.send({code: 1});
        }else{
            console.log(error);
            res.send({code: 0});
        }
    });
});