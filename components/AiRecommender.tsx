
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

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
        contents: `I am a guest at "Blue Harbor Seafood" in Cairo. I'm feeling ${mood}. Suggest a specific dish from our menu (Sea Bass, Calamari, Shrimp Tagine, Seafood Pasta, Fisherman's Soup, or Mixed Seafood Platter) and explain why it fits my mood in an appetizing, premium tone. Keep it under 50 words.`,
        config: {
          systemInstruction: "You are an elegant and helpful Maître d' at Blue Harbor Seafood, a premium restaurant in Cairo."
        }
      });
      setRecommendation(response.text || "I recommend the Mixed Seafood Platter for a truly bountiful experience.");
    } catch (error) {
      console.error(error);
      setRecommendation("I recommend our Grilled Sea Bass—it's fresh, light, and perfect for any occasion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-4">Personalized Dining</h2>
        <p className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">What should you have today?</p>
        <p className="text-white/60 mb-10 max-w-lg mx-auto leading-relaxed">
          Tell our AI Concierge how you're feeling, and we'll recommend the perfect pairing for your mood.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <input 
            type="text" 
            placeholder="e.g., celebratory, hungry, light..." 
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full sm:w-80 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-teal-400 transition-all placeholder:text-white/20"
          />
          <button 
            onClick={getRecommendation}
            disabled={loading || !mood}
            className="w-full sm:w-auto bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-teal-500/20 active:scale-95 flex items-center justify-center space-x-3"
          >
            {loading ? (
              <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
            ) : (
              <span>✨ Ask Chef AI</span>
            )}
          </button>
        </div>

        {recommendation && (
          <div className="bg-white/5 border border-teal-500/20 rounded-[2rem] p-10 animate-in fade-in slide-in-from-bottom-4 duration-500 backdrop-blur-sm">
            <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">🍽️</div>
            <p className="text-xl text-teal-100 font-serif italic leading-relaxed">
              "{recommendation}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
