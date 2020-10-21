const express = require('express')
const mysql = require("mysql")
const app = express()
const cors = require("cors");


app.use(express.json());
app.use(cors());



const routes = require("./routes/routes");
routes(app);

app.listen(3001, () =>{
    console.log("runing on port 3001")
})