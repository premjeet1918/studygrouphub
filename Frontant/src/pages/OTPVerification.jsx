import React from "react";
import { Link } from "react-router-dom";

export default function OTPVerification() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      {/* Card */}
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-100">

        {/* OTP Image */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-4 rounded-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png"
              alt="OTP Verification"
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-2">
          Verify Your Code
        </h2>

        {/* Info */}
        <p className="text-center text-gray-500 mb-8 text-sm">
          Please enter the 6-digit OTP sent to your email address
        </p>

        {/* Form */}
        <form className="space-y-8">

          {/* OTP Boxes */}
          <div className="flex justify-center gap-3">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-14 text-center text-xl font-medium border border-gray-300 rounded-xl outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all duration-200"
              />
            ))}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold tracking-wide hover:scale-[1.02] hover:bg-gray-800 transition-all duration-300 shadow-md"
          >
                <Link to="/signup">            Verify & Continue
            </Link>
          </button>

        </form>

        {/* Resend */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Didn’t receive the code?{" "}
          <span className="text-black font-medium cursor-pointer hover:underline">
                   Resend OTP   
            
          </span>
        </div>

      </div>
    </div>
  );
}
