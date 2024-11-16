const getAllTasks=(req,res)=>{
    res.send('get all task')

}

const createTask=(req,res)=>{
    res.send(req.body)
}

const getTask=(req,res)=>{
    res.send('get single task')
}

const updateTask=(req,res)=>{
    res.json({id:req.params.id})
}

const deleteTask=(req,res)=>{
    res.send('delete task')
}
module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask}