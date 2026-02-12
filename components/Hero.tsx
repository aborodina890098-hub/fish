
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  lang: 'en' | 'ar';
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const content = {
    en: {
      tag: "Maadi's Premier Waterfront Dining",
      h1: "Fresh Seafood, Crafted Daily.",
      p: "A culinary voyage through the Mediterranean, served with panoramic views of the Nile. Egypt's freshest catch, expertly seasoned.",
      primary: "Book a Table",
      secondary: "View Menu"
    },
    ar: {
      tag: "أفضل تجربة عشاء على النيل في المعادي",
      h1: "سمك طازج، يُعد يومياً.",
      p: "رحلة طهي عبر البحر الأبيض المتوسط، تُقدم مع إطلالات بانورامية على النيل. صيد مصر الطازج، متبل بخبرة.",
      primary: "احجز طاولتك",
      secondary: "عرض المنيو"
    }
  };

  const current = content[lang];

  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-navy">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Grilled Seafood" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/40 to-navy/95"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-teal-500/10 border border-teal-500/30 backdrop-blur-md rounded-full px-5 py-2 mb-10"
        >
          <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-teal-400 text-[10px] font-bold uppercase tracking-[0.2em]">{current.tag}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-8 leading-[1.1] md:leading-[0.9] max-w-5xl mx-auto"
        >
          {lang === 'en' ? (
            <>Fresh Seafood, <br /><span className="text-teal-400 italic font-normal">Crafted Daily.</span></>
          ) : (
            <>{current.h1.split(',')[0]}، <br /><span className="text-teal-400 italic font-normal">{current.h1.split(',')[1]}</span></>
          )}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          {current.p}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse"
        >
          <a
            href="#book"
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-12 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-teal-600/30 active:scale-95"
          >
            {current.primary}
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/20 backdrop-blur-md px-12 py-5 rounded-full text-lg font-bold transition-all active:scale-95"
          >
            {current.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
