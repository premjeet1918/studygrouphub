import { useState } from "react";
import Logo from "../assets/LOGO.JPG";

import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaBookOpen,
  FaAddressBook,
  FaSignInAlt,
} from "react-icons/fa";

import { FaAndroid } from "react-icons/fa";

export default function  Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Email */}
          <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
            <FaEnvelope />
            <span className="hidden sm:block">help@studygrouphub.com</span>
            <span className="sm:hidden">Email Us</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer transition" />

            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />

            <FaInstagram className="hover:text-blue-400 cursor-pointer transition" />

            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={Logo}
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl"
              />

              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-800 leading-none">
                  STUDY
                </h1>

                <p className="text-blue-600 text-[10px] md:text-xs tracking-[0.3em] font-bold">
                  GROUP
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2 text-sm font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 rounded-lg duration-200 transition ${
                    isActive
                      ? "text-orange-700 font-bold bg-blue-50"
                      : "text-black"
                  } hover:bg-blue-50 hover:text-blue-600`
                }
              >
                <FaHome className="text-xl" />
                <span>HOME</span>
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center gap-2 py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-600   font-bold" : "text-gray-700"
                  } border-b  flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50  lg:border-0 hover:text-blue-600 `
                }
              >
                <FaInfoCircle className="text-lg" />
                <span>About</span>
              </NavLink>

              <a className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                <FaAndroid />
                APK
              </a>

              {/* Team Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setTeamOpen(!teamOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <FaUsers />
                  TEAM
                  <FaChevronDown
                    className={`text-xs transition ${
                      teamOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {teamOpen && (
                  <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-48 py-2 border">
                    <a className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition">
                      Developer Team
                    </a>

                    <a className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition">
                      Admin Team
                    </a>
                  </div>
                )}
              </div>

              <a className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                <FaBookOpen />
                COURSES
              </a>

              <NavLink
                to="/contact"
                className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
              >
                <FaAddressBook />
                CONTACT
              </NavLink>

              {/* Login */}
              <button className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition flex items-center gap-2">
                <FaSignInAlt />
                LOGIN
              </button>
            </div>

            {/* Mobile Button */}
            <button
              className="md:hidden text-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="px-4 py-3 space-y-2">
              <a className="block py-2 hover:text-blue-600">HOME</a>

              <a className="block py-2 hover:text-blue-600">ABOUT</a>

              <a className="block py-2 hover:text-blue-600">APK</a>

              {/* Mobile Team */}
              <div>
                <button
                  onClick={() => setMobileTeamOpen(!mobileTeamOpen)}
                  className="w-full text-left py-2 flex justify-between"
                >
                  TEAM
                  <FaChevronDown
                    className={`transition ${
                      mobileTeamOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileTeamOpen && (
                  <div className="pl-4 space-y-2">
                    <div className="py-1">Developer Team</div>

                    <div className="py-1">Admin Team</div>
                  </div>
                )}
              </div>

              <a className="block py-2 hover:text-blue-600">COURSES</a>

              <a className="block py-2 hover:text-blue-600">CONTACT</a>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                LOGIN
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
