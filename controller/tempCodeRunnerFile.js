
    try
    {
        const {id}=req.params
        const {title,description}=req.body
        const updatedtodo=await todo.findByIdAndUpdate(
            id,
            {title, description, updatedAt: Date.now()},
        )
        res.status(200).json({
            success:true,
            data:updatedtodo,
            message:"todo updated "
        })

    }