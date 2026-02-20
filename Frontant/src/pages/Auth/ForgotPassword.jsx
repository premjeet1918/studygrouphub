import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lock  from "../../assets/images/P.png"
export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yaha API call laga sakte ho
    navigate("/otp");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-gray-200"
      >
        
        {/* Image */}
        <div className="flex justify-center mb-6">
          <div className="bg-black/5 p-2 rounded-full">
            <img
              src={Lock}
              alt="Forgot Password"
              className="w-30 h-30"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Forgot Password?
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Enter your registered email address and we’ll send you an OTP to reset your password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 active:scale-95 transition duration-200"
          >
            Send OTP
          </button>

        </form>

        {/* Back to Login */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-black font-medium hover:underline"
          >
            Back to Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
}
