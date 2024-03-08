const mongoose=require('mongoose');

const url=process.env.Mongo_Url;
const connectDb=async()=>{
    try{
        await mongoose.connect(url, 
            {
                useNewUrlParser:true,
                useUnifiedTopology: true
            })
            console.log("Connection Success");
    }catch(err){
        console.log("Connection UnSuccess");
    }
}

module.exports=connectDb;