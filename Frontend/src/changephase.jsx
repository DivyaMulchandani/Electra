import React from "react";
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './navbar2';
import  "./changephase.css";


function Phase () {
    return(

        <>
        <div className="main"  >
            <div className="left">
                <ResponsiveDrawer/>         
            </div>
            <div className="right">
                <h1>CHANGE PHASE</h1>
                <div className="line"></div>
            
                <h3>Current Phase : Voting open</h3>
                <button>Change Phase</button>
                
            
            </div>
        </div>
        </>
    )
}

export {Phase}
