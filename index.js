const express = require('express')
const mysql = require("mysql")
const app = express()
const cors = require("cors");
const bcrypt = require('bcrypt');

const db = require('./model');


app.use(express.json());
app.use(cors());

//this is the login route new for session set
app.post("/loginnew",(req,res) =>{
    var insertSQL  = 'SELECT * FROM admin_user WHERE username = ?';
    var username = req.body.username
    var password = req.body.password
    // var InsertBody = [req.body.username,req.body.password];

    console.log("get login values1",username)
    console.log("get login values1",password)


    db.query(insertSQL,username,
        
    function(err,result){
        if(err){
            console.log("rana error",err)
            res.send({err: err})
          }else if(result.length > 0){
           console.log("loged in")

           bcrypt.compare(password, result[0].password,function(error,response){
                    if(response){ //if it is correct
                        // req.session.user = result;
                        // console.log("rana session",req.session.user)
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
})

const routes = require("./routes/routes");
routes(app);

app.listen(3002, () =>{
    console.log("runing on port 3002")
})