const mongoose=require('mongoose')
require("dotenv").config()
console.log(process.env.DATABASE_URL)
const dbConnect=async ()=>{
    await mongoose.connect(process.env.DATABASE_URL,{
        
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log("db connected successfully")
    })
    .catch((e)=>{
        console.error(error.message)
    })
}

module.exports=dbConnect;