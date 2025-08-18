// src/sections/Pricing.jsx
import { useState } from "react";
import { FaGoogle, FaUserFriends, FaMagic, FaRocket, FaGem, FaCrown } from "react-icons/fa";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

/**
 * ROI Calculator – גרסה מתקדמת
 * טופס אינטראקטיבי עם תוצאה מיידית, CTA ממיר, מיתוג AI, ואנימציה.
 */
function ROIcalculator() {
  const [leads, setLeads] = useState("");
  const [closeRate, setCloseRate] = useState("");
  const [dealValue, setDealValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  // חישוב ROI
  const calcROI = () => {
    const leadsNum = Number(leads);
    const closeNum = Number(closeRate) / 100;
    const dealNum = Number(dealValue);
    if (!leadsNum || !closeNum || !dealNum) return null;
    const customers = Math.round(leadsNum * closeNum);
    const revenue = customers * dealNum;
    const cost = 2500; // מחיר חבילת Starter
    const roi = ((revenue - cost) / cost) * 100;
    return { customers, revenue, roi, cost };
  };

  const result = calcROI();

  /** איפוס הטופס והתוצאה */
  const handleReset = () => {
    setLeads("");
    setCloseRate("");
    setDealValue("");
    setShowResult(false);
    setError("");
  };

  /** שליחת הטופס */
  const handleSubmit = e => {
    e.preventDefault();
    if (!leads || !closeRate || !dealValue) {
      setError("נא למלא את כל השדות");
      setShowResult(false);
      return;
    }
    if (Number(closeRate) > 100 || Number(closeRate) < 1) {
      setError("שיעור סגירה חייב להיות בין 1 ל-100");
      setShowResult(false);
      return;
    }
    setError("");
    setShowResult(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur rounded-2xl shadow-xl p-8 mt-8 mb-8">
      <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center flex items-center justify-center gap-2">
        <MdOutlineAutoGraph className="w-6 h-6 text-cyan-300" />
        מחשבון ROI – כמה תרוויח מדף נחיתה ממיר?
      </h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete="off">
        <label className="flex flex-col text-sm text-gray-200">
          מספר לידים צפוי בחודש
          <input
            type="number"
            min="1"
            required
            value={leads}
            onChange={e => setLeads(e.target.value)}
            className="mt-1 px-3 py-2 rounded bg-white/20 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            placeholder="לדוג' 50"
            aria-label="מספר לידים צפוי בחודש"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-200">
          שיעור סגירה (%)
          <input
            type="number"
            min="1"
            max="100"
            required
            value={closeRate}
            onChange={e => setCloseRate(e.target.value)}
            className="mt-1 px-3 py-2 rounded bg-white/20 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            placeholder="לדוג' 10"
            aria-label="שיעור סגירה באחוזים"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-200">
          ערך עסקה ממוצע (₪)
          <input
            type="number"
            min="1"
            required
            value={dealValue}
            onChange={e => setDealValue(e.target.value)}
            className="mt-1 px-3 py-2 rounded bg-white/20 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            placeholder="לדוג' 1200"
            aria-label="ערך עסקה ממוצע"
          />
        </label>
        {error && (
          <div className="text-xs text-red-400 text-center mt-2">{error}</div>
        )}
        <div className="flex gap-2 mt-2">
          <button
            type="submit"
            className="flex-1 px-6 py-2 rounded-full bg-gradient-to-l from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] text-black font-bold shadow-lg hover:from-[#F0B6FF] hover:to-[#6CE7F3] transition"
          >
            חשב ROI
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 px-6 py-2 rounded-full bg-gray-700 text-white font-bold shadow-lg hover:bg-gray-600 transition"
          >
            איפוס
          </button>
        </div>
      </form>

      {/* תוצאה מיידית + CTA ממיר + מיתוג AI */}
      {showResult && result && (
        <div className="mt-6 p-4 rounded-xl bg-white/20 text-white text-center animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-2">
            <GiArtificialIntelligence className="w-6 h-6 text-cyan-300 animate-spin-slow" />
            <span className="text-xs text-cyan-200 font-semibold">
              החישוב מבוצע ע״י מנוע AI מתקדם
            </span>
          </div>
          <div className="text-lg font-bold mb-2 text-cyan-200">
            רווח צפוי: ₪{result.revenue.toLocaleString()}
          </div>
          <div className="flex justify-center items-center mb-2">
            {/* גרף אנימציה – המחשה ויזואלית */}
            <svg width="120" height="40" viewBox="0 0 120 40" fill="none">
              <path
                d="M5 35 Q30 10 60 30 Q90 50 115 5"
                stroke="#6CE7F3"
                strokeWidth="3"
                fill="none"
                className="animate-graph"
              />
              <circle cx="115" cy="5" r="4" fill="#6CE7F3" />
            </svg>
          </div>
          <div className="text-base mb-1">
            לקוחות חדשים: <span className="font-bold">{result.customers}</span>
          </div>
          <div className="text-base mb-1">
            עלות דף נחיתה: <span className="font-bold">₪{result.cost}</span>
          </div>
          <div className="text-base mb-1">
            החזר השקעה (ROI): <span className="font-bold text-green-300">{result.roi.toFixed(1)}%</span>
          </div>
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
              if (window.gtag) {
                window.gtag('event', 'roi_cta_click', {
                  event_category: 'ROI Calculator',
                  event_label: 'Book Consultation',
                  value: result.roi
                });
              }
            }}
            className="mt-4 px-6 py-2 rounded-full bg-gradient-to-l from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] text-black font-bold shadow-lg hover:from-[#F0B6FF] hover:to-[#6CE7F3] transition"
          >
            קבע שיחת ייעוץ וחסוך עד ₪{(result.revenue - result.cost).toLocaleString()} בשנה
          </button>
          <div className="text-xs text-gray-200 mt-2">
            *החישוב להמחשה בלבד. תוצאות בפועל תלויות בביצועי העסק.
          </div>
        </div>
      )}
      {/* אנימציה מותאמת */}
      <style>
        {`
        @keyframes graph {
          0% { stroke-dasharray: 0, 200; }
          100% { stroke-dasharray: 200, 0; }
        }
        .animate-graph {
          stroke-dasharray: 0, 200;
          animation: graph 1.2s cubic-bezier(.4,0,.2,1) forwards;
        }
        .animate-spin-slow {
          animation: spin 2.5s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg);}
        }
        `}
      </style>
    </div>
  );
}

