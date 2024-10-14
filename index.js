const express=require("express")
const app=express()
require("dotenv").config()
const PORT=process.env.PORT || 4000
const dbConnect=require("../TODOAPP/Database/database")
app.use(express.json())
const todoroutes=require("../TODOAPP/routes/todos")

dbConnect()
app.use("/v1",todoroutes)

app.get("/",(req,res)=>{
    res.send("hello bhaisaab")
})
app.listen(PORT,()=>{
    console.log("app started at port ",PORT)
})