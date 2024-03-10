const express=require("express");
const router=express.Router();

const {getIndividualProduct,postProduct,checkLoginInfo}=require("../controller/productController");
// const UserOTPVerification = require("./../models/UserOPT");
const {SendOTPVerificationEmail} = require("../controller/UserOTPController")

router.post("/product",postProduct);
router.get("/product",getIndividualProduct);
router.get("/product/:email",checkLoginInfo);


router.post('/product/otpverify/:mail', function(req, res) {
  const email = req.params.mail;
  SendOTPVerificationEmail({ email }, res); // Assuming you have user data available in req.user
});
module.exports=router;