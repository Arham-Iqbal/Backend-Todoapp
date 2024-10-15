const todo=require("../models/Todo")

exports.updatetodo=async (req,res)=>{

    try
    {
        const {id}=req.params
        const trimmedId = id.trim(); 
        const {title,description}=req.body
        const updatedtodo=await todo.findByIdAndUpdate(
            trimmedId,
            {title, description, updatedAt: Date.now()},
            {new:true}
        )
        res.status(200).json({
            success:true,
            data:updatedtodo,
            message:"todo updated "
        })

    }
    catch(e)
    {
        console.log("error received in updating todo")
        res.status(500).json({
            success:false,
            error:e.message,
            message:"error received in updating todo"
        })

    }
}