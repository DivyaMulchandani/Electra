import "./App.css";
import * as React from 'react';
import Footer from "./footer";
import Button from "@mui/material/Button";
import * as Navigation from "./navigation";
import logo from "./logo.svg"

function Mainpage() {
  return (
    <div className="App">
      <div class="main">
        <div id="circle"></div>
          <img class="logo" src={logo} alt="logo"></img>
        <div direction="row" class= "button-group" spacing={2}>
          <Button variant="contained" class="button"  >
            User Login
          </Button>
          <Button variant="contained" class="button" >
            Admin Login
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Mainpage;
