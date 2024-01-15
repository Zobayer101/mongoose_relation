
const PeopleDB=require('../model/people');
const TodoDB=require('../model/todo');


//user data seve
exports.saveData=(req,res)=>{

    const user= new PeopleDB(req.body)
        user.save(user)
                    .then((data)=>{
                        
                        if(!data){
                            res.status(400).send('Data is balank ')
                        }else{
                            res.status(200).send(data)
                        }
                    })
                    .catch((error)=>{
                        console.log(error.message);
                    })


}


//Todos data save
exports.SaveDataTodo=(req,res)=>{
    var ID='65a4dd24a349ead47545db3b';
   PeopleDB.findById(ID)
                .then((bigData)=>{
                    
                    
    const user= new TodoDB({
        first:req.body.first,
        scound:req.body.scound,
        people:bigData._id
    })
    user.save(user)
                .then((data)=>{
                    // console.log(data._id)
                    // console.log(bigData._id)

                        PeopleDB.updateOne({
                            _id:bigData._id
                        },{
                            $push:{
                                todo:data._id,
                            }
                        })
                        .then((response)=>{
                            console.log(response)
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                    
                    if(!data){
                        res.status(400).send('Data is balank ')
                    }else{
                        res.status(200).send(data)
                    }
                })
                .catch((error)=>{
                    console.log(error.message);
                })
                })
                .catch((error)=>{
                    console.log(error.message)
                })
               
}

exports.readData=(req,res)=>{
    TodoDB.find()
    .populate('people')
    
    
            .then((data)=>{
                res.status(200).send(data)
            })
            .catch((error)=>{
                console.log(error.message)
            })
}
