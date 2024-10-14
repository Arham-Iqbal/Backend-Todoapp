const express=require('express')
const app=express()
const {createtodo}=require("../controller/createtodo")
const router=express.Router()
router.post("/createtodo",createtodo)
module.exports=router
