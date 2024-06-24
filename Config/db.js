const mongoose=require("mongoose");

const connectDb=async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/foodDelivery");
    console.log("Mongodb connected succesfully")
}



module.exports=connectDb