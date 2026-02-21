import { Routes, Route } from "react-router-dom";

import About from "../pages/About/About";


import Contact from "../pages/Contact/Contact";
import Apkmianpage from "../pages/Apk/Apkmianpage";
import Home from "../pages/Home/Home";
import OTPVerification from "../pages/Auth/OTPVerification";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import Signup from "../pages/Auth/Signup";
import Login from "../pages/Auth/login";
import Feedback from "../pages/Feedback/Feedback";


export default function AppRoutes() {
return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Apk" element={<Apkmianpage />} />
    <Route path="/About" element={<About />} />
    <Route path="/Feedback" element={<Feedback />} />

    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />

    <Route path="/signup" element={<Signup />} />

    <Route path="/forgot" element={<ForgotPassword />} />

    <Route path="/otp" element={<OTPVerification />} />
  </Routes>
);
}