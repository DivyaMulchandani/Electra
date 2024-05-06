import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import "./result.css";
import ResponsiveDrawer from "./navbar";

function Result() {
  const [voteCounts, setVoteCounts] = useState({
    president1: 0,
    president2: 0,
    president3: 0,
    vicePresident1: 0,
    vicePresident2: 0,
    vicePresident3: 0,
  });

  useEffect(() => {
    // Fetch vote counts from local storage
    const storedVoteCounts = localStorage.getItem("voteCounts");
    if (storedVoteCounts) {
      setVoteCounts(JSON.parse(storedVoteCounts));
    }
  }, []);

  return (
    <>
      <div className="main">
        <div className="left">
          <ResponsiveDrawer />
        </div>
        <div className="right">
          <h1>RESULT</h1>
          <div className="line"></div>

          <p className="result-item">
            <span>President 1:   </span>
            <span>{voteCounts.president1}</span>
          </p>
          <p className="result-item">
            <span>President 2:   </span>
            <span>{voteCounts.president2}</span>
          </p>
          <p className="result-item">
            <span>President 3:   </span>
            <span>{voteCounts.president3}</span>
          </p>
          <p className="result-item">
            <span>Vice President 1:   </span>
            <span>{voteCounts.vicePresident1}</span>
          </p>
          <p className="result-item">
            <span>Vice President 2:   </span>
            <span>{voteCounts.vicePresident2}</span>
          </p>
          <p className="result-item">
            <span>Vice President 3:   </span>
            <span>{voteCounts.vicePresident3}</span>
          </p>

          <h3>Elections are not over yet!</h3>
          <h3>Results will be displayed soon.</h3>
        </div>
      </div>
    </>
  );
}

export { Result };