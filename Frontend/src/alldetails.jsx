import React, { useEffect } from "react";
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './navbar';
import "./alldetails.css";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import axios from "axios";
import { useState } from "react";

function Alldetails() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState([]);
    const fetchInfo = () => {
      console.log(email)
      axios.get(`http://localhost:2111/api/applicant/d/${email}`)
      .then((res)=>{
        console.log(res.data[0]) 
        const data=res.data;
        setDetails(data);
       
        

      })
      .catch((error) => console.error("Error fetching data:", error));
      



    };


    useEffect (()=>{
      const StoredUser=localStorage.getItem("email");
      const user = JSON.parse(StoredUser);
      setEmail(user);
      fetchInfo();

    },[email]);

    
  




    // Sample data for the enrolled candidates
    const studentDetails = {
        schoolName:"School of engineering and technology",
        branchName:"Computer Science engineering",
        year:"3rd year",
        dateOfBirth:"21-02-2003",
        gender:"Female",
        positionOfInterest: "President",
        reasonForRunning: "I believe I can make positive changes to our community through effective leadership and collaboration.",
        achieveGoal:"If elected, I hope to achieve improved communication between students and faculty, organize more community events, and enhance campus facilities.",
        experience:"I served as the vice president of the student council last year and helped organize several successful events.",
        option:"Treasurer"

    };
    

    return (
        <>
            <div className="main">
                <div className="left">
                    <ResponsiveDrawer />
                </div>

                {details?.map((e) => (

                  <>
                <div className="right">
                  
                <h1>{e.Name}</h1>
                    <div className="line"></div>
                    <List>
                    <ListItem>
                            <ListItemText primary="School name" secondary={e.School} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Branch name" secondary={e.Branch} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Year" secondary={e.Year} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Date of birth" secondary={e.DOB} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Gender" secondary={e.Gender} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Position of Interest" secondary={e.Position_of_Interest} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Why do you want to run for this post?" secondary={e.Why_want} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="What specific goal do you hope to achieve if elected?" secondary={e.specific_goal} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Mention any previous experience" secondary={e.experience} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Mention any other position of interest(if any)" secondary={e.other_position} />
                        </ListItem>
                    </List>
                </div>
          </>
          ))}
          </div>
        </>
    )
}

export { Alldetails };