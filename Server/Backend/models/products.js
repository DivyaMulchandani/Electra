const candidateSchema = new mangoose.Schema(

    {
        "Name":{
            type : String,
            required:true
        } ,
        
        "Email": {
           type : Email,
           required:true
        } ,

        "Password" : { 
            type :String,
            required: true
        } ,

        "ConfirmPassword" : {
            type : String,
            required: true
        } ,

        "School": {
            type : String,
            required:true
        } ,

        "Branch": {
            type : String,
            required:true
        } ,

        "Gender" : {
            type : String,
            required:true
        } ,

        "DOB": {
            type : Date,
            required:true
        } ,

        "Mother's_DOB": {
            type : Date,
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