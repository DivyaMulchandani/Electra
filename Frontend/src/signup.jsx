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

    const [SchoolName, setSchoolName] = useState('')
    const [BranchName, setBranchName] = useState('')
    const [Year, setYear] = useState('')
    const [DOB, setDOB] = useState('')
    const [Gender, setGender] = useState('')


    let navigate = useNavigate();


    const [isVisible, setIsVisible] = useState(true);
    const [isVisible1, setIsVisible1] = useState(false);
    
 
    const toggleVisibility = () => {
        setIsVisible1(!isVisible1);
        setIsVisible(!isVisible);      };
    



    function postUser(e) {
        e.preventDefault()

        const userDetails = {
            Name: name,
            Email: email,
            Password: password,
            ConfirmPassword: conpassword,
            School: SchoolName,
      Branch: BranchName,
      Year: Year,
      DOB: DOB,
      Gender:Gender
        }
        var last = "@nuv.ac.in"
        var mail = email.substring(email.length - 10, email.length)



        if (name === "" || email === "" || password === "" || conpassword === " " || SchoolName ==="" || BranchName===""|| Year===""|| DOB==="" || Gender==="") {
            alert("Enter all the details")
        }
        else {
            if (mail == last) {
                if (conpassword !== password) {
                    alert("Passwords do not match")
                }

                else {
                    axios.post("http://localhost:2111/api/product", userDetails)
                        .then((response) => {
                            localStorage.setItem("user", JSON.stringify(response.data));
                            console.log(response.data)
                            let path = '/userlogin';
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
                    {isVisible && (<div classname="form1" >
                        <input type="text" id="name" name="name" placeholder="Enter Name" className='signup_input'
                            onChange={(e) => setName(e.target.value)}
                        /><br></br>
                        <input type="text" id="clgname" name="clgname" placeholder="Enter College Email" className='signup_input'
                            onChange={(e) => setEmail(e.target.value)} /><br></br>
                        <input placeholder='Enter password' type="password" id="pass" name="password" className='signup_input'
                            onChange={(e) => setPassword(e.target.value)} /><br></br>
                        <input placeholder="Enter Confirm Password" type="password" id="cpass" name="confirmpassword" className='signup_input'
                            onChange={(e) => setconPassword(e.target.value)} /><br></br>
                        <button  onClick={toggleVisibility}>Sign up</button>
                    </div>)}

                    {isVisible1 && ( <div className='form2' >

                        <input
                            type="text"
                            id="school"
                            name="school"
                            placeholder="Enter School Name"
                            className="profile_input"
                            onChange={(e) => setSchoolName(e.target.value)}

                        />
                        <br />
                        <input
                            type="text"
                            id="branch"
                            name="branch"
                            placeholder="Enter Branch Name"
                            className="profile_input"
                            onChange={(e) => setBranchName(e.target.value)}

                        />
                        <br />
                        <input
                            placeholder="Enter Year"
                            type="text"
                            id="year"
                            name="year"
                            className="profile_input"
                            onChange={(e) => setYear(e.target.value)}

                        />
                        <br />
                        <input
                            placeholder="Enter Date of Birth"
                            type="date"
                            id="dob"
                            name="dob"
                            className="profile_input"
                            onChange={(e) => setDOB(e.target.value)} />
                        <br />

                        <input
                            placeholder="Enter Gender"
                            type="text"
                            id="gen"
                            name="gen"
                            onChange={(e) => setGender(e.target.value)}
                            className="profile_input"
                        />
                        <br />




                        <button type="button" onClick={(e) => postUser(e)}>
                            Continue
                        </button>
                    </div> )}







                </form>
            </div>
        </div>


    );
}

export default Signup;