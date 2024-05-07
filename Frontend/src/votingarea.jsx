import React, { useState, useEffect } from "react";
import SimpleStorage from "./contracts/SimpleStorage.json";
import Web3 from "web3";
import "./votingarea.css";
import ResponsiveDrawer from "./navbar";
import profile from "./profile.svg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function VotingArea({ voteCounts, setVoteCounts }) {

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [storedValue, setStoredValue] = useState(0);

  const [voteCountPresident1, setVoteCountPresident1] = useState(0);
  const [voteCountPresident2, setVoteCountPresident2] = useState(0);
  const [voteCountPresident3, setVoteCountPresident3] = useState(0);
  const [voteCountVicePresident1, setVoteCountVicePresident1] = useState(0);
  const [voteCountVicePresident2, setVoteCountVicePresident2] = useState(0);
  const [voteCountVicePresident3, setVoteCountVicePresident3] = useState(0);

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isViceButtonClicked, setIsViceButtonClicked] = useState(false);

  useEffect(() => {
    console.log(isButtonClicked);
  }, [isButtonClicked]);

  const id = 0;
  const [openDialog, setOpenDialog] = useState(false);
  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [voteCount, setVoteCount] = useState([]);

  useEffect(() => {
    const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");

    async function setupContract() {
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorage.networks[networkId];
      const contract = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork.address
      );

      const instance = new web3.eth.Contract(
        SimpleStorage.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(instance);

      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);

      setState({ web3: web3, contract: contract });

      const response1 = await instance.methods.getter(1).call();
      setVoteCountPresident1(response1);

      const response2 = await instance.methods.getter(2).call();
      setVoteCountPresident2(response2);

      const response3 = await instance.methods.getter(3).call();
      setVoteCountPresident3(response3);

      const response4 = await instance.methods.getter(4).call();
      setVoteCountVicePresident1(response4);

      const response5 = await instance.methods.getter(5).call();
      setVoteCountVicePresident2(response5);

      const response6 = await instance.methods.getter(6).call();
      setVoteCountVicePresident3(response6);
    }

    setupContract();
  }, []);

  useEffect(() => {
    const updatedVoteCounts = {
      president1: voteCountPresident1.toString(),
      president2: voteCountPresident2.toString(),
      president3: voteCountPresident3.toString(),
      vicePresident1: voteCountVicePresident1.toString(),
      vicePresident2: voteCountVicePresident2.toString(),
      vicePresident3: voteCountVicePresident3.toString(),
    };
    localStorage.setItem("voteCounts", JSON.stringify(updatedVoteCounts));
  }, [voteCountPresident1, voteCountPresident2, voteCountPresident3, voteCountVicePresident1, voteCountVicePresident2, voteCountVicePresident3]);


  async function handleVoteClick(id) {
    const { contract } = state;
    console.log(id);
    
    try {
      // Increment the vote count based on the position
      let updatedCount;

      const senderAddress = "0x4f49838e20802E99eeCD32bAA535dAcDDeb4105a";

      switch (id) {
        case 1: // President
          if (!isButtonClicked) {
            await contract.methods.setter(voteCountPresident1, 1).send({
              from: senderAddress,
            });

            const updatedValue = await contract.methods.getter(1).call();
            const val = Number(updatedValue);
            console.log("hell");
            setVoteCountPresident1(val);
            console.log(val);

            setIsButtonClicked(true);
          }
          break;
        case 2:
          console.log(isButtonClicked);
          if (!isButtonClicked) {
            await contract.methods.setter(voteCountPresident2, 2).send({
              from: senderAddress,
            });

            const updatedValue = await contract.methods.getter(2).call();
            const val = Number(updatedValue);
            console.log("hell");
            setVoteCountPresident2(val);
            console.log(val);

            setIsButtonClicked(true);
          }
          break;
        case 3:
          if (!isButtonClicked) {
            await contract.methods.setter(voteCountPresident3, 3).send({
              from: senderAddress,
            });

            const updatedValue = await contract.methods.getter(3).call();
            const val = Number(updatedValue);
            console.log("hell");
            setVoteCountPresident3(val);
            console.log(val);

            setIsButtonClicked(true);
          }
          break;
        case 4:
          if (!isViceButtonClicked) {
            await contract.methods.setter(voteCountVicePresident1, 4).send({
              from: senderAddress,
            });

            const updatedValue = await contract.methods.getter(4).call();
            const val = Number(updatedValue);
            console.log("hell");
            setVoteCountVicePresident1(val);
            console.log(val);

            setIsViceButtonClicked(true);
          }
          break;
        case 5:
          if (!isViceButtonClicked) {
            await contract.methods.setter(voteCountVicePresident2, 5).send({
              from: senderAddress,
            });

            const updatedValue = await contract.methods.getter(5).call();
            const val = Number(updatedValue);
            console.log("hell");
            setVoteCountVicePresident2(val);
            console.log(val);

            setIsViceButtonClicked(true);
          }
          break;
        case 6:
          if (!isViceButtonClicked) {
            await contract.methods.setter(voteCountVicePresident3, 6).send({
              from: senderAddress,
            });

            const updatedValue = await contract.methods.getter(6).call();
            console.log(updatedValue,"updated value");
            const val = Number(updatedValue);
            console.log("hell");
            setVoteCountVicePresident3(val);
            console.log(val);

            setIsViceButtonClicked(true);
          }
          break;

        default:
          break;
      }
      console.log("Transaction successful");
      console.log("Updated count:", updatedCount);
      // Open the dialog after voting
      setOpenDialog(true);
    } catch (error) {
      console.error("Error while voting:", error);
    }
  }
  console.log(isButtonClicked);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogSubmit = async (event) => {
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
              <div className="box">
                <img src={profile} alt="Profile" />
                <p>Karishma Sinha</p>
                <p>CSE 4th year</p>
                <p>{voteCountPresident1}</p>
                <button
                  onClick={() => {
                    handleVoteClick(1);
                  }}
                  disabled={isButtonClicked}
                >
                  Vote
                </button>
              </div>

              <div className="box">
                <img src={profile} />

                <p>Aarav Sharma</p>
                <p>ME 4th year</p>
                <p>{voteCountPresident2}</p>
                <button
                  onClick={() => {
                    handleVoteClick(2);
                  }}
                  disabled={isButtonClicked}
                >
                  Vote
                </button>
              </div>

              <div className="box">
                <img src={profile} />

                <p>Kavya Patel</p>
                <p>CSE 3rd year</p>
                <p>{voteCountPresident3}</p>
                <button
                  onClick={() => {
                    handleVoteClick(3);
                  }}
                  disabled={isButtonClicked}
                >
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

                <p>Advait Singh</p>
                <p>CE 3rd year</p>
                <p>{voteCountVicePresident1}</p>
                <button
                  onClick={() => {
                    handleVoteClick(4);
                  }}
                  disabled={isViceButtonClicked}
                >
                  Vote
                </button>
              </div>

              <div className="box">
                <img src={profile} />

                <p>Ananya Desai</p>
                <p>CSE 4th year</p>
                <p>{voteCountVicePresident2}</p>
                <button
                  onClick={() => {
                    handleVoteClick(5);
                  }}
                  disabled={isViceButtonClicked}
                >
                  Vote
                </button>
              </div>

              <div className="box">
                <img src={profile} />

                <p>Arjun Verma</p>
                <p>BCA 3rd year</p>
                <p>{voteCountVicePresident3}</p>
                <button
                  onClick={() => {
                    handleVoteClick(6);
                  }}
                  disabled={isViceButtonClicked}
                >
                  Vote
                </button>
              </div>
            </div>
          </ul>

          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Thanks for voting!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Your vote has been recorded successfully.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpenDialog(false)}>OK</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
}

export { VotingArea };