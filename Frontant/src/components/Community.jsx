import React from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
  FaShareAlt,
} from "react-icons/fa";

export default function Community() {
  const communityLinks = [
    {
      title: "Telegram Channel",
      description: "Get instant notes & PDF",
      icon: <FaTelegramPlane />,
      bg: "bg-blue-100",
      text: "text-blue-500",
      hoverBg: "group-hover:bg-blue-500",
      hoverText: "group-hover:text-white",
      link: "#",
    },
    {
      title: "Whatsapp Channel",
      description: "Daily Update & News",
      icon: <FaWhatsapp />,
      bg: "bg-green-100",
      text: "text-green-500",
      hoverBg: "group-hover:bg-green-500",
      hoverText: "group-hover:text-white",
      link: "#",
    },
    {
      title: "Youtube Channel",
      description: "Video Lectures & Tutorials",
      icon: <FaYoutube />,
      bg: "bg-red-100",
      text: "text-red-500",
      hoverBg: "group-hover:bg-red-500",
      hoverText: "group-hover:text-white",
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">

        {/* Heading */}
        <h2 className="mb-10 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          <FaShareAlt className="inline mr-2 text-blue-600" />
          Join Our Community
        </h2>

        {/* Cards */}
        <div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          {communityLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group flex items-center p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${item.bg} ${item.text} rounded-full flex items-center justify-center text-2xl transition ${item.hoverBg} ${item.hoverText}`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div className="ml-4">
                <h3 className="font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
