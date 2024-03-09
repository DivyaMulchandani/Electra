const express=require( 'express');
require('dotenv').config();
const cors=require("cors");
const port=process.env.PORT || 2111;
const app=express();
const productRoute=require("./routes/productRoutes.js")
const connectDb=require("./config/db.js");
connectDb();
app.use(cors())
app.use(express.json());


app.listen(port ,()=>
{
    console.log(`Server is running on ${port}`);
})

app.use("/api",productRoute)
