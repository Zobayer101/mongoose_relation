
const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    todo:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Todo'
        }
    ]
   

})

const People=mongoose.model('People',schema);
module.exports=People;