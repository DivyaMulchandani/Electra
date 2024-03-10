const mongoose=require('mongoose');

const UserOTPSchema = new mongoose.Schema(

    {
        "mail": {
           type :String
        } ,

        "otp" :{
            type: String,
            required:false
        },

        "CreatedTime": {
            type: Date,
            default:Date.now()
        },
      
        "ExpireTime": {
            type:Date
        }
    }
)

const UserOTPVerification = mongoose.model('user',
    UserOTPSchema
);

module.exports = UserOTPVerification