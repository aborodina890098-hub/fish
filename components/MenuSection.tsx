
import React from 'react';
import { MENU_HIGHLIGHTS } from '../constants';

export const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">Our Signature Selection</h2>
            <p className="text-4xl md:text-5xl font-serif font-bold text-navy">The Blue Harbor Favorites</p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-navy text-white px-6 py-3 rounded-full hover:bg-navy/90 transition-all font-semibold">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download PDF Menu</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MENU_HIGHLIGHTS.map((item) => (
            <div key={item.id} className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xl font-bold text-teal-600">{item.price}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3 text-navy">{item.name}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-6">{item.description}</p>
                <button className="w-full py-4 rounded-xl bg-offwhite text-navy font-bold hover:bg-teal-600 hover:text-white transition-all border border-gray-200 hover:border-teal-600">
                  Quick Order
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-navy/50 italic mb-8">"Chef's Note: Ask about our Catch of the Day specials, served with traditional fisherman's rice."</p>
          <button className="text-teal-600 font-bold border-b-2 border-teal-600 pb-1 hover:text-teal-700 hover:border-teal-700 transition-all">
            See the full menu
          </button>
        </div>
      </div>
    </section>
  );
};
