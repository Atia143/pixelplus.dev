// WhyUs.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaBullseye,
  FaUserCheck,
} from "react-icons/fa";

/**
 * WhyUs section: Premium, strategic, and conversion-focused.
 * - בידול חד: כל יתרון ממוקד תוצאה, לא רק טכנולוגיה.
 * - אייקונים קונספטואליים (צמיחה, תוצאה, בידול, ליווי אישי).
 * - קופי קצר, חד, ומדבר תוצאה.
 * - ריווח נדיב, היררכיה ברורה, צבע accent חוזר.
 * - אנימציות עדינות, נגישות, ומבנה רספונסיבי.
 */
export default function WhyUs() {
  // Animation for feature cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 60 },
    onscreen: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.15, duration: 0.8, type: "spring" },
    }),
  };

  // Feature cards data (ממוקד ערך ללקוח)
  const features = [
    {
      icon: <FaBullseye className="text-4xl text-[#6CE7F3] drop-shadow-lg" />,
      title: "ממוקד תוצאה",
      desc: "כל דף נבנה עם מטרה אחת – להמיר מבקרים ללקוחות. בלי הסחות דעת, רק תוצאה.",
      tooltip: "המרה אמיתית, לא רק עיצוב יפה",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#F0B6FF] drop-shadow-lg" />,
      title: "מהירות וביצועים",
      desc: "הדף שלך נטען בשבריר שניה, מותאם לכל מכשיר – לא מפספסים אף ליד.",
      tooltip: "ביצועים שמביאים יותר פניות",
    },
    {
      icon: <FaRocket className="text-4xl text-[#96B3FF] drop-shadow-lg" />,
      title: "עיצוב שמבדל",
      desc: "מותאם אישית, יוקרתי ובלתי נשכח – לא עוד תבנית גנרית, אלא מותג אמיתי.",
      tooltip: "הופכים כל עסק למותג",
    },
    {
      icon: <FaUserCheck className="text-4xl text-[#00FFC2] drop-shadow-lg" />,
      title: "ליווי אישי",
      desc: "אתה לא עוד לקוח – אנחנו איתך יד ביד עד לתוצאה. זמינים, שקופים, מחויבים להצלחה שלך.",
      tooltip: "יחס אישי וליווי צמוד",
    },
  ];

  // Tech tags (pills)
  const tags = [
    { label: "React.js", color: "bg-[#1E2B46]/80 border border-[#6CE7F3]/40" },
    { label: "Tailwind", color: "bg-[#1E2B46]/80 border border-[#F0B6FF]/40" },
    { label: "Responsive", color: "bg-[#1E2B46]/80 border border-[#96B3FF]/40" },
    { label: "SEO", color: "bg-[#1E2B46]/80 border border-[#00FFC2]/40" },
    { label: "Performance", color: "bg-[#1E2B46]/80 border border-[#6CE7F3]/40" },
    { label: "Security", color: "bg-[#1E2B46]/80 border border-[#F0B6FF]/40" },
  ];

  return (
    <section
      id="why-choose"
      dir="rtl"
      className="relative py-24 sm:py-32 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-br from-[#0B0E1C] via-[#121C2F] to-[#1C2A45] overflow-hidden"
    >
      {/* Decorative blurred background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-[#F0B6FF] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-[#6CE7F3] opacity-10 rounded-full blur-[100px]" />
        {/* SVG wave for extra depth */}
        <svg className="absolute left-0 bottom-0 w-full h-16 opacity-30" viewBox="0 0 1440 320">
          <path fill="#6CE7F3" fillOpacity="0.2" d="M0,224L60,202.7C120,181,240,139,360,133.3C480,128,600,160,720,186.7C840,213,960,235,1080,218.7C1200,203,1320,149,1380,122.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-14">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent drop-shadow-lg"
        >
          למה עסקים מובילים בוחרים ב־Pixelplus.dev?
          {/* Reveal underline */}
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="block h-1 w-28 mx-auto mt-2 bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] rounded-full origin-center"
            style={{ transformOrigin: "center" }}
          />
        </motion.h2>

        {/* Tech tags (pills) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-2 sm:mb-4"
        >
          {tags.map((tag, i) => (
            <motion.span
              key={tag.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.5, type: "spring" }}
              className={`
                px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white shadow
                ${tag.color}
                hover:scale-105 transition-transform duration-200
                select-none
              `}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-200 text-center max-w-2xl"
        >
          לא עוד דף יפה – אלא דף שמייצר לקוחות. כל דף נבנה על בסיס אסטרטגיה, פסיכולוגיית משתמשים, וקוד שמותאם לעסק שלך.
        </motion.p>

        {/* Divider */}
        <motion.hr
          className="border-t border-[#6CE7F3]/30 w-1/2 mx-auto my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ transformOrigin: "center" }}
        />

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="relative flex flex-col items-center bg-white/5 rounded-2xl p-8 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300 group"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              tabIndex={0}
              aria-label={feature.tooltip}
            >
              {/* Card number */}
              <span className="absolute -top-4 -right-4 sm:-right-6 sm:-top-6 bg-gradient-to-tr from-[#6CE7F3] to-[#F0B6FF] text-[#0B0E1C] font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full shadow-lg border-2 border-white/20 z-10">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Animated icon with tooltip */}
              <motion.div
                className="mb-4 relative group"
                animate={
                  i === 0
                    ? { scale: [1, 1.12, 1] }
                    : i === 1
                    ? { y: [0, -10, 0] }
                    : i === 2
                    ? { rotate: [0, 8, -8, 0] }
                    : { scale: [1, 1.1, 1], rotate: [0, 6, -6, 0] }
                }
                transition={{ repeat: Infinity, duration: 2 + i * 0.2, ease: "easeInOut" }}
              >
                {feature.icon}
                {/* Tooltip */}
                <span className="absolute bottom-full mb-2 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 group-focus:opacity-100 pointer-events-none transition-opacity duration-200 bg-[#1C2A45] text-xs text-white px-3 py-1 rounded shadow-lg z-20 whitespace-nowrap">
                  {feature.tooltip}
                </span>
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300 text-center text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
