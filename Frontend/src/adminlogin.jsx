import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Footer from "./footer";
import Logo from "./logo";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Admin_login() {
  const admin_email = "m.divya12@outlook.com";
  const admin_pass = "98765";
  let navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const LoginAdmin = () => {
    if (userEmail == admin_email && userPassword == admin_pass) {
      let path = "/enrolled";
      navigate(path);
    }
    else{
      alert("Wrong  Email or Password")
    }
  };

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
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <br></br>
          <input
            placeholder="Enter Password"
            type="password"
            id="pass"
            name="password"
            className="signup_input"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <br></br>
          <button className="button1" onClick={() => LoginAdmin()}>
            Login
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Admin_login;
