import React from "react";
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './navbar';
import "./enroll.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from 'react';


function Enroll() {

    const [details, setDetails] = useState([])
    

    const [Position_of_Interest, setPosition_of_Interest] = useState('');
    const [Why_want, setWhy_want] = useState('');
    const [specific_goal, setspecific_goal] = useState('');
    const [experience, setexperience] = useState('');
    const [other_position, setother_position] = useState('');
    let navigate = useNavigate();


    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem("user"))
        
        if(user) {
            setDetails(user)
          
        }

    },[])
    if (Object.keys(details).length === 0) {
        return null;
    }
    

    function postUser(e) {
        console.log(details[0].Email)
        e.preventDefault()
        const applicantDetail = {
            Name:details[0].Name,
            Email: details[0].Email,
            School: details[0].School,
            Branch: details[0].Branch,
            Year: details[0].Year,
            Gender: details[0].Gender,
            DOB:details[0].DOB,
            Position_of_Interest: Position_of_Interest,
            Why_want: Why_want,
            specific_goal: specific_goal,
            experience: experience,
            other_position: other_position

        }

        console.log(applicantDetail);
        axios.post("http://localhost:2111/api/applicant", applicantDetail)
            .then((response) => {
                console.log(response.data)
                let path = '/dashboard';
                navigate(path);
            }
            )
            .catch(err => console.log(err));
        

    }

    return (

        <>
            <div className="enroll"  >
                <div className="left">
                    <ResponsiveDrawer />
                </div>
                <div className="right">
                    <h1 className='font' >ENROLL AS CANDIDATE</h1>
                    <hr color="#5D4037" />
                    <Box
                        height={676}
                        width={700}
                        display={'flex'}
                        alignItems={'center'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        gap={1}
                        p={1}
                        component="form"
                        sx={{
                            border: '1px solid #5D4037',
                            '& > :not(style)': { m: 0, width: '85%' },
                            '& .MuiInputBase-root': {
                                fontFamily: "Poppins",
                                color: '#5D4037', // Set your desired text color
                            },
                            '& .MuiInputBase-root::before': {
                                borderBottomColor: '#5D4037', // Set your desired border color
                            },
                            '& .MuiInputBase-root:hover::before': {
                                borderBottomColor: '#5D4037', // Set your desired hover border color
                            },
                            '& .MuiInputBase-root::after': {
                                borderBottomColor: '#5D4037', // Set your desired focused border color
                            },



                        }}
                        noValidate
                        autoComplete="off"
                        mx="auto"
                    >
                        <TextField id="standard-basic" label="Position of interest" variant="standard" onChange={(e) => setPosition_of_Interest(e.target.value)} /><br></br>
                        <TextField id="standard-basic" label="Why do you want to run for this position? " variant="standard" onChange={(e) => setWhy_want(e.target.value)} /><br></br>
                        <TextField id="standard-basic" label="What specific goal do you hope to achieve if elected?" variant="standard" onChange={(e) => setspecific_goal(e.target.value)} /><br></br>
                        <TextField id="standard-basic" label="Mention any previous experience" variant="standard" onChange={(e) => setexperience(e.target.value)} /><br></br>
                        <TextField id="standard-basic" label="Mention any other position of interest (if any)" variant="standard" onChange={(e) => setother_position(e.target.value)} /><br></br>
                        <Button variant="contained" class="button2" style={{ width: '16ch', minWidth: 'initial', maxWidth: 'initial' }} onClick={(e) => postUser(e)}>ENROLL</Button>
                    </Box>

                </div>
            </div>
        </>
    )
}

export { Enroll }
