import "./App.css";
import * as React from 'react';
import Footer from "./footer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as Navigation from "navigation";

function Mainpage() {
  return (
    <div className="App">
      <div id="main">
        <div id="circle"></div>
        <div id="logo"></div>
        <Stack direction="row" class= "button-group" spacing={2}>
          <Button variant="contained" class="button" onClick={Navigation.navigateToUserSignup} >
            User Login
          </Button>
          <Button variant="contained" class="button" >
            Admin Login
          </Button>
        </Stack>
      </div>
      <Footer/>
    </div>
  );
}

export default Mainpage;
