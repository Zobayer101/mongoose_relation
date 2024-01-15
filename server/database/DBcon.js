
const mongoose=require('mongoose');

const DBconnection= async ()=>{
    try{
        const con = await mongoose.connect(process.env.DBURL);
        console.log(`Server on ${con.connection.host}`)
    }catch(error){
        console.log(error.message);
        process.exit(1);
    }
}


module.exports=DBconnection;