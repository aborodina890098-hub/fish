
import React from 'react';

export const OffersBanner: React.FC = () => {
  return (
    <div className="bg-teal-50 border-b border-teal-100 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">Offer</span>
            <span className="text-teal-900 font-semibold italic">Weekday Lunch Combo: Sea Bass + Salad + Drink for only EGP 350!</span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-teal-300 rounded-full"></div>
          <div className="flex items-center space-x-2">
            <span className="text-teal-900 font-semibold italic">Free Delivery in Maadi for orders over EGP 500.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
