import React from "react";
import { FaCode, FaUserShield, FaTools, FaUserGraduate } from "react-icons/fa";

export default function CoreTeam() {
  const teams = [
    {
      icon: (
        <FaUserShield
          size={40}
          className="text-purple-700 block mx-auto mb-4"
        />
      ),
      team: "Admin Team",
      role: "Management & Strategy",
      desc: "Leading the vision and ensuring smooth operations of the platform.",
    },
    {
      icon: <FaCode size={40} className="text-purple-700 block mx-auto mb-4" />,
      team: "Tech Team",
      role: "Full Stack Developer",
      desc: "Building the core platform with modern technologies and clean code.",
    },
    {
      icon: (
        <FaTools size={40} className="text-purple-700 block mx-auto mb-4" />
      ),
      team: "StudyGroup Build Master",
      role: "Content Architect",
      desc: "Structuring and managing high-quality study materials for students.",
    },
    {
      icon: (
        <FaUserGraduate
          size={40}
          className="text-purple-700 block mx-auto mb-4"
        />
      ),
      team: "Edu Team",
      role: "Education Expert",
      desc: "Focused on providing the best learning guidance and academic resources.",
    },
  ];

  return (
    <section className="w-full py-16 rounded-3xl bg-purple-100 transition-colors duration-500">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">
        Our Core Team
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 ">
        {teams.map((t, index) => (
          <div
            key={index}
            className="bg-white border border-purple-300 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-500"
          >
            {/* icon*/}
            <div className="flex justify-center">{t.icon}</div>
            {/* Team Name */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{t.team}</h3>
            {/* ROLE */}
            <p className="text-purple-800 font-medium mb-2"> {t.role}</p>
            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm"> {t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
