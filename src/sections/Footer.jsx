import { FaEnvelope, FaWhatsapp, FaPhoneAlt, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-b from-[#181C24] to-[#0B0E1C] text-white py-10 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* לוגו ושם מותג */}
        <div className="flex items-center gap-3">
          {/* אפשר להחליף ל-SVG לוגו */}
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent">
            Pixelplus.dev
          </span>
          <span className="hidden sm:inline-block text-xs text-gray-400 font-semibold ml-2">
            דפי נחיתה שמייצרים לקוחות
          </span>
        </div>
        {/* קישורים מהירים */}
        <nav className="flex flex-wrap gap-6 text-sm font-semibold">
          <a href="#pricing" className="hover:text-[#6CE7F3] transition">Pricing</a>
          <a href="#testimonials" className="hover:text-[#6CE7F3] transition">למה אנחנו</a>
          <a href="#faq" className="hover:text-[#6CE7F3] transition">FAQ</a>
          <a href="#contact" className="hover:text-[#6CE7F3] transition">Contact</a>
        </nav>
        {/* פרטי יצירת קשר */}
        <div className="flex items-center gap-4">
          <a href="mailto:pixelplus.contact@gmail.com" className="hover:text-[#6CE7F3] transition" aria-label="שלח מייל">
            <FaEnvelope className="w-5 h-5" />
          </a>
         
        </div>
      </div>
      {/* שורת אמון וסמל */}
      <div className=
      "dir=rtl flex flex-col sm:flex-row items-center justify-between mt-8 max-w-6xl mx-auto gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <FaGoogle className="w-5 h-5 text-[#4285F4]" />
            Google • +100 לקוחות מרוצים
        </div>
        <div>
          הפרטים שמורים איתנו בלבד • כל הזכויות שמורות ליובל אטיה © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
