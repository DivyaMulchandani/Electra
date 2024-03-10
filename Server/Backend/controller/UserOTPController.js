require('dotenv').config();
const nodemailer = require('nodemailer');
const UserOTPVerification = require("../models/UserOPT");

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
    },
});

const bcrypt = require("bcrypt");

const SendOTPVerificationEmail = async ({ email }, res) => {
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`; // Generate random OTP number between 1

        // Mail options
        const mailOptions = {
            from: process.env.AUTH_EMAIL,
            to: email,
            subject: "One Time Password Verification - Electra",
            html: `<p> Enter <b>${otp}</b> in the site to verify your account.</p><br/>
                    <p>This code expires in 1 minute</p>`,
        };

        // Hash the OTP
        const saltRounds = 10;
        const hashedOTP = await bcrypt.hash(otp, saltRounds);

        const newOTPVerification = new UserOTPVerification({
            // userID: ,
            otp: hashedOTP,
            createdAt: Date.now(),
            expiresAt: new Date(Date.now() + 60 * 1000), // Expire after 1 minute
        });

        // Save the recorded OTP
        await newOTPVerification.save();

        // Send the email
        transporter.sendMail(mailOptions, (err, info) => {
            if (!err) {
                console.log('Email sent');
            } else {
                console.log(`Error Occurred while sending Email: ${err}`);
            }
        });

        res.json({
            status: "Pending",
            message: "Verification OTP email sent",
            data: {
                // userID: ,
                email,
            }
        });
    } catch (error) {
        console.log(error)
        res.json({
            status: "Failed",
            message: error.message,
        });
    }
}

module.exports = { SendOTPVerificationEmail };
