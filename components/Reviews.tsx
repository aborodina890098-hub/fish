
import React from 'react';
import { REVIEWS } from '../constants';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="text-yellow-400 text-2xl">★</span>
            ))}
            <span className="ml-3 font-bold text-navy">4.8/5 on Google</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-4">Loved by our Guests</h2>
          <p className="text-navy/60 italic">Based on over 1,200 verified reviews across Cairo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-navy/80 italic leading-relaxed text-lg mb-8">"{review.comment}"</p>
              </div>
              <div className="flex items-center space-x-4 border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center font-bold text-teal-700">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-navy">{review.name}</p>
                  <p className="text-xs text-navy/40 uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
