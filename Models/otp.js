const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
contact:{
    type:String,
    required:true
},
  otp: {
    type: String,
    required: true,
  },
  createdAt:{
    type:Date,
    default:Date.now,
    expires:120 
  }

});

module.exports=mongoose.model("otp",otpSchema);
