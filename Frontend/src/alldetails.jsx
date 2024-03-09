import React from "react";
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

function Alldetails() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

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
                <div className="right">
                <h1>KARISHMA SINHA</h1>
                    <div className="line"></div>
                    <List>
                    <ListItem>
                            <ListItemText primary="School name" secondary={studentDetails.schoolName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Branch name" secondary={studentDetails.branchName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Year" secondary={studentDetails.year} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Date of birth" secondary={studentDetails.dateOfBirth} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Gender" secondary={studentDetails.gender} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Position of Interest" secondary={studentDetails.positionOfInterest} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Why do you want to run for this post?" secondary={studentDetails.reasonForRunning} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="What specific goal do you hope to achieve if elected?" secondary={studentDetails.achieveGoal} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Mention any previous experience" secondary={studentDetails.experience} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Mention any other position of interest(if any)" secondary={studentDetails.option} />
                        </ListItem>
                    </List>
                </div>
            </div>
        </>
    )
}

export { Alldetails };
