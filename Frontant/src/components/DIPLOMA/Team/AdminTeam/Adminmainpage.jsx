import React from "react";
import { motion } from "framer-motion";
import JoinTeamSection from "./JoinTeamSection";

import {
  ShieldCheck,
  Zap,
  Users,
  ArrowRight,
  MousePointer2,
} from "lucide-react";
import AdminTeam from "./adminteam";

const AdminHero = () => {
  // Animation Variants

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floating = {
    initial: { y: 0 },
    animate: {
      y: [0, -20, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-32 md:py-18 flex items-center justify-center">
      {/* --- ADVANCED BACKGROUND LAYER --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Modern Mesh Gradient Glows */}
        <motion.div
          animate={{ x: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-[10%] -left-[5%] w-[600px] h-[600px] bg-teal-100/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-[20%] -right-[5%] w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[130px]"
        />

        {/* Tech Geometric Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[size:40px_40px] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* --- FLOATING DECORATIONS --- */}
      <motion.div
        variants={floating}
        initial="initial"
        animate="animate"
        className="absolute top-40 left-[10%] hidden lg:block"
      >
        <div className="p-4 bg-white shadow-2xl rounded-2xl border border-slate-100 flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-200">
            <Zap size={20} fill="currentColor" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-black uppercase text-slate-400">
              Status
            </p>
            <p className="text-sm font-bold text-slate-800">Direct Action</p>
          </div>
        </div>
      </motion.div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-slate-900 text-white text-xs font-bold uppercase tracking-[0.2em] mb-12 shadow-2xl shadow-slate-200"
        >
          <ShieldCheck size={16} className="text-teal-400" />
          The Leadership Panel
        </motion.div>

        {/* Hero Heading */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] tracking-tighter">
            Architects of <br />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-700">
                StudyGroupHub
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-3 bg-teal-100/60 -rotate-1 -z-0 rounded-full"></div>
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Meet the minds behind the platform. Dedicated leaders and experts
          redefining educational standards for diploma students in 2026.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="group relative px-10 py-5 rounded-2xl bg-teal-600 text-white font-bold text-lg overflow-hidden transition-all hover:bg-teal-700 shadow-2xl shadow-teal-200">
            <span className="relative z-10 flex items-center gap-3">
              Explore Leadership{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>

          <button className="px-10 py-5 rounded-2xl bg-white border-2 border-slate-100 text-slate-700 font-bold text-lg flex items-center gap-3 hover:bg-slate-50 hover:border-slate-200 transition-all">
            <Users size={20} />
            Our Vision
          </button>
        </motion.div>

        {/* Interactive Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-20 text-slate-400 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100"
        >
          <MousePointer2 size={24} />
          <span className="text-[10px] uppercase font-black tracking-widest">
            Scroll to meet them
          </span>
        </motion.div>
        <AdminTeam />
        <JoinTeamSection/>
       
      </div>
    </section>
  );
};

export default AdminHero;
