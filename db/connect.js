const mongoose=require('mongoose')

const connectionString=
'mongodb+srv://Sharmistha3010:Kushal3010@cluster0.yvabvyw.mongodb.net/TASKMANAGER?retryWrites=true&w=majority&appName=Cluster0'

const connectDB=(url)=>{
   return mongoose.connect(url)

}

module.exports=connectDB
