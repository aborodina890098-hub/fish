
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4">A Glimpse into the Harbor</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight italic">Coastal Vibes in Maadi</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <div 
              key={img.id} 
              className={`group relative overflow-hidden rounded-3xl ${
                i === 0 ? 'row-span-2 col-span-2 md:col-span-1 md:row-span-2' : ''
              } ${
                i === 3 ? 'md:col-span-2' : ''
              }`}
            >
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover aspect-square md:aspect-auto group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <p className="text-white font-serif italic text-lg">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
