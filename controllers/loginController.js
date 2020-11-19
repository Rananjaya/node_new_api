const mysql = require('../model');
const bcrypt = require('bcrypt');
const saltRounds = 10

exports.LoginC = function(req,res){
    var insertSQL  = 'SELECT * FROM admin_user WHERE username = ?';
    var username = req.body.username
    var password = req.body.password
    // var InsertBody = [req.body.username,req.body.password];



    mysql.query(insertSQL,username,
        
    function(err,result){
        if(err){
            console.log("rana error",err)
            res.send({err: err})
          }else if(result.length > 0){
           console.log("loged in")

           bcrypt.compare(password, result[0].password,function(error,response){
                    if(response){ //if it is correct
                       res.send(result)
                    } else{
                        res.json({"Error": true, "Message": "Wrong conbination"});
                    }
              })
            // res.send(result)
           
          }else{

                 res.json({"Error": true, "Message": "user not exits"});
          }


    })

}