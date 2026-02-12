
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: lang === 'en' ? 'Menu' : 'المنيو', href: '#menu' },
    { name: lang === 'en' ? 'About' : 'عننا', href: '#about' },
    { name: lang === 'en' ? 'Gallery' : 'المعرض', href: '#gallery' },
    { name: lang === 'en' ? 'Location' : 'الموقع', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md border-b border-teal-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl italic shadow-lg">B</div>
            <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-white' : 'text-white'}`}>
              Blue Harbor
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-teal-400 text-white/90`}
              >
                {link.name}
              </a>
            ))}
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-white/80 hover:text-teal-400 font-bold text-sm px-3 py-1 border border-white/20 rounded-md transition-all"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>

            <a
              href="#book"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg active:scale-95 shadow-teal-600/20"
            >
              {lang === 'en' ? 'Book a Table' : 'احجز طاولة'}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
             <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="text-white text-xs px-2 py-1 border border-white/20 rounded"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-navy shadow-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-4 text-base font-medium text-white border-b border-white/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6">
            <a
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-teal-600 text-center text-white px-6 py-4 rounded-xl text-lg font-bold"
            >
              {lang === 'en' ? 'Book a Table' : 'احجز طاولة'}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
