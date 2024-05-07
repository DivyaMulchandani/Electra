const mongoose=require('mongoose');
const ApplicantSchema = new mongoose.Schema(

    {
        "Name":{
            type : String,
            required:false
        } ,
        
        "Email": {
           type :String, 
           required : true 
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

        "Position_of_Interest": {
            type : String,
            required :false
        } ,

        "Why_want" : {
            type :  String, 
            required : false
        } ,

        "specific_goal" : {
            type : String,
            required : false
        },
        
        "experience" :{
            type : String,
            required : false
        } ,

        "other_position" :{
            type : String,
            required : false
        },
        "accepted" :{
            type: Boolean, 
            default: false,
            required : false
        }
    }
)

const Applicant = mongoose.model("applicant", ApplicantSchema)

module.exports = Applicant