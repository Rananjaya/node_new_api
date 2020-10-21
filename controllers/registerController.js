const mysql = require('../model');

exports.Register = function(req,res){
    var insertSQL  = 'INSERT INTO test_user(username,password) VALUES (?,?)';
    var InsertBody = [req.body.username,req.body.password];



    mysql.query(insertSQL,InsertBody,function(err){
        if(err){
            console.log("rana error",err)
          }else{

            res.json({"Error": false, "Message": "Account created"});
          }


    })

}