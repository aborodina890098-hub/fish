
import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../constants';

interface ResProps {
  lang: 'en' | 'ar';
}

export const ReservationSection: React.FC<ResProps> = ({ lang }) => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setStatus('success'), 800);
  };

  const t = {
    en: {
      title: "Book a Table",
      subtitle: "Securing your spot for the perfect evening by the Nile.",
      name: "Full Name",
      phone: "Phone Number",
      date: "Date",
      guests: "Number of Guests",
      notes: "Special Notes",
      submit: "Confirm Reservation",
      successTitle: "Table Reserved!",
      successSub: "We've sent a confirmation SMS to your phone.",
      orderTitle: "Order Now",
      orderSub: "Enjoy Blue Harbor at home with fast delivery."
    },
    ar: {
      title: "احجز طاولتك",
      subtitle: "اضمن مكانك لأمسية مثالية على ضفاف النيل.",
      name: "الاسم بالكامل",
      phone: "رقم الهاتف",
      date: "التاريخ",
      guests: "عدد الأفراد",
      notes: "ملاحظات خاصة",
      submit: "تأكيد الحجز",
      successTitle: "تم الحجز بنجاح!",
      successSub: "لقد أرسلنا رسالة تأكيد نصية إلى هاتفك.",
      orderTitle: "اطلب الآن",
      orderSub: "استمتع بمذاق بلو هاربور في منزلك مع توصيل سريع."
    }
  }[lang];

  return (
    <section id="book" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 bg-teal-600 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">{t.orderTitle}</h2>
              <p className="text-teal-100 mb-10 leading-relaxed">{t.orderSub}</p>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
                  className="flex items-center justify-center space-x-3 bg-white text-teal-700 py-4 px-6 rounded-2xl font-bold hover:bg-teal-50 transition-all w-full shadow-lg rtl:space-x-reverse"
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp Order</span>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 p-12 lg:p-20 relative">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-20 h-20 bg-teal-500 text-white rounded-full flex items-center justify-center text-4xl">✓</div>
                <h3 className="text-3xl font-serif font-bold text-white">{t.successTitle}</h3>
                <p className="text-white/60">{t.successSub}</p>
                <button onClick={() => setStatus('idle')} className="text-teal-400 font-bold underline">
                  {lang === 'en' ? 'Make another booking' : 'احجز مرة أخرى'}
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-4xl font-serif font-bold text-white mb-2">{t.title}</h2>
                <p className="text-white/40 mb-10">{t.subtitle}</p>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">{t.name}</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">{t.phone}</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">{t.date}</label>
                    <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all [color-scheme:dark]" />
                  </div>
                   <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">{t.guests}</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all [color-scheme:dark]">
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {lang === 'en' ? 'Guests' : 'أشخاص'}</option>)}
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-teal-400">{t.notes}</label>
                    <textarea rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full bg-teal-600 hover:bg-teal-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-teal-500/20 transition-all active:scale-95">
                      {t.submit}
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
