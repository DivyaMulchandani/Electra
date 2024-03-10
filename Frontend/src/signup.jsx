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
    let navigate = useNavigate();



    function postUser(e) {
        e.preventDefault()

        const userDetails = {
            Name: name,
            Email: email,
            Password: password,
            ConfirmPassword: conpassword
        }
        var last = "@nuv.ac.in"
        var mail = email.substring(email.length - 10, email.length)



        if (name === "" || email === "" || password === "" || conpassword === " ") {
            alert("Enter all the details")
        }
        else {
            if (mail == last) {
                if (conpassword !== password) {
                    alert("Passwords do not match")
                }

                else {
                    axios.post("http://localhost:2111/api/product", userDetails)
                        .then((res) => {
                            console.log(res.data)
                             let path = '/myprofile';
                             navigate(path);
                        }
                        )
                        .catch(err => console.log(err));
                }
            }
            else {
                alert("Please enter valid email id")
            }


        }





    }

    return (

        <div className='signup'>
            <Logo />
            <div>
                <h1 className='font'>SIGN UP</h1>
                <div className='account'>
                    <h4 className='font'>Already have an account?</h4>
                    <Link to={'/userlogin'} className='link'><h4 className='font'>Login here</h4></Link>
                </div>
                <form >
                    <input type="text" id="name" name="name" placeholder="Enter Name" className='signup_input'
                        onChange={(e) => setName(e.target.value)}
                    /><br></br>
                    <input type="text" id="clgname" name="clgname" placeholder="Enter College Email" className='signup_input'
                        onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder='Enter password' type="password" id="pass" name="password" className='signup_input'
                        onChange={(e) => setPassword(e.target.value)} /><br></br>
                    <input placeholder="Enter Confirm Password" type="password" id="cpass" name="confirmpassword" className='signup_input'
                        onChange={(e) => setconPassword(e.target.value)} /><br></br>
                    <button onClick={(e) => postUser(e)}>Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;