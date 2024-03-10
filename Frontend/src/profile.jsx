import React, { useState } from "react";
import ResponsiveDrawer from './navbar';
import  "./profile.css"
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
import Signup from "./signup";
import { useEffect } from "react";
import profile from "./profile.svg"


function Profile () {
    

    const [details, setDetails] = useState([])

    useEffect(() => {
        
        const user = JSON.parse(localStorage.getItem("user"))
        
        if(user) {
            setDetails(user)
          
        }

    },[])
    if (Object.keys(details).length === 0) {
        return null;
    }
    console.log(details[0].Email)
    


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

                <img src={profile} alt="Profile Picture" width="150" height="100"/>
                    
                    {details?.map((e) => (
                        
                        <>
                            <p>Name : {e.Name}</p>
                            <p><span>Email address : </span><span>{e.Email}</span></p>
                            <p><span>School : </span><span>{e.school}</span></p>
                            <p><span>Branch : </span><span>{e.branch}</span></p>
                            <p><span>Year : </span><span>{e.year}</span></p>
                            <p><span>DOB : </span><span>{e.dob}</span></p>
                            <p><span>Gender : </span><span>{e.gender}</span></p>
                        </>
                       
                    ))
                    }
                    
                </div>
            </div>
        </div>
        </>
    )
}

export {Profile}
