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

import { useState, useEffect } from "react";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

function Details() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    var num = 1;

    // Sample data for the enrolled candidates
    const enrolledCandidates = [
        { id: 1, name: 'Karishma Sinha', branch: 'CSE 4th year' },
        { id: 2, name: 'Sonalika Mittal', branch: 'Mech 3th year' },
        { id: 3, name: 'Harsh Sehgal', branch: 'Civil 4th year' },
        { id: 4, name: 'Yug patel', branch: 'CSE 3rd year' },
        { id: 5, name: 'Yash Jaiswal', branch: 'Civil 2nd year' },
        { id: 6, name: 'Rudra Amin', branch: 'Mech 4th year' },
        { id: 7, name: 'Satyam Shah', branch: 'Electrical 4th year' },


    ];


    const [data, setData] = useState([])
    const fetchInfo = () => {
        return fetch("http://localhost:2111/api/product")
            .then((res) => res.json())
            .then((d) => {
                setData(d)
                console.log(d)
            })
    }

    useEffect(() => {
        fetchInfo();
    }, [])


    return (
        <>
            <div className="main">
                <div className="left">
                    <ResponsiveDrawer />
                </div>
                <div className="right">
                    <h1>VOTER DETAILS</h1>
                    <div className="line"></div>
                    <Grid item xs={12} md={6}>
                        <List dense={dense}>
                            {/* Titles for each column */}

                            <ListItem className="titleList">
                                <ListItemText primary="Sr." />
                                <ListItemText primary="Name" />
                                <ListItemText primary="Branch" />
                            </ListItem>
                            {/* Data rows */}
                            {data.map((candidate, index) => (
                                <ListItem key={candidate.id}>
                                    <ListItemText primary={num + index} />
                                    <ListItemText primary={candidate.Name} />
                                    <ListItemText primary={candidate.Branch +" "+ candidate.Year} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export { Details };
