import { useState } from "react";
import Logo from "../../assets/images/LOGO.JPG";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaAddressBook,
  FaSignInAlt,
  FaAndroid,
  FaRegCommentDots,
} from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Tablet (md) aur Desktop (lg) ke liye responsive classes
  const navLinkClass =
    "flex items-center gap-1.5 lg:gap-2 px-2 lg:px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 text-[13px] lg:text-sm whitespace-nowrap";

  const activeClass = "text-blue-600 bg-blue-50 shadow-sm";

  return (
    <>
      {/* TOP BAR - Hidden on mobile, visible on tablet/desktop */}
      <div className="bg-gray-800 text-white text-xs hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2 hover:text-blue-400 cursor-pointer transition">
            <FaEnvelope />
            <span className="hidden sm:inline">help@studygrouphub.com</span>
          </div>

          <div className="flex gap-4 text-sm">
            <FaFacebookF className="cursor-pointer hover:text-blue-500 transition" />
            <FaTwitter className="cursor-pointer hover:text-blue-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600 transition" />
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* LOGO */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 lg:gap-3 cursor-pointer group"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl shadow-md group-hover:scale-105 transition"
              />
              <div className="flex flex-col">
                <h1 className="text-base lg:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                  STUDY
                </h1>
                <p className="text-[8px] lg:text-[10px] font-bold tracking-[0.2em] text-gray-600">
                  GROUP HUB
                </p>
              </div>
            </div>

            {/* DESKTOP & TABLET MENU (Hidden on Mobile < 768px) */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaHome /> HOME
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaInfoCircle /> ABOUT
              </NavLink>

              <NavLink
                to="/Apk"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaAndroid /> APK
              </NavLink>

              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaBookOpen /> COURSES
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaAddressBook /> CONTACT
              </NavLink>
              {/* FEEDBACK LINK */}
              <NavLink
                to="/feedback"
                className={({ isActive }) =>
                  `${navLinkClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaRegCommentDots />
                FEEDBACK
              </NavLink>

              {/* LOGIN BUTTON */}
              <button
                onClick={() => navigate("/login")}
                className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-semibold"
              >
                <FaSignInAlt /> LOGIN
              </button>
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <button
              className="md:hidden text-2xl p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU (Only visible on < 768px) */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-300 ease-in-out ${
            mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 flex flex-col gap-2">
            {[
              { to: "/", label: "Home", icon: <FaHome /> },
              { to: "/about", label: "About", icon: <FaInfoCircle /> },
              { to: "/Apk", label: "APK", icon: <FaAndroid /> },
              { to: "/courses", label: "Courses", icon: <FaBookOpen /> },
              { to: "/contact", label: "Contact", icon: <FaAddressBook /> },
              { to: "/Feedback", label: "FeedBack", icon: <FaRegCommentDots   /> },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                {link.icon} {link.label}
              </NavLink>
            ))}

            <button
              onClick={() => {
                navigate("/login");
                setMobileOpen(false);
              }}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg"
            >
              LOGIN
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
