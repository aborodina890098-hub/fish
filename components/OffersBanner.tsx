
import React from 'react';

// Added lang prop to interface
interface OffersBannerProps {
  lang: 'en' | 'ar';
}

export const OffersBanner: React.FC<OffersBannerProps> = ({ lang }) => {
  return (
    <div className="bg-teal-50 border-b border-teal-100 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm rtl:space-x-reverse">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              {lang === 'en' ? 'Offer' : 'عرض'}
            </span>
            <span className="text-teal-900 font-semibold italic">
              {lang === 'en' 
                ? 'Weekday Lunch Combo: Sea Bass + Salad + Drink for only EGP 350!'
                : 'كومبو غداء الأسبوع: سمك قاروص + سلطة + مشروب بـ 350 جنيه فقط!'}
            </span>
          </div>
          <div className="hidden md:block w-1 h-1 bg-teal-300 rounded-full"></div>
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-teal-900 font-semibold italic">
              {lang === 'en' 
                ? 'Free Delivery in Maadi for orders over EGP 500.'
                : 'توصيل مجاني في المعادي للطلبات التي تزيد عن 500 جنيه مصري.'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
