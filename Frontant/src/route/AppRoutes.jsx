import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import About from "../pages/About/About";
import Adminmainpage from "../pages/Team/AdminTeam/Adminmainpage";
import Devloperteammainpage from "../pages/Team/DevloperTeam/Devloperteammainpage";

import Contact from "../pages/Contact/Contact";
import Apkmianpage from "../pages/Apk/Apkmianpage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import OTPVerification from "../pages/OTPVerification";


export default function AppRoutes() {
return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Apk" element={<Apkmianpage />} />
    <Route path="/About" element={<About />} />
    <Route path="/Adminmainpage" element={<Adminmainpage />} />
    <Route path="/Devloperteammainpage" element={<Devloperteammainpage />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />

<Route path="/signup" element={<Signup />} />

<Route path="/forgot" element={<ForgotPassword/>} />

<Route path="/otp" element={<OTPVerification />} />


  </Routes>
);
}