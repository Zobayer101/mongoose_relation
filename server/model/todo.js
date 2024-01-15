
const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    first:{
        type:String,

    },
    scound:{
        type:String,
    },
    people:{
        type:mongoose.Types.ObjectId,
        ref:'People'
    }
})

const TodoDB= mongoose.model('Todo',schema);

module.exports=TodoDB;