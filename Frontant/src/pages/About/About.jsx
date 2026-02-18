import React from "react";
import { FaUsers, FaBookOpen, FaGraduationCap, FaGlobe } from "react-icons/fa";
import OurJourney from "./OurJourney";
import { motion } from "framer-motion";
import CoreTeam from "./CoreTeam";
import ChooseandOffer from "./ChooseandOffer";
import Community from "./Community";


export default function About() {
  return (
    <section className="relative py-16 sm:py-20 px-4 bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Background Blur Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              <span className="text-blue-600">Who We Are</span>
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed font-semibold">
              Study Group Hub is a dedicated platform built specifically for
              Diploma students. Launched in 2023, we bridge the gap between
              students and quality education by providing a structured,
              collaborative environment.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We understand the challenges of finding the right study material.
              That's why we’ve built a hub where every resource is verified and
              shared by the community, for the community.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300">
                Join Our Community
              </button>
              <button className="text-blue-600 border border-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 hover:scale-105 transition duration-300">
                Meet Our Team
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students Collaborating"
              className="rounded-3xl shadow-xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/20">
              <p className="text-sm font-bold text-blue-600">
                🚀 1000+ Students Empowered
              </p>
            </div>
          </motion.div>
        </div>

        {/* MISSION & VISION SECTION */}
        <section className="grid lg:grid-cols-2 gap-8 my-20">
          {/* Mission Card */}
          <motion.div
            className="group relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg text-white">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our primary mission is to democratize education for diploma
                students. We provide high-quality{" "}
                <span className="text-purple-600 font-bold">
                  Handwritten Notes, E-books, and Previous Year Questions
                 </span>
                 absolutely free. We aim to ensure that no student’s academic
                potential is limited by a lack of expensive resources.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Free Resources", "Quality Content", "Student Support"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="group relative overflow-hidden bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl hover:shadow-indigo-500/20 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg text-white">
                  <span className="text-2xl">🚀</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where {" "}
                <span className="text-indigo-600 font-bold">
                  Study Group Hub
                </span>
                becomes the ultimate digital companion for every diploma student
                in India. We are building a self-sustaining community where
                seniors mentor juniors, knowledge is shared freely, and every
                student is career-ready.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Digital India", "Peer Learning", "Career Success"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </section>

        {/* OTHER SECTIONS */}
        <OurJourney />
      
        <CoreTeam />

        {/* STATS SECTION */}
        <div className="mt-24 mb-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              Impact in Numbers
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard icon={<FaUsers />} number="1000+" text="Students" />
            <StatCard
              icon={<FaBookOpen />}
              number="500+"
              text="Study Materials"
            />
            <StatCard
              icon={<FaGraduationCap />}
              number="50+"
              text="Subject Guides"
            />
            <StatCard icon={<FaGlobe />} number="10+" text="Polytechnics" />
          </div>
        </div>

        <ChooseandOffer />
        <Community />

      </div>
    </section>
  );
}

/* STAT CARD COMPONENT */
function StatCard({ icon, number, text }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-md p-6 text-center border border-white/50"
    >
      <div className="text-blue-600 text-3xl mb-3 flex justify-center">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900">{number}</h3>
      <p className="text-gray-600 text-sm font-medium">{text}</p>
    </motion.div>
  );
}
