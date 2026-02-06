import React from "react";
import {
  FaBullhorn,
  FaBriefcase,
  FaHistory,
  FaCheckSquare,
  FaVideo,
  FaFilePdf,
} from "react-icons/fa";

export default function NoticesFormsUpdates() {
  const notices = [
    {
      date: "24",
      month: "DEC",
      title: "Winter Vacation Notice for all offline batches",
      author: "Admin Team",
    },
    {
      date: "22",
      month: "DEC",
      title: "Updated Time-table for Class 12th Board Special",
      author: "Academic Head",
    },
    {
      date: "20",
      month: "DEC",
      title: "Library closed on Sunday for maintenance.",
      author: "Librarian",
    },
    {
      date: "18",
      month: "DEC",
      title: "Parents meeting scheduled for Primary section.",
      author: "Principal",
    },
  ];

  const forms = [
    {
      title: "SSC CGL 2024 Online Form",
      desc: "Eligibility: Graduate | Age: 18–30",
      tag: "",
      color: "",
    },
    {
      title: "JEE Main 2025 Registration Open",
      desc: "For B.Tech/B.E. Admissions",
      tag: "ENTRANCE",
      color: "bg-orange-500",
    },
    {
      title: "IBPS PO Mains Result Declared",
      desc: "Check your scorecard now",
      tag: "BANKING",
      color: "bg-green-500",
    },
    {
      title: "National Merit Scholarship Form",
      desc: "For Class 10th & 12th Students",
      tag: "SCHOLARSHIP",
      color: "bg-purple-500",
    },
  ];

  const updates = [
    {
      icon: <FaCheckSquare className="text-green-600 text-xl mt-1" />,
      title: "App Update v2.0 Released",
      desc: "Offline mode & dark theme added.",
      link: "Download APK",
      linkColor: "text-blue-600",
    },
    {
      icon: <FaVideo className="text-red-600 text-xl mt-1" />,
      title: "New Physics Series on YouTube",
      desc: "Chapter 1–5 revision uploaded.",
      link: "Watch Now",
      linkColor: "text-red-600",
    },
    {
      icon: <FaFilePdf className="text-orange-600 text-xl mt-1" />,
      title: "Previous Year Papers Uploaded",
      desc: "CBSE 10th & 12th papers available.",
      link: "",
    },
  ];

  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 place-items-center">

        {/* Notices */}
        <div className="w-[350px] bg-white rounded-2xl p-4 shadow-md border-t-4 border-blue-600">
          <div className="flex justify-between items-center bg-blue-50 text-blue-600 p-3 rounded-xl">
            <h3 className="font-semibold flex items-center gap-2">
              <FaBullhorn /> Notices
            </h3>
            <span className="bg-blue-100 text-xs px-3 py-1 rounded-full">
              Recent
            </span>
          </div>

          {notices.map((item, index) => (
            <div key={index} className="flex gap-3 py-3 border-b last:border-none">
              <div className="text-center">
                <div className="text-xs text-gray-500">{item.month}</div>
                <div className="text-lg font-bold text-blue-600">
                  {item.date}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.author}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Forms */}
        <div className="w-[350px] bg-white rounded-2xl p-4 shadow-md border-t-4 border-red-600">
          <div className="flex justify-between items-center bg-red-50 text-red-600 p-3 rounded-xl">
            <h3 className="font-semibold flex items-center gap-2">
              <FaBriefcase /> Forms & Vacancy
            </h3>
            <span className="bg-red-100 text-xs px-3 py-1 rounded-full">
              LIVE
            </span>
          </div>

          {forms.map((item, index) => (
            <div key={index} className="py-3 border-b last:border-none">
              {item.tag && (
                <span
                  className={`${item.color} text-white text-xs px-2 py-1 rounded`}
                >
                  {item.tag}
                </span>
              )}
              <h4 className="text-sm font-semibold mt-1">{item.title}</h4>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Updates */}
        <div className="w-[350px] bg-white rounded-2xl p-4 shadow-md border-t-4 border-green-600">
          <div className="bg-green-50 text-green-600 p-3 rounded-xl font-semibold flex items-center gap-2">
            <FaHistory /> Updates & News
          </div>

          {updates.map((item, index) => (
            <div key={index} className="flex gap-3 py-3 border-b last:border-none">
              {item.icon}
              <div>
                <h4 className="text-sm font-semibold">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>

                {item.link && (
                  <a
                    href="#"
                    className={`text-sm font-semibold ${item.linkColor}`}
                  >
                    {item.link}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
