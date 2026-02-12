
import React from 'react';

export const CatchBanner: React.FC = () => {
  const catchList = ["Red Mullet", "Sea Bass", "Tiger Shrimp", "Squid", "Crab", "Blue Lobster", "Seabreem", "Octopus"];

  return (
    <div className="bg-teal-600 py-4 text-white overflow-hidden whitespace-nowrap border-y border-teal-700/30">
      <div className="ticker-wrap relative">
        <div className="ticker flex items-center space-x-12 px-12">
          {/* Duplicate for seamless effect */}
          {[...catchList, ...catchList, ...catchList].map((item, i) => (
            <div key={i} className="flex items-center space-x-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-60">Today's Catch:</span>
              <span className="text-xl font-serif font-bold italic">{item}</span>
              <span className="w-2 h-2 rounded-full bg-teal-400 opacity-50"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
