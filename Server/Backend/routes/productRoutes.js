const express=require("express");
const router=express.Router();
const {SendOTPVerificationEmail} = require("../controller/UserOTPController");
const UserOTPVerification = require("../models/UserOPT");

const {ApplicantInfoByEmail,PostInfoApplicant} = require("../controller/ApplicantController");

const {getAllProduct,postProduct,checkLoginInfo}=require("../controller/productController");
const {patchCand}=require("../controller/productController");

router.post("/product",postProduct);
router.get("/product",getAllProduct);
router.get("/product/:email",checkLoginInfo);

router.patch("/:email",patchCand);
router.get("/applicant/:email",ApplicantInfoByEmail);
router.post("/applicant",PostInfoApplicant);

router.post('/product/otpverify/:mail', function(req, res) {
  const email = req.params.mail;
  SendOTPVerificationEmail({  email }, res);
});



 

module.exports=router;

