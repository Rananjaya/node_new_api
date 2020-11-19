const mysql =require('mysql');
const con =mysql.createConnection(
     {
        host:'localhost',
        user:'root',
        password:'123456',
        database:'fitis_app'
     },
    {multipleStatements: true}
);
module.exports=con;
