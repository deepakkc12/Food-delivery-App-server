const Otp=require("../Models/otp")

const createOtp=async (contact)=>{
const otp=Math.floor(100000 + Math.random() * 900000).toString();
   await Otp.create({contact,otp})
}

const verifyOtp=async (contact,otp)=>{
   const otpRecord= await Otp.findOne({contact,otp});
   console.log(otpRecord);
return otpRecord!==null
};

module.exports={createOtp,verifyOtp}