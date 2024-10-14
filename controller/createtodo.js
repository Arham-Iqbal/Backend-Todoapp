const todo=require("../models/Todo")

exports.createtodo=async (req,res)=>
{
    try
    {
      const {title,description}=req.body;
      const createtodo=todo.create({title,description});
      res.status(200).json({
        success:true,
        data:createtodo,
        message:"success"
      })
      console.log("data entered success")

    }
    catch(error)
    {
        console.log(error)
        res.status(200).json({
            success:false,
            message:"error received"
        })
    }

}