import React from "react";
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './navbar';
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
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

function Enrolled() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    // Sample data for the enrolled candidates
    const enrolledCandidates = [
        { id: 1, name: 'Karishma Sinha', position: 'President', branch: 'CSE 4th year' },
        { id: 2, name: 'Sonalika Mittal', position: 'Secretary', branch: 'Mech 3th year' },
        { id: 3, name: 'Harsh Sehgal', position: 'President', branch: 'Civil 4th year' },
        { id: 4, name: 'Yug Patel', position: 'Vice President', branch: 'CSE 3rd year' }
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
                            {enrolledCandidates.map(candidate => (
                                <ListItem key={candidate.id}
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="ok">
                                            <ThumbUpAltOutlinedIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemText
                                        primary={candidate.id}
                                    />

                                    <ListItemText
                                        primary={candidate.name}
                                    />

                                    <ListItemText
                                        primary={candidate.position}
                                    />

                                    <ListItemText
                                        primary={candidate.branch}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export { Enrolled };