
import React from 'react';

export const CatchBanner: React.FC = () => {
  const catchList = ["Red Mullet", "Mediterranean Sea Bass", "Tiger Shrimp", "Fresh Squid", "Blue Crab", "Wild Lobster", "Silver Seabreem", "Octopus"];

  return (
    <div className="bg-teal-600 py-6 text-white overflow-hidden whitespace-nowrap border-y border-teal-700/50 relative z-20">
      <div className="ticker-wrap flex">
        <div className="ticker flex items-center">
          {/* Quadruplicate for infinite smooth effect */}
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="flex items-center space-x-16 px-8">
              {catchList.map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Today's Catch</span>
                  <span className="text-2xl font-serif font-bold italic tracking-tight">{item}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
