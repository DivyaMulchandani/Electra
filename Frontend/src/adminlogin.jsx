import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Footer from "./footer";
import Logo from "./logo";

import { Link } from "react-router-dom";

function Admin_login() {
  return (
    <div className="Login">
      <Logo />
      <div>
        <h1 className="font">ADMIN LOGIN</h1>

        <form>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter College Email"
            className="signup_input"
          />
          <br></br>
          <input
            placeholder="Enter Password"
            type="password"
            id="pass"
            name="password"
            className="signup_input"
          />
          <br></br>
          <Link to={"/enrolled"} className="link">
            <button className="button1">Login</button>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Admin_login;
