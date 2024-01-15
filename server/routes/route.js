
const express=require('express');
const route=express.Router();
const controll=require('../controller/control');

route.get('/',(req,res)=>{
    res.send('hello world')
})

//Genaral Api

//for user api
route.post('/route/api/saveP',controll.saveData);

//for todo api
route.post('/route/api/saveT',controll.SaveDataTodo);

//read data api
route.get('/route/api/read',controll.readData);





module.exports=route;
