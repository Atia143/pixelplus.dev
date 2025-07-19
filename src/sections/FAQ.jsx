// FAQ.jsx
/**
 * קומפוננטת FAQ יוקרתית, רספונסיבית, RTL, עם אקורדיון ואנימציות מתקדמות.
 * עיצוב ממותג, חד, ממורכז, עם חוויית משתמש יוצאת דופן – Pixelplus.dev.
 * קופי ממוקד תועלת, עסקי, ייחודי – ברמת מותג עולמי.
 * כל שאלה מדגישה יתרון פסיכולוגי ומבליטה את הערך של כל חבילה.
 * שדרוג: אין אזכור ל"דוחות" – הכל תועלת, תהליך, תוצאה, ליווי.
 */

import React, { useState } from "react";

const faqData = [
  {
    question: "איך דף נחיתה באמת מגדיל לי פניות ולקוחות?",
    answer: (
      <>
        <b>Starter:</b> כבר מהיום הראשון תרגיש הבדל – עיצוב ממוקד, מסר חד, וטופס לידים שמוביל כל מבקר לפעולה.<br />
        <b>Pro:</b> תיהנה גם מ-SEO ואנימציות שמושכות תשומת לב – כך שתבלוט בגוגל ותשאיר רושם.<br />
        <b>Pixel Elite:</b> כל פנייה הופכת להזדמנות אמיתית – עם A/B Testing ואסטרטגיית שיפור מתקדמת שמביאה תוצאות מוכחות.
      </>
    ),
    plans: ["Starter", "Pro", "Pixel Elite"],
  },
  {
    question: "מה מבדל את Pixelplus.dev מכל סטודיו אחר?",
    answer: (
      <>
        <b>Starter:</b> ליווי אישי, מחקר שוק, והתאמה מדויקת לעסק שלך – לא עוד תבנית גנרית.<br />
        <b>Pro:</b> עיצוב יוקרתי, SEO, ואנימציות מתקדמות שמייצרות חוויה בלתי נשכחת.<br />
        <b>Pixel Elite:</b> אסטרטגיה, ניתוח ביצועים, ושיפור מתמיד – אתה לא עוד לקוח, אתה שותף.
      </>
    ),
    plans: ["Starter", "Pro", "Pixel Elite"],
  },
  {
    question: "באילו טכנולוגיות אתם משתמשים, ואיך זה משרת אותי?",
    answer: (
      <>
        <b>Starter:</b> React.js, Tailwind, רספונסיביות מלאה – הדף שלך מהיר, מאובטח, ומותאם לכל מסך.<br />
        <b>Pro:</b> SEO מתקדם, אנימציות מותאמות – תבלוט בגוגל ותשדר חדשנות.<br />
        <b>Pixel Elite:</b> כלים לניתוח ביצועים, A/B Testing, והרחבות מתקדמות – מוכן לצמיחה גלובלית.
      </>
    ),
    plans: ["Starter", "Pro", "Pixel Elite"],
  },
  {
    question: "מה ההבדל האמיתי בין Starter, Pro ו-Pixel Elite?",
    answer: (
      <>
        <b>Starter:</b> עיצוב אישי, רספונסיביות, טופס לידים – כניסה חכמה לעולם ההמרות.<br />
        <b>Pro:</b> SEO, אנימציות, תוכן ללא הגבלה – קפיצה מקצועית שמביאה יותר פניות.<br />
        <b>Pixel Elite:</b> אסטרטגיית המרות, ניתוח ביצועים, A/B Testing – מקסימום תוצאה, מינימום ניחוש.
      </>
    ),
    plans: ["Starter", "Pro", "Pixel Elite"],
  },
  {
    question: "איך נראה תהליך הליווי האישי?",
    answer: (
      <>
        <b>Starter:</b> ליווי צמוד משלב האפיון ועד ההשקה – תמיד יש עם מי לדבר.<br />
        <b>Pro:</b> זמינות גבוהה, שקיפות מלאה, והכוונה שיווקית.<br />
        <b>Pixel Elite:</b> מעקב שוטף, המלצות לשיפור, ושיפור מתמיד – אתה לא לבד לרגע.
      </>
    ),
    plans: ["Starter", "Pro", "Pixel Elite"],
  },
  {
    question: "מה קורה אם אני לא מרוצה?",
    answer: (
      <>
        <b>כל החבילות:</b> 100% שביעות רצון – לא מרוצה? לא שילמת. בלי אותיות קטנות.
      </>
    ),
    plans: ["Starter", "Pro", "Pixel Elite"],
  },
  {
    question: "מה כוללת התמיכה לאחר ההשקה?",
    answer: (
      <>
        <b>Pro:</b> מעקב ביצועים, שיפורים שוטפים, והתאמות לפי הצורך.<br />
        <b>Pixel Elite:</b> ליווי אסטרטגי, ניתוחים מתקדמים, ושדרוגים שוטפים.
      </>
    ),
    plans: ["Pro", "Pixel Elite"],
  },
  {
    question: "למי השירות מתאים, ואיך מתחילים?",
    answer: (
      <>
        <b>כל החבילות:</b> השירות מתאים לעסקים, יזמים וסטארטאפים שרוצים לבלוט, להוביל ולגדול – עם דף שמותאם בדיוק לקהל וליעדים שלכם.
      </>
    ),
    plans: ["Starter", "Pro", "Pixel Elite"],
  },
];

