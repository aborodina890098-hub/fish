
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'framer-motion';

export const AiRecommender: React.FC = () => {
  const [mood, setMood] = useState('');
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const getRecommendation = async () => {
    if (!mood) return;
    setLoading(true);
    setRecommendation('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `I am a guest at "Blue Harbor Seafood" in Cairo. I'm feeling ${mood}. Suggest a specific dish from our menu (Sea Bass, Calamari, Shrimp Tagine, Seafood Pasta, Fisherman's Soup, or Mixed Seafood Platter) and explain why it fits my mood in an appetizing, sensory-rich, premium tone. Mention specific ingredients from the dish. Keep it under 60 words and conclude with a welcoming gesture.`,
        config: {
          systemInstruction: "You are the head sommelier and Maître d' at Blue Harbor Seafood, a luxury Nile-side restaurant. You are helpful, sophisticated, and deeply knowledgeable about seafood."
        }
      });
      setRecommendation(response.text || "I highly recommend our Mixed Seafood Platter for a truly bountiful experience by the Nile.");
    } catch (error) {
      console.error(error);
      setRecommendation("May I suggest our Grilled Sea Bass? It is light, herb-infused, and perfectly captures the essence of the Mediterranean.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-teal-400 font-bold tracking-widest uppercase text-xs mb-4">AI Concierge Service</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">Your Personal <span className="italic">Maître d'</span></p>
          <p className="text-white/60 mb-12 max-w-xl mx-auto leading-relaxed text-lg">
            Let our Chef's Intelligence assist you. Tell us your mood or craving, and we'll craft the perfect recommendation for your evening.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="relative w-full sm:w-96 group">
            <input 
              type="text" 
              placeholder="e.g., celebratory dinner, light & healthy..." 
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && getRecommendation()}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400/30 transition-all placeholder:text-white/20 text-lg shadow-inner"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-focus-within:opacity-100 transition-opacity text-teal-400/50 text-xs">
              Press Enter
            </div>
          </div>
          <button 
            onClick={getRecommendation}
            disabled={loading || !mood}
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:shadow-teal-500/40 active:scale-95 flex items-center justify-center space-x-3 text-lg"
          >
            {loading ? (
              <span className="inline-block w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <>
                <span className="text-xl">✨</span>
                <span>Get Recommendation</span>
              </>
            )}
          </button>
        </div>

        <AnimatePresence>
          {recommendation && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-gradient-to-br from-white/10 to-white/[0.02] border border-teal-500/20 rounded-[2.5rem] p-10 md:p-14 shadow-2xl backdrop-blur-xl relative group"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg shadow-teal-500/40">
                🛎️
              </div>
              <p className="text-2xl text-teal-50 font-serif italic leading-relaxed md:px-10">
                "{recommendation}"
              </p>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center space-x-4">
                <span className="h-px w-8 bg-teal-500/30"></span>
                <span className="text-teal-400 text-xs uppercase tracking-widest font-bold italic">Maître d' Recommendation</span>
                <span className="h-px w-8 bg-teal-500/30"></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
