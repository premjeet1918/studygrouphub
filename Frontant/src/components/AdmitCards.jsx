import React from "react";

export default function AdmitCards() {
  const cards = [
    {
      title: "RRB Group D Exam City Admit Card",
      color: "bg-red-600",
      hover: "hover:bg-red-700",
      link: "#",
    },
    {
      title: "RRB Group D Exam City Admit Card",
      color: "bg-blue-700",
      hover: "hover:bg-blue-800",
      link: "#",
    },
    {
      title: "RRB Group D Exam City Admit Card",
      color: "bg-fuchsia-500",
      hover: "hover:bg-fuchsia-600",
      link: "#",
    },
    {
      title: "RRB Group D Exam City Admit Card",
      color: "bg-orange-400",
      hover: "hover:bg-orange-500",
      link: "#",
    },
    {
      title: "RRB Group D Exam City Admit Card",
      color: "bg-pink-800",
      hover: "hover:bg-pink-900",
      link: "#",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="flex flex-wrap justify-center gap-6 px-4">

        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            className={`
              ${card.color} ${card.hover}
              w-64 h-20
              flex items-center justify-center
              text-white font-bold text-center
              rounded-2xl shadow-md
              transition duration-300
              hover:scale-105 hover:shadow-lg
              active:scale-95
              cursor-pointer
              px-4
            `}
          >
            {card.title}
          </a>
        ))}

      </div>
    </section>
  );
}
