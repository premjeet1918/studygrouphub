import React from "react";
import {
  FaHeart,
  FaSun,
  FaGraduationCap,
  FaBookMedical,
  FaArrowRight,
} from "react-icons/fa";

export default function MedicalHealth() {
  const data = [
    {
      title: "Diploma",
      icon: <FaSun />,
      border: "border-red-400",
      titleColor: "text-red-500",
      bg: "bg-red-50",
      courses: ["D Pharma", "ANM / GNM"],
    },
    {
      title: "Undergraduate",
      icon: <FaGraduationCap />,
      border: "border-pink-400",
      titleColor: "text-pink-500",
      bg: "bg-pink-50",
      courses: ["MBBS & BDS", "B Pharma & Nursing", "BAMS / BHMS"],
    },
    {
      title: "Paramedical",
      icon: <FaBookMedical />,
      border: "border-orange-400",
      titleColor: "text-orange-500",
      bg: "bg-orange-50",
      courses: [
        "BMLT (Lab Tech)",
        "BPT (Physiotherapy)",
        "BSc Radiology",
      ],
    },
    {
      title: "Post Graduate",
      icon: <FaGraduationCap />,
      border: "border-red-600",
      titleColor: "text-red-600",
      bg: "bg-red-50",
      courses: ["MD / MS", "M Pharma", "MPH (Public Health)"],
    },
  ];

  return (
    <div className="w-full flex justify-center bg-[#fff3f2] py-12">
      <div className="w-full max-w-6xl px-4">

        {/* Heading */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow">
            <FaHeart className="text-xl text-red-500" />
            <h2 className="text-lg font-semibold">
              Medical & Health Science
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {data.map((item, index) => (
            <div
              key={index}
              className={`p-5 bg-white border-t-4 ${item.border} shadow-sm rounded-2xl hover:shadow-md transition`}
            >
              <h3
                className={`mb-4 font-semibold flex items-center gap-2 ${item.titleColor}`}
              >
                {item.icon} {item.title}
              </h3>

              <div className="space-y-3">
                {item.courses.map((course, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-lg ${item.bg} hover:scale-[1.02] transition cursor-pointer`}
                  >
                    <span>{course}</span>
                    <FaArrowRight className="text-sm" />
                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
