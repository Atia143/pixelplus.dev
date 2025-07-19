import React from "react";
import { motion } from "framer-motion";

export default function ContactFormSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // אפשרות לשלב שליחה בפועל
  };

  return (
    <motion.section
      id="contact-form"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.4, ease: "easeOut" }}
      className="w-full bg-gradient-to-br from-[#EED3A5] via-[#f5e4c3] to-[#ffffff] border-t border-neutral-200 px-6 md:px-12 py-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#080F3D] mb-4">
          השאירו פרטים ונחזור אליכם
        </h2>
        <p className="text-neutral-600 text-lg mb-10 max-w-xl mx-auto">
          בואו לגלות איך הצוות שלנו יכול לעזור לעסק שלכם לגדול 
        </p>
        <form
          onSubmit={handleSubmit}
          // TODO: Google Forms יהיה מוכן
          action="<!-- כאן יש להכניס את הקישור לטופס גוגל שיט -->"
          method="POST"
          className="space-y-4 w-full text-right"
        >
          <input
            dir="rtl"
            type="text"
            name="name"
            placeholder="שם מלא"
            className="w-full px-4 py-3 rounded-2xl border border-neutral-300 placeholder-neutral-400 bg-white text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandOrange transition"
          />
          <input
            dir="rtl"
            type="email"
            name="email"
            placeholder="אימייל"
            className="w-full px-4 py-3 rounded-2xl border border-neutral-300 placeholder-neutral-400 bg-white text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandOrange transition"
          />
          <input
            dir="rtl"
            type="tel"
            name="phone"
            placeholder="מספר טלפון"
            className="w-full px-4 py-3 rounded-2xl border border-neutral-300 placeholder-neutral-400 bg-white text-neutral-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-brandOrange transition"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 bg-[#080F3D] text-[#EED3A5] text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
          >
            צרו איתי קשר
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}