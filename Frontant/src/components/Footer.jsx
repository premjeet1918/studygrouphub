import Logo from "../assets/LOGO.JPG";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Logo"
                className="w-12 h-12 rounded-xl object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/48/2563eb/ffffff?text=LOGO";
                }}
              />

              <div>
                <h2 className="text-xl font-bold text-white">STUDY</h2>
                <p className="text-xs font-bold tracking-[0.3em] text-blue-500">
                  GROUP
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Your one-stop destination for educational resources,
              exam preparation, and career guidance.
            </p>

            {/* React Icons Social */}
            <div className="flex gap-4 mt-4">

              <FaFacebookF
                className="text-blue-600 cursor-pointer hover:scale-110 transition"
                size={20}
              />

              <FaTwitter
                className="text-sky-400 cursor-pointer hover:scale-110 transition"
                size={20}
              />

              <FaInstagram
                className="text-pink-500 cursor-pointer hover:scale-110 transition"
                size={20}
              />

              <FaYoutube
                className="text-red-500 cursor-pointer hover:scale-110 transition"
                size={20}
              />

            </div>
          </div>

          {/* Government Exams */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Government Exams
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "SSC Exams",
                "Banking Exams",
                "UPSC & PCS",
                "Railway Exams",
                "Defence Exams",
              ].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-blue-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Skill Development
            </h3>

            <ul className="space-y-2 text-sm">
              {[
                "Coding & Programming",
                "Digital Marketing",
                "Graphic Design",
                "Video Editing",
                "Hotel Management",
              ].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-blue-500 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <a href="/" className="hover:text-blue-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/" className="hover:text-blue-500 transition">
                  Terms & Conditions
                </a>
              </li>

              <li className="flex items-center gap-2">
                <MdEmail className="text-blue-500" size={20} />
                <span className="break-all">
                  support@studygroup.com
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">

          © 2026{" "}
          <span className="font-semibold text-white">
            Study Group
          </span>{" "}
          — All rights reserved.

        </div>

      </div>
    </footer>
  );
}
