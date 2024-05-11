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
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(true);
  const [phase, setPhase] = useState("");

  useEffect(() => {
    // Fetch vote counts from local storage
    const storedVoteCounts = localStorage.getItem("voteCounts");
    setPhase(localStorage.getItem("Phase"));

    if (storedVoteCounts) {
      setVoteCounts(JSON.parse(storedVoteCounts));
    }

    if (phase === "Voting Open") {
      setIsVisible1(true);
      setIsVisible(false);
      setIsVisible2(false);
    } else if (phase === "Voting Closed") {
      setIsVisible1(false);
      setIsVisible(true);
      setIsVisible2(false);
    } else {
      setIsVisible1(false);
      setIsVisible(false);
      setIsVisible2(true);
    }
  }, [phase]);

  useEffect(() => {
    const presidentCandidates = {
      president1: "Poojan Prajapati",
      president2: "Rahil Shah",
      president3: "Medhansh Patel",
    };
    const vicePresidentCandidates = {
      vicePresident1: "Kush Rana",
      vicePresident2: "Dev Vaghela",
      vicePresident3: "Jasmeenkaur Pabla",
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

          {isVisible && (
            <div className="result-container">
              <div className="result-item">
                <Typography variant="h6">Winner - President</Typography>
                <Typography variant="body1">{winnerPresident}</Typography>
              </div>
              <div className="result-item">
                <Typography variant="h6">
                  Winner - Vice President
                </Typography>
                <Typography variant="body1">
                  {winnerVicePresident}
                </Typography>
              </div>
            </div>
          )}

          {isVisible1 && (
            <div className="voting open">
              <h3>Elections are not over yet!</h3>
              <h3>Results will be displayed soon.</h3>
            </div>
          )}

          {isVisible2 && (
            <div className="registration">
              <h3>Registration is in progress.</h3>
              <h3>Please return later to cast your vote.</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export { Result };
