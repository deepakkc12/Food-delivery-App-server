const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true,
        unique:true
    },
    pincode:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("user",userSchema);
