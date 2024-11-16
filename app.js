const express=require('express');
const app=express();
const routes=require('./routes/tasks')
const connectDB=require('./db/connect')

const port=3000;


app.get('/hello',(req,res)=>{
    res.send('Task manager app');
})

app.use(express.json())
app.use('/api/v1/tasks',routes)

const start= async()=>{
    try{
        await connectDB();
        app.listen(port,console.log(`server is listening on port ${port}`))

    }
    catch(error){
         console.log(error)
    }
}

start()
