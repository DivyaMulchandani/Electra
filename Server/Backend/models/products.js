const mongoose=require('mongoose');
const candidateSchema = new mongoose.Schema(

    {
        "Name":{
            type : String,
            required:false
        } ,
        
        "Email": {
           type :String, 
           unique : true,
           required : true 
        } ,

        "Password" : { 
            type :String,
            required: true
        } ,

        "ConfirmPassword" : {
            type : String,
            required: false
        } ,

        "School": {
            type : String,
            required:false
        } ,

        "Branch": {
            type : String,
            required:false
        } ,
        "Year": {
            type : String,
            required:false
        } ,

        "Gender" : {
            type : String,
            required:false
        } ,

        "DOB": {
            type : String,
            required:false
        } ,

        "Mother's_DOB": {
            type : String,
            required :false
        } ,

        "City" : {
            type :  String, 
            required : false
        } ,

        "first_school" : {
            type : String,
            required : false
        }
    }
)

const Candidates = mongoose.model("candidate", candidateSchema)

module.exports = Candidates