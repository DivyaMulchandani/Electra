import "./App.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Footer from "./footer";
import Logo from "./logo";

function User_login() {
  return (
    <div className="Login">
      <Logo/>
      <div>
        <h1 className="font">Login</h1>
        <div className="account">
          <h4 className="font">Don’t have an account?</h4>
          <h4 className="font">Sign up</h4>
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
          <Button>
            <button>Sign up</button>
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default User_login;
