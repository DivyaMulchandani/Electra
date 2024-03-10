import "./myprofile.css";
import Logo from "./logo";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

function MyProfile() {

  const [SchoolName, setSchoolName] = useState('')
  const [BranchName, setBranchName] = useState('')
  const [Year, setYear] = useState('')
  const [DOB, setDOB] = useState('')
  let navigate = useNavigate();



  function postUser(e) {
      e.preventDefault()

      const userDetails = {
          School: SchoolName,
          Branch: BranchName,
          Year: Year,
          DOB: DOB
      }
      





  }


  return (
    <div className="myprofile">
      <Logo />
      <div>
        <h1 className="font">Enter Your Personal Details</h1>
        <br />
        <form>
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
            onChange={(e) => setDOB(e.target.value)}
          />
          <br />
          <div className="profile_input radio-container">
            Gender:
            <label>
              <input type="radio" name="gender" value="male" />
              Male
            </label>

            <label>
              <input type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
          <br />
          <button type="button" onClick={(e)=>postUser(e)}>
            Continue
          </button>
          
        </form>
      </div>
    </div>
  );
}

export default MyProfile;