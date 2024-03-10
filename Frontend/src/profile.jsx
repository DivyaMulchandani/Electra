import React, { useState } from "react";
import ResponsiveDrawer from './navbar';
import  "./profile.css"
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Signup from "./signup";
import { useEffect } from "react";
// import Ellipse from './ellipse.svg';

function Profile () {

    const [details, setDetails] = useState([])

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if(user) {

            setDetails(user)
        }

    },[])
    console.log(details)


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
                    
                    {details?.map((e) => (
                        
                        <>
                            <p>Name : {e.Name}</p>
                            <p><span>Email address : </span><span>{e.Email}</span></p>
                            <p><span>School : </span><span>{e.school}</span></p>
                            <p><span>Branch : </span><span>{e.branch}</span></p>
                        </>
                       
                    ))
                    }
                    {/* <img src={Ellipse} alt="Ellipse" width="150px" height="150px" /> */}
                    
                </div>
            </div>
        </div>
        </>
    )
}

export {Profile}
