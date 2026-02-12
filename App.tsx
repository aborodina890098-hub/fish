
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MenuSection } from './components/MenuSection';
import { CatchBanner } from './components/CatchBanner';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OffersBanner } from './components/OffersBanner';
import { AiRecommender } from './components/AiRecommender';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lang]);

  return (
    <div className={`min-h-screen flex flex-col font-sans ${lang === 'ar' ? 'font-arabic' : ''}`}>
      <Navbar lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <OffersBanner lang={lang} />
        <CatchBanner lang={lang} />
        <Features lang={lang} />
        <MenuSection lang={lang} />
        <AiRecommender lang={lang} />
        <Gallery lang={lang} />
        <Reviews lang={lang} />
        <ReservationSection lang={lang} />
        <LocationSection lang={lang} />
      </main>

      <Footer lang={lang} />
      <FloatingActions showBackToTop={showBackToTop} />
    </div>
  );
};

export default App;
