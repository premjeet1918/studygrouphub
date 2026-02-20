import React from "react";
import { 
  FaGraduationCap, 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaArrowRight 
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 p-6">

      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex">

        {/* LEFT SIDE WITH IMAGE */}
        <div className="hidden md:flex md:w-1/2 relative overflow-hidden">

          <img
                src="https://images.unsplash.com/photo-1513258496099-48168024aec0"

            alt="Students Learning"
            className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
          />

          <div className="absolute inset-0 bg-indigo-900/30"></div>

          <div className="relative z-10 text-white flex flex-col justify-center items-center p-12 text-center">

            <FaGraduationCap size={50} className="mb-4" />

            <h1 className="text-4xl font-bold mb-4">
              Join StudyGroup
            </h1>

            <p className="text-white/80 mb-8">
              Create your free account and start learning with thousands of students.
            </p>

          </div>
        </div>

        {/* CENTER CIRCLE BUTTON */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-indigo-600 cursor-pointer hover:scale-110 transition">
            <FaArrowRight className="text-indigo-700 text-xl" />
          </div>
        </div>

        {/* RIGHT SIDE SIGNUP FORM */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-10 md:p-14 bg-white">

          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Create Account 
          </h2>

          <p className="text-gray-500 text-sm mb-8">
            Start your learning journey today
          </p>

          <form className="space-y-5">

            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-4 text-gray-400" />
              <input
                type="text"
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

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

            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-4 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] shadow-md transition"
            >
              Create Account 
            </button>

          </form>

          <p className="text-sm text-gray-500 text-center mt-8">
            Already have an account?{" "}
            <span className="text-indigo-600 cursor-pointer font-medium hover:underline">
            <Link to="/login">Login</Link>
            </span>
          </p>

        </div>

      </div>
    </div>
  );
}
