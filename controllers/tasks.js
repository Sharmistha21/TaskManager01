const Task=require('../models/Task')

const getAllTasks= async (req,res)=>{
    try{
        const tasks=await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({task})
    }

}

const createTask= async (req,res)=>{
    try{
     const data=new Task(req.body)
     const task= await data.save()
     res.status(201).json({task})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const getTask= async (req,res)=>{
    try {
        const {id:taskId}=req.params
        const task=await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`no task with id ${taskId}`})
        }
        res.status(200).json({task});

    } catch (error) {
        res.status(500).json({msg:error})
        
    }
}

const updateTask=(req,res)=>{
    res.json({id:req.params.id})
}

const deleteTask= async(req,res)=>{
   try {
    const {id:taskId}=req.params;
    const task= await Task.findOneAndDelete({_id:taskId})
    if(!task){
        return res.status(404).json({msg:`no task with id ${taskId}`})
    }
    res.status(200).json({task})
   } catch (error) {
    res.status(500).json({msg:error})
    
   }
}
module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask}