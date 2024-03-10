import { useState } from 'react';
import './App.css'
import Logo from "./logo";
import axios from "axios"

import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

function Signup() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setconPassword] = useState('')

    function postUser() {
        const userDetails = {
            Name : name,
            Email : email,
            Password : password,
            ConfirmPassword : conpassword
        }
        var last = "@nuv.ac.in"
        var mail = email.substring(email.length-10, email.length)
        if (mail == last){
            if(conpassword!==password){
                alert("Passwords do not match")
            }else{
            axios.post("http://localhost:2111/api/product", userDetails)
            .then((res) => {console.log(res.data) 
                }
            )
            .catch(err=>console.log(err));
        }
        }else {
            alert("Please enter your college email id")
        }   
    }

  return (

    <div className='signup'>
        <Logo/>
        <div>
            <h1 className='font'>SIGN UP</h1>
            <div className='account'>
                <h4 className='font'>Already have an account?</h4>
                <h4 className='font'>login?</h4>
            </div>
            <form action="/action_page.php">
                <input type="text" id="name" name="name" placeholder="Enter Name" className='signup_input'
                onChange={(e) => setName(e.target.value)}
                / ><br></br>
                <input type="text" id="clgname" name="clgname" placeholder="Enter College Name" className='signup_input'
                onChange={(e) => setEmail(e.target.value)}/><br></br>
                <input placeholder='Enter password' type="password" id="pass" name="password" className='signup_input'
                 onChange={(e) => setPassword(e.target.value)}/><br></br>
                <input placeholder="Enter Confirm Password"  type="password" id="cpass" name="confirmpassword" className='signup_input'
                                 onChange={(e) => setconPassword(e.target.value)}/><br></br>
                <Link to={'/myprofile'} className='link'><button onClick={() => postUser()}>Sign up</button></Link>
            </form>
        </div>
    </div>
      );
}

export default Signup;