/**
 * Scrolls smoothly to the contact form and saves the selected plan in localStorage.
 */
function scrollToContact(planName) {
  if (planName) {
    try {
      localStorage.setItem("selectedPlan", planName);
    } catch (e) {}
  }
  const el = document.getElementById("contact-final") || document.getElementById("cta-pricing");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    if (window.gtag) {
      window.gtag('event', 'select_plan', {
        event_category: 'Pricing',
        event_label: planName,
        value: planName
      });
    }
  } else {
    window.location.hash = "#contact";
  }
}

const plans = [
  {
    name: "Starter",
    price: "₪2,500",
    description: "הפתרון המהיר והמשתלם לעסק קטן או יזם בתחילת הדרך.",
    features: [
      { text: "דף נחיתה מעוצב בהתאמה אישית", icon: <FaMagic className="text-blue-400 w-6 h-6" /> },
      { text: "טופס לידים חכם", icon: <FaRocket className="text-blue-300 w-6 h-6" /> },
      { text: "רספונסיביות מלאה", icon: <FaRocket className="text-blue-300 w-6 h-6" /> },
      { text: "חיבור לכלי מדידה", icon: <FaGoogle className="text-blue-400 w-6 h-6" /> },
      { text: "14 ימי תמיכה טכנית", icon: <FaUserFriends className="text-blue-400 w-6 h-6" /> },
    ],
    cta: "התחל עכשיו",
    color: "from-blue-600 to-blue-400",
    border: "border-blue-400",
    highlight: false,
    badge: "התחלה חכמה",
    aria: "בחר בחבילת Starter ועבור לטופס יצירת קשר",
    animation: "animate-fade-in-up",
    delay: "delay-0",
    planId: "Starter",
  },
  {
    name: "Growth",
    price: "₪4,200",
    description: "לעסקים שרוצים לבלוט, לגדול, ולמקסם תוצאות.",
    features: [
      { text: "הכל מ־Starter", icon: <FaMagic className="text-pink-200 w-6 h-6" /> },
      { text: "קופי שיווקי מבוסס AI", icon: <GiArtificialIntelligence className="text-pink-200 w-6 h-6" /> },
      { text: "אופטימיזציית SEO", icon: <FaRocket className="text-pink-200 w-6 h-6" /> },
      { text: "אנימציות מתקדמות", icon: <FaRocket className="text-pink-200 w-6 h-6" /> },
      { text: "אינטגרציה ל-CRM", icon: <FaUserFriends className="text-pink-200 w-6 h-6" /> },
      { text: "30 ימי תמיכה טכנית", icon: <FaUserFriends className="text-pink-200 w-6 h-6" /> },
    ],
    cta: "אני רוצה לגדול",
    color: "from-pink-500 to-purple-500",
    border: "border-pink-400",
    highlight: true,
    badge: "הכי משתלם",
    aria: "בחר בחבילת Growth ועבור לטופס יצירת קשר",
    animation: "animate-fade-in-up",
    delay: "delay-100",
    planId: "Growth",
  },
  {
    name: "Custom",
    price: "החל מ־₪7,000",
    description: "מותאם אישית למותגים, סטארטאפים, או מי שרוצה פתרון ייחודי.",
    features: [
      { text: "אפיון אסטרטגי מלא", icon: <FaCrown className="text-yellow-400 w-6 h-6" /> },
      { text: "UI/UX ייחודי", icon: <FaGem className="text-yellow-400 w-6 h-6" /> },
      { text: "פיצ'רים מתקדמים (A/B Testing, דשבורד, אוטומציות)", icon: <FaRocket className="text-yellow-400 w-6 h-6" /> },
      { text: "ליווי אישי עד השקה", icon: <FaUserFriends className="text-yellow-400 w-6 h-6" /> },
      { text: "תמיכה מורחבת", icon: <FaUserFriends className="text-yellow-400 w-6 h-6" /> },
    ],
    cta: "קבל הצעה מותאמת",
    color: "from-yellow-300 via-yellow-100 to-white dark:from-yellow-400 dark:via-yellow-700 dark:to-black",
    border: "border-yellow-400",
    highlight: false,
    badge: "מותאם אישית",
    aria: "בחר בחבילת Custom ועבור לטופס יצירת קשר",
    animation: "animate-fade-in-up",
    delay: "delay-200",
    planId: "Custom",
  },
];

