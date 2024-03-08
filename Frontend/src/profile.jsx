import React from "react";
import ResponsiveDrawer from './navbar';
import  "./profile.css"
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
// import Ellipse from './ellipse.svg';

function Profile () {
    return(

        <>
        <div className="profile"  >
            <div className="left">
                <ResponsiveDrawer/>         
            </div>
            <div className="right">
                <h1 className='font' >PROFILE</h1>
                <hr color="#5D4037"/>
                <div className="text">
                    {/* <img src={Ellipse} alt="Ellipse" width="150px" height="150px" /> */}
                    <p>Yash Jaiswal</p>
                    <p><span>Email address : </span><span>yashjaiswal@nuv.ac.in</span></p>
                    <p><span>School : </span><span>School of Technology</span></p>
                    <p><span>Branch : </span><span>Computer Science Engineering</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export {Profile}
