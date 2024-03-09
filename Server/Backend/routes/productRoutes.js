const express=require("express");
const router=express.Router();

const {getIndividualProduct,postProduct}=require("../controller/productController");
router.post("/product",postProduct);
router.get("/product",getIndividualProduct);
module.exports=router;