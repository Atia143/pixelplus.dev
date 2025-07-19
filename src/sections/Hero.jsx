// Hero.jsx

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaArrowLeft, FaStar, FaHandshake, FaChartLine } from "react-icons/fa";

/**
 * Hero section: premium, conversion-focused, and visually unique.
 * Desktop-optimized: generous whitespace, clear hierarchy, large readable text, and strong CTA.
 */
export default function Hero({ onLeadClick }) {
  return (
    <motion.section
      id="why-pixel"
      dir="rtl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative py-36 px-8 md:px-16 lg:px-32 xl:px-48 overflow-hidden snap-start"
    >
      {/* Background gradients and floating elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B0E1C] via-[#111A2E] to-[#1E2B46] opacity-[0.96]" />
      <div className="absolute top-[10%] left-[60%] w-[500px] h-[500px] bg-[#F0B6FF] opacity-10 rounded-full blur-[180px] z-0" />
      <div className="absolute bottom-[5%] right-[10%] w-[400px] h-[400px] bg-[#6CE7F3] opacity-10 rounded-full blur-[160px] z-0" />
      <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-full blur-[2px] animate-float-slow" />
      <div className="absolute bottom-[15%] right-[12%] w-4 h-4 bg-white/10 rounded-full blur-[3px] animate-float-medium" />
      <div className="absolute top-[40%] right-[30%] w-2 h-2 bg-white/25 rounded-full blur-[1px] animate-float-fast" />
      <div className="absolute top-[60%] left-1/3 w-[400px] h-[400px] bg-[#C1D6FF] opacity-10 rounded-full blur-[160px] z-0" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-24 text-white">
        {/* Textual content */}
        <motion.div
          className="lg:w-3/5 space-y-12 text-center lg:text-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* Conceptual Icon */}
          <div className="flex justify-center lg:justify-end mb-2">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-tr from-[#6CE7F3] via-[#F0B6FF] to-[#96B3FF] shadow-lg">
              <FaHandshake className="w-10 h-10 text-[#1E2B46]" />
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-extrabold leading-tight tracking-tight mb-4">
            Landing Pages That Actually&nbsp;
            <motion.span
              className="font-extrabold bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent drop-shadow-lg"
              animate={{ scale: [1, 1.07, 1], opacity: [1, 0.85, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
              whileHover={{ scale: 1.12 }}
            >
              Convert
            </motion.span>
            
          </h1>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed tracking-wide mt-2 mb-6 lg:mb-8 lg:mt-4">
            דפי נחיתה לעסקים שרוצים יותר לקוחות, לא רק קליקים 
          </p>

          {/* 5-Star Animated Rating */}
          <div className="flex items-center justify-center lg:justify-end gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.8, opacity: 0.7 }}
                animate={{ scale: 1.1, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              >
                <FaStar className="text-yellow-400 w-7 h-7 drop-shadow" />
              </motion.span>
            ))}
            <span className="ml-2 text-lg text-gray-200 font-bold">5.0</span>
            <span className="text-base text-gray-400 mr-2">מבוסס על 47 ביקורות</span>
          </div>

    

          {/* CTA Button */}
          <motion.button
            type="button"
            onClick={onLeadClick}
            whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(108,231,243,0.25)" }}
            className="mt-12 inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-gradient-to-l from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] text-black font-bold text-2xl shadow-xl transition-all duration-200 hover:from-[#F0B6FF] hover:to-[#6CE7F3] focus:outline-none focus:ring-2 focus:ring-[#6CE7F3]"
          >
            לשיחת ייעוץ חינם
            <FaArrowLeft className="w-6 h-6" />
          </motion.button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 mt-12">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg shadow-sm">
              <FaChartLine className="text-[#6CE7F3] w-6 h-6" />
              <span className="text-base text-gray-300 font-semibold">+94% שיפור המרות</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg shadow-sm">
              <FaHandshake className="text-[#F0B6FF] w-6 h-6" />
              <span className="text-base text-gray-300 font-semibold">+100 לקוחות מרוצים</span>
            </div>
          </div>
        </motion.div>

        {/* Mockup with animated border */}
        <div className="w-full max-w-[400px] mx-auto order-first lg:order-last flex justify-center items-center">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.18}
            scale={1.03}
            transitionSpeed={250}
            tiltMaxAngleX={7}
            tiltMaxAngleY={7}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 1.1 }}
              className="relative rounded-2xl p-1 bg-gradient-to-tr from-[#6CE7F3] via-[#F0B6FF] to-[#96B3FF] shadow-2xl"
            >
              <div className="rounded-2xl bg-[#10182B] p-3">
                <img
                  src="/mockup-pixel-glass.png"
                  alt="Landing Page Mockup"
                  className="w-full h-auto object-contain rounded-xl shadow-xl border border-white/10"
                />
              </div>
              {/* Animated glow */}
              <motion.div
                className="absolute -inset-1 rounded-2xl pointer-events-none"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  boxShadow: "0 0 32px 8px #6CE7F3, 0 0 64px 16px #F0B6FF"
                }}
              />
            </motion.div>
          </Tilt>
        </div>
      </div>
    </motion.section>
  );
}
