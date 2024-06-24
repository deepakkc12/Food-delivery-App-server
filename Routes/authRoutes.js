const express=require("express");
const { requestOtp, otpVerification } = require("../Controllers/Auth.controller");
const router=express.Router();

// Otp generation and verification
 router.post("/request-otp",requestOtp);
 
 router.post("/verify-otp",otpVerification);

//  Registration
 router.post("/register/complete");




 module.exports=router