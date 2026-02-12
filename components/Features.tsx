
import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      title: 'Fresh Daily Catch',
      desc: 'Sourced directly from Egyptian fishermen every morning for the highest quality.',
      icon: '🧊'
    },
    {
      title: 'Authentic Recipes',
      desc: 'Mediterranean flavors passed down through generations, refined by our master chefs.',
      icon: '👨‍🍳'
    },
    {
      title: 'Hygienic Standards',
      desc: 'Our open kitchen follows international safety and hygiene protocols strictly.',
      icon: '🧼'
    },
    {
      title: 'Outdoor Seating',
      desc: 'Enjoy your meal with the refreshing breeze of the Nile on our premium terrace.',
      icon: '🌅'
    }
  ];

  return (
    <section id="about" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">Why Blue Harbor?</h2>
          <p className="text-4xl md:text-5xl font-serif font-bold text-navy leading-tight">A Dining Experience <br /> Like No Other</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-teal-500 transition-colors">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-navy">{f.title}</h3>
              <p className="text-navy/60 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center bg-navy text-white rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="w-full md:w-1/2">
            <img src="https://picsum.photos/seed/chef-action/800/600" alt="Chef preparing fish" className="w-full h-[400px] object-cover" />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16">
            <blockquote className="text-2xl font-serif italic mb-8">
              "We don't just cook seafood; we celebrate the sea's bounty with respect and passion."
            </blockquote>
            <p className="text-teal-400 font-bold">— Chef Tarek, Executive Chef</p>
            <p className="mt-4 text-white/60 leading-relaxed italic">
              "Chef's Note: Our sea bass is marinated for 4 hours in our secret blend of Egyptian spices before hitting the grill."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
