// src/sections/Testimonials.jsx

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaRobot, FaUserTie, FaStore, FaUserGraduate, FaRocket, FaStar } from "react-icons/fa";

/**
 * מערך עדויות ללקוחות, כולל סוג, צבע, טקסט, שם, מספר כוכבים, אייקון ותווית
 */
const testimonials = [
  {
    name: 'נועה • יזמית נדל״ן בארה״ב',
    text: 'pixelplus.dev הפתיעו אותי לטובה – מהרגע הראשון קיבלתי יחס אישי, מקצועי, ותחושה שיש לי פרטנר אמיתי. האתר החדש לא רק נראה מדהים, אלא גם הביא לי פניות איכותיות מהיום הראשון. ממליצה בחום לכל מי שרוצה תוצאה ולא רק עיצוב!',
    stars: 5,
    color: 'from-yellow-400 via-orange-400 to-pink-400',
    type: 'top',
    icon: <FaUserTie className="w-8 h-8 text-yellow-300" />,
    label: 'TOP REVIEW',
  },
  {
    name: 'דניאל • CTO בסטארטאפ',
    text: 'הופתעתי מהמהירות והגמישות של הצוות. כל שינוי שביקשנו בוצע תוך שעות, והדף החדש שלנו הביא לנו לידים איכותיים כבר בשבוע הראשון. ממליץ לכל סטארטאפ שרוצה לבלוט!',
    stars: 5,
    color: 'from-fuchsia-600 via-purple-500 to-blue-400',
    type: 'startup',
    icon: <FaRocket className="w-8 h-8 text-fuchsia-300" />,
    label: 'STARTUP',
  },
  {
    name: 'שיר • חנות אונליין',
    text: 'הדף שבנו לי לא רק נראה מדהים, אלא גם שיפר את יחס ההמרה שלי ב-30%. קיבלתי ליווי צמוד, עיצוב שמותאם בדיוק לקהל שלי, ותוצאות שמדברות בעד עצמן.',
    stars: 5,
    color: 'from-pink-500 via-red-400 to-orange-300',
    type: 'ecom',
    icon: <FaStore className="w-8 h-8 text-pink-200" />,
    label: 'E-COMMERCE',
  },
  {
    name: 'יואב • קורס דיגיטלי',
    text: 'הדף שבנו לי לא רק נראה מדהים, גם שיפר את הביצועים שלו ב-30%. קיבלתי ליווי צמוד, עיצוב שמותאם בדיוק לקהל שלי, ותוצאות שמדברות בעד עצמן.',
    stars: 5,
    color: 'from-orange-400 via-pink-400 to-yellow-300',
    type: 'coach',
    icon: <FaUserGraduate className="w-8 h-8 text-orange-200" />,
    label: 'COACH',
  },
  {
    name: 'גלעד • יועץ שיווקי',
    text: 'הייתי סקפטי בהתחלה, אבל רציתי לתת המלצה חמה לפיקסל פלוס שבונים אתרים ברמה מאוד גבוהה, הגדילו לי את המכירות בעסק בצורה לא נורמלית, כל פעם שרציתי לשנות משהו או לעצב אחרת הקשיבו לי וגרמו לי להרגיש חלק. תודה לצוות היקר!',
    stars: 5,
    color: 'from-green-400 via-emerald-500 to-cyan-500',
    type: 'ai',
    icon: <FaRobot className="w-8 h-8 text-green-200" />,
    label: 'AI REVIEW',
  },
  {
    name: 'אתר דוגמה • Pixelplus.dev',
    text: 'הדף הזה נבנה כדי להמחיש כמה אפשר ליצור בלי גבולות, ועם המון יצירתיות בתחום שלנו. רוצים לראות דמו?',
    stars: 5,
    project: {
      url: 'https://bitcoin-start-here.vercel.app/',
      label: 'לצפייה בפרויקט',
    },
    color: 'from-blue-700 to-blue-400',
    type: 'demo',
    icon: <FaRocket className="w-8 h-8 text-blue-200" />,
    label: 'DEMO',
  },
];

/**
 * קומפוננטה להצגת דירוג כוכבים
 * @param {Object} props
 * @param {number} props.count - מספר כוכבים
 */
const StarRating = ({ count }) => (
  <div className="flex gap-0.5" aria-label={`דירוג ${count} כוכבים`}>
    {Array.from({ length: count }).map((_, i) => (
      <FaStar key={i} className="w-5 h-5 text-yellow-400" title="כוכב" />
    ))}
  </div>
);

/**
 * סקשן עדויות עם Swiper, אייקונים, תוויות, מבנה פרימיום, CTA חזק, מונה ביקורות אלגנטי
 */
