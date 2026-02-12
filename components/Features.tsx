
import React from 'react';
import { motion } from 'framer-motion';

// Added lang prop to interface to resolve TS errors
interface FeaturesProps {
  lang: 'en' | 'ar';
}

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const features = [
    {
      title: lang === 'en' ? 'Fresh Daily Catch' : 'صيد يومي طازج',
      desc: lang === 'en' ? 'Sourced directly from Egyptian fishermen every morning for the highest quality.' : 'يتم الحصول عليه مباشرة من الصيادين المصريين كل صباح لضمان أعلى جودة.',
      icon: '🌊'
    },
    {
      title: lang === 'en' ? 'Authentic Recipes' : 'وصفات أصلية',
      desc: lang === 'en' ? 'Mediterranean flavors passed down through generations, refined by our master chefs.' : 'نكهات البحر الأبيض المتوسط المتوارثة عبر الأجيال، والمطورة بواسطة كبار الطهاة لدينا.',
      icon: '👨‍🍳'
    },
    {
      title: lang === 'en' ? 'Hygienic Standards' : 'معايير النظافة',
      desc: lang === 'en' ? 'Our open kitchen follows international safety and hygiene protocols strictly.' : 'مطبخنا المفتوح يتبع بروتوكولات السلامة والنظافة الدولية بصرامة.',
      icon: '🛡️'
    },
    {
      title: lang === 'en' ? 'Waterfront Terrace' : 'تراس على الواجهة البحرية',
      desc: lang === 'en' ? 'Enjoy your meal with the refreshing breeze of the Nile on our premium terrace.' : 'استمتع بوجبتك مع نسيم النيل المنعش في التراس المميز لدينا.',
      icon: '🌅'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 bg-offwhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-teal-600 font-bold tracking-[0.3em] uppercase text-xs mb-4">
            {lang === 'en' ? 'The Blue Harbor Promise' : 'وعد بلو هاربور'}
          </h2>
          <p className="text-4xl md:text-6xl font-serif font-bold text-navy leading-tight">
            {lang === 'en' ? (
              <>Crafting Excellence <br /> <span className="text-teal-500 italic">Every Single Day</span></>
            ) : (
              <>نصنع التميز <br /> <span className="text-teal-500 italic">كل يوم</span></>
            )}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-50 rounded-full translate-x-12 -translate-y-12 group-hover:bg-teal-500/10 transition-colors"></div>
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-navy">{f.title}</h3>
              <p className="text-navy/60 leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col md:flex-row items-center bg-navy text-white rounded-[4rem] overflow-hidden shadow-2xl"
        >
          <div className="w-full md:w-1/2 relative group">
            <img src="https://images.unsplash.com/photo-1551731388-7243c4e0319b?auto=format&fit=crop&q=80&w=800" alt="Chef preparing fish" className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-navy/20"></div>
          </div>
          <div className="w-full md:w-1/2 p-12 md:p-20">
            <div className="w-12 h-1 w-24 bg-teal-500 mb-8"></div>
            <blockquote className="text-3xl font-serif italic mb-10 leading-snug">
              {lang === 'en' 
                ? '"Sustainability isn\'t a trend for us; it\'s our heritage. We honor the Nile and the Sea in every dish."'
                : '"الاستدامة ليست مجرد موضة بالنسبة لنا؛ إنها تراثنا. نحن نكرم النيل والبحر في كل طبق."'}
            </blockquote>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 rounded-full border border-teal-500/30 p-1">
                <div className="w-full h-full rounded-full bg-teal-500/20"></div>
              </div>
              <div>
                <p className="text-teal-400 font-bold tracking-widest uppercase text-xs">
                  {lang === 'en' ? 'Chef Tarek' : 'الشيف طارق'}
                </p>
                <p className="text-white/40 text-xs">
                  {lang === 'en' ? 'Executive Culinary Director' : 'المدير التنفيذي للطهي'}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
