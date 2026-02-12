
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

interface FloatingActionsProps {
  showBackToTop: boolean;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ showBackToTop }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce hover:animate-none"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.12l-1.02 3.116 3.235-1.016c.849.462 1.731.735 2.528.735 3.181 0 5.767-2.586 5.768-5.766 0-3.181-2.587-5.767-5.768-5.767zm3.391 8.221c-.142.405-.831.746-1.178.789-.327.04-.75.062-1.211-.134-.332-.142-.767-.322-1.328-.563-2.39-1.019-3.941-3.442-4.06-3.603-.12-.16-.974-1.296-.974-2.47 0-1.174.615-1.75.834-1.99.219-.24.477-.3.636-.3.159 0 .318.002.457.008.145.006.335-.054.526.401.191.458.653 1.588.711 1.703.058.114.096.248.019.401-.076.153-.115.249-.23.382-.115.134-.242.298-.345.4-.115.115-.236.24-.102.47.134.23.593.978 1.274 1.583.876.779 1.614 1.02 1.844 1.135.23.115.364.096.5-.057.134-.153.576-.67.73-.899.153-.229.306-.191.517-.115.21.076 1.336.63 1.565.745.229.115.382.172.439.267.058.096.058.554-.084.959z"/></svg>
      </a>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`bg-white text-navy w-14 h-14 rounded-full flex items-center justify-center shadow-xl border border-gray-100 transition-all duration-300 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
      </button>
    </div>
  );
};
