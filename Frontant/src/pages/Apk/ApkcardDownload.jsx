import React, { version } from 'react'
import {motion} from "framer-motion";
import{
    FaAndroid,
    FaWindows,
    FaApple,
    FaDownload,
    FaInfoCircle,
} from "react-icons/fa"

export default function ApkcardDownload() {
    const platforms = [
      {
        icon: (
          <FaAndroid size={40} className="text-purple-700 block mx-auto mb-4" />
        ),
        name: "Android App",
        version: "v2.2.2 . 30mb",
        status: "Recommended",
        decs: "Perfect for mobile learning with online Notes, and Live Quizzes All Study content",
        color: "bg-purple-700",
      },

      {
        icon: (
          <FaWindows size={40} className="text-purple-700 block mx-auto mb-4" />
        ),
        name: "Window Pc",
        version: "v2.2.2 . 38mb",
        status: "Desktop Version",
        decs: " Best for long study sessions on a bigger screen with full feature",
        color: "bg-purple-700",
      },

      {
        icon: (
          <FaApple size={40} className="text-purple-700 block mx-auto mb-4" />
        ),
        name: " macOS App",
        version: "macOS 10.14",
        status: "Comming Soon",
        decs: "We are actively working to bring study group to macbook",
        color: "bg-gray-400",
      },
    ];
  return (
    <section className="w-full py-16 rounded-3xl bg-white-100 transition-colors duration-500">
      {/* Title */}
      <h2 className="text-4xl md:text-4xl font-extrabold text-center text-gray-800 mb-4">
        {" "}
        DOWNLOAD STUDY GROUP
      </h2>
      <p className="text-center text-gray-600 mb-12  mx-auto px-6 font-semibold ">
        Choose your platform and start your learning journey width our dedicated
        application
      </p>
      {/* Card Grid*/}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {platforms.map((p, index) => (
          <motion.dev
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white border border-purple-300 rounded-2xl shadow-lg p-8 text-center transition-all duration-500 flex flex-col h-full"
          >
            {/* ICON */}
            <div className='flex justify-center '> {p.icon}</div>
            {/*Platform */}
            <h3 className='text=xl font-bold text-gray-900 mb-1'>{p.name}</h3>
            {/*status */}
            <p className='text-purple-800 font-semibold text-sm mb-3 uppercase tracking-wider'>
              {p.status}
            </p>
            {/*Desceptrion*/}
            <p className='text-gray-600 text-sm mb-6 flex-grow'> {p.decs}</p>
            {/* virsion info*/}
             <div className="bg-purple-50 py-2 px-4 rounded-xl mb-6 flex items-center justify-center gap-2 text-[11px] font-bold text-purple-700 uppercase">
              <FaInfoCircle /> {p.version}
            </div>
            {/* download button*/}
           <button   disabled={p.name === "macOS App"}
              className={`w-full py-3 rounded-xl font-bold text-white flex
                items-center justify-center gap-2 transition-all shadow-md ${
                  p.name === "macOS App"
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-purple-700 hover:bg-purple-800 active:scale-95"
                }`}
            >
            <FaDownload size={14}/>
            {p.name==="mocOS App " ? "Comming Soon" : "Donload Now"}
           </button>
          </motion.dev>
        ))}
      </div>
      {/* Miniml requirments footor */}
      <div className='mt-12 text-center text-gray-500 text-xs'>
         <p>Minimum Requirements: Android 5.0+ | Windows 8+ | macOS 10.14+</p>
      </div>
    </section>
  );
}