const planColors = {
  "Starter": "bg-gradient-to-l from-[#e0e7ff] to-[#f0fdfa] text-blue-900 border-blue-100",
  "Pro": "bg-gradient-to-l from-[#bae6fd] to-[#e0e7ff] text-blue-800 border-blue-200",
  "Pixel Elite": "bg-gradient-to-l from-[#f0abfc] via-[#818cf8] to-[#38bdf8] text-white border-transparent shadow-lg",
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative max-w-2xl mx-auto py-20 px-4 md:px-0"
      dir="rtl"
      style={{ overflow: "visible" }}
    >
      {/* רקע דינמי יוקרתי */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{ maxWidth: "100%", left: 0, right: 0, margin: "0 auto" }}
      >
        <svg
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] opacity-60 animate-wave"
          viewBox="0 0 700 700"
          fill="none"
        >
          <defs>
            <radialGradient id="faqWave" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#6CE7F3" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#96B3FF" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#F0B6FF" stopOpacity="0.08" />
            </radialGradient>
          </defs>
          <ellipse cx="350" cy="350" rx="350" ry="350" fill="url(#faqWave)" />
        </svg>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-[#f0abfc]/20 via-[#38bdf8]/20 to-[#818cf8]/10 rounded-full blur-2xl animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-gradient-to-br from-[#38bdf8]/10 via-[#f0abfc]/10 to-[#818cf8]/10 rounded-full blur-2xl animate-pulse-slow delay-2000" />
      </div>

      {/* Headline */}
      <div className="relative z-10 text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-3">
          <span className="inline-block bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent animate-gradient-x">
            FAQ
          </span>
        </h2>
      </div>

      {/* רשימת השאלות */}
      <ul className="relative z-10 space-y-5">
        {faqData.map((item, idx) => (
          <li
            key={idx}
            className={`transition-all duration-300 bg-white/90 border border-gray-200 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl hover:border-blue-300/40 ${
              openIndex === idx ? "ring-2 ring-blue-400/30" : ""
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-7 py-5 text-right focus:outline-none focus:ring-2 focus:ring-blue-400 transition group"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-panel-${idx}`}
              tabIndex={0}
              type="button"
            >
              <span
                className={`flex-shrink-0 transition-transform duration-300 rounded-full p-2 bg-gradient-to-tr ${
                  openIndex === idx
                    ? "from-[#38bdf8] via-[#818cf8] to-[#f0abfc] text-white scale-110 shadow-lg"
                    : "from-gray-100 to-gray-200 text-blue-400 scale-100"
                }`}
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className={`transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="flex-1 text-base md:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                {item.question}
              </span>
              <span className="flex gap-1">
                {item.plans.map((plan) => (
                  <span
                    key={plan}
                    className={`text-xs font-semibold rounded px-2 py-0.5 border transition-colors duration-200 ${planColors[plan]}`}
                  >
                    {plan}
                  </span>
                ))}
              </span>
            </button>
            <div
              id={`faq-panel-${idx}`}
              className={`px-7 transition-all duration-500 ease-in-out ${
                openIndex === idx
                  ? "max-h-96 opacity-100 translate-y-0 py-3"
                  : "max-h-0 opacity-0 -translate-y-2 py-0 pointer-events-none"
              }`}
              style={{
                transitionProperty: "max-height, opacity, transform, padding",
              }}
            >
              <div className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                {item.answer}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* אנימציות CSS מותאמות */}
      <style>
        {`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease-in-out infinite;
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(24px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes wave {
            0%, 100% { transform: scale(1) translateX(-50%);}
            50% { transform: scale(1.04) translateX(-50%);}
          }
          .animate-wave {
            animation: wave 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default FAQ;
