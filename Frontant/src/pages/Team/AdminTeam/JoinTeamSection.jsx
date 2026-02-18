"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, UserPlus, MessageSquare } from "lucide-react";

const JoinTeamSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Yahan aap EmailJS ya backend API call kar sakte hain
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-20 px-6 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Become an <span className="text-teal-600">Admin</span>
            </h2>
            <p className="text-slate-500 font-medium mb-8">
              Kya aapke paas special skills hain? Hamari team ka hissa banein
              aur diploma students ki help karein. Form fill karein, hum aapko
              mail par contact karenge.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-700 font-bold italic">
                <UserPlus className="text-teal-500" size={20} /> Join 8+ Experts
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-bold italic">
                <MessageSquare className="text-teal-500" size={20} /> Direct
                Mentor Support
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-teal-500 font-black text-xl mb-2">
                  Application Sent!
                </div>
                <p className="text-slate-400 text-sm italic">
                  Apna email check karein, jaldi hi hum connect karenge.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Aapka Naam"
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none text-slate-900 font-medium"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none text-slate-900 font-medium"
                  required
                />
                <select className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none text-slate-400 font-medium">
                  <option>Apni Branch Chunein</option>
                  <option>CS / IT</option>
                  <option>Mechanical</option>
                  <option>Electrical</option>
                </select>
                <textarea
                  placeholder="Aap team mein kyun judna chahte hain?"
                  className="w-full px-5 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-teal-500 outline-none text-slate-900 font-medium h-24"
                ></textarea>
                <button className="w-full bg-slate-900 text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-teal-600 transition-colors shadow-lg shadow-teal-100">
                  Submit Application <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
