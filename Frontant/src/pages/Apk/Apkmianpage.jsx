"use client";
import React from "react";
import { motion } from "framer-motion";


// Aapke image imports
import heroimage from "../Apk/img/hero.png";
import feature from "../Apk/img/feature.png";
import simplae from "../Apk/img/single-image.jpg";
import ApkcardDownload from "./ApkcardDownload";

import {
  Download,
  Smartphone,
  Apple,
  Zap,
} from "lucide-react";


export default function NaxosLandingPage() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section with Transparent Background Image */}
      <section
        id="home"
        className="relative pt-24 pb-24 lg:pt-40 lg:pb-48 overflow-hidden text-white"
        style={{
          // Blue gradient and image combined
          backgroundImage: `linear-gradient(to bottom right, rgba(37, 99, 235, 0.85), rgba(67, 56, 202, 0.9)), url(${simplae})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax Effect
        }}
      >
        {/* Subtle Glow Overlay */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />

        {/* Decorative Light Shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -z-1" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Study Group App - Best of 2026
                </span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 tracking-tight">
                Master Your Skills <br />
                <span className="text-blue-200 underline decoration-blue-400/30">
                  In One Place
                </span>
              </h1>

              <p className="text-blue-50 text-lg mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed opacity-90">
                Aapki padhai ab aur bhi aasaan. Study Group App ke saath payein
                notes, previous year papers aur community support, sab kuch ek
                hi jagah par.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                {/* Play Store Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold shadow-2xl hover:bg-blue-50 transition-all"
                >
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  <div className="text-left leading-none">
                    <span className="text-[10px] block opacity-60 uppercase font-bold">
                      Available on
                    </span>
                    <span className="text-base">Google Play</span>
                  </div>
                </motion.button>

                {/* App Store Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left leading-none">
                    <span className="text-[10px] block opacity-60 uppercase font-bold">
                      Download on
                    </span>
                    <span className="text-base">App Store</span>
                  </div>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative"
            >
              <div className="relative z-20">
                <img
                  src={heroimage}
                  alt="Study Group App"
                  className="w-full max-w-[340px] mx-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.4)] hover:rotate-2 transition-transform duration-700"
                />
              </div>
              {/* Floating Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[80px] fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,105.74,123.6,110.15,182,104.7c60.21-5.63,116.71-24.3,173.34-40.12Z"></path>
          </svg>
        </div>
      </section>
      <ApkcardDownload />
     
      
      {/* Awesome Features Section */}
      <section id="features" className="py-28 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="text-4xl lg:text-6xl font-black mb-6 text-slate-900 tracking-tight"
            >
              Awesome Features
            </motion.h2>
            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto">
              Hamare app mein aapko milenge aise features jo aapki learning
              speed ko 2 guna badha denge. Ek baar check karein!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-20 items-center">
            {/* Left Column Features */}
            <div className="space-y-16">
              <FeatureBox
                icon="📚"
                title="Premium Notes"
                desc="Expert teachers dwara banaye gaye handwritten aur digital notes download karein."
              />
              <FeatureBox
                icon="🔒"
                title="Privacy Protected"
                desc="Aapka data aur aapki progress hamesha secure rehti hai hamare servers par."
              />
            </div>

            {/* Middle Image - Animated */}
            <motion.div
              whileInView={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-4 bg-blue-100/50 rounded-full blur-3xl -z-10" />
              <img
                src={feature}
                alt="Feature Showcase"
                className="mx-auto drop-shadow-2xl max-w-[280px]"
              />
            </motion.div>

            {/* Right Column Features (Reversed) */}
            <div className="space-y-16 lg:text-right">
              <FeatureBox
                icon="💬"
                title="Live Chat"
                desc="Apne dosto aur mentors ke saath live chat karke apne doubts turant solve karein."
                reverse
              />
              <FeatureBox
                icon="⏰"
                title="Exam Reminders"
                desc="UPBTE aur sarkari exams ke har naye notification ki update sabse pehle payein."
                reverse
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Reusable Feature Component
 */


function FeatureBox({ icon, title, desc, reverse }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-6 group cursor-default`}
    >
      <div className="w-20 h-20 shrink-0 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center text-3xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-blue-200">
        {icon}
      </div>
      <div
        className={`text-center ${reverse ? "lg:text-right" : "lg:text-left"}`}
      >
        <h4 className="font-black text-xl mb-3 text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <p className="text-slate-500 text-sm leading-relaxed font-medium">
          {desc}
        </p>
      </div>
     
    </motion.div>
  );
  
}


