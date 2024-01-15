

const express=require('express');
const dotenv=require('dotenv');
const bodyParser=require('body-parser');
const route=require('./server/routes/route');
const DBconnection=require('./server/database/DBcon');
const app=express();
dotenv.config();
const PORT=process.env.PORT||8800;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())

app.use('/',route)

DBconnection();

app.use((error,req,res,next)=>{
    if(error){
        console.log(error.message)
    }else{
        console.log(`server side error..!`)
    }
})
app.listen(PORT,()=>{
    console.log(`Server run on http://localhost:${PORT}`)
})
