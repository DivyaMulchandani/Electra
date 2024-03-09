const express=require("express");
const router=express.Router();

const {getIndividualProduct,postProduct,checkLoginInfo}=require("../controller/productController");
router.post("/product",postProduct);
router.get("/product",getIndividualProduct);
router.get("/product/:email",checkLoginInfo);
module.exports=router;