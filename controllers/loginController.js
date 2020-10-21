const mysql = require('../model');

exports.LoginC = function(req,res){
    var insertSQL  = 'SELECT * FROM test_user WHERE username = ? AND password = ?';
    var InsertBody = [req.body.username,req.body.password];



    mysql.query(insertSQL,InsertBody,function(err,result){
        if(err){
            console.log("rana error",err)
            res.send({err: err})
          }else if(result.length > 0){
           console.log("loged in")
            res.send(result)
           
          }else{

                 res.json({"Error": true, "Message": "Wrong conbination"});
          }


    })

}