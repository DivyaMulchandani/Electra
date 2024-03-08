const express=require( 'express');
require('dotenv').config();
const port=process.env.PORT || 2111;
const app=express();
const connectDb=require("./config/db.js");
connectDb();
app.use(express.json());


app.listen(port ,()=>
{
    console.log(`Server is running on ${port}`);
})
