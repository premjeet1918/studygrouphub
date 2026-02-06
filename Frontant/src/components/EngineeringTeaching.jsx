import React from "react";
import { FaSun, FaBook } from "react-icons/fa";

export default function EngineeringTeaching() {
  return (
    <div className="flex justify-center w-full py-10 bg-white">
      <div className="w-full max-w-6xl px-4">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Engineering & Tech */}
          <div className="p-5 bg-white border shadow-sm rounded-2xl hover:shadow-md transition">
            
            <div className="flex items-center gap-2 mb-4">
              <FaSun className="text-lg text-blue-600" />
              <h2 className="text-lg font-semibold">
                Engineering & Tech
              </h2>
            </div>

            <div className="space-y-3">

              {[
                "B.Tech (Bachelor of Technology)",
                "ITI Courses",
                "Diploma (Polytechnic)",
                "Bio Tech",
                "M.Tech (Master of Technology)",
              ].map((course, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-blue-50 hover:bg-blue-100 transition"
                >
                  <span>{course}</span>
                  <span className="text-gray-400">{">"}</span>
                </div>
              ))}

            </div>

          </div>


          {/* Teaching Program */}
          <div className="p-5 bg-white border shadow-sm rounded-2xl hover:shadow-md transition">

            <div className="flex items-center gap-2 mb-4">
              <FaBook className="text-lg text-orange-500" />
              <h2 className="text-lg font-semibold">
                Teaching Program
              </h2>
            </div>

            <div className="space-y-3">

              {[
                "B.Ed (Bachelor of Education)",
                "D.El.Ed (Diploma in Elem. Ed)",
                "M.Ed (Master of Education)",
              ].map((course, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg cursor-pointer bg-orange-50 hover:bg-orange-100 transition"
                >
                  <span>{course}</span>
                  <span className="text-gray-400">{">"}</span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
