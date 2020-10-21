const express = require('express')
const mysql = require("mysql")
const app = express()
const cors = require("cors");

app.use(express.json());
app.use(cors());

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root@123',
//     database:'infotel_v2'
// });

// app.post('/register', (req,res)=>{

// })

const routes = require("./routes/routes");
routes(app);

app.listen(3001, () =>{
    console.log("runing on port 3001")
})