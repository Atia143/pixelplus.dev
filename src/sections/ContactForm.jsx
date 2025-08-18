// ContactForm.jsx
import React, { useState, useRef } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineUser,
  HiCheckCircle,
  HiX,
  HiStar,
  HiShieldCheck,
} from "react-icons/hi";

/**
 * ContactForm – Pixelplus.dev
 * שליחה ל-Sheety, עיצוב חד, ולידציה, הודעת הצלחה, רספונסיביות מלאה
 */
export default function ContactForm({ onProgress, onClose }) {
  const [fields, setFields] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const successRef = useRef(null);

  // ולידציה
  const validate = () => {
    const errs = {};
    if (!fields.name.trim()) errs.name = "נא להזין שם מלא תקין";
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(fields.email)) errs.email = "נא להזין מייל תקין";
    if (fields.phone && !/^0\d{8,9}$/.test(fields.phone)) errs.phone = "נא להזין מספר טלפון תקין";
    return errs;
  };

  // פוקוס אוטומטי
  const nameInput = useRef(null);
  React.useEffect(() => {
    if (!submitting && !sent && nameInput.current) nameInput.current.focus();
    if (sent && successRef.current) successRef.current.focus();
  }, [submitting, sent]);

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // שליחה ל-Sheety
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

      const response = await fetch(
        "https://api.sheety.co/8efcf90425ada56016b70a65cfa92c37/pixelPlusmainlandingpage/lead1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lead1: {
              name: fields.name,
              email: fields.email,
              phone: fields.phone,
            },
          }),
        }
      );

      if (onProgress) onProgress(80);

      if (!response.ok) throw new Error("שליחה נכשלה, נסה שוב");

      if (onProgress) onProgress(100);
      setSubmitting(false);
      setSent(true);
      setFields({ name: "", email: "", phone: "" });
      setTimeout(() => {
        if (onProgress) onProgress(0);
      }, 1500);
    } catch (err) {
      setSubmitting(false);
      setErrors({ form: err.message || "משהו השתבש, נסה שוב" });
      if (onProgress) onProgress(0);
    }
  };

  // הודעת הצלחה
  if (sent) {
    return (
      <div
        className="flex flex-col items-center justify-center py-8 animate-fade-in-up outline-none relative min-h-[220px] sm:min-h-[260px]"
        tabIndex={-1}
        ref={successRef}
        aria-live="polite"
      >
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="סגור טופס"
            className="absolute top-2 left-2 z-30 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
          >
            <HiX className="w-5 h-5" />
          </button>
        )}
        <svg className="absolute w-40 h-20 pointer-events-none -top-4 left-1/2 -translate-x-1/2" viewBox="0 0 256 64" fill="none">
          <circle cx="30" cy="20" r="4" fill="#3B82F6" />
          <circle cx="80" cy="10" r="3" fill="#8B5CF6" />
          <circle cx="120" cy="30" r="5" fill="#F6921E" />
          <circle cx="200" cy="18" r="4" fill="#22D3EE" />
          <circle cx="170" cy="40" r="3" fill="#F472B6" />
          <circle cx="220" cy="12" r="2" fill="#F59E42" />
        </svg>
        <HiCheckCircle className="text-green-400 text-4xl animate-bounce z-10" />
        <div className="mt-4 text-lg font-bold text-white z-10">הפרטים נשלחו בהצלחה!</div>
      </div>
    );
  }

  return (
    <form
      dir="rtl"
      className="w-full max-w-xs xs:max-w-sm mx-auto bg-gradient-to-br from-[#181f2a] via-[#232946] to-[#10141C] rounded-xl shadow-2xl p-5 xs:p-6 sm:p-7 animate-fade-in font-sans relative overflow-y-auto max-h-[90vh] min-h-[340px] border border-[#232946]/60"
      onSubmit={handleSubmit}
      aria-label="טופס יצירת קשר"
      autoComplete="off"
      style={{ boxSizing: "border-box" }}
    >
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="סגור טופס"
          className="absolute top-3 left-3 z-30 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" }}
        >
          <HiX className="w-5 h-5" />
        </button>
      )}

      {/* Trust indicators */}
      <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-down">
        <HiStar className="text-yellow-400 text-lg" />
        <span className="text-xs text-white font-bold">5.0</span>
        <span className="text-xs text-[#bfc8e6]">/ 47 ביקורות</span>
        <span className="mx-2 text-xs text-blue-400 font-bold">+94% CVR</span>
        <span className="text-xs text-[#bfc8e6]">100+ לקוחות מרוצים</span>
      </div>

      {/* Title & subtitle */}
      <div className="w-full mx-auto text-center mb-5 px-1 xs:px-2" dir="rtl">
        <h2 className="text-base xs:text-lg sm:text-xl font-extrabold tracking-tight leading-tight text-white mb-2 animate-fade-in-down break-words">
          <span className="bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent">
            מוכן/ה ליותר לקוחות?
          </span>
        </h2>
        <div className="w-14 xs:w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 mb-2 mx-auto" />
        <p className="text-xs xs:text-sm text-[#e0e6f7] leading-relaxed mb-1 animate-fade-in-down delay-100">
          השאירו פרטים ואנחנו נעשה את השאר.
        </p>
      </div>

      {/* Name field */}
      <div className="mb-4 relative group">
        <label
          htmlFor="name"
          className={`absolute right-9 top-1/2 -translate-y-1/2 text-[#bfc8e6] pointer-events-none transition-all duration-200
            group-focus-within:text-xs group-focus-within:top-1.5 group-focus-within:translate-y-0
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
          className={`w-full pr-10 pl-3 py-2 bg-white/10 border ${errors.name ? "border-red-500" : "border-[#3a4a6b]"} rounded-lg text-white text-base placeholder-transparent focus:outline-none focus:border-blue-400 transition-all font-medium`}
          value={fields.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={submitting}
        />
        <HiOutlineUser className="absolute right-2 top-3 -translate-y-1/2 text-blue-400 text-xl pointer-events-none animate-fade-in" />
        {errors.name && (
          <span id="name-error" className="block mt-1 text-xs text-red-500 text-right animate-fade-in" aria-live="polite">
            {errors.name}
          </span>
        )}
      </div>

      {/* Email field */}
      <div className="mb-4 relative group">
        <label
          htmlFor="email"
          className={`absolute right-10 top-1/2 -translate-y-1/2 text-[#bfc8e6] pointer-events-none transition-all duration-200
            group-focus-within:text-xs group-focus-within:top-1.5 group-focus-within:translate-y-0
          `}
        >
          מייל
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className={`w-full pr-10 pl-3 py-2 bg-white/10 border ${errors.email ? "border-red-500" : "border-[#3a4a6b]"} rounded-lg text-white text-base placeholder-transparent focus:outline-none focus:border-blue-400 transition-all font-medium`}
          value={fields.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={submitting}
        />
        <HiOutlineMail className="absolute right-2 top-3 -translate-y-1/2 text-blue-400 text-xl pointer-events-none animate-fade-in" />
        {errors.email && (
          <span id="email-error" className="block mt-1 text-xs text-red-500 text-right animate-fade-in" aria-live="polite">
            {errors.email}
          </span>
        )}
      </div>

      {/* Phone field (optional) */}
      <div className="mb-6 relative group">
        <label
          htmlFor="phone"
          className={`absolute right-10 top-1/2 -translate-y-1/2 text-[#bfc8e6] pointer-events-none transition-all duration-200
            group-focus-within:text-xs group-focus-within:top-1.5 group-focus-within:translate-y-0
          `}
        >
          טלפון 
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={`w-full pr-10 pl-3 py-2 bg-white/10 border ${errors.phone ? "border-red-500" : "border-[#3a4a6b]"} rounded-lg text-white text-base placeholder-transparent focus:outline-none focus:border-blue-400 transition-all font-medium`}
          value={fields.phone}
          onChange={handleChange}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          disabled={submitting}
        />
        <HiOutlinePhone className="absolute right-2 top-3 -translate-y-1/2 text-blue-400 text-xl pointer-events-none animate-fade-in" />
        {errors.phone && (
          <span id="phone-error" className="block mt-1 text-xs text-red-500 text-right animate-fade-in" aria-live="polite">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-500 text-white font-extrabold text-base shadow-lg border-2 border-blue-500 transition-all duration-200 hover:scale-105 hover:from-blue-700 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95 animate-fade-in-up tracking-tight flex items-center justify-center gap-2 mb-3"
        disabled={submitting}
        aria-busy={submitting}
      >
        {submitting ? (
          <>
            <span className="loader-dot animate-pulse" />
            שולח...
          </>
        ) : (
          "קבל הצעה מותאמת אישית"
        )}
      </button>

      {/* Trust message */}
      <div className="flex items-center text-right text-xs text-[#bfc8e6] gap-1 animate-fade-in-up delay-100 mb-2">
        <HiShieldCheck className="text-blue-400 text-base" />
        <span>הפרטים שמורים איתנו בלבד.</span>
      </div>

      {/* Error message (form-level) */}
      {errors.form && (
        <div className="mt-2 text-xs text-red-500 text-center animate-fade-in" aria-live="polite">
          {errors.form}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-4 text-center text-[10px] text-[#bfc8e6] tracking-wide">
        <span className="inline-block align-middle mr-1">
          <HiOutlineMail className="inline w-4 h-4" />
        </span>
        Pixelplus.dev • כל הזכויות שמורות ליובל אטיה © 2025
      </footer>

      {/* Loader Dot Animation */}
    
    </form>
  );
}
