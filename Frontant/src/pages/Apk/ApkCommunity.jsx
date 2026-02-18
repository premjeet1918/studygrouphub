import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaDownload, FaLayerGroup } from "react-icons/fa";

export default function ApkCommunity() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Join Our Growing Community 🚀
          </h2>
          <p className="text-gray-600 text-lg">
            Thousands of students are already learning together with Study Group
            App.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Students */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <FaUsers className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p className="text-gray-600 mt-2">Active Students</p>
          </motion.div>

          {/* Groups */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <FaLayerGroup className="text-4xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">1,200+</h3>
            <p className="text-gray-600 mt-2">Study Groups</p>
          </motion.div>

          {/* Downloads */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <FaDownload className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold">25,000+</h3>
            <p className="text-gray-600 mt-2">APK Downloads</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
