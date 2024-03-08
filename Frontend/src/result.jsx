import React from "react";
import Typography from '@mui/material/Typography';
import  "./result.css"
import ResponsiveDrawer from "./navbar";


function Result () {
    return(

        <>
        <div className="main"  >
            <div className="left">
                <ResponsiveDrawer/>       
            </div>
            <div className="right">
                <h1>RESULT</h1>
                <div className="line"></div>
                <h3>Elections are not over yet!</h3>
                <h3>Results will be displayed soon.</h3>
            
            </div>
        </div>
        </>
    )
}

export {Result}
