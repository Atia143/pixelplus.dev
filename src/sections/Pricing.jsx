// src/sections/Pricing.jsx
import { FaGoogle, FaUserFriends, FaRocket, FaGem, FaMagic } from "react-icons/fa";

/**
 * Scrolls smoothly to the contact form and saves the selected plan in localStorage.
 * Also sends a GA4 event if available.
 * @param {string} planName - The plan identifier (e.g., "Starter", "Pro", "PixelElite")
 */
function scrollToContact(planName) {
  if (planName) {
    try {
      localStorage.setItem("selectedPlan", planName);
    } catch (e) {}
  }
  // Scroll smoothly to the contact form (fallback to #cta-pricing if not found)
  const el = document.getElementById("contact-final") || document.getElementById("cta-pricing");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    // Optional: send GA4 event
    if (window.gtag) {
      window.gtag('event', 'select_plan', {
        event_category: 'Pricing',
        event_label: planName,
        value: planName
      });
    }
  } else {
    // Fallback: jump to contact section if anchor missing
    window.location.hash = "#contact";
  }
}

const plans = [
  {
    name: "Starter",
    price: "$500",
    features: [
      { text: "עיצוב בהתאמה אישית", icon: <FaMagic className="text-blue-400 w-6 h-6" /> },
      { text: "טופס לידים בסיסי", icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
          <path d="M8 8h8M8 12h8M8 16h4" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) },
      { text: "רספונסיביות מלאה", icon: (
        <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" />
          <rect x="8" y="17" width="8" height="2" rx="1" strokeWidth="2" />
        </svg>
      ) },
    ],
    cta: "בחר בחבילת Starter",
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
    name: "Pro",
    price: "$800",
    features: [
      { text: "הכל מ־Starter", icon: (
        <svg className="w-6 h-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) },
      { text: "הטמעת SEO", icon: <FaRocket className="text-pink-200 w-6 h-6" /> },
      { text: "אנימציות מותאמות", icon: (
        <svg className="w-6 h-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) },
      { text: "ללא הגבלת תוכן", icon: (
        <svg className="w-6 h-6 text-pink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 4v16M4 12h16" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) },
    ],
    cta: "בחר בחבילת Pro",
    color: "from-pink-500 to-purple-500",
    border: "border-pink-400",
    highlight: true,
    badge: "הכי משתלם",
    aria: "בחר בחבילת Pro ועבור לטופס יצירת קשר",
    animation: "animate-fade-in-up",
    delay: "delay-100",
    fomo: (
      <span>
        <span className="inline-block bg-yellow-300 text-yellow-900 px-2 py-0.5 rounded font-bold ml-1 animate-pulse">
          מחיר השקה – $500 בלבד!
        </span>
        <span className="inline-block text-white/90 ml-1">
          ל־4 הראשונים בלבד. <span className="font-bold">נשארו: 4/4</span>
        </span>
      </span>
    ),
    planId: "Pro",
  },
  {
    name: "Pixel Elite",
    price: "$1600",
    features: [
      { text: "הכל מ־Pro", icon: <FaGem className="text-yellow-400 w-6 h-6" /> },
      { text: "אסטרטגיית שיפור המרות", icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 17l6-6 4 4 6-6" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) },
      { text: "ניתוח ביצועים והפקת תובנות", icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <path d="M12 8v4l3 3" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) },
      { text: "אפשרות ל־A/B Testing", icon: (
        <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
          <path d="M8 8h8M8 16h8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) },
    ],
    cta: "בחר בחבילת Pixel Elite",
    color: "from-yellow-300 via-yellow-100 to-white dark:from-yellow-400 dark:via-yellow-700 dark:to-black",
    border: "border-yellow-400",
    highlight: true,
    badge: "המוביל ביותר",
    aria: "בחר בחבילת Pixel Elite ועבור לטופס יצירת קשר",
    animation: "animate-fade-in-up",
    delay: "delay-200",
    fomo: "מספר מקומות מוגבל לחודש!",
    planId: "PixelElite",
  },
];

const trustIcons = [
  {
    icon: <FaGoogle className="text-[#4285F4] w-8 h-8" />,
    label: "Google Partner",
  },
  {
    icon: <FaUserFriends className="text-[#F0B6FF] w-8 h-8" />,
    label: "+100 Happy Clients",
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
        בחרו את המסלול שיקפיץ את העסק שלכם קדימה
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg animate-fade-in-up delay-100">
        כל חבילה כוללת ליווי אישי, אסטרטגיה מותאמת, ותוצאות שמדברות בעד עצמן.<br />
        הצטרפו ל-100+ עסקים שכבר נהנים מדפי נחיתה שממירים באמת.
      </p>
      {/* גריד חבילות */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`
              group w-full rounded-3xl shadow-2xl
              ${plan.name === "Pixel Elite"
                ? "shadow-yellow-200 dark:shadow-yellow-900 ring-4 ring-yellow-300/60 dark:ring-yellow-500/40 scale-110 z-20"
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
            style={{ minHeight: 500 }}
          >
            {/* Badge */}
            <div className={`
              absolute top-6 left-6 text-xs font-bold px-4 py-1 rounded-full shadow
              ${plan.name === "Pixel Elite"
                ? "bg-gradient-to-r from-yellow-400 to-yellow-200 text-yellow-900 border border-yellow-300"
                : plan.highlight
                  ? "bg-pink-500 text-white animate-bounce"
                  : "bg-white/80 text-pink-600 dark:bg-zinc-800 dark:text-yellow-400"}
            `}>
              {plan.badge}
            </div>
            <h3 className={`text-2xl font-bold mb-2 drop-shadow-lg
              ${plan.name === "Pixel Elite" ? "text-yellow-900 dark:text-yellow-200" : "text-white"}
            `}>
              {plan.name}
            </h3>
            <p className={`text-5xl font-extrabold my-6 drop-shadow-lg
              ${plan.name === "Pixel Elite" ? "text-yellow-900 dark:text-yellow-100" : "text-white"}
            `}>
              {plan.price}
            </p>
            {/* FOMO */}
            <div className={`mb-4 text-base font-bold text-center
              ${plan.name === "Pixel Elite" ? "text-yellow-900 dark:text-yellow-100" : "text-white/90"}
              animate-fade-in-up delay-200
            `}>
              {plan.fomo}
            </div>
            <ul className="flex flex-col gap-3 mt-2 mb-8 text-right">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 text-lg font-medium animate-fade-in-up
                    ${plan.name === "Pixel Elite" ? "text-yellow-900 dark:text-yellow-100" : "text-white/90"}
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
                ${plan.name === "Pixel Elite"
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
              ${plan.name === "Pixel Elite" ? "text-yellow-900 dark:text-yellow-100" : "text-white/80"}
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
      `}
    </style>
  </section>
);

export default Pricing;
