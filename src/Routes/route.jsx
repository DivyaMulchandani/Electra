import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard";
import { Result } from "../result";
import { VotingArea } from "../votingarea";
import { Enroll } from "../enroll";
import {Profile} from '../profile';
import { VoterRegistration } from "../registeration";
import Mainpage from "../mainpage";
import User_login from "../userlogin";
import Admin_login from "../adminlogin";
import { Enrolled } from "../enrolled";
import { Accepted } from "../accepted";
import { Details } from "../details";
import { Phase } from "../changephase";
import Signup from "../signup";
function RouteToPage()
{
    return(
        <Routes>
            <Route exact path='/' element={<Mainpage/>}></Route>
            <Route exact path='/dashboard' element={<Dashboard/>}></Route>
            <Route exact path='/profile' element={<Profile/>}></Route>
            <Route exact path='/registration' element={<VoterRegistration/>}></Route>
            <Route exact path='/enroll' element={<Enroll/>}></Route>
            <Route exact path='/votingarea' element={<VotingArea/>}></Route>
            <Route exact path='/result' element={<Result/>}></Route>
            <Route exact path='/userlogin' element={<User_login/>}></Route>
            <Route exact path='/adminlogin' element={<Admin_login/>}></Route>
            <Route exact path='/enrolled' element={<Enrolled/>}></Route>
            <Route exact path='/accepted' element={<Accepted/>}></Route>
            <Route exact path='/details' element={<Details/>}></Route>
            <Route exact path='/changephase' element={<Phase/>}></Route>
            <Route exact path='/signup' element={<Signup/>}></Route>

        </Routes>
    )
}
export {RouteToPage}