const trustIcons = [
  {
    icon: <FaGoogle className="text-[#4285F4] w-8 h-8" />,
    label: "Google Partner",
  },
  {
    icon: <FaUserFriends className="text-[#F0B6FF] w-8 h-8" />,
    label: "+100",
  },
];

const Pricing = ({ onLeadClick }) => (
  <section
    id="pricing"
    dir="rtl"
    className="relative py-28 bg-gradient-to-br from-white via-blue-50 to-white dark:from-[#09090B] dark:via-[#181C24] dark:to-[#09090B] snap-start overflow-hidden font-sans"
  >
    {/* SVG Decorative */}
    <svg
      className="absolute -top-24 left-1/2 -translate-x-1/2 z-0 opacity-30 pointer-events-none"
      width="600"
      height="180"
      viewBox="0 0 600 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse cx="300" cy="90" rx="280" ry="60" fill="url(#paint0_radial)" />
      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 90) scale(280 60)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a5b4fc" />
          <stop offset="1" stopColor="#f472b6" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </svg>

    {/* רקע דינמי */}
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-radial from-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4">
      {/* כותרת שיווקית */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-4 animate-fade-in-up">
        בחר את המסלול שמייצר לך תוצאה אמיתית
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg animate-fade-in-up delay-100">
        כל חבילה כוללת ליווי אישי, אסטרטגיה מותאמת, ותוצאות שמדברות בעד עצמן.<br />
        הצטרפו ל-100+ עסקים שכבר נהנים מדפי נחיתה שממירים באמת.
      </p>

      {/* ROI Calculator – משולב כאן */}
      <div className="mb-16">
        <ROIcalculator />
      </div>

      {/* גריד חבילות */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`
              group w-full rounded-3xl shadow-2xl
              ${plan.name === "Custom"
                ? "shadow-yellow-200 dark:shadow-yellow-900 ring-4 ring-yellow-300/60 dark:ring-yellow-500/40 scale-105 z-20"
                : plan.highlight
                  ? "shadow-pink-200 dark:shadow-pink-900 scale-105 z-10 ring-4 ring-pink-300/30 dark:ring-pink-500/20"
                  : "shadow-gray-200 dark:shadow-black/20"}
              p-10 border
              ${plan.border}
              bg-gradient-to-br ${plan.color}
              hover:scale-105 transition-transform duration-300
              relative overflow-hidden
              ${plan.animation} ${plan.delay}
            `}
            style={{ minHeight: 520 }}
          >
            {/* Badge */}
            <div className={`
              absolute top-6 left-6 text-xs font-bold px-4 py-1 rounded-full shadow
              ${plan.name === "Custom"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-200 text-yellow-900 border border-yellow-300"
                : plan.highlight
                  ? "bg-pink-500 text-white animate-bounce"
                  : "bg-white/80 text-pink-600 dark:bg-zinc-800 dark:text-yellow-400"}
            `}>
              {plan.badge}
            </div>
            <h3 className={`text-2xl font-bold mb-2 drop-shadow-lg
              ${plan.name === "Custom" ? "text-yellow-900 dark:text-yellow-200" : plan.highlight ? "text-pink-100" : "text-white"}
            `}>
              {plan.name}
            </h3>
            <p className={`text-4xl font-extrabold my-2 drop-shadow-lg
              ${plan.name === "Custom" ? "text-yellow-900 dark:text-yellow-100" : plan.highlight ? "text-pink-100" : "text-white"}
            `}>
              {plan.price}
            </p>
            <div className="text-base text-gray-100 dark:text-gray-300 mb-4 text-center">{plan.description}</div>
            <ul className="flex flex-col gap-3 mt-2 mb-8 text-right">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 text-lg font-medium animate-fade-in-up
                    ${plan.name === "Custom" ? "text-yellow-900 dark:text-yellow-100" : plan.highlight ? "text-pink-100" : "text-white/90"}
                  `}
                  style={{ animationDelay: `${0.2 + i * 0.07}s` }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => scrollToContact(plan.planId)}
              className={`
                mt-6 px-8 py-3 rounded-xl border-2 font-bold text-lg shadow-lg
                ${plan.name === "Custom"
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-200 border-yellow-400 text-yellow-900 hover:from-yellow-500 hover:to-yellow-300 hover:text-black"
                  : plan.highlight
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 border-pink-500 text-white hover:from-white hover:to-white hover:text-pink-600"
                    : "bg-gradient-to-r from-blue-600 to-blue-400 border-blue-400 text-white hover:from-white hover:to-white hover:text-blue-600"}
                transition-all duration-300
                animate-fade-in-up delay-200
              `}
              aria-label={plan.aria}
            >
              {plan.cta}
            </button>
            {/* שורת ביטחון */}
            <div className={`mt-6 text-xs text-center
              ${plan.name === "Custom" ? "text-yellow-900 dark:text-yellow-100" : "text-white/80"}
            `}>
              100% שביעות רצון – לא מרוצים? לא שילמתם.
            </div>
          </div>
        ))}
      </div>
      {/* לוגואים של אמון - ממורכזים */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
        {trustIcons.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg shadow-sm"
          >
            {item.icon}
            <span className="text-xs text-gray-300 font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
      {/* עזרה בבחירה */}
      <div className="text-center mt-10 animate-fade-in-up delay-300">
        <button
          type="button"
          onClick={onLeadClick}
          className="text-base text-blue-500 font-semibold transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          לא בטוחים? דברו איתנו  
        </button>
      </div>
    </div>
    {/* Custom Animations */}
    <style>
      {`
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(40px);}
        100% { opacity: 1; transform: translateY(0);}
      }
      .animate-fade-in-up {
        animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
      }
      .delay-0 { animation-delay: 0s; }
      .delay-100 { animation-delay: .1s; }
      .delay-200 { animation-delay: .2s; }
      .delay-300 { animation-delay: .3s; }
      @keyframes pulse {
        0%, 100% { opacity: 1;}
        50% { opacity: .7;}
      }
      .animate-pulse-slow {
        animation: pulse 6s cubic-bezier(.4,0,.6,1) infinite;
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(8px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .animate-fade-in {
        animation: fade-in 0.3s ease;
      }
      `}
    </style>
  </section>
);

export default Pricing;
