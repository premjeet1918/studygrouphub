import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">

      {/* Card */}
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md border border-gray-200">

        {/* Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
            alt="Forgot Password"
            className="w-20 h-20"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-2">
          Forgot Password?
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Enter your registered email address and we’ll send you an OTP to reset your password.
        </p>

        {/* Form */}
        <form className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-1 focus:ring-black transition"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
          >
           
            <Link to="/otp">  Send OTP </Link>

          </button>

        </form>

        {/* Back to Login */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Remember your password?{" "}
          <span className="text-black cursor-pointer hover:underline">
            Back to Login
          </span>
        </p>

      </div>
    </div>
  );
}
