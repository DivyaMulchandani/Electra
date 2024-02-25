import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard";
import { Result } from "../result";
import { VotingArea } from "../votingarea";
import { Enroll } from "../enroll";
import {Profile} from '../profile';
import { VoterRegistration } from "../registeration";
function RouteToPage()
{
    return(
        <Routes>
            <Route exact path='/' element={<Dashboard/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
            <Route exact path='/profile' element={<Profile/>}></Route>
            <Route exact path='/registration' element={<VoterRegistration/>}></Route>
            <Route exact path='/enroll' element={<Enroll/>}></Route>
            <Route exact path='/votingarea' element={<VotingArea/>}></Route>
            <Route exact path='/result' element={<Result/>}></Route>



        </Routes>
    )
}
export {RouteToPage}