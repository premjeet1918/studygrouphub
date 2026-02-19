import React from "react";
import { FaGraduationCap, FaBookOpen, FaEnvelope, FaLock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6">

      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">

        {/* LEFT SIDE WITH IMAGE */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="Education"
            className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-indigo-900/20"></div>

          <div className="relative z-10 text-white flex flex-col justify-center items-center p-12 text-center">

            <FaGraduationCap size={50} className="mb-4" />

            <h1 className="text-4xl font-bold mb-4">
              StudyGroup
            </h1>

            <p className="text-white/80 mb-8">
              Learn smarter. Grow faster.  
              Join thousands of students building their future.
            </p>

            <button className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 rounded-full font-semibold hover:scale-105 transition">
              <FaBookOpen />
              Explore Courses
            </button>

          </div>
        </div>

        {/* CENTER CIRCLE BUTTON */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-indigo-500 cursor-pointer hover:scale-110 transition">
            <FaArrowRight  className="text-indigo-700 text-xl" />
          </div>
        </div>

        {/* RIGHT SIDE LOGIN FORM */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-14 bg-white">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back 👋
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Sign in to continue your learning journey
          </p>

          <form className="space-y-5">

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="cursor-pointer hover:text-indigo-600">
            <Link to="/forgot"> Forgot Password? </Link>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] shadow-md transition"
            >
              Login 
            </button>

          </form>

          <p className="text-sm text-gray-500 text-center mt-8">
            New student?{" "}
            <span className="text-indigo-600 cursor-pointer font-medium hover:underline">
            <Link to="/signup"> Create Account </Link>
           
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}
