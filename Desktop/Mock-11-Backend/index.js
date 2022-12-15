const express = require("express")
require("dotenv").config()
const cors=require("cors")
const { connection } = require("./config/db")
const { ShoppingRouter } = require("./Routers/ShoppingRouter")

const app=express()
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT||8080
app.use("/",ShoppingRouter)
// console.log(new Date(1671086771352));
app.listen(PORT, async()=>{
    await connection;
    try{
        console.log("connected to db")

    }
    catch{
        console.log("error in connection to db")
    }
    console.log(`running on port ${PORT}`)
})