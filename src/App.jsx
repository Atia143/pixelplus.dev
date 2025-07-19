// App.jsx
import { useState } from "react";
import './index.css';
import "swiper/css";
import "swiper/css/navigation";
import Hero from './sections/Hero';
import WhyUs from './sections/WhyUs';
import WhatMakesGood from "./sections/WhatMakesGood";
import NavBar from "./sections/NavBar";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Footer from "./sections/Footer";
import ContactMini from "./sections/ContactMini";
import LeadModal from "./sections/LeadModal";  
import EnvelopeButton from "./sections/EnvelopButton";
import FAQ from "./sections/FAQ";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openLeadModal = () => setModalOpen(true);
  const closeLeadModal = () => setModalOpen(false);

  return (
    <>
      <main className="snap-y snap-mandatory h-screen overflow-hidden-scroll scroll-smooth text-[#1A1A1A] font-sans" dir="rtl">
        <NavBar onLeadClick={openLeadModal} />
        <Hero onLeadClick={openLeadModal} />
        <WhyUs />
        <WhatMakesGood onLeadClick={openLeadModal} />
        <Testimonials onLeadClick={openLeadModal}/>
        <Pricing onLeadClick={openLeadModal} />
        <FAQ />
        <ContactMini onLeadClick={openLeadModal} />
        <Footer />
        <LeadModal open={modalOpen} onClose={closeLeadModal} />
      </main>
      {/* כפתור מעטפה קבוע בפינה */}
      <EnvelopeButton onClick={openLeadModal} />
    </>
  );
}

