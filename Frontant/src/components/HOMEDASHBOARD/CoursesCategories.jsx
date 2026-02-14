import React from "react";

// ✅ All icons from FA6 (Best solution)
import {
  FaSchool,
  FaUser,
  FaBook,
  FaPen,
  FaGraduationCap,
  FaTable,
  FaDna,
  FaSun,
  FaRotateRight,
  FaHammer,
  FaFlask,
  FaChartLine,
  FaPalette,
  FaBuildingColumns,
  FaPenToSquare,
  FaChevronRight,
} from "react-icons/fa6";

export default function CoursesCategories() {

  const entranceExams = [
    { name: "JEE MAINS", icon: <FaTable /> },
    { name: "NEET", icon: <FaDna /> },
    { name: "CUET UG", icon: <FaBuildingColumns /> },
    { name: "CUET PG", icon: <FaGraduationCap /> },
    { name: "GATE", icon: <FaSun /> },
    { name: "LEET", icon: <FaRotateRight /> },
    { name: "JEECUP", icon: <FaHammer /> },
  ];

  return (
    <div className="w-full py-10 bg-white  ">
      {/* Heading */}
      <div className="max-w-6xl px-4 mx-auto mt-6 text-center">
        <h4 className="text-4xl font-semibold">Our Courses & Categories</h4>

        <p className="text-lg text-gray-500">
          Find The right Path for your education
        </p>
      </div>

      <div className="max-w-6xl px-4 mx-auto mt-10">
        {/* School Education */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaSchool className="text-2xl text-blue-600" />
            <h2 className="pb-2 text-3xl font-semibold border-b-2 border-blue-200">
              School Education
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="p-6 text-center transition bg-gray-50 shadow-sm rounded-xl hover:shadow-md">
              <FaUser className="mx-auto mb-2 text-3xl text-orange-500" />
              <h3 className="font-semibold">Primary</h3>
              <p className="text-sm text-gray-500">Class 1st to 5th</p>
            </div>

            <div className="p-6 text-center transition bg-gray-50 shadow-sm rounded-xl hover:shadow-md">
              <FaBook className="mx-auto mb-2 text-3xl text-blue-500" />
              <h3 className="font-semibold">Upper Primary</h3>
              <p className="text-sm text-gray-500">Class 6th to 8th</p>
            </div>

            <div className="p-6 text-center transition bg-gray-50 shadow-sm rounded-xl hover:shadow-md">
              <FaPen className="mx-auto mb-2 text-3xl text-purple-500" />
              <h3 className="font-semibold">Secondary</h3>
              <p className="text-sm text-gray-500">Class 9th & 10th</p>
            </div>

            <div className="p-6 text-center transition bg-gray-50 shadow-sm rounded-xl hover:shadow-md">
              <FaGraduationCap className="mx-auto mb-2 text-3xl text-green-500" />
              <h3 className="font-semibold">Senior Secondary</h3>
              <p className="text-sm text-gray-500">Class 11th & 12th</p>
            </div>
          </div>
        </div>

        {/* Entrance Exams */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FaPenToSquare className="text-2xl text-blue-600" />
            <h2 className="pb-2 text-3xl font-semibold border-b-2 border-blue-200">
              Entrance Exams
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {entranceExams.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 transition border shadow-sm rounded-xl hover:shadow-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 text-lg bg-gray-100 rounded-full">
                    {item.icon}
                  </div>

                  <span className="font-semibold">{item.name}</span>
                </div>

                <FaChevronRight className="text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Graduation */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <FaBuildingColumns className="text-2xl text-blue-600" />

            <h2 className="pb-2 text-3xl font-semibold border-b-2 border-blue-200">
              Graduation (After 12th)
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Science */}
            <div className="p-4 transition border bg-blue-50 rounded-xl hover:shadow-md">
              <FaFlask className="text-xl text-blue-600" />

              <span className="px-3 py-1 ml-2 text-xs text-white bg-blue-500 rounded-full">
                Science
              </span>

              <h3 className="mt-3 font-semibold">UG Science</h3>

              <div className="mt-3 space-y-2">
                <div className="p-2 bg-white rounded shadow-sm">BSc</div>
                <div className="p-2 bg-white rounded shadow-sm">BCA</div>
              </div>
            </div>

            {/* Commerce */}
            <div className="p-4 transition border bg-yellow-50 rounded-xl hover:shadow-md">
              <FaChartLine className="text-xl text-yellow-600" />

              <span className="px-3 py-1 ml-2 text-xs text-white bg-yellow-500 rounded-full">
                Commerce
              </span>

              <h3 className="mt-3 font-semibold">UG Commerce</h3>

              <div className="mt-3 space-y-2">
                <div className="p-2 bg-white rounded shadow-sm">B.Com</div>
                <div className="p-2 bg-white rounded shadow-sm">BBA</div>
                <div className="p-2 bg-white rounded shadow-sm">BFM</div>
              </div>
            </div>

            {/* Arts */}
            <div className="p-4 transition border bg-pink-50 rounded-xl hover:shadow-md">
              <FaPalette className="text-xl text-pink-600" />

              <span className="px-3 py-1 ml-2 text-xs text-white bg-pink-500 rounded-full">
                Arts
              </span>

              <h3 className="mt-3 font-semibold">UG Arts</h3>

              <div className="mt-3 space-y-2">
                <div className="p-2 bg-white rounded shadow-sm">BA</div>
                <div className="p-2 bg-white rounded shadow-sm">Fine Arts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
