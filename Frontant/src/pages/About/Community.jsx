import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Community() {
  return (
    <section className="space-y-8 m-16">
      {/* Join Community Card */}
      <motion.div
        className="relative group overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity  duration-500"></div>

        <div className="relative bg-white/90 backdrop-blur-xl p-8 lg:p-12 rounded-3xl  shadow-2xl text-center">
          {/* icon */}
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-4xl text-white">👥</span>
          </div>

          {/* heading */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Join StudyGroupHub Community
          </h2>

          {/* description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with students, share study notes, join study groups, and
            grow your knowledge together. Start your learning journey with
            StudyGroupHub today.
          </p>

          {/* buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {/* Join Now */}
            <motion.div
              className="px-6 py-3 rounded-full text-sm font-medium shadow-lg cursor-pointer text-white"
              style={{
                background: "linear-gradient(to right, #2563eb, #4f46e5)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/signup">🚀 Join Now</Link>
            </motion.div>

            {/* Explore Notes */}
            <motion.div
              className="px-6 py-3 rounded-full text-sm font-medium shadow-lg cursor-pointer text-white"
              style={{
                background: "linear-gradient(to right, #10b981, #22c55e)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/notes">📚 Explore Notes</Link>
            </motion.div>

            {/* Join Study Groups */}
            <motion.div
              className="px-6 py-3 rounded-full text-sm font-medium shadow-lg cursor-pointer text-white"
              style={{
                background: "linear-gradient(to right, #a855f7, #ec4899)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/groups">👥 Join Study Groups</Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
