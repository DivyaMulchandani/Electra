import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Footer from "./footer";
import Logo from "./logo";
import { Link } from 'react-router-dom';
function User_login() {
  return (
    <div className="Login">
      <Logo/>
      <div>
        <h1 className="font">Login</h1>
        <div className="account">
          <h4 className="font">Don’t have an account?</h4>
          
        <Link to={'/signup'} className='link'>
          <h4 className="font">Sign up</h4>
          </Link>
        </div>

        <form>
          <input
            type="text"
            id="clgname"
            name="clgname"
            placeholder="Enter College Name"
            className="signup_input"
          />
          <br></br>
          <input
            placeholder="Enter password"
            type="password"
            id="pass"
            name="password"
            className="signup_input"
          />
          <br></br>
          <Link to={'/dashboard'} className='link'>
          <Button>
            <button className="pointer">Login</button>
          </Button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default User_login;
