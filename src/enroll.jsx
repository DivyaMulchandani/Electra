import React from "react";
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './navbar';
import  "./enroll.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style


function Enroll () {
    return(

        <>
        <div className="enroll"  >
            <div className="left">
                <ResponsiveDrawer/>         
            </div>
            <div className="right">
                <h1 className='font' >ENROLL AS CANDIDATE</h1>
                <hr color="#5D4037"/>
                <Box
                    height={676}
                    width={773}
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
                    <TextField id="standard-basic" label="Position of interest" variant="standard"/><br></br>
                    <TextField id="standard-basic" label="Why do you want to run for this position? " variant="standard" /><br></br>
                    <TextField id="standard-basic" label="What specific goal do you hope to achieve if elected?" variant="standard" /><br></br>
                    <TextField id="standard-basic" label="Mention any previous experience" variant="standard" /><br></br>
                    <TextField id="standard-basic" label="Mention any other position of interest (if any)" variant="standard"/><br></br>
                    <Button variant="contained" class="button2" style={{ width: '16ch', minWidth: 'initial', maxWidth: 'initial' }}>ENROLL</Button>
                </Box>
        
            </div>
        </div>
        </>
    )
}

export {Enroll}
