// ✅ LeadModal.jsx – גרסה משודרגת ונקייה, משדרת SaaS בינלאומי
import React, { useState } from "react";
import ContactForm from "./ContactForm";

export default function LeadModal({ open, onClose }) {
  const [progress, setProgress] = useState(0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-xl border border-neutral-800 bg-gradient-to-b from-[#0f172a] to-[#111827] rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Bar – דק, שקט ויוקרתי */}
        <div className="w-full h-1 bg-neutral-800">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 transition-all duration-500 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* תוכן פנימי */}
        <div className="p-6 sm:p-10">
          {/* העבר את onClose גם ל-ContactForm */}
          <ContactForm onProgress={setProgress} onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
