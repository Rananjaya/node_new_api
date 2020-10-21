const mysql =require('mysql');
const con =mysql.createConnection(
     {
         host:'localhost',
         user:'root',
         password:'root@123',
         database:'fitis_app'
     },
    {multipleStatements: true}
);
module.exports=con;
