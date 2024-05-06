// Import your CSS file if not already imported

import React from "react";
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './navbar2';
import "./enrolled.css";
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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import { Link } from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Enrolled() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
var num=1;
var name = "";
    const [details, setDetails] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setEmail(user.email);
    }
  }, []);


  const fetchInfo = () => {
    return fetch("http://localhost:2111/api/applicant")
      .then((res) => res.json())
      .then((d) => {
        setDetails(d);
      })
      .catch(error => console.error("Error fetching data:", error));
  };

  
  useEffect(() => {
    fetchInfo();
}, [])

    // Sample data for the enrolled candidates
    const enrolledCandidates = [
        { id: 1, name: 'Karishma Sinha', position: 'President', branch: 'CSE 4th year' },
        { id: 2, name: 'Sonalika Mittal', position: 'Secretary', branch: 'Mech 3th year' },
        { id: 3, name: 'Harsh Sehgal', position: 'President', branch: 'Civil 4th year' },
        { id: 4, name: 'Yugind Shukla', position: 'Treasurer', branch: 'CSE 3rd year' }
    ];

    return (
        <>
            <div className="main">
                <div className="left">
                    <ResponsiveDrawer />
                </div>
                <div className="right">
                    <h1>ENROLLED CANDIDATES</h1>
                    <div className="line"></div>
                    <Grid item xs={12} md={6}>
                        <List dense={dense}>
                            {/* Titles for each column */}
                            
                            <ListItem className="titleList">
                                <ListItemText primary="Sr." />
                                <ListItemText primary="Name" />
                                <ListItemText primary="Position" />
                                <ListItemText primary="Branch" />
                            </ListItem>
                            {/* Data rows */}
                            {details.map((candidate,index) => (

                                <Link id="enrolllink" to={`/alldetails`} className='link' onClick={()=>{localStorage.setItem("email",JSON.stringify(candidate.Email))}}>
                                <ListItem key={candidate.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="ok" className="iconButton">
                                            <ThumbUpIcon />
                                        </IconButton>
                                    }
                                >
                                
                                    <ListItemText
                                        primary={num+index}
                                    />
                                     

                                    <ListItemText
                                        primary={candidate.Name}
                                    />
                                    

                                    <ListItemText
                                        primary={candidate.Position_of_Interest}
                                    />

                                    <ListItemText
                                        primary={candidate.Branch}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                    
                                    
                                </ListItem>
                                </Link>
                            ))}
                        </List>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export { Enrolled };
