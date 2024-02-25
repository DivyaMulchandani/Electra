import './App.css'
import Logo from "./logo";
function Signup() {
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
                <input type="text" id="name" name="name" placeholder="Enter Name" className='signup_input'/><br></br>
                <input type="text" id="clgname" name="clgname" placeholder="Enter College Name" className='signup_input'/><br></br>
                <input placeholder='Enter password' type="password" id="pass" name="password" className='signup_input'/><br></br>
                <input placeholder="Enter Confirm Password"  type="password" id="cpass" name="confirmpassword" className='signup_input'/><br></br>
                <button>Sign up</button>
            </form>
        </div>
    </div>
      );
}

export default Signup;
