import "./votingarea.css";
import ResponsiveDrawer from "./navbar";
import profile from "./profile.svg";

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

function VotingArea() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    handleDialogClose();
  };

  return (
    <>
      <div className="main">
        <div className="left">
          <ResponsiveDrawer />
        </div>
        <div className="right">
          <h1>Voting area</h1>
          <div className="line"></div>

          <ul>
            <h4>
              <li type="1">President</li>
            </h4>

            <div className="hell">
              <div class="box">
                <img src={profile} />

                <p>Karishma Sinha</p>
                <p>CSE 4th year</p>
                <button type="button" onClick={handleDialogOpen}>
                  Vote
                </button>
              </div>

              <div class="box">
                <img src={profile} />

                <p>Karishma Sinha</p>
                <p>CSE 4th year</p>
                <button type="button" onClick={handleDialogOpen}>
                  Vote
                </button>
              </div>

              <div class="box">
                <img src={profile} />

                <p>Karishma Sinha</p>
                <p>CSE 4th year</p>
                <button type="button" onClick={handleDialogOpen}>
                  Vote
                </button>
              </div>
            </div>

            <h4>
              <li type="1">Vice President</li>
            </h4>

            <div className="hell">
              <div class="box">
                <img src={profile} />

                <p>Karishma Sinha</p>
                <p>CSE 4th year</p>
                <button type="button" onClick={handleDialogOpen}>
                  Vote
                </button>
              </div>

              <div class="box">
                <img src={profile} />

                <p>Karishma Sinha</p>
                <p>CSE 4th year</p>
                <button type="button" onClick={handleDialogOpen}>
                  Vote
                </button>
              </div>

              <div class="box">
                <img src={profile} />

                <p>Karishma Sinha</p>
                <p>CSE 4th year</p>
                <button type="button" onClick={handleDialogOpen}>
                  Vote
                </button>
              </div>
            </div>
          </ul>

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
              Authentication
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{ color: "#4e3b32" }}>
                You will have to answer the below questions before you can cast
                your vote.
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                id="mother"
                name="mother"
                label="What is your mother's date of birth?"
                type="date"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="city"
                name="city"
                label="Which city were you born in?"
                type="text"
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                id="first_school"
                name="first_school"
                label="What is the name of your first school?"
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
      </div>
    </>
  );
}

export { VotingArea };
