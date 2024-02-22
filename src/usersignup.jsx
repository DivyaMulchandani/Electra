import "./App.css";
import * as React from 'react';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Footer from "./footer";


function User_signup() {
  return (
    <div className="App">
      <div id="logo"></div>
    <div>
        <p id="signup">SIGN UP</p>
        <p>Already have an acc? LOGIN</p>
        <div>
        <div class="input">Enter Name: </div>
      <div class="input" id="input2">Enter Clg Email: </div>
      <div class="input" id="input3">Enter Password: </div>
      <div class="input" id="input4">Conform Password: </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default User_signup;
