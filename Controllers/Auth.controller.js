const user=require("../Models/user");
const { createOtp, verifyOtp } = require("../Services/otpService");

const requestOtp=async(req,res)=>{
    const {contact}=req.body;
    await createOtp(contact);
    res.send({success:true,message:"succesfully created"})
};

const otpVerification=async(req,res)=>{
    const {contact,otp}=req.body;
    const isOtpValid=await verifyOtp(contact,otp);
    if(isOtpValid){
        res.send({success:true,message:"Otp verified"})
    }
    else{
        res.send({success:false,message:"Otp verification failed"})
    }
}

module.exports={requestOtp,otpVerification};