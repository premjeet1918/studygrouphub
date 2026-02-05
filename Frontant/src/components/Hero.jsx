import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">

        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Study Groups & Learn Together
          </h1>

          <p className="text-lg text-blue-100 mb-6">
            Connect with students, share knowledge, and grow your skills faster.
          </p>

          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            alt="students"
            className="w-80 mx-auto"
          />
        </div>

      </div>
    </section>
  );
}
