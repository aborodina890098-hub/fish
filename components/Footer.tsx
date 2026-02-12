
import React from 'react';
import { RESTAURANT_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center font-serif font-bold italic text-xl">B</div>
              <span className="text-2xl font-serif font-bold">Blue Harbor</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Bringing the freshest Mediterranean flavors to Cairo since 2018. Quality you can taste, service you can trust.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Instagram', 'TripAdvisor', 'Yelp'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-teal-400 hover:border-teal-400 transition-all">
                  <span className="sr-only">{s}</span>
                  <div className="w-4 h-4 bg-current rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-8">Quick Links</h4>
            <ul className="space-y-4 text-white/50">
              <li><a href="#menu" className="hover:text-teal-400 transition-colors">Our Menu</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors">Why Us</a></li>
              <li><a href="#gallery" className="hover:text-teal-400 transition-colors">Gallery</a></li>
              <li><a href="#reviews" className="hover:text-teal-400 transition-colors">Testimonials</a></li>
              <li><a href="#book" className="hover:text-teal-400 transition-colors">Book a Table</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-8">Contact Info</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center space-x-3">
                <span className="text-teal-500">📍</span>
                <span>{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-teal-500">📞</span>
                <span>{RESTAURANT_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-teal-500">✉️</span>
                <span>{RESTAURANT_INFO.email}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-8">Join the Catch</h4>
            <p className="text-white/50 mb-6 text-sm">Subscribe to get exclusive offers and updates on our special seasonal catches.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-all" />
              <button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-xl font-bold transition-all">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-white/30 text-sm">
          <p>&copy; {new Date().getFullYear()} Blue Harbor Seafood Cairo. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
