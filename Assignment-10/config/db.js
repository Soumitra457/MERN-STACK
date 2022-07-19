const mongoose = require('mongoose');

exports.dbConn = ()=>{
    const dbURL = "mongodb+srv://soumitrabehera:cjpmxs3UfKovUGRx@cluster0.gggfh.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log("Database Connected");
    }).catch((err)=>console.log(err));
}