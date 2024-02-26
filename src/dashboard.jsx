import React from "react";
import Typography from '@mui/material/Typography';
import ResponsiveDrawer from './navbar';
import  "./dashboard.css"

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style


function Dashboard () {
    return(

        <>
        <div className="main"  >
            <div className="left">
                <ResponsiveDrawer/>         
            </div>
            <div className="right">
                <h1>DASHBOARD</h1>
                <div className="line"></div>
            <ol type='1' >
                <h2><li>President</li></h2>
                <h4>The overall leader of the student government, responsible for representing student interests to the administration and overseeing the student government.</h4>
                <h2><li>Vice President</li></h2>
                <h4>Assists the president in their duties and may take over in their absence. Responsibilities vary but often involve supporting different aspects of student government.</h4>
                <h2><li>Secretary</li></h2>
                <h4>Manages official records, minutes of meetings, and communication within the student government.</h4>
                <h2><li>Treasurer</li></h2>
                <h4>Manages the budget and financial matters of the student government, including allocating funds to various student activities.</h4>
                <h2><li>Events manager</li></h2>
                <h4>Plans and organizes various events and activities on campus, ranging from social gatherings to fundraisers.</h4>
            </ol>
            </div>
        </div>
        </>
    )
}

export {Dashboard}
