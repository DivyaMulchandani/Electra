import React from "react";
import ResponsiveDrawer from './navbar';
import  "./registration.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style


function VoterRegistration () {
    return(

        <>
        <div className="voterreg"  >
            <div className="left">
                <ResponsiveDrawer/>         
            </div>
            <div className="right">
                <h1 class='font' >VOTER REGISTRATION</h1><hr color="#A1887F"/>
                <Box
                    height={526}
                    width={773}
                    display={'flex'}
                    alignItems={'center'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    gap={1}
                    p={1}
                    margin={3}
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
                    <TextField id="standard-basic" label="What is your mother's date of birth?" variant="standard"/><br></br>
                    <TextField id="standard-basic" label="Which city where you born in?" variant="standard" /><br></br>
                    <TextField id="standard-basic" label="What is the name of your first school?" variant="standard" /><br></br>
                    <Button variant="contained" class="button2" style={{ width: '16ch', minWidth: 'initial', maxWidth: 'initial' }}>REGISTER</Button>
                </Box>
        
            </div>
        </div>
        </>
    )
}

export {VoterRegistration}
