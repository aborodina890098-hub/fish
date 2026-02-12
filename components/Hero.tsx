
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/seed/seafood-hero/1920/1080" 
          alt="Fresh seafood platter" 
          className="w-full h-full object-cover opacity-50 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="inline-flex items-center space-x-2 bg-teal-500/20 border border-teal-500/30 backdrop-blur-md rounded-full px-4 py-1 mb-8 animate-[bounce_3s_infinite]">
          <span className="flex h-2 w-2 rounded-full bg-teal-400"></span>
          <span className="text-teal-400 text-xs font-bold uppercase tracking-widest">Est. 2018 • Cairo</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight max-w-5xl mx-auto">
          Fresh Seafood, <br />
          <span className="text-teal-400 italic font-normal">Crafted Daily.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Experience the authentic taste of the Mediterranean right in the heart of Maadi. 
          Fresh from the sea to your table, every single day.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#book"
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-teal-500/25 active:scale-95"
          >
            Book a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-10 py-5 rounded-full text-lg font-bold transition-all active:scale-95"
          >
            View Menu
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto pt-10 border-t border-white/10">
          {[
            { label: 'Daily Catch', icon: '🌊' },
            { label: 'Family Friendly', icon: '👨‍👩‍👧‍👦' },
            { label: 'Nile View', icon: '🏙️' },
            { label: 'Fast Delivery', icon: '🛵' },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center">
              <span className="text-3xl mb-2">{badge.icon}</span>
              <span className="text-xs font-bold uppercase tracking-tighter text-white/60">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-white/50 text-xs uppercase tracking-[0.2em] mb-2">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};
