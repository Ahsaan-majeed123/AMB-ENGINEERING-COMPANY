const express = require("express");
const app = express();
const userEmail = require("./routes/userEmail")
const bodyparser = require("body-parser");
const cors = require("cors")
require("dotenv").config()

const PORT = process.env.PORT || 8086


app.use(bodyparser.json());//jb postman me form m data put krte ha ya data access k lia
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/userEmail",userEmail)

//Server Start
app.listen(PORT,(err)=>{
    if (err) {
       console.log("Server is not listening!");
    }
    else
    {
        console.log(`Server is listening on ${PORT}`);
    }
})