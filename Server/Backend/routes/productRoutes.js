const express=require("express");
const router=express.Router();
const bcrypt = require("bcrypt"); // Import bcrypt for OTP verification


const {SendOTPVerificationEmail} = require("../controller/UserOTPController");
const UserOTPVerification = require("../models/UserOPT");

const {getIndividualProduct,postProduct,checkLoginInfo}=require("../controller/productController");
const {patchCand}=require("../controller/productController");

router.post("/product",postProduct);
router.get("/product",getIndividualProduct);
router.get("/product/:email",checkLoginInfo);

router.patch("/:email",patchCand);

router.post('/product/otpverify/:mail', function(req, res) {
  const email = req.params.mail;
  SendOTPVerificationEmail({  email }, res);
  // Assuming you have user data available in req.user
});


router.post("/verifyOTP/:mail",async(req,res)=>{
  try{
    let { mail , otp} = req.body;
    if(!mail || !otp){
      throw Error ("Empty otp details are not allowed");
    }else{
      const UserOTPVerificationRecords = await UserOTPVerification.find({_id : mail});
      if (UserOTPVerificationRecords.length <= 0) {
        throw new Error("account record doesnot exist or has been verified already")
            
      }else{
        const { expiresAt } = UserOTPVerificationRecords[0];
        const hashedOTP = UserOTPVerificationRecords[0].otp;
        if(expiresAt < Date.now()){
          await  UserOTPVerification.deleteMany({mail});
          throw new Error("Code has exprired.")
      }else{
        const validOTP = await bcrypt.compare(otp,hashedOTP);
        // console.log("else console")
        if (!validOTP) {
          throw new Error('Invalid OTP');
        }else {
          //success
          await UserOTPVerification.updateOne({_id:mail},{verified:true});
          await UserOTPVerification.deleteMany({mail});
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

