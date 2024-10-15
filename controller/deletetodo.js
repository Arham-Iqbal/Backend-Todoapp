const todo=require("../models/Todo")

exports .deletetodo=async (req,res)=>{
    try 
    {
        const {id}=req.params
        const trimmedId=id.trim()
        await todo.findByIdAndDelete(trimmedId)
        res.status(200).json({
            success:true,
            message:"todo deleted successfully"
        })
       
    }
    catch(e)
    {
        console.log(`error received in deleting todo ${e}`)
        res.status(500).json({
            success:false,
            error:e.message,
            message:"error received in deleting todo"
        })

    }
}