import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Lock  from "../../assets/P.png"

export default function OTPVerification() {
  const navigate = useNavigate();
  const inputs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(30);

  // Handle OTP Change
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // Handle Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const finalOtp = otp.join("");
    if (finalOtp.length === 6) {
      navigate("/reset-password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200"
      >
        {/* Image */}
        <div className="flex justify-center mb-6">
          <div className="bg-black/5 p-2 rounded-full">
            <img src={Lock} alt="OTP" className="w-26 h-26" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Verify Your Code
        </h2>

        <p className="text-center text-gray-500 mb-8 text-sm">
          Enter the 6-digit OTP sent to your email
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* OTP Inputs */}
          <div className="flex justify-center gap-3">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                value={data}
                maxLength="1"
                ref={(el) => (inputs.current[index] = el)}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-14 text-center text-xl font-semibold border border-gray-300 rounded-xl outline-none focus:border-black focus:ring-2 focus:ring-black/20 transition duration-200"
              />
            ))}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 active:scale-95 transition duration-200 shadow-md"
          >
              <Link to="/signup">Verify & Continue </Link>
          </button>
        </form>

        {/* Resend */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Didn’t receive the code?{" "}
          <button
            disabled={timer > 0}
            onClick={() => setTimer(30)}
            className={`font-medium ${
              timer > 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-black hover:underline"
            }`}
          >
            {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
