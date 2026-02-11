import React from "react";
import { FaUsers, FaBookOpen, FaGraduationCap, FaGlobe } from "react-icons/fa";

export default function About() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">

      {/* background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

          {/* LEFT */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              About <span className="text-blue-600">StudyGroupHub</span>
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              StudyGroupHub is a platform designed to help students learn,
              grow, and succeed together. We provide notes, resources, and
              study groups to improve learning and collaboration.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mission is to make education simple, accessible, and powerful
              for every student.
            </p>

            <button className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition">
              Join Our Community
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students"
              className="rounded-3xl shadow-xl"
            />

            {/* floating card */}
            <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-lg px-4 py-2 rounded-xl shadow-lg">
              <p className="text-sm font-semibold text-gray-800">
                1000+ Students Joined
              </p>
            </div>
          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

          <StatCard icon={<FaUsers />} number="1000+" text="Students" />

          <StatCard icon={<FaBookOpen />} number="500+" text="Notes" />

          <StatCard icon={<FaGraduationCap />} number="50+" text="Courses" />

          <StatCard icon={<FaGlobe />} number="10+" text="Cities" />

        </div>

        {/* FEATURES */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <FeatureCard
            title="Quality Notes"
            desc="Access high quality study material anytime."
          />

          <FeatureCard
            title="Student Community"
            desc="Connect and learn with other students."
          />

          <FeatureCard
            title="Easy Learning"
            desc="Simple and easy platform for everyone."
          />

        </div>

      </div>
    </section>
  );
}


/* STAT CARD */
function StatCard({ icon, number, text }) {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition">

      <div className="text-blue-600 text-2xl mb-2 flex justify-center">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900">
        {number}
      </h3>

      <p className="text-gray-600 text-sm">
        {text}
      </p>

    </div>
  );
}


/* FEATURE CARD */
function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition">

      <h3 className="font-semibold text-lg text-gray-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {desc}
      </p>

    </div>
  );
}
