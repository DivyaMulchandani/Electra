import "./myprofile.css";
import Logo from "./logo";
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import { Link } from "react-router-dom";
function MyProfile() {
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
          />
          <br />
          <input
            type="text"
            id="branch"
            name="branch"
            placeholder="Enter Branch Name"
            className="profile_input"
          />
          <br />
          <input
            placeholder="Enter Year"
            type="text"
            id="year"
            name="year"
            className="profile_input"
          />
          <br />
          <input
            placeholder="Enter Date of Birth"
            type="date"
            id="dob"
            name="dob"
            className="profile_input"
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
          <Link to={'/userlogin'} className='link'>
          <button type="button">
            Continue
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default MyProfile;