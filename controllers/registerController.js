const mysql = require('../model');
const bcrypt = require('bcrypt');
const saltRounds = 10

exports.Register = function(req,res){

    var insertSQL  = 'INSERT INTO users(username,password) VALUES (?,?)';
    username = req.body.username;
    password = req.body.password;
    // var InsertBody = [username,password];


    bcrypt.hash(password,saltRounds,(err, hash)=>{
        let encr_password = hash
        mysql.query(insertSQL,[username,encr_password],function(err){
            if(err){
                console.log("rana error",err)
              }else{
                console.log("new account created")
                res.json({"Error": false, "Message": "Account created"});
              }
    
    
        })
    })



}