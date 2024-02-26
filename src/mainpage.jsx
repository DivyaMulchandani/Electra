import "./App.css";
import * as React from 'react';
import Footer from "./footer";
import Button from "@mui/material/Button";
import logo from "./logo.svg"
import { Link } from 'react-router-dom';

function Mainpage() {
  return (
    <div className="App">
      <div class="main">
        <div id="circle"></div>
          <img class="logo" src={logo} alt="logo"></img>
        <div direction="row" class= "button-group" spacing={2}>
        <Link to={'/userlogin'} className='link'>
          <Button variant="contained" class="button"  >
            User Login
          </Button>
          </Link>
          <Link to={'/adminlogin'} className='link'>
          <Button variant="contained" class="button" >
            Admin Login
          </Button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Mainpage;
