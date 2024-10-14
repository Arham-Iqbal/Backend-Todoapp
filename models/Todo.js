const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    title:{
        required:true,
        maxlength:50,
        type: String
    },
    description:{
        required:true,
        maxlength:50,
        type:String
    },
    createdAt:{
            required:true,
            type:Date,
            default:Date.now()
    }
})
module.exports=mongoose.model("todo",todoSchema)