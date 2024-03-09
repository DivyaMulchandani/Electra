import "./App.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Footer from "./footer";
import Logo from "./logo";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useState , useEffect } from "react";
function User_login() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [item, setItem] = useState([])
  useEffect(() => {
    axios.get("http://localhost:2111/api/product/:Email")
      .then(response => setItem(response.data))
      .catch(error => console.error(error));
  }, []);
  function handleSubmit() {
      const userDetails = {
          Email : email,
          Password : password,
      }
          // axios.get("http://localhost:2111/api/product")
          // .then((res) => {setItem(res.data)})
          // .catch(err=>console.log(err));

          
  }



  return (
    <div className="Login">
      <Logo/>
      <div>
        <h1 className="font">Login</h1>
        <p>{item}</p>
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
            placeholder="Enter Email"
            className="signup_input"
            onChange={(e) => setEmail(e.target.value)}/><br></br>
          <input
            placeholder="Enter password"
            type="password"
            id="pass"
            name="password"
            className="signup_input"
            onChange={(e) => setPassword(e.target.value)}/><br></br>
          {/* <Link to={'/dashboard'} className='link'> */}
          <Button>
            <button className="pointer"  onClick={() => handleSubmit()}>Login</button>
          </Button>
          {/* </Link> */}
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default User_login;
