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
    var num = 1;
    var ind = 0;
    const navigate = useNavigate();
    const [namelst, setNamelst] = useState([]);;
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

    const handleNameClick = (email) =>{
        axios.patch(`http://localhost:2111/api/accept/${email}`)
        .then(()=>{
            console.log("patch succesful");
        }
        )
        .catch(error => {
            console.error('Error:', error); // Handle errors
        });
    }

    


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
                                {details.map((candidate, index) => (
                                    <Link id="enrolllink" to={`/alldetails`} className='link' onClick={() => { localStorage.setItem("email", JSON.stringify(candidate.Email)) }}>



                                        <ListItem classname="listitem" key={candidate.id}

                                        >

                                            <ListItemText 
                                                primary={num + index}
                                            />


                                            <ListItemText style={{ marginLeft: '130px' }}
                                                primary={candidate.Name}
                                            />


                                            <ListItemText style={{ marginLeft: '110px' }}
                                                primary={candidate.Position_of_Interest}
                                            />

                                            <ListItemText style={{ marginLeft: '150px' }}
                                                primary={candidate.Branch}
                                                secondary={secondary ? 'Secondary text' : null}
                                            />

                                            <Link id="enrolllink" to={`/accepted`} className='link' onClick={() => {handleNameClick(candidate.Email) }}>

                                                <IconButton edge="end" aria-label="ok" className="iconButton" style={{ margin: '0px' }} >
                                                    <ThumbUpIcon />
                                                </IconButton>

                                            </Link>





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
