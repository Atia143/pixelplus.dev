// WhatMakesGood.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCog,
  FaChartLine,
  FaMagic,
  FaMobileAlt,
  FaFlask,
  FaRocket,
} from "react-icons/fa";

/**
 * WhatMakesGood section: User Journey Infographic – premium, strategic, and conversion-focused.
 * - מסע לקוח ברור, אייקונים קונספטואליים, קופי חד, היררכיה ויזואלית, ריווח נדיב, CTA יוקרתי.
 * @param {Object} props
 * @param {function} props.onLeadClick - פונקציה לפתיחת מודל הלידים (פופאפ)
 */
const journey = [
  {
    label: "התאמה אישית",
    desc: "המשתמש פוגש דף שמדבר בדיוק אליו – לא עוד תבנית גנרית.",
    icon: <FaUserCog className="text-2xl sm:text-3xl text-[#6CE7F3]" />,
  },
  {
    label: "SEO אופטימלי",
    desc: "הדף שלך מופיע גבוה בגוגל – מביא תנועה איכותית שמחפשת אותך.",
    icon: <FaChartLine className="text-2xl sm:text-3xl text-[#508FFF]" />,
  },
  {
    label: "שליטה מלאה",
    desc: "המסר חד, בלי הסחות דעת – כל קליק מוביל למטרה אחת.",
    icon: <FaMagic className="text-2xl sm:text-3xl text-[#F0B6FF]" />,
  },
  {
    label: "רספונסיביות",
    desc: "הכל נראה מושלם – בכל מסך, בכל זמן, בכל מכשיר.",
    icon: <FaMobileAlt className="text-2xl sm:text-3xl text-[#96B3FF]" />,
  },
  {
    label: "A/B Testing",
    desc: "הדף שלך כל הזמן משתפר – כי אנחנו בודקים מה באמת עובד.",
    icon: <FaFlask className="text-2xl sm:text-3xl text-[#00FFC2]" />,
  },
];

export default function WhatMakesGood({ onLeadClick }) {
  // fallback לגלילה לעוגן
  const handleCtaClick = (e) => {
    e.preventDefault();
    if (onLeadClick) {
      onLeadClick();
    } else {
      document.getElementById("contact-bottom")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="why-user-journey"
      dir="rtl"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-[#0B1220] to-[#0F172A] text-white overflow-hidden"
    >
      {/* Blurred blobs for depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[260px] sm:w-[340px] h-[260px] sm:h-[340px] bg-[#6CE7F3] opacity-10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-20 sm:w-36 h-20 sm:h-36 bg-[#508FFF] opacity-10 rounded-full blur-[60px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-16 sm:w-28 h-16 sm:h-28 bg-[#F0B6FF] opacity-10 rounded-full blur-[40px] pointer-events-none z-0" />

      <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-8 bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent drop-shadow-lg leading-tight"
        >
          מה באמת הופך דף נחיתה לטוב?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-200 mb-2 sm:mb-4"
        >
          המסע של המבקר שלך – שלב אחרי שלב, עד שהוא הופך ללקוח.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-sm sm:text-base text-gray-400 mb-10 sm:mb-14 max-w-xl mx-auto"
        >
          כל שלב במסע הזה הוא קריטי. רק כשכולם עובדים יחד – מגיעים להמרה אמיתית.
        </motion.p>

        {/* User Journey Infographic */}
        <div className="relative flex flex-col items-center z-10">
          {/* Vertical line */}
          <div className="absolute right-1/2 translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#6CE7F3]/40 via-[#508FFF]/20 to-[#F0B6FF]/0 rounded-full pointer-events-none" />
          {/* Steps */}
          {journey.map((step, i) => (
            <React.Fragment key={step.label}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.13, duration: 0.7, type: "spring" }}
                className={`
                  w-full sm:w-[440px] md:w-[540px]
                  flex items-center gap-4 px-4 sm:px-8 py-5 sm:py-7
                  mb-0 relative z-10
                `}
              >
                {/* Dot + icon */}
                <div className="flex flex-col items-center mr-2 sm:mr-4">
                  <span className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-[#181B23] border-2 border-[#6CE7F3] shadow-lg mb-2">
                    {step.icon}
                  </span>
                  {i < journey.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0, scaleY: 0.7 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.13, duration: 0.5, type: "spring" }}
                      className="w-1 h-10 sm:h-14 bg-gradient-to-b from-[#6CE7F3]/40 to-transparent rounded-full"
                    />
                  )}
                </div>
                {/* Text */}
                <div className="flex flex-col items-start text-right">
                  <div className="text-lg sm:text-xl font-bold text-white">{step.label}</div>
                  <div className="text-sm sm:text-base text-gray-200">{step.desc}</div>
                </div>
              </motion.div>
            </React.Fragment>
          ))}
          {/* Conversion block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1.07,
              boxShadow: "0 0 32px 8px #00FFC2, 0 0 64px 16px #6CE7F3",
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
            className="w-full sm:w-[440px] md:w-[540px] rounded-xl border-2 border-[#00FFC2]/60 bg-gradient-to-l from-[#00FFC2] via-[#6CE7F3] to-[#508FFF] flex items-center gap-4 px-4 sm:px-8 py-6 sm:py-8 mt-3 mb-0 relative z-20 shadow-2xl"
            style={{
              boxShadow: `0 8px 32px 0 rgba(0,255,194,0.18), 0 0 0 0 #00FFC2`,
            }}
          >
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white border-2 border-[#00FFC2] shadow-lg mr-2 sm:mr-4">
              <FaRocket className="text-2xl sm:text-3xl text-[#00FFC2] drop-shadow" />
            </span>
            <div className="flex flex-col items-start text-right">
              <div className="text-xl sm:text-2xl font-bold text-[#0B1220]">המרה</div>
              <div className="text-sm sm:text-base text-[#0B1220]/80">
                המשתמש משאיר פרטים – והעסק שלך גדל.
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-14 sm:mt-20 mb-2 sm:mb-8">
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6CE7F3] to-[#508FFF] text-white px-8 sm:px-12 py-4 rounded-xl hover:from-[#508FFF] hover:to-[#6CE7F3] transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto text-center font-bold shadow-xl text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-[#6CE7F3]"
            aria-label="בואו נדבר"
          >
            <FaRocket className="text-lg sm:text-xl" />
            בואו נדבר
          </button>
        </div>
      </div>
    </section>
  );
}
