
import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../constants';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

export const LocationSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askAboutLocation = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `I'm a visitor planning to go to Blue Harbor Seafood at 12 Nile Corniche, Maadi, Cairo. ${query}`,
        config: {
          tools: [{ googleMaps: {} }],
          systemInstruction: "You are the Concierge at Blue Harbor Seafood Cairo. Answer guest questions about directions, parking, nearby landmarks, or accessibility using the Maps tool. Be precise, helpful, and sophisticated."
        },
      });
      setAnswer(response.text || "We are conveniently located on the Nile Corniche with valet parking available.");
    } catch (e) {
      setAnswer("We are located right on the Nile in Maadi. Valet parking is available at the main entrance!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="location" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-teal-600 font-bold tracking-[0.3em] uppercase text-xs mb-4">Location & Concierge</h2>
              <p className="text-4xl md:text-6xl font-serif font-bold text-navy mb-8 leading-tight">Find Your Way to <br /> the <span className="italic text-teal-500">Waterfront</span></p>
              
              <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 mb-10">
                <p className="text-navy/70 mb-6 font-medium">Ask our AI Concierge about directions or parking:</p>
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="e.g., Is there parking nearby?" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-white border border-teal-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                  />
                  <button 
                    onClick={askAboutLocation}
                    disabled={loading}
                    className="bg-teal-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-teal-700 transition-all disabled:opacity-50"
                  >
                    {loading ? '...' : 'Ask'}
                  </button>
                </div>
                <AnimatePresence>
                  {answer && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      className="mt-6 text-sm text-teal-800 italic bg-white/50 p-4 rounded-xl border border-teal-100"
                    >
                      "{answer}"
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-xl shadow-lg">📍</div>
                <div>
                  <h4 className="font-bold text-navy mb-1 uppercase tracking-tighter text-xs">Address</h4>
                  <p className="text-navy/60 text-sm leading-relaxed">{RESTAURANT_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-navy text-white rounded-2xl flex items-center justify-center flex-shrink-0 text-xl shadow-lg">🕒</div>
                <div>
                  <h4 className="font-bold text-navy mb-1 uppercase tracking-tighter text-xs">Hours</h4>
                  <p className="text-navy/60 text-sm leading-relaxed">{RESTAURANT_INFO.hours[0].time}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-navy text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-all flex items-center space-x-3 shadow-xl active:scale-95">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9z"/></svg>
                <span>Google Maps</span>
              </button>
              <button className="bg-white text-navy border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
                <span>Contact Event Team</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gray-200 rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative group">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000" 
                alt="Maadi View" 
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-all"></div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 bg-teal-600/20 rounded-full animate-ping absolute inset-0"></div>
                <div className="relative w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl border-4 border-white">
                  ⚓
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] shadow-xl border border-white/50">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-navy">Blue Harbor Seafood</p>
                    <p className="text-xs text-navy/50">12 Nile Corniche, Maadi</p>
                  </div>
                  <div className="bg-teal-500 text-white text-[10px] font-bold px-3 py-1 rounded-full animate-pulse">
                    OPEN NOW
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-teal-100 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-60 h-60 bg-teal-100 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
