import React, { useEffect, useState } from "react";
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
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { useFetcher } from "react-router-dom";


const Accepted = () => {
  var num = 1;

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  
  const [details, setDetails] = useState([]);
  const fetchInfo = () => {
    return fetch("http://localhost:2111/api/accepted")
        .then((res) => res.json())
        .then((d) => {
            setDetails(d);
        })
        .catch(error => console.error("Error fetching data:", error));
};

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
              <h1>ACCEPTED CANDIDATES</h1>
              <div className="line"></div>
              <Grid item xs={12} md={6}>
                  <List dense={dense}>
                      
                      <ListItem className="titleList">
                          <ListItemText primary="Sr." />
                          <ListItemText primary="Name" />
                          <ListItemText primary="Position" />
                          <ListItemText primary="Branch" />
                      </ListItem>
                      {/* Data rows */}
                      {details.map((candidate,index) => (
                          <ListItem key={candidate.id}
                              
                          >
                              <ListItemText
                                  primary={num + index}
                              />

                              <ListItemText 
                                  primary={candidate.Name}
                              />

                              <ListItemText style={{ marginLeft: '-30px' }}
                                  primary={candidate.Position_of_Interest}
                              />

                              <ListItemText style={{ marginLeft: '-10px' }}
                                  primary={candidate.Branch}
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

export { Accepted };






  
  //   return (
  //     <div>
  //       <h1>Selected Name:</h1>
  //       {/* {acceptedCandidates?.map((e) => 
  //       <div>
  //           <p>{e.accpeted}</p>
  //         </div>
  //       )} */}
  //     </div>
  //   );
  // };
  
  // export { Accepted };
// function Accepted() {
//     const [dense, setDense] = React.useState(false);
//     const [secondary, setSecondary] = React.useState(false);

//     // Sample data for the enrolled candidates
//     const enrolledCandidates = [
//         { id: 1, name: 'Karishma Sinha', position: 'President', branch: 'CSE 4th year' },
//         { id: 2, name: 'Sonalika Mittal', position: 'Secretary', branch: 'Mech 3th year' },
//         { id: 3, name: 'Harsh Sehgal', position: 'President', branch: 'Civil 4th year' },
    
//     ];

//     