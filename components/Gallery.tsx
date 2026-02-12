
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { motion } from 'framer-motion';

// Added lang prop to interface
interface GalleryProps {
  lang: 'en' | 'ar';
}

export const Gallery: React.FC<GalleryProps> = ({ lang }) => {
  return (
    <section id="gallery" className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-offwhite to-transparent opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-teal-400 font-bold tracking-[0.4em] uppercase text-xs mb-4"
          >
            {lang === 'en' ? 'Visual Journey' : 'رحلة بصرية'}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight"
          >
            {lang === 'en' ? (
              <>Experience the <span className="italic font-normal text-teal-400">Harbor Vibes</span></>
            ) : (
              <>عش أجواء <span className="italic font-normal text-teal-400">الميناء</span></>
            )}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
          {/* Main Large Image */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-2 rounded-[3rem] overflow-hidden relative group cursor-pointer shadow-2xl"
          >
            <img src={GALLERY_IMAGES[0].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Main View" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-10">
              <p className="text-white font-serif italic text-2xl">{GALLERY_IMAGES[0].caption}</p>
            </div>
          </motion.div>

          {/* Top Right Grid */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img src={GALLERY_IMAGES[1].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Chef" />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center p-6 text-center">
              <p className="text-white font-serif italic">{GALLERY_IMAGES[1].caption}</p>
            </div>
          </motion.div>

          {/* Bottom Right Wide Grid */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-1 md:row-span-1 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img src={GALLERY_IMAGES[2].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Seafood" />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center p-6 text-center">
              <p className="text-white font-serif italic">{GALLERY_IMAGES[2].caption}</p>
            </div>
          </motion.div>

          {/* Bottom Row Spanning */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="md:col-span-2 md:row-span-1 rounded-[2.5rem] overflow-hidden relative group cursor-pointer shadow-xl"
          >
            <img src={GALLERY_IMAGES[3].url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Terrace" />
            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center p-6 text-center">
              <p className="text-white font-serif italic">{GALLERY_IMAGES[3].caption}</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex justify-center">
          <button className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-navy transition-all active:scale-95 shadow-lg">
            {lang === 'en' ? 'Follow our Instagram @BlueHarborCairo' : 'تابعونا على إنستغرام @BlueHarborCairo'}
          </button>
        </div>
      </div>
    </section>
  );
};
