import "./App.css";
import Button from "@mui/material/Button";
import Footer from "./footer";
import Logo from "./logo";
import { Link } from 'react-router-dom';
function User_login() {
  return (
    <div className="Login">
      <Logo />
      <div>
        <h1 className="font">Login</h1>
        <p>{item}</p>
        <div className="account">
          <h4 className="font">Don't have an account?</h4>

          <Link to={"/signup"} className="link">
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
          />
          <br></br>
          <Link to={'/dashboard'} className='link'>
          <Button>
            <button className="pointer">Login</button>
          </Button>
          </Link>
        </form>

        <Dialog
          open={openDialog}
          onClose={handleDialogClose}
          PaperProps={{
            style: {
              backgroundColor: "#e5ded9", // Background color for the entire dialog
            },
          }}
        >
          <DialogTitle
            style={{
              textAlign: "center",
              color: "#4e3b32",
              fontWeight: "bold",
            }}
          >
            Verification
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ color: "#4e3b32" }}>
              We have sent you a One Time Password on your college email.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="otp"
              name="otp"
              label="Enter OTP"
              type="number"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions style={{ justifyContent: "center" }}>
            <Button
              style={{
                color: "#4e3b32",
                fontWeight: "bolder",
                fontSize: "20px",
              }}
              type="submit"
            >
              Next
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Footer />
    </div>
  );
}

export default User_login;
