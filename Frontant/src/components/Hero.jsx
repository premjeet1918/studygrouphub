import React from "react";
import { Code, BookOpen, Lightbulb } from "lucide-react";
import BgImage from "../assets/BG834.png";
import StudentImage from "../assets/NOCH983.png";


export default function Hero() {
  return (
    <section className="relative pt-10 pb-20 overflow-hidden lg:pt-20 lg:pb-28 bg-white">

      {/* Background Blobs */}
      <div className="absolute bg-blue-100 rounded-full -top-20 -left-20 w-96 h-96 blur-3xl opacity-70 animate-pulse"></div>

      <div className="absolute bg-purple-100 rounded-full top-40 -right-20 w-96 h-96 blur-3xl opacity-70 animate-pulse"></div>

      <div className="absolute bg-pink-100 rounded-full -bottom-32 left-20 w-96 h-96 blur-3xl opacity-70 animate-pulse"></div>


      <div className="container relative z-10 grid items-center gap-12 px-6 mx-auto lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-wide text-blue-700 uppercase bg-blue-50 rounded-full">
            🚀 India's Most Trusted Learning Platform
          </span>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-6xl">
            Your Gateway to <br />

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Limitless Success
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 text-lg font-medium leading-relaxed text-gray-600 lg:text-xl lg:max-w-md lg:mx-0">
            A Computer ecosystem for students — Master
            <span className="font-bold text-gray-900"> Coding</span>, Crack
            <span className="font-bold text-gray-900"> Govt. Exams</span> and secure your
            <span className="font-bold text-gray-900"> Dream Job</span> with expert guidance.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 lg:justify-start">

            <button className="px-8 py-4 text-sm font-bold text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1">
              Start Learning
            </button>

            <button className="px-8 py-4 text-sm font-bold transition bg-white border rounded-full text-gray-700 hover:border-blue-500 hover:text-blue-600">
              View Roadmap
            </button>

          </div>


          {/* Trusted Students */}
          <div className="flex items-center justify-center gap-4 mt-10 text-sm lg:justify-start text-gray-500">

            <div className="flex -space-x-3">

              <img
                className="w-10 h-10 border-2 border-white rounded-full"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
              />

              <img
                className="w-10 h-10 border-2 border-white rounded-full"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
              />

              <img
                className="w-10 h-10 border-2 border-white rounded-full"
                src="https://randomuser.me/api/portraits/men/86.jpg"
                alt=""
              />

            </div>

            <p>
              Trusted by
              <span className="font-bold text-gray-800"> 10K Students</span>
            </p>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center mt-12 lg:mt-0">

          {/* Circle 1 */}
          <div className="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-dashed border-blue-200 rounded-full animate-spin-slow"></div>

          {/* Circle 2 */}
          <div className="absolute w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] border border-dotted border-purple-200 rounded-full animate-spin-slow"></div>


          {/* Icons */}
          <Code className="absolute top-0 left-0 text-blue-300 size-10 animate-bounce" />

          <BookOpen className="absolute bottom-10 right-0 text-purple-300 size-10 animate-bounce" />

          <Lightbulb className="absolute top-1/2 -right-5 text-yellow-400 size-10 animate-bounce" />


          {/* Background Image */}
          <img
            src={BgImage}
            alt="Students Group"
            className="absolute z-10 w-full max-w-xs opacity-90 lg:max-w-md"
          />

          {/* Main Image */}
          <img
            src={StudentImage}
            alt="Student"
            className="relative z-20 w-64 sm:w-80 lg:w-[420px] drop-shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}
