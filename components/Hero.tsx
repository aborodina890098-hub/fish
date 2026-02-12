
import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[750px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image with Parallax-like effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Grilled Seafood" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy/90"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-3 bg-teal-500/10 border border-teal-500/30 backdrop-blur-md rounded-full px-5 py-2 mb-10"
        >
          <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
          <span className="text-teal-400 text-[10px] font-bold uppercase tracking-[0.2em]">Maadi's Premier Waterfront Dining</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[0.9] max-w-5xl mx-auto"
        >
          Fresh Seafood, <br />
          <span className="text-teal-400 italic font-normal">Crafted Daily.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          A culinary voyage through the Mediterranean, served with panoramic views of the Nile. 
          Egypt's freshest catch, expertly seasoned.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#book"
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-12 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-teal-600/30 hover:shadow-teal-600/50 active:scale-95"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto glass-light text-navy hover:bg-white border border-white/20 px-12 py-5 rounded-full text-lg font-bold transition-all active:scale-95"
          >
            View Menu
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 max-w-4xl mx-auto pt-12 border-t border-white/10"
        >
          {[
            { label: 'Sourced Daily', icon: '⚓' },
            { label: 'Chef-Led Kitchen', icon: '👨‍🍳' },
            { label: 'Waterfront Terrace', icon: '🌅' },
            { label: 'Award Winning', icon: '🏆' },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center">
              <span className="text-3xl mb-3">{badge.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};
