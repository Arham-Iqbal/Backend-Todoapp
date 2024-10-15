const todo=require("../models/Todo")

exports.gettodo=async (req,res)=>{
    try{
        const todos=await todo.find({})
        res.status(200).json({
            success:true,
            data:todos,
            message:"All todos retrieved"

        })

    }
    catch(e){
        console.log(`error in fetching all todos ${e}`)
        res.status(500).json({
            success:false,
            error:e.message,
            message:"error in fetching all todos"
        })

    }
}


exports.gettodobyId= async (req,res)=>{
    try
    {
        const {id}=req.params
        const todobyid=await todo.findById({_id:id})
        if(!todobyid)
        {
    
            res.status(404).json({
                success:false,
                message:"there is no todo by id ",id
            })


        }
        else{
            res.status(200).json({
                success:true,
                data:todobyid,
                message:`todo by ${id} retrieved successfully`
            })
        }


    }
    catch(e)
    {
        console.log(`error found in getting todo by id ${e}`)
        res.status(500).json({
            success:false,
            error:e.message,
            message:'error received in getting todo by id'
        })

    }
}
