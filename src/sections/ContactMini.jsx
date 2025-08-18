// src/sections/ContactFinalCTA.jsx
import React, { useState, useRef } from "react";
import { FaPaperPlane, FaMagic, FaStar, FaLock, FaBolt, FaSmile } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";

const industries = ["אישי", "קואצ’ינג", "סטארט-אפ", "נדל״ן", "אחר"];
const goals = ["להכפיל לידים", "עיצוב פרימיום", "ביצועים + SEO", "אוטומציה", "אחר"];

export default function ContactFinalCTA() {
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState({ industry: "", goal: "", name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const successRef = useRef(null);

  // ולידציה פסיכולוגית – מסר ברור בשגיאה
  const validate = () => {
    const errs = {};
    if (step === 3) {
      if (!fields.name.trim()) errs.name = "איך נפנה אליך?";
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)) errs.email = "מייל לא תקין";
      if (!/^0\d{8,9}$/.test(fields.phone)) errs.phone = "מספר טלפון לא תקין";
    }
    return errs;
  };

  // שליחה ל־Web3Forms
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setSent(false);
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "00cc72fb-5e1a-4b24-b293-38bbdb1a9f33",
          subject: "פנייה חדשה מהאתר Pixelplus.dev",
          industry: fields.industry,
          goal: fields.goal,
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          from_name: fields.name,
          redirect: "", // לא מפנה אוטומטית
        }),
      });

      const data = await response.json();
      if (!data.success) throw new Error(data.message || "שליחה נכשלה, נסה שוב");

      setSubmitting(false);
      setSent(true);
      setFields({ industry: "", goal: "", name: "", email: "", phone: "" });
      setErrors({});
      setStep(1);
      setTimeout(() => setSent(false), 6000);
    } catch (err) {
      setSubmitting(false);
      setErrorMsg(err.message || "משהו השתבש, נסה שוב");
    }
  };

  // הודעת הצלחה עם קונפטי SVG
  if (sent) {
    return (
      <section
        className="relative max-w-2xl mx-auto my-24 px-8 py-14 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0b6ff]/10 dark:from-[#181C24] dark:via-[#23263a] dark:to-[#181C24] rounded-3xl shadow-2xl border-2 border-blue-100 dark:border-zinc-800 text-right overflow-hidden animate-fade-in-up"
        tabIndex={-1}
        ref={successRef}
        aria-live="polite"
      >
        <svg className="absolute w-64 h-32 pointer-events-none -top-8 left-1/2 -translate-x-1/2" viewBox="0 0 256 64" fill="none">
          <circle cx="30" cy="20" r="4" fill="#3B82F6" />
          <circle cx="80" cy="10" r="3" fill="#8B5CF6" />
          <circle cx="120" cy="30" r="5" fill="#F6921E" />
          <circle cx="200" cy="18" r="4" fill="#22D3EE" />
          <circle cx="170" cy="40" r="3" fill="#F472B6" />
          <circle cx="220" cy="12" r="2" fill="#F59E42" />
        </svg>
        <HiCheckCircle className="text-green-400 text-6xl animate-bounce z-10 mx-auto" />
        <div className="mt-6 text-2xl font-bold text-gray-900 dark:text-white z-10 text-center">
          הפרטים התקבלו! נחזור אליך בהקדם.
        </div>
      </section>
    );
  }

  // Progress Bar
  const progress = step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full";

  return (
    <section
      id="contact-final"
      className="relative max-w-2xl mx-auto my-24 px-8 py-14 bg-gradient-to-br from-[#f8fafc] via-white to-[#f0b6ff]/10 dark:from-[#181C24] dark:via-[#23263a] dark:to-[#181C24] rounded-3xl shadow-2xl border-2 border-blue-100 dark:border-zinc-800 text-right overflow-hidden animate-fade-in-up"
    >
      {/* רקע דינמי */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl z-0 animate-pulse-slow" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl z-0 animate-pulse-slow" />

      {/* Badge */}
      <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-400 to-blue-400 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow z-10 tracking-wide animate-bounce">
        נבדוק אם אנחנו מתאימים לעבוד יחד
      </div>

      {/* כותרת ואייקון */}
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <FaMagic className="text-pink-400 w-10 h-10 animate-spin-slow" />
        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg">
          רוצה יותר לקוחות? בוא נבדוק התאמה.
        </h3>
      </div>

      {/* הישגים ואמון */}
      <div className="flex flex-wrap gap-4 mb-8 items-center text-sm font-semibold text-gray-500 dark:text-gray-400 relative z-10 justify-center">
        <span className="flex items-center gap-1 bg-white/70 dark:bg-zinc-800 px-3 py-1 rounded-full shadow">
          <FaStar className="text-yellow-400" /> 5.0 (47 ביקורות)
        </span>
        <span className="flex items-center gap-1 bg-white/70 dark:bg-zinc-800 px-3 py-1 rounded-full shadow">
          <FaBolt className="text-blue-400" /> 94% שיפור המרות
        </span>
        <span className="flex items-center gap-1 bg-white/70 dark:bg-zinc-800 px-3 py-1 rounded-full shadow">
          <FaSmile className="text-pink-400" /> 100+ לקוחות מרוצים
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-white/20 rounded mb-8 overflow-hidden">
        <div className={`h-full bg-gradient-to-r from-[#6CE7F3] to-[#F0B6FF] ${progress} transition-all duration-500`} />
      </div>

      {/* טופס רב-שלבי */}
      <form className="space-y-4 relative z-10" onSubmit={handleSubmit} autoComplete="off">
        {step === 1 && (
          <>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              באיזה תחום העסק שלך?
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {industries.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { setFields(f => ({ ...f, industry: opt })); setStep(2); }}
                  className={`px-4 py-2 rounded-lg bg-white/20 text-gray-900 dark:text-white font-semibold hover:bg-[#6CE7F3]/40 transition ${fields.industry === opt ? "ring-2 ring-blue-400" : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              מה המטרה העיקרית שלך?
            </h4>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {goals.map(opt => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => { setFields(f => ({ ...f, goal: opt })); setStep(3); }}
                  className={`px-4 py-2 rounded-lg bg-white/20 text-gray-900 dark:text-white font-semibold hover:bg-[#96B3FF]/40 transition ${fields.goal === opt ? "ring-2 ring-pink-400" : ""}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              השאר פרטים – ניצור קשר רק אם יש התאמה!
            </h4>
            <div className="flex gap-3">
              <input
                type="text"
                name="name"
                placeholder="שם מלא"
                className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={fields.name}
                onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
                required
                disabled={submitting}
                aria-label="שם מלא"
              />
              <input
                type="tel"
                name="phone"
                placeholder="מספר טלפון"
                className="w-1/2 px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={fields.phone}
                onChange={e => setFields(f => ({ ...f, phone: e.target.value }))}
                required
                disabled={submitting}
                aria-label="מספר טלפון"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="אימייל"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={fields.email}
              onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
              required
              disabled={submitting}
              aria-label="אימייל"
            />
            {/* הודעות שגיאה */}
            {(errors.name || errors.phone || errors.email || errors.form || errorMsg) && (
              <div className="text-red-500 text-sm text-right">
                {errors.name || errors.phone || errors.email || errors.form || errorMsg}
              </div>
            )}
            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-lg bg-gradient-to-r from-pink-400 to-blue-400 hover:from-blue-500 hover:to-pink-500 text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 animate-fade-in-up"
              disabled={submitting}
            >
              {submitting ? (
                <FaPaperPlane className="w-5 h-5 animate-fly" />
              ) : (
                <>
                  <FaPaperPlane className="w-5 h-5" />
                  שלח פרטים – מתחילים להוביל
                </>
              )}
            </button>
            {/* מסר אמון */}
            <div className="flex text-right text-sm text-[#bfc8e6] gap-2 animate-fade-in-up delay-100">
              <FaLock className="text-lg" />
              <span>הפרטים שמורים איתנו בלבד  </span>
            </div>
          </>
        )}
      </form>

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
        @keyframes pulse-slow {
          0%, 100% { opacity: 1;}
          50% { opacity: .7;}
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(.4,0,.6,1) infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spin-slow 3.5s linear infinite;
        }
        @keyframes fly {
          0% { transform: translateY(0);}
          30% { transform: translateY(-8px);}
          60% { transform: translateY(0);}
          100% { transform: translateY(0);}
        }
        .animate-fly {
          animation: fly 1.2s cubic-bezier(.4,0,.2,1) infinite;
        }
        `}
      </style>
    </section>
  );
}
