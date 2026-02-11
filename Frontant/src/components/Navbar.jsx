import { useState } from "react";
import Logo from "../assets/LOGO.JPG";
import { NavLink, useNavigate } from "react-router-dom";

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
  FaAndroid,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [mobileTeamOpen, setMobileTeamOpen] = useState(false);

  const navigate = useNavigate();

  const navLinkClass =
    "flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50";

  const activeClass =
    "text-blue-600 bg-blue-50 shadow-sm";

  return (
    <>
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

          <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition">
            <FaEnvelope />
            help@studygrouphub.com
          </div>

          <div className="flex gap-4 text-sm">
            <FaFacebookF className="cursor-pointer hover:text-blue-500 hover:scale-110 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 hover:scale-110 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 hover:scale-110 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600 hover:scale-110 transition" />
          </div>

        </div>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-4">

          <div className="flex justify-between items-center h-16 lg:h-20">

            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer group"
            >

              <img
                src={Logo}
                className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl shadow-md group-hover:scale-110 transition"
              />

              <div>
                <h1 className="text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  STUDY
                </h1>

                <p className="text-[10px] lg:text-xs font-bold tracking-[0.35em] text-gray-500">
                  GROUP HUB
                </p>
              </div>

            </div>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-1 text-sm">

              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaHome />
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaInfoCircle />
                About
              </NavLink>

              {/* APK */}
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105 transition shadow-md">
                <FaAndroid />
                APK
              </button>

              {/* TEAM */}
              <div
                className="relative"
                onMouseEnter={() => setTeamOpen(true)}
                onMouseLeave={() => setTeamOpen(false)}
              >

                <button className={navLinkClass}>
                  <FaUsers />
                  Team
                  <FaChevronDown
                    className={`text-xs transition ${
                      teamOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute top-12 left-0 w-52 bg-white shadow-xl rounded-xl border transition-all duration-300 ${
                    teamOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-2"
                  }`}
                >

                  <div className="p-2 space-y-1">

                    <div className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                      Developer Team
                    </div>

                    <div className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer">
                      Admin Team
                    </div>

                  </div>

                </div>

              </div>

              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaBookOpen />
                Courses
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaAddressBook />
                Contact
              </NavLink>

              {/* LOGIN */}
              <button className="ml-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-full hover:scale-105 hover:shadow-lg transition flex items-center gap-2">
                <FaSignInAlt />
                Login
              </button>

            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden text-2xl p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden bg-white border-t shadow-lg transition-all duration-300 ${
            mobileOpen ? "max-h-[600px] py-4" : "max-h-0"
          } overflow-hidden`}
        >

          <div className="px-4 space-y-2">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `${navLinkClass} w-full ${
                  isActive ? activeClass : ""
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${navLinkClass} w-full ${
                  isActive ? activeClass : ""
                }`
              }
            >
              About
            </NavLink>

            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500 text-white w-full">
              <FaAndroid />
              Download APK
            </button>

            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `${navLinkClass} w-full ${
                  isActive ? activeClass : ""
                }`
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${navLinkClass} w-full ${
                  isActive ? activeClass : ""
                }`
              }
            >
              Contact
            </NavLink>

            <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-full">
              Login
            </button>

          </div>

        </div>

      </nav>
    </>
  );
}
