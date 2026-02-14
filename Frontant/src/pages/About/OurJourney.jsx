import {motion} from "framer-motion"
import React from 'react'


export default function OurJourney() {
  const journey = [
    {
      year: "2023",
      title: "The Beginning ",
      desc: "Started Study Group with a vision to help diploma students access quality study materials for free ",
    },
    {
      year: "2024",
      title: "Growth ",
      desc: "Reached our first milestone of 1000 active users and uploaded 100+ study materials.",
    },
    {
      year: "2025",
      title: "The Beginning ",
      desc: "Expanded to 2000+ users and launched WhatsApp and Telegram communities for better student interaction. ",
    },
    {
      year: "2026",
      title: "The Beginning ",
      desc: "Achieved 5000+ active users and 500+ study materials, becoming the largest free study resource platform for diploma students.",
    },
    {
      year: "2027",
      title: "The Beginning ",
      desc: "Planning to expand to more states, add video tutorials, and create a mobile app for better accessibility.",
    },
  ];

  return (
    <section className="w-full py-16 rounded-3xl   transition-colors duration-500 ">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4 transition-colors duration-500">
        Our Journey
      </h2>
      <p className="text-center text-base md:text-lg font-medium text-gray-600 leading-relaxed max-w-2xl mx-auto pb-20 transition-colors duration-500">
        Making{" "}
        <span className="text-purple-600 font-semibold "> animations </span>
        simple , engaging , and accessible for eery Devloper
      </p>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-purple-600  md:transform md: -translate-x-1/2"></div>
        {journey.map((item, index) => {
          const isLeft = index % 2 === 0;
          const rowAlignMd = isLeft ? " md:justify-start" : "md:justify-end";
          const sideSpacing = isLeft
            ? " ml-12 md:ml-14 md:mr-0 "
            : "ml-12 md:mr-14 md:ml-0";
          return (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-16 flex w-full items-center justify-start ${rowAlignMd}`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 top-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-5 h-5 md:w-6 md:h-6 bg-purple-600 dark:bg-purple-400 rounded-full border-4 border-white dark:border-blue-500 z-10"></div>

              {/* Card */}
              <div
                className={`bg-white  shadow-lg rounded-2xl p-6 md:p-8 w-full md:w-[26rem] border-t-4 border-purple-600 dark:border-purple-400 ${sideSpacing}`}
              >
                <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400">
                  {item.year}
                </h3>
                <h4 className="text-xl font-semibold text-gray-900  mt-2">
                  {item.title}
                </h4>
                <p className="mt-3 text-black d leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
