// ContactForm.jsx

import React, { useState, useRef } from "react";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser, HiCheckCircle, HiX } from "react-icons/hi";

/**
 * טופס לידים פרימיום – UX חד, נגישות, אייקונים, אנימציית שליחה, הודעת הצלחה עם קונפטי
 * כולל כפתור X סגירה ממוקם נכון, רספונסיבי, תמיד בתוך גבולות הטופס
 */
export default function ContactForm({ onProgress, onClose }) {
  const [fields, setFields] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const successRef = useRef(null);

  // ולידציה בסיסית
  const validate = () => {
    const errs = {};
    if (!fields.name.trim()) errs.name = "נא להזין שם מלא תקין";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)) errs.email = "נא להזין מייל תקין";
    if (!/^0\d{8,9}$/.test(fields.phone)) errs.phone = "נא להזין מספר טלפון תקין";
    return errs;
  };

  // פוקוס אוטומטי לשדה הראשון
  const nameInput = useRef(null);
  React.useEffect(() => {
    if (!submitting && !sent && nameInput.current) nameInput.current.focus();
    if (sent && successRef.current) successRef.current.focus();
  }, [submitting, sent]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // שליחה עם אנימציה, איפוס, מעבר חלק
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    setSent(false);
    if (onProgress) onProgress(10);

    try {
      if (onProgress) onProgress(40);

      const response = await fetch("https://api.sheety.co/8efcf90425ada56016b70a65cfa92c37/pixelPlusmainlandingpage/lead1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lead1: {
            name: fields.name,
            email: fields.email,
            phone: fields.phone
          }
        })
      });

      const data = await response.json();
      if (onProgress) onProgress(80);

      if (!response.ok) throw new Error("שליחה נכשלה, נסה שוב");

      if (onProgress) onProgress(100);
      setSubmitting(false);
      setSent(true);
      setFields({ name: "", email: "", phone: "" });
      setTimeout(() => { if (onProgress) onProgress(0); }, 1500);
    } catch (err) {
      setSubmitting(false);
      setErrors({ form: err.message || "משהו השתבש, נסה שוב" });
      if (onProgress) onProgress(0);
    }
  };

  // הודעת הצלחה עם קונפטי SVG
  if (sent) {
    return (
      <div
        className="flex flex-col items-center justify-center py-12 animate-fade-in-up outline-none relative"
        tabIndex={-1}
        ref={successRef}
        aria-live="polite"
      >
        {/* כפתור X סגירה */}
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="סגור טופס"
            className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{
              boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)"
            }}
          >
            <HiX className="w-6 h-6" />
          </button>
        )}
        {/* קונפטי SVG */}
        <svg className="absolute w-64 h-32 pointer-events-none -top-8 left-1/2 -translate-x-1/2" viewBox="0 0 256 64" fill="none">
          <circle cx="30" cy="20" r="4" fill="#3B82F6" />
          <circle cx="80" cy="10" r="3" fill="#8B5CF6" />
          <circle cx="120" cy="30" r="5" fill="#F6921E" />
          <circle cx="200" cy="18" r="4" fill="#22D3EE" />
          <circle cx="170" cy="40" r="3" fill="#F472B6" />
          <circle cx="220" cy="12" r="2" fill="#F59E42" />
        </svg>
        <HiCheckCircle className="text-green-400 text-6xl animate-bounce z-10" />
        <div className="mt-6 text-2xl font-bold text-white z-10">הפרטים נשלחו בהצלחה!</div>
      </div>
    );
  }

  return (
    <form
      dir="rtl"
      className="max-w-md mx-auto bg-gradient-to-br from-[#181f2a] to-[#232946] rounded-2xl shadow-xl p-8 animate-fade-in font-sans relative"
      onSubmit={handleSubmit}
      aria-label="טופס יצירת קשר"
      autoComplete="off"
    >
      {/* כפתור X סגירה */}
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="סגור טופס"
          className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)"
          }}
        >
          <HiX className="w-6 h-6" />
        </button>
      )}

      <div className="max-w-md w-full mx-auto text-center mb-8 px-4 sm:px-0" dir="rtl">
        {/* כותרת עם הדגשה צבעונית, רספונסיבית */}
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-2 animate-fade-in-down">
          Your Next{" "}
          <span className="bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent">
            Customer
          </span>{" "}
          Starts Here
        </h2>
        {/* פס גרדיאנט דקורטיבי, רספונסיבי */}
        <div className="w-20 xs:w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 mb-5 sm:mb-6" />
        {/* תת-כותרת רספונסיבית */}
        <p className="text-base xs:text-lg sm:text-xl text-[#e0e6f7] leading-relaxed mb-2 animate-fade-in-down delay-100">
          דף הנחיתה הבא של העסק שלך.<br className="hidden xs:block" />
        </p>
      </div>

      {/* שדה שם מלא */}
      <div className="mb-7 relative group">
        <label
          htmlFor="name"
          className={`absolute right-10 top-1/2 -translate-y-1/2 text-[#bfc8e6] pointer-events-none transition-all duration-200
            ${fields.name ? "text-xs top-2 translate-y-0" : "text-base"}
            group-focus-within:text-xs group-focus-within:top-2 group-focus-within:translate-y-0
          `}
        >
          שם מלא
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          ref={nameInput}
          className={`w-full pr-12 pl-4 py-4 bg-white/10 border ${errors.name ? "border-red-500" : "border-[#3a4a6b]"} rounded-xl text-white text-lg placeholder-transparent focus:outline-none focus:border-blue-400 transition-all font-medium`}
          value={fields.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={submitting}
        />
        <HiOutlineUser className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 text-2xl pointer-events-none" />
        {errors.name && (
          <span id="name-error" className="block mt-2 text-sm text-red-500 text-right animate-fade-in" aria-live="polite">
            {errors.name}
          </span>
        )}
      </div>

      {/* שדה מייל */}
      <div className="mb-7 relative group">
        <label
          htmlFor="email"
          className={`absolute right-12 top-1/2 -translate-y-1/2 text-[#bfc8e6] pointer-events-none transition-all duration-200
            ${fields.email ? "text-xs top-2 translate-y-0" : "text-base"}
            group-focus-within:text-xs group-focus-within:top-2 group-focus-within:translate-y-0
          `}
        >
          מייל
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`w-full pr-12 pl-4 py-4 bg-white/10 border ${errors.email ? "border-red-500" : "border-[#3a4a6b]"} rounded-xl text-white text-lg placeholder-transparent focus:outline-none focus:border-blue-400 transition-all font-medium`}
          value={fields.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={submitting}
        />
        <HiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 text-2xl pointer-events-none" />
        {errors.email && (
          <span id="email-error" className="block mt-2 text-sm text-red-500 text-right animate-fade-in" aria-live="polite">
            {errors.email}
          </span>
        )}
      </div>

      {/* שדה טלפון */}
      <div className="mb-10 relative group">
        <label
          htmlFor="phone"
          className={`absolute right-12 top-1/2 -translate-y-1/2 text-[#bfc8e6] pointer-events-none transition-all duration-200
            ${fields.phone ? "text-xs top-2 translate-y-0" : "text-base"}
            group-focus-within:text-xs group-focus-within:top-2 group-focus-within:translate-y-0
          `}
        >
          מספר טלפון
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={`w-full pr-12 pl-4 py-4 bg-white/10 border ${errors.phone ? "border-red-500" : "border-[#3a4a6b]"} rounded-xl text-white text-lg placeholder-transparent focus:outline-none focus:border-blue-400 transition-all font-medium`}
          value={fields.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          disabled={submitting}
        />
        <HiOutlinePhone className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 text-2xl pointer-events-none" />
        {errors.phone && (
          <span id="phone-error" className="block mt-2 text-sm text-red-500 text-right animate-fade-in" aria-live="polite">
            {errors.phone}
          </span>
        )}
      </div>

      {/* כפתור שליחה */}
      <button
        type="submit"
        className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500 text-white font-extrabold text-xl shadow-xl border-2 border-blue-500 transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95 animate-fade-in-up tracking-tight flex items-center justify-center gap-2"
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? (
          <>
            <span className="loader-dot animate-pulse" />
            שולח...
          </>
        ) : (
          "התחל עכשיו"
        )}
      </button>

      {/* מסר אמון */}
      <div className="flex text-right text-sm text-[#bfc8e6] gap-2 animate-fade-in-up delay-100 mt-4">
        <HiCheckCircle className="text-lg" />
        <span>הפרטים שמורים איתנו בלבד.</span>
      </div>

      {/* פוטר */}
      <footer className="mt-10 text-center text-xs text-[#bfc8e6] tracking-wide">
        Pixelplus.dev • כל הזכויות שמורות ליובל אטיה © 2025
      </footer>

      {/* Loader Dot Animation */}
      <style>
        {`
        .loader-dot {
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          background: linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%);
          display: inline-block;
          animation: loader-bounce 0.7s infinite alternate;
        }
        @keyframes loader-bounce {
          0% { transform: scale(0.7); opacity: 0.7;}
          100% { transform: scale(1.2); opacity: 1;}
        }
        `}
      </style>
    </form>
  );
}
