
import React, { useState } from 'react';
import { MENU_HIGHLIGHTS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

// Added lang prop to interface
interface MenuSectionProps {
  lang: 'en' | 'ar';
}

export const MenuSection: React.FC<MenuSectionProps> = ({ lang }) => {
  const categoriesEN = ['All', 'Appetizer', 'Main', 'Specialty', 'Soup'];
  const categoriesAR = ['الكل', 'مقبلات', 'رئيسي', 'تخصص', 'شوربة'];
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = lang === 'en' ? categoriesEN : categoriesAR;
  
  const categoryMap: { [key: string]: string } = {
    'الكل': 'All',
    'مقبلات': 'Appetizer',
    'رئيسي': 'Main',
    'تخصص': 'Specialty',
    'شوربة': 'Soup'
  };

  const getInternalCategory = (cat: string) => lang === 'en' ? cat : (categoryMap[cat] || cat);

  const filteredItems = getInternalCategory(activeCategory) === 'All' 
    ? MENU_HIGHLIGHTS 
    : MENU_HIGHLIGHTS.filter(item => item.category === getInternalCategory(activeCategory));

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-8 md:space-y-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-4">
              {lang === 'en' ? 'Our Signature Selection' : 'مجموعتنا المختارة'}
            </h2>
            <p className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">
              {lang === 'en' ? 'The Blue Harbor Favorites' : 'مفضلات بلو هاربور'}
            </p>
          </motion.div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => {
              const internalCat = lang === 'en' ? cat : categoriesEN[idx];
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(internalCat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    getInternalCategory(activeCategory) === internalCat 
                    ? 'bg-navy text-white shadow-lg' 
                    : 'bg-offwhite text-navy/60 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {item.id === '1' || item.id === '6' ? (
                    <div className="absolute top-4 right-4 bg-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                      {lang === 'en' ? "Chef's Choice" : "اختيار الشيف"}
                    </div>
                  ) : null}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xl font-bold text-teal-600 font-serif">{item.price}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-navy group-hover:text-teal-600 transition-colors">{item.name}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed mb-6 line-clamp-2">{item.description}</p>
                  <button className="w-full py-4 rounded-xl bg-navy text-white font-bold hover:bg-teal-600 transition-all active:scale-95 shadow-lg shadow-navy/10 hover:shadow-teal-600/20">
                    {lang === 'en' ? 'Order Now' : 'اطلب الآن'}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center flex flex-col items-center">
          <p className="text-navy/50 italic mb-6 max-w-lg">
            {lang === 'en' 
              ? '"Our seafood is delivered daily at 6:00 AM. We recommend our Grilled Sea Bass for the most authentic experience."'
              : '"يتم تسليم المأكولات البحرية لدينا يومياً في تمام الساعة 6:00 صباحاً. نوصي بتجربة سمك القاروص المشوي للحصول على تجربة أصيلة."'}
          </p>
          <button className="flex items-center space-x-2 rtl:space-x-reverse text-teal-600 font-bold group border-b-2 border-transparent hover:border-teal-600 transition-all pb-1">
            <span>{lang === 'en' ? 'Explore Full Digital Menu' : 'استكشف قائمة الطعام الرقمية الكاملة'}</span>
            <svg className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${lang === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
