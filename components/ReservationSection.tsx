
import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../constants';

export const ReservationSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <section id="book" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="w-full lg:w-1/3 bg-teal-600 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-6">Order Now</h2>
              <p className="text-teal-100 mb-10 leading-relaxed">
                Want to enjoy Blue Harbor at home? Order via WhatsApp or our online portal for lightning-fast delivery across Maadi and Tagamoa.
              </p>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                  className="flex items-center justify-center space-x-3 bg-white text-teal-700 py-4 px-6 rounded-2xl font-bold hover:bg-teal-50 transition-all w-full shadow-lg"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.12l-1.02 3.116 3.235-1.016c.849.462 1.731.735 2.528.735 3.181 0 5.767-2.586 5.768-5.766 0-3.181-2.587-5.767-5.768-5.767zm3.391 8.221c-.142.405-.831.746-1.178.789-.327.04-.75.062-1.211-.134-.332-.142-.767-.322-1.328-.563-2.39-1.019-3.941-3.442-4.06-3.603-.12-.16-.974-1.296-.974-2.47 0-1.174.615-1.75.834-1.99.219-.24.477-.3.636-.3.159 0 .318.002.457.008.145.006.335-.054.526.401.191.458.653 1.588.711 1.703.058.114.096.248.019.401-.076.153-.115.249-.23.382-.115.134-.242.298-.345.4-.115.115-.236.24-.102.47.134.23.593.978 1.274 1.583.876.779 1.614 1.02 1.844 1.135.23.115.364.096.5-.057.134-.153.576-.67.73-.899.153-.229.306-.191.517-.115.21.076 1.336.63 1.565.745.229.115.382.172.439.267.058.096.058.554-.084.959z"/></svg>
                  <span>WhatsApp Order</span>
                </a>
                <button className="flex items-center justify-center space-x-3 bg-navy text-white py-4 px-6 rounded-2xl font-bold hover:bg-navy/90 transition-all w-full border border-teal-500/20">
                  <span>Order Online</span>
                </button>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-teal-700/50 rounded-full blur-3xl"></div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3 p-12 lg:p-20 relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-4xl">✓</div>
                <h3 className="text-3xl font-serif font-bold text-white">Table Reserved!</h3>
                <p className="text-teal-100/60">We've sent a confirmation SMS to your phone. We look forward to seeing you!</p>
                <button onClick={() => setStatus('idle')} className="text-teal-400 font-bold underline">Make another booking</button>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">Book a Table</h2>
                <p className="text-white/40 mb-10">Securing your spot for the perfect evening by the Nile.</p>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">Phone Number</label>
                    <input required type="tel" placeholder="+20 100 000 0000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">Date</label>
                    <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all [color-scheme:dark]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">Number of Guests</label>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all [color-scheme:dark]">
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                      <option value="large">9+ (Call us)</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">Special Notes (Optional)</label>
                    <textarea rows={3} placeholder="Birthdays, allergies, or window seat preferences..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-teal-500/20 transition-all active:scale-95">
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
