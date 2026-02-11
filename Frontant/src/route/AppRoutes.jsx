import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

import About from "../pages/About/About";
import Adminteam from "../pages/Team/Adminteam";
import Devloperteam from "../pages/Team/Devloperteam";

import Contact from "../pages/Contact/Contact";


export default function AppRoutes() {
return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Adminteam" element={<Adminteam />} />
    <Route path="/Devloperteam" element={<Devloperteam />} />

    <Route path="/contact" element={<Contact />} />
  </Routes>
);
}