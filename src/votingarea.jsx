import React from "react";
import "./votingarea.css"
import ResponsiveDrawer from "./navbar";
import profile from "./profile.svg"


function VotingArea() {
    return (

        <>
            <div className="main"  >
                <div className="left">
                    <ResponsiveDrawer />
                </div>
                <div className="right">
                    <h1>Voting area</h1>
                    <div className="line"></div>

                    <ul>
                    <h4><li type="1">President</li></h4>

                        <div className="hell">
                            <div class="box">
                                <img src={profile} />

                                <p>Karishma Sinha</p>
                                <p>CSE 4th year</p>
                                <button>Vote</button>


                            </div>

                            <div class="box">

                                <img src={profile} />

                                <p>Karishma Sinha</p>
                                <p>CSE 4th year</p>
                                <button>Vote</button>
                            </div>

                            <div class="box">

                                <img src={profile} />

                                <p>Karishma Sinha</p>
                                <p>CSE 4th year</p>
                                <button>Vote</button>
                            </div>


                        </div>

                        <h4><li type="1">Vice President</li></h4>

                        <div className="hell">
                            <div class="box">
                                <img src={profile} />

                                <p>Karishma Sinha</p>
                                <p>CSE 4th year</p>
                                <button>Vote</button>


                            </div>

                            <div class="box">

                                <img src={profile} />

                                <p>Karishma Sinha</p>
                                <p>CSE 4th year</p>
                                <button>Vote</button>
                            </div>

                            <div class="box">

                                <img src={profile} />

                                <p>Karishma Sinha</p>
                                <p>CSE 4th year</p>
                                <button>Vote</button>
                            </div>


                        </div>

                        

                    </ul>



                </div>
            </div>
        </>
    )
}

export { VotingArea }
