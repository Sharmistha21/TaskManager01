const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must povide name'],
        trim:true,
        maxlength:[20,'name cannot be more than 20 characters']

    },
    completed:{
       type: Boolean,
       default:false
    }
})

Task=mongoose.model('Task',taskSchema)
module.exports=Task