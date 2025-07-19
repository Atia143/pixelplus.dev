// src/sections/EnvelopeButton.jsx
import { HiOutlineMail } from "react-icons/hi";
import React from "react";

export default function EnvelopeButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed z-50 bottom-6 right-6 xs:bottom-4 xs:right-4 bg-gradient-to-br from-blue-600 via-purple-500 to-indigo-500 shadow-2xl border-2 border-white/30 rounded-full p-4 xs:p-3 flex items-center justify-center hover:scale-110 hover:shadow-3xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="צור קשר"
      type="button"
    >
      <HiOutlineMail className="text-white text-3xl xs:text-2xl drop-shadow" />
    </button>
  );
}
