// NavBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { href: "#testimonials", label: "למה אנחנו" },
  { href: "#why-choose", label: "למה בוחרים בנו" },
  { href: "#pricing", label: "Pricing" },
  { href: "#footer", label: "Contact" },
];

export default function NavBar({ onLeadClick }) {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  // טיפול overflow ומניעת ריווחים מיותרים
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [open]);

  // סגירה ב־ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // גלילה רכה ל־anchor
  const handleNavClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // קריאה ל־CTA
  const handleCTA = (e) => {
    if (e) e.preventDefault();
    setOpen(false);
    if (onLeadClick) onLeadClick();
  };

  return (
    <nav
      dir="rtl"
      className="fixed top-0 right-0 left-0 z-[100] w-full bg-[#0B0E1C]/90 backdrop-blur border-b border-white/10 shadow-lg"
      aria-label="סרגל ניווט ראשי"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-row-reverse items-center justify-between">
        {/* לוגו עם אנימציה */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-2xl font-extrabold bg-gradient-to-r from-[#6CE7F3] to-[#F0B6FF] bg-clip-text text-transparent select-none tracking-tight"
        >
          Pixelplus.dev
        </motion.a>
        {/* תפריט דסקטופ */}
        <ul className="hidden md:flex flex-row-reverse items-center gap-7 text-white text-base font-semibold">
          {navLinks.map((link) => (
            <motion.li key={link.href} whileHover={{ scale: 1.08 }}>
              <a
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="px-3 py-1 rounded-lg hover:text-cyan-300 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
          <li>
            <button
              onClick={handleCTA}
              className="px-6 py-2 rounded-full bg-gradient-to-l from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] text-[#0B0E1C] font-bold shadow-lg hover:from-[#F0B6FF] hover:to-[#6CE7F3] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6CE7F3]/40"
              type="button"
            >
              לשיחת ייעוץ חינם
            </button>
          </li>
        </ul>
        {/* כפתור המבורגר למובייל */}
        <button
          className="md:hidden text-white text-3xl p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
          onClick={() => setOpen(true)}
          aria-label="פתח תפריט"
        >
          <FaBars />
        </button>
      </div>
      {/* Drawer למובייל */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay עם טשטוש חזק ו־z-index גבוה */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9998] bg-black/90 backdrop-blur-2xl"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            {/* Drawer צדדי – רספונסיבי, תמיד מעל הכל */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="fixed top-0 right-0 h-full w-full sm:w-4/5 max-w-xs bg-[#101426] z-[9999] shadow-2xl flex flex-col"
              role="menu"
              aria-label="תפריט ניווט מובייל"
            >
              <div className="flex flex-col h-full px-6 pt-8 pb-6">
                {/* כפתור סגירה */}
                <button
                  ref={closeBtnRef}
                  className="self-end mb-8 text-white text-4xl p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400/40 transition hover:bg-white/10"
                  onClick={() => setOpen(false)}
                  aria-label="סגור תפריט"
                >
                  <FaTimes />
                </button>
                {/* קישורים עם רקע טכנולוגי ואטימות דינמית */}
                <nav className="flex flex-col gap-5 mt-2" aria-label="קישורי תפריט">
                  {navLinks.map((link, idx) => (
                 <motion.a
  key={link.href}
  href={link.href}
  onClick={e => handleNavClick(e, link.href)}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }} // בולט יותר
  whileHover={{ opacity: 1, scale: 1.04 }}
  whileFocus={{ opacity: 1, scale: 1.04 }}
  transition={{ duration: 0.3, delay: 0.1 + idx * 0.07 }}
  className="
    block text-lg font-bold text-white rounded-xl px-4 py-3
    bg-gradient-to-r from-[#232B4D]/80 via-[#1A1F3C]/80 to-[#2BC6FF]/30
    shadow-[0_2px_16px_0_rgba(44,200,255,0.10)]
    backdrop-blur-md
    transition-all duration-200
    hover:from-[#2BC6FF]/60 hover:to-[#F0B6FF]/60 hover:shadow-[0_4px_32px_0_rgba(44,200,255,0.25)]
    focus:outline-none focus:ring-2 focus:ring-cyan-400/40
    border border-white/10
  "
  tabIndex={0}
>
  {link.label}
</motion.a>

                  ))}
                </nav>
                {/* כפתור CTA */}
                <button
                  onClick={handleCTA}
                  className="mt-8 w-full px-6 py-3 rounded-full bg-gradient-to-l from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] text-[#0B0E1C] text-lg font-bold shadow-lg hover:from-[#F0B6FF] hover:to-[#6CE7F3] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 text-center"
                  type="button"
                >
                  לשיחת ייעוץ חינם
                </button>
                {/* פוטר קטן */}
                <div className="mt-auto text-xs text-gray-400 text-center pt-8">
                  Pixelplus.dev © 2025
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
