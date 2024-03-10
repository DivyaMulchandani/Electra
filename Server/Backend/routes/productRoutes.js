const express=require("express");
const router=express.Router();
const bcrypt = require("bcrypt"); // Import bcrypt for OTP verification



const {getIndividualProduct,postProduct,checkLoginInfo}=require("../controller/productController");
// const UserOTPVerification = require("./../models/UserOPT");
const {SendOTPVerificationEmail} = require("../controller/UserOTPController");
const UserOTPVerification = require("../models/UserOPT");

const {getIndividualProduct,postProduct,checkLoginInfo,patchCand}=require("../controller/productController");
// const {patchCand}=require("../controller/productController");


router.post("/product",postProduct);
router.get("/product",getIndividualProduct);
router.get("/product/:email",checkLoginInfo);

router.patch("/:email",patchCand);

router.post('/product/otpverify/:mail', function(req, res) {
  const email = req.params.mail;
  SendOTPVerificationEmail({ email }, res);
  
  // Assuming you have user data available in req.user
});



router.post("/verifyOTP",async(req,res)=>{
  try{
    let { userId , otp} = req.body;
    if(!userId || !otp){
      throw Error ("Empty otp details are not allowed");
    }else{
      const UserOTPVerificationRecords = await UserOTPVerification.find({
        userId
      });
      if (UserOTPVerificationRecords.length <= 0) {
        return res.status(404).json({ status: "Failed", message: "No OTP record found for this user" });
            
      }else{
        const { expiresAt } = UserOTPVerificationRecords[0];
        const hashedOTP = UserOTPVerificationRecords[0].otp;

        if(expiresAt < Date.now()){
          await  UserOTPVerification.deleteMany({userId});
          throw new Error("Code has exprired.")
      }else{
        const validOTP = await bcrypt.compare(otp,hashedOTP);

        if (!validOTP) {
          throw new Error('Invalid OTP');
        }else {
          //success
          await User.updateOne({_id:userId},{verified:true});
          await UserOTPVerification.deleteMany({userId});
          res.json({
            status:"Verified",
            message : 'You have been successfully verified your'
          });
        }
      }
    }
  }
  } catch(error){
    res.json({
      status: "Failed",
      message: error.message
    })
  }
})

 

module.exports=router;

