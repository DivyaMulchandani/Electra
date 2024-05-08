import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import ResponsiveDrawer from "./navbar2";
import "./changephase.css";

function Phase() {
  const [selectedPhase, setSelectedPhase] = useState("Registration Open"); // default value is 'phase1'

  const handleChange = (event) => {
    setSelectedPhase(event.target.value);
  };
  localStorage.setItem("Phase", selectedPhase);
  console.log(localStorage);

  return (
    <>
      <div className="main">
        <div className="left">
          <ResponsiveDrawer />
        </div>
        <div className="right">
          <h1>CHANGE PHASE</h1>
          <div className="line"></div>

          <h3>Current Phase : {selectedPhase}</h3>
          <div className="select-container">
            <form>
              <select
                name="languages"
                id="lang"
                value={selectedPhase}
                onChange={handleChange}
              >
                <option value="Voting Open">Voting Open</option>
                <option value="Voting Closed">Voting Closed</option>
                <option value="Registration Open">Registration Open</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export { Phase };
