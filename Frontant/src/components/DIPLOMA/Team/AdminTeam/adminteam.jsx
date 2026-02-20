"use client";
import React from "react";
import { motion } from "framer-motion";

// Images Import

import srhacker from "../../assets/images/srhacker.jpg";
import rajsharma from "../../assets/images/raj.jpg";

import {
  Github,
  Linkedin,
  Twitter,
  Globe,
  ShieldCheck,
  Award,
} from "lucide-react";

const AdminTeam = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // 8 Members with unique images and social links
  const developers = [
    {
      name: "Premjeet Rajbhar",
      role: "Full Stack Expert",
      skill: "Lead Developer",
      image: srhacker,
      links: {
        linkedin: "https://linkedin.com/in/premjeet",
        github: "https://github.com/srhacker",
        twitter: "#",
        web: "#",
      },
    },
    {
      name: "Ritik Panday",
      role: "Operations Expert",
      skill: "Co-Founder",
      image: rajsharma,
      links: {
        linkedin: "https://linkedin.com/in/ritik",
        github: "#",
        twitter: "#",
        web: "#",
      },
    },
    {
      name: "Er Suryansh katiyar ",
      role: "Management Expert",
      skill: "General Manager",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Raj Sharma",
      role: "Technical Expert",
      skill: "System Architect",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Er Surendra Kumar",
      role: "CS Specialist",
      skill: "Lead Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " HariOm Patel",
      role: "Mechanical Specialist",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: "Shiva Yadav",
      role: "Electrical Specialist",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Rishabh Pandey",
      role: "Electronic",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Aditya ",
      role: "Electronic",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: "Sidhu Paswan",
      role: "Electronic",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Shivam ",
      role: "Electronic",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Gaurav Rajbhar",
      role: "Electronic",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Sandeep ",
      role: "Electronic",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
    {
      name: " Rajnish Yadav",
      role: "Electronic",
      skill: "Diploma Admin",
      image: null,
      links: { linkedin: "#", github: "#", twitter: "#", web: "#" },
    },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6 font-sans relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:30px_30px] -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-600 text-xs font-black uppercase tracking-widest mb-6 border border-teal-100">
            <Award size={14} /> Diploma Expert Council
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Our Core <span className="text-teal-600">Admin Team</span>
          </h1>
          <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Meet our 8 dedicated diploma experts and administrators.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {developers.map((dev, idx) => (
            <TeamMember key={idx} dev={dev} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

/* --- HELPER COMPONENTS --- */

const HexagonImage = ({ src, name }) => (
  <div className="w-40 h-40 relative group flex items-center justify-center">
    <div
      className="w-full h-full bg-slate-100 border-2 border-teal-100 shadow-inner overflow-hidden"
      style={{
        clipPath:
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      }}
    >
      <img
        src={
          src ||
          `https://ui-avatars.com/api/?name=${name.split(" ").join("+")}&background=0d9488&color=fff&bold=true`
        }
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
      />
    </div>
  </div>
);

const TeamMember = ({ dev }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    whileHover={{ y: -10 }}
    className="flex flex-col items-center p-6 rounded-3xl transition-all duration-300 group"
  >
    <div className="mb-6">
      <HexagonImage src={dev.image} name={dev.name} />
    </div>

    <div className="text-center">
      <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">
        {dev.name}
      </h3>
      <p className="text-teal-600 font-bold text-[10px] uppercase tracking-widest mt-1">
        {dev.role}
      </p>
      <div className="h-0.5 w-10 bg-teal-100 mx-auto my-3 rounded-full"></div>
      <p className="text-slate-400 text-xs italic font-medium">{dev.skill}</p>
    </div>

    {/* Dynamic Social Links */}
    <div className="flex gap-4 mt-6">
      <SocialIcon
        href={dev.links.linkedin}
        Icon={Linkedin}
        color="hover:text-[#0077b5]"
      />
      <SocialIcon
        href={dev.links.twitter}
        Icon={Twitter}
        color="hover:text-[#1DA1F2]"
      />
      <SocialIcon
        href={dev.links.github}
        Icon={Github}
        color="hover:text-[#333]"
      />
      <SocialIcon
        href={dev.links.web}
        Icon={Globe}
        color="hover:text-teal-500"
      />
    </div>
  </motion.div>
);

const SocialIcon = ({ href, Icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-slate-300 ${color} transition-all duration-300 transform hover:scale-125`}
  >
    <Icon size={16} />
  </a>
);

export default AdminTeam;
