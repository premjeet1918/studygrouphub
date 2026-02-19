"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Award, Users, Zap, Briefcase, GraduationCap } from "lucide-react";

const JoinTeamSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const perks = [
    { icon: <Award className="text-teal-500" />, title: "Official Certificate", desc: "Campus Ambassador ka manyak certificate" },
    { icon: <Users className="text-blue-500" />, title: "Direct Interaction", desc: "Core Admin Team ke saath kaam karne ka mauka" },
    { icon: <Zap className="text-yellow-500" />, title: "Exclusive Updates", desc: "Job aur Internship ki jankari sabse pehle" },
    { icon: <Briefcase className="text-purple-500" />, title: "LinkedIn Recognition", desc: "Professional profile ko behtar banayein" },
  ];

  return (
    <section className="relative py-24 px-6 bg-slate-50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight"
          >
            Study Group Hub <span className="text-teal-600">Campus Ambassador</span> Program 🚀
          </motion.h2>
          <p className="text-lg text-slate-600 font-medium italic">
            "Share Knowledge • Spread Help • Grow Together"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Information & Perks */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GraduationCap className="text-teal-600" /> Eligibility Criteria
              </h3>
              <ul className="space-y-3 text-slate-600 font-medium">
                <li className="flex items-center gap-2">✅ <span className="font-bold text-slate-900">Course:</span> All Diploma Branches</li>
                <li className="flex items-center gap-2">✅ <span className="font-bold text-slate-900">Year:</span> 1st, 2nd & 3rd Year Students</li>
                <li className="flex items-center gap-2">✅ <span className="font-bold text-slate-900">Selection:</span> Only 1–2 Students per college</li>
              </ul>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-2"
                >
                  {perk.icon}
                  <h4 className="font-bold text-slate-900">{perk.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{perk.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-teal-100 relative"
          >
            <div className="absolute -top-4 right-10 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold animate-bounce">
              Limited Seats!
            </div>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <CheckCircle2 size={60} className="text-teal-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
                  <p className="text-slate-500 mt-2">Hum aapki activity ke basis par jald hi contact karenge.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tight">Apply for Selection</h3>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-teal-500 transition-all outline-none font-semibold"
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-teal-500 transition-all outline-none font-semibold"
                      required
                    />
                    <input
                      type="text"
                      placeholder="College Name"
                      className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-teal-500 transition-all outline-none font-semibold"
                      required
                    />
                  </div>
                  <select className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-teal-500 transition-all outline-none font-semibold text-slate-500">
                    <option>Select Your Year</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                  </select>
                  <textarea
                    placeholder="Aap Study Group Hub ko apne college mein kaise represent karenge?"
                    className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-teal-500 transition-all outline-none font-semibold h-28"
                    required
                  ></textarea>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-teal-600 transition-all shadow-lg active:scale-95 disabled:opacity-70"
                  >
                    {loading ? "Processing..." : <>Send Application <Send size={20} /></>}
                  </button>
                  <p className="text-[10px] text-center text-slate-400 italic">
                    Selection will be based on your form response and activity level.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;