const Testimonials = ({ onLeadClick }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // CTA handler
  const handleCtaClick = (e) => {
    e.preventDefault();
    if (onLeadClick) {
      onLeadClick();
    } else {
      document.getElementById('contact-bottom')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 sm:px-10 bg-gradient-to-br from-[#0C0C0C] via-[#181C24] to-[#0C0C0C] text-white overflow-hidden"
    >
      {/* רקע דינמי עם אנימציה עדינה */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-radial from-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 sm:mb-14 leading-snug tracking-tight drop-shadow-lg animate-fade-in-up bg-gradient-to-r from-[#6CE7F3] via-[#96B3FF] to-[#F0B6FF] bg-clip-text text-transparent">
          מה אומרים עלינו?
        </h2>

        {/* מונה ביקורות אלגנטי */}
        <div className="flex justify-center items-center mb-6">
          <span className="inline-block bg-white/10 text-white/80 px-4 py-1 rounded-full text-sm font-bold shadow border border-white/20 select-none">
            {activeIndex + 1} / {testimonials.length}  
          </span>
        </div>

        {/* Swiper קרוסלה לעדויות */}
        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          spaceBetween={32}
          slidesPerView={1}
          navigation
          loop
          effect="fade"
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="!overflow-visible px-2 sm:px-6 animate-fade-in"
          onSwiper={swiper => (swiperRef.current = swiper)}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`
                  relative bg-gradient-to-br ${t.color} rounded-2xl p-8 sm:p-12 shadow-xl text-right flex flex-col justify-between min-h-[340px] backdrop-blur-md transition-transform duration-300 hover:scale-[1.03] group
                  ${t.type === 'demo' ? 'border-4 border-dashed border-cyan-300' : ''}
                  ${t.type === 'ai' ? 'ring-4 ring-green-200/40 dark:ring-green-500/30' : ''}
                `}
              >
                {/* אייקון לקוח/תחום + תווית */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 shadow-lg">
                    {t.icon}
                  </span>
                  <span className={`
                    inline-block px-3 py-1 rounded-full text-xs font-bold ml-2
                    ${t.type === 'top' ? 'bg-yellow-400 text-[#181C24]' : ''}
                    ${t.type === 'startup' ? 'bg-fuchsia-600 text-white' : ''}
                    ${t.type === 'ecom' ? 'bg-pink-500 text-white' : ''}
                    ${t.type === 'coach' ? 'bg-orange-400 text-white' : ''}
                    ${t.type === 'ai' ? 'bg-green-400 text-[#181C24]' : ''}
                    ${t.type === 'demo' ? 'bg-blue-500 text-white' : ''}
                  `}>
                    {t.label}
                  </span>
                </div>
                {/* תוכן העדות */}
                <p className={`
                  text-lg sm:text-2xl leading-relaxed sm:leading-loose mb-8 font-medium animate-fade-in-up delay-100
                  ${t.type === 'ai' ? 'text-green-900 dark:text-green-100' : ''}
                  ${t.type === 'demo' ? 'italic text-cyan-100 font-bold' : ''}
                  ${t.type === 'top' ? 'text-yellow-900 dark:text-yellow-100' : 'text-white'}
                `}>
                  {t.text}
                  {t.type === 'demo' && t.project && (
                    <>
                      <br />
                      <a
                        href={t.project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-200 underline hover:text-purple-200 font-bold transition"
                      >
                        {t.project.label}
                      </a>
                    </>
                  )}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className={`
                    text-sm sm:text-base font-semibold mt-2 flex items-center gap-2
                    ${t.type === 'ai' ? 'text-green-900 dark:text-green-100' : ''}
                    ${t.type === 'demo' ? 'text-cyan-200' : ''}
                    ${t.type === 'top' ? 'text-yellow-900 dark:text-yellow-100' : ''}
                    ${t.type === 'ecom' ? 'text-pink-100' : ''}
                    ${t.type === 'startup' ? 'text-fuchsia-100' : ''}
                    ${t.type === 'coach' ? 'text-orange-100' : ''}
                  `}>
                    {t.name}
                  </span>
                  <StarRating count={t.stars} />
                </div>
                {/* כפתור לפרויקט – רק לדמו */}
                {t.type === 'demo' && t.project && (
                  <a
                    href={t.project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-8 px-6 py-2.5 border-2 border-cyan-200 text-cyan-100 rounded-lg bg-white/0 hover:bg-cyan-200/10 transition text-sm sm:text-base font-bold shadow-lg animate-fade-in-up delay-200"
                  >
                    {t.project.label}
                  </a>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* חצים מותאמים */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            aria-label="עדות קודמת"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow transition-all duration-200"
            onClick={() => swiperRef.current?.slidePrev()}
            tabIndex={0}
          >
            <svg className="w-6 h-6 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="עדות הבאה"
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center shadow transition-all duration-200"
            onClick={() => swiperRef.current?.slideNext()}
            tabIndex={0}
          >
            <svg className="w-6 h-6 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA קטן לסגירת הסקשן */}
        <div className="flex justify-center mt-14">
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6CE7F3] to-[#508FFF] text-white px-8 py-3 rounded-xl hover:from-[#508FFF] hover:to-[#6CE7F3] transition-transform duration-300 transform hover:scale-105 w-full sm:w-auto text-center font-bold shadow-xl text-lg sm:text-xl focus:outline-none focus:ring-2 focus:ring-[#6CE7F3]"
            aria-label="רוצה תוצאה כזו אצלך? לשיחת ייעוץ"
          >
            <FaRocket className="text-lg sm:text-xl" />
            רוצה תוצאה כזו אצלך? לשיחת ייעוץ
          </button>
        </div>
      </div>

      {/* אנימציות Tailwind מותאמות */}
      <style>
        {`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fade-in {
          0% { opacity: 0;}
          100% { opacity: 1;}
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(.4,0,.6,1) infinite;
        }
        `}
      </style>
    </section>
  );
};

export default Testimonials;
