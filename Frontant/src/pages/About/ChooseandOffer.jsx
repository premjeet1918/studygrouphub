import React from "react";
import { motion } from "framer-motion";

// icons import
import {
  FaStar,
  FaBookOpen,
  FaUsers,
  FaGraduationCap,
  FaBrain,
} from "react-icons/fa";

export default function ChooseandOffer() {
  return (
    <>
      {/* Why Choose StudyGroupHub & What We Offer */}
      <section className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              StudyGroupHub?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes StudyGroupHub the best platform for students to
            learn, collaborate, and grow together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Why Choose Us */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-3xl  shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg text-white">
                  <FaStar size={24} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800">
                  Why Choose Us?
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  {
                    label: "Easy Learning Platform",
                    icon: <FaBookOpen />,
                    desc: "Simple and user-friendly platform for better learning experience.",
                    color: "from-green-400 to-blue-500",
                  },
                  {
                    label: "Community Based Learning",
                    icon: <FaUsers />,
                    desc: "Learn together with students and collaborate easily.",
                    color: "from-purple-400 to-indigo-500",
                  },
                  {
                    label: "Free Study Resources",
                    icon: <FaGraduationCap />,
                    desc: "Access free notes, study materials, and learning resources.",
                    color: "from-yellow-400 to-orange-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.label}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* What We Offer */}
          <motion.div
            className="relative group lg:mt-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-3xl  shadow-2xl">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg text-white">
                  <FaBrain size={24} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800">
                  What We Offer
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Study Notes & Resources",
                    icon: <FaBookOpen />,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    label: "Study Groups & Collaboration",
                    icon: <FaUsers />,
                    color: "from-green-500 to-emerald-500",
                  },
                  {
                    label: "Doubt Solving Support",
                    icon: <FaBrain />,
                    color: "from-purple-500 to-violet-500",
                  },
                  {
                    label: "Free Learning Materials",
                    icon: <FaGraduationCap />,
                    color: "from-orange-500 to-red-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      {item.icon}
                    </div>

                    <span className="text-lg font-medium text-gray-800">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
