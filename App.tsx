
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { MenuSection } from './components/MenuSection';
import { CatchBanner } from './components/CatchBanner';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { OffersBanner } from './components/OffersBanner';
import { AiRecommender } from './components/AiRecommender';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Structured Data (JSON-LD)
  const schemaOrgData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Blue Harbor Seafood",
    "image": "https://picsum.photos/seed/blueharbor/800/600",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Nile Corniche, Maadi",
      "addressLocality": "Cairo",
      "addressCountry": "Egypt"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.9593,
      "longitude": 31.2497
    },
    "url": "https://blueharbor-seafood.com",
    "telephone": "+201000000000",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "13:00",
        "closes": "23:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "13:00",
        "closes": "00:00"
      }
    ],
    "servesCuisine": "Seafood, Mediterranean",
    "priceRange": "$$$"
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgData)}
      </script>

      <Navbar />
      
      <main>
        <Hero />
        <OffersBanner />
        <CatchBanner />
        <Features />
        <MenuSection />
        <AiRecommender />
        <Gallery />
        <Reviews />
        <ReservationSection />
        <LocationSection />
      </main>

      <Footer />
      <FloatingActions showBackToTop={showBackToTop} />
    </div>
  );
};

export default App;
