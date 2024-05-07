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
    const [winnerPresident, setWinnerPresident] = useState("");
    const [winnerVicePresident, setWinnerVicePresident] = useState("");
  
    useEffect(() => {
      // Fetch vote counts from local storage
      const storedVoteCounts = localStorage.getItem("voteCounts");
      if (storedVoteCounts) {
        setVoteCounts(JSON.parse(storedVoteCounts));
      }
    }, []);
  
    useEffect(() => {
      const presidentCandidates = {
        president1: "Karishma Sinha",
        president2: "Aarav Sharma",
        president3: "Kavya Patel",
      };
      const vicePresidentCandidates = {
        vicePresident1: "Advait Singh",
        vicePresident2: "Ananya Desai",
        vicePresident3: "Arjun Verma",
      };
  
      // Find the candidate with the highest votes for president
      let maxPresidentVotes = -1;
      let winnerPresidentCandidate = "";
      for (const candidate in presidentCandidates) {
        if (voteCounts[candidate] > maxPresidentVotes) {
          maxPresidentVotes = voteCounts[candidate];
          winnerPresidentCandidate = presidentCandidates[candidate];
        }
      }
      setWinnerPresident(winnerPresidentCandidate);
  
      // Find the candidate with the highest votes for vice president
      let maxVicePresidentVotes = -1;
      let winnerVicePresidentCandidate = "";
      for (const candidate in vicePresidentCandidates) {
        if (voteCounts[candidate] > maxVicePresidentVotes) {
          maxVicePresidentVotes = voteCounts[candidate];
          winnerVicePresidentCandidate = vicePresidentCandidates[candidate];
        }
      }
      setWinnerVicePresident(winnerVicePresidentCandidate);
    }, [voteCounts]);
  
    return (
      <>
        <div className="main">
          <div className="left">
            <ResponsiveDrawer />
          </div>
          <div className="right">
            <h1>RESULT</h1>
            <div className="line"></div>
  
            <div className="result-container">
              <div className="result-item">
                <Typography variant="h6">Winner - President</Typography>
                <Typography variant="body1">{winnerPresident}</Typography>
              </div>
              <div className="result-item">
                <Typography variant="h6">Winner - Vice President</Typography>
                <Typography variant="body1">{winnerVicePresident}</Typography>
              </div>
            </div>
  
            <h3>Elections are not over yet!</h3>
            <h3>Results will be displayed soon.</h3>
          </div>
        </div>
      </>
    );
  }
  
  export { Result };