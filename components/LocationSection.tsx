
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">Find Us</h2>
              <p className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">Visit Our Harbor</p>
              <p className="text-navy/60 text-lg leading-relaxed">
                Located in the heart of Maadi on the Nile Corniche, Blue Harbor offers a serene escape from the city hustle with unparalleled river views.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-600">📍</div>
                <div>
                  <h4 className="font-bold text-navy">Address</h4>
                  <p className="text-navy/60">{RESTAURANT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-600">📞</div>
                <div>
                  <h4 className="font-bold text-navy">Phone</h4>
                  <p className="text-navy/60">{RESTAURANT_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 text-teal-600">🕒</div>
                <div className="w-full">
                  <h4 className="font-bold text-navy mb-2">Opening Hours</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {RESTAURANT_INFO.hours.map((h, i) => (
                      <div key={i}>
                        <p className="text-xs uppercase tracking-widest text-navy/40 mb-1">{h.day}</p>
                        <p className="text-sm font-semibold text-navy/80">{h.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button className="bg-navy text-white px-10 py-5 rounded-full font-bold hover:bg-navy/90 transition-all flex items-center space-x-3 shadow-xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              <span>Get Directions</span>
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-200 rounded-[3rem] overflow-hidden shadow-inner border-8 border-white">
              {/* This is a placeholder for a real map embed like Google Maps */}
              <div className="w-full h-full flex flex-col items-center justify-center text-navy/30 bg-[url('https://picsum.photos/seed/map-pattern/800/800')] bg-cover grayscale">
                <div className="bg-white/90 p-8 rounded-3xl shadow-xl border border-white text-center">
                  <p className="font-bold text-navy">Blue Harbor Seafood</p>
                  <p className="text-sm">Nile Corniche, Cairo</p>
                  <div className="mt-4 w-12 h-12 bg-teal-600 rounded-full mx-auto flex items-center justify-center text-white text-xl animate-bounce">📍</div>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
