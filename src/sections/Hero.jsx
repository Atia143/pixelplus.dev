
// Hero.jsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaArrowLeft, FaStar, FaHandshake, FaChartLine } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdInfoOutline } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";


/**
 * Hero section: premium, conversion-focused, and visually unique.
 * Optimized for typography, spacing, and responsive layout.
 */
export default function Hero({ onLeadClick }) {
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBadgeVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="why-pixel"
      dir="rtl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative py-32 px-4 md:px-12 lg:px-24 xl:px-40 overflow-hidden snap-start"
    >
      {/* Background gradients and floating elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B0E1C] via-[#111A2E] to-[#1E2B46] opacity-[0.96]" />
      {/* ... (שאר האלמנטים הרקע) ... */}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 text-white">
        {/* Left: Mockup & Graph */}
        <div className="w-full max-w-[400px] mx-auto order-first lg:order-last flex flex-col items-center justify-center">
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
          {/* Performance Graph */}
          <div className="w-full mt-8 flex flex-col items-center">
            <div className="bg-white/10 rounded-xl px-6 py-4 w-full max-w-xs flex flex-col items-center shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <FaChartLine className="text-green-400 w-6 h-6" />
                <span className="text-lg font-bold text-green-200">Performance</span>
              </div>
              {/* Example graph (SVG or image) */}
              <svg width="120" height="40" viewBox="0 0 120 40" className="mb-2">
                <polyline
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="3"
                  points="0,35 20,30 40,25 60,20 80,15 100,10 120,5"
                />
              </svg>
              <div className="flex justify-between w-full text-xs text-gray-200 font-mono">
                <span>CTR: 4.9%</span>
                <span>LTV: 12.3%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Textual content */}
        <motion.div
          className="lg:w-3/5 space-y-10 text-center lg:text-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* Conceptual Icon */}
          <div className="flex justify-center lg:justify-end mb-2">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-[#6CE7F3] via-[#F0B6FF] to-[#96B3FF] shadow-lg">
              <FaHandshake className="w-8 h-8 text-[#1E2B46]" />
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-poppins font-extrabold leading-tight tracking-tight mb-3">
            דפי נחיתה ממירים בשילוב&nbsp;
            <motion.span
              className="font-extrabold bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent drop-shadow-lg"
              animate={{ scale: [1, 1.07, 1], opacity: [1, 0.85, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4 }}
              whileHover={{ scale: 1.12 }}
            >
              בינה מלאכותית(AI)
            </motion.span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed tracking-wide mt-2 mb-6 lg:mb-8 lg:mt-4">
            דפי נחיתה לעסקים שרוצים יותר לקוחות, לא רק קליקים 
          </p>

          {/* Performance & AI Badge */}
          <div className="relative flex flex-wrap justify-center lg:justify-end gap-4 mt-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: badgeVisible ? 1 : 0.5, y: badgeVisible ? 0 : 24 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl bg-white/20 backdrop-blur-md border border-cyan-400/40"
              style={{ maxWidth: 420 }}
              aria-label="AI Powered & Lightning Fast"
            >
              {/* Lightning Fast */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, -10, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
                className="flex items-center gap-2"
              >
                <AiFillThunderbolt className="w-7 h-7 text-yellow-400 drop-shadow animate-bounce" />
                <span className="font-bold text-cyan-200 text-lg">Lightning Fast</span>
              </motion.div>
              {/* Metrics */}
              <div className="flex flex-col items-center px-3">
                <span className="text-xs text-gray-100 font-mono flex items-center gap-1">
                  <SiGoogleanalytics className="w-4 h-4 text-cyan-300" /> LCP
                </span>
                <span className="text-base font-bold text-white">0.9s</span>
                <span className="text-xs text-gray-100 font-mono flex items-center gap-1">
                  <SiGoogleanalytics className="w-4 h-4 text-cyan-300" /> CLS
                </span>
                <span className="text-base font-bold text-white">0.01</span>
              </div>
              {/* AI Powered */}
              <motion.div
                animate={{ scale: [1, 1.08, 1], filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                className="flex items-center gap-2"
              >
                <GiArtificialIntelligence className="w-7 h-7 text-pink-300 drop-shadow animate-pulse" />
                <span className="font-bold text-pink-200 text-lg">AI Powered</span>
              </motion.div>
              {/* SEO Optimized */}
              <div className="flex items-center gap-2">
              </div>
              {/* Info Tooltip */}
              <button
                type="button"
                className="ml-2 focus:outline-none"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onFocus={() => setShowTooltip(true)}
                onBlur={() => setShowTooltip(false)}
                aria-label="מידע נוסף על הבדג׳"
              >
                <MdInfoOutline className="w-6 h-6 text-white hover:text-yellow-200 transition" />
              </button>
              {showTooltip && (
                <div className="absolute top-30 left-1/2 -translate-x-1/2 z-10 bg-white text-gray-800 text-xs rounded shadow-lg px-4 py-2 w-72 animate-fade-in">
                  <strong>מה זה AI Powered?</strong>
                  <br />
               הדפים שלנו נבנים באמצעות טכנולוגיות AI מתקדמות, ביניהן גם GPT-5, המאפשרות יצירת תוכן ממוקד, עיצוב דינמי, ואופטימיזציה אוטומטית של ביצועים. כל דף מותאם אישית ל-SEO, נטען במהירות יוצאת דופן, ומבוסס על נתונים אמיתיים — כך שתשיג תוצאות עסקיות, לא רק אתר יפה.                </div>
              )}
            </motion.div>
          </div>

          {/* 5-Star Animated Rating */}
          <div className="flex items-center justify-center lg:justify-end gap-1 mt-6">
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
            className="mt-10 inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-l from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] text-black font-bold text-xl shadow-xl transition-all duration-200 hover:from-[#F0B6FF] hover:to-[#6CE7F3] focus:outline-none focus:ring-2 focus:ring-[#6CE7F3]"
          >
            לשיחת ייעוץ חינם
            <FaArrowLeft className="w-6 h-6" />
          </motion.button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-6 mt-10">
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg shadow-sm">
              <FaChartLine className="text-[#6CE7F3] w-6 h-6" />
              <span className="text-base text-gray-300 font-semibold">+94% CVR</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-lg shadow-sm">
              <FaHandshake className="text-[#F0B6FF] w-6 h-6" />
              <span className="text-base text-gray-300 font-semibold">+100</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}