import React from "react";
import {
  Code,
  BookOpen,
  Lightbulb,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

import BgImage from "../../assets/images/BG834.PNG"
import StudentImage from "../../assets/images/NOCH983.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-14 lg:pb-28 bg-dot-pattern">
      {/* BACKGROUND BLOBS */}
      <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-blue-200 rounded-full -top-20 -left-20 blur-3xl opacity-40"></div>
      <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-purple-200 rounded-full top-32 -right-20 blur-3xl opacity-40"></div>
      <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-pink-200 rounded-full -bottom-20 left-20 blur-3xl opacity-40"></div>

      {/* CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-xs sm:text-sm font-semibold text-blue-700 bg-blue-100 rounded-full shadow-sm">
            Trusted by 10,000+ Students Across India
          </div>

          {/* HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Build Your Future with
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Smart Learning & Skills
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Join India's fastest growing learning platform. Master
            <span className="font-semibold text-gray-900"> Coding</span>,
            prepare for
            <span className="font-semibold text-gray-900">
              {" "}
              Government Exams
            </span>
            , and unlock
            <span className="font-semibold text-gray-900">
              {" "}
              high-paying career opportunities
            </span>
            with expert guidance and structured roadmaps.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
            <button className="group px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
              Start Learning Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

            <button className="group px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Roadmap
            </button>
          </div>

          {/* TRUST SECTION */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6 sm:mt-8 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full"
                src="https://randomuser.me/api/portraits/women/44.jpg"
              />
              <img
                className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white rounded-full"
                src="https://randomuser.me/api/portraits/men/86.jpg"
              />
            </div>

            <p className="text-xs sm:text-sm text-gray-600">
              Trusted by
              <span className="font-bold text-gray-900"> 10,000+ students</span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center order-1 lg:order-2 mb-6 lg:mb-0">
          {/* CIRCLES */}
          <div className="absolute w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[420px] lg:h-[420px] border border-dashed border-blue-300 rounded-full animate-spin-slow"></div>

          <div className="absolute w-[140px] h-[140px] sm:w-[220px] sm:h-[220px] lg:w-[340px] lg:h-[340px] border border-dotted border-purple-300 rounded-full animate-spin-slow"></div>

          {/* FLOATING ICONS */}
          <Code className="absolute top-2 left-4 text-blue-500 w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />

          <BookOpen className="absolute bottom-6 right-2 text-purple-500 w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />

          <Lightbulb className="absolute top-1/2 -right-1 text-yellow-500 w-6 h-6 sm:w-8 sm:h-8 animate-bounce" />

          {/* BG IMAGE */}
          <img
            src={BgImage}
            className="absolute z-10 w-40 sm:w-60 lg:w-80 opacity-90"
          />

          {/* STUDENT IMAGE */}
          <img
            src={StudentImage}
            className="relative z-20 w-48 sm:w-64 md:w-72 lg:w-[420px] drop-shadow-2xl animate-float"
          />
        </div>
      </div>
      
    </section>
    
  );
}
