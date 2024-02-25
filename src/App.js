import logo from './logo.svg';
import './App.css';
import Mainpage from './mainpage';
import User_login from './userlogin';
import Signup from './signup';

import { Dashboard } from './dashboard';

import Admin_login from './adminlogin';

import {Enroll} from './enroll'
import {Profile} from './profile'
import {VoterRegistration} from './registeration'

function App() {
  return (
    <>
    <Mainpage />
    {/* <Signup />
    <User_login/>
    <Admin_login/> */}

    {/* <Mainpage />
    <Signup /> */}
    {/* <Dashboard/> */}
    {/* <Enroll/> */}
    {/* <Profile/> */}
    <VoterRegistration/>


    </>
  );
}

export default App;
