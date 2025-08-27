"use client";

import { useState, useEffect } from "react";

export default function Map() {
  const [visibleElements, setVisibleElements] = useState({
    title: false,
    description: false,
    map: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Trigger animations based on scroll position
      if (scrollY > 800) setVisibleElements(prev => ({ ...prev, title: true }));
      if (scrollY > 850) setVisibleElements(prev => ({ ...prev, description: true }));
      if (scrollY > 900) setVisibleElements(prev => ({ ...prev, map: true }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="map" className="pt-20 sm:pt-30 md:pt-40 lg:pt-50 pb-0 relative overflow-hidden min-h-screen bg-white">
      {/* Clean Background with Simple Accents */}
      <div className="absolute inset-0 z-0">
        {/* Simple blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
        
        {/* Simple green accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
        
        {/* Geometric Shapes - Blue and Green */}
        {/* Top Right - Blue Triangle */}
        <div className="absolute top-16 right-16 w-0 h-0 border-l-[30px] border-l-transparent border-b-[52px] border-b-blue-400 opacity-20 animate-bounce delay-1000"></div>
        
        {/* Top Left - Green Square */}
        <div className="absolute top-24 left-16 w-16 h-16 bg-green-400 opacity-20 rotate-45 animate-pulse delay-500"></div>
        
        {/* Middle Left - Blue Circle */}
        <div className="absolute top-1/2 left-8 w-20 h-20 bg-blue-300 rounded-full opacity-15 animate-ping delay-2000"></div>
        
        {/* Middle Right - Green Triangle */}
        <div className="absolute top-1/3 right-8 w-0 h-0 border-l-[25px] border-l-transparent border-b-[43px] border-b-green-400 opacity-20 animate-bounce delay-1500"></div>
        
        {/* Bottom Left - Blue Square */}
        <div className="absolute bottom-24 left-20 w-12 h-12 bg-blue-400 opacity-20 rotate-45 animate-pulse delay-3000"></div>
        
        {/* Bottom Right - Green Circle */}
        <div className="absolute bottom-16 right-12 w-16 h-16 bg-green-300 rounded-full opacity-15 animate-ping delay-1000"></div>
        
        {/* Additional small shapes for texture */}
        <div className="absolute top-32 left-1/4 w-8 h-8 bg-blue-200 opacity-30 rotate-45 animate-spin delay-2000"></div>
        <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-green-200 opacity-25 rounded-full animate-pulse delay-2500"></div>
        <div className="absolute top-40 right-1/3 w-10 h-10 bg-blue-200 opacity-20 rotate-45 animate-bounce delay-500"></div>
      </div>

      {/* Content with Clean Design */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header with Clean Design */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
          visibleElements.title 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 font-montserrat px-2">Our Global Presence</h2>
          <div className={`transition-all duration-1000 delay-300 ${
            visibleElements.description 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto font-montserrat px-3 sm:px-4">
              Serving clients worldwide with our business solutions and consulting services.
            </p>
          </div>
        </div>

        {/* Map Section with Clean Design - Responsive height */}
        <section className={`relative w-full h-64 sm:h-80 md:h-96 lg:h-150 transform transition-all duration-1200 ease-out delay-500 ${
          visibleElements.map 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95'
        }`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.9782638325523!2d121.02448117587255!3d14.428416231267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1d1e4d6bcbf%3A0xadb61ea35f880f4f!2sMSA%20Academic%20Advancement%20Institute%20-%20Alabang!5e0!3m2!1sen!2sph!4v1756111128407!5m2!1sen!2sph" 
            className="w-full h-full border-2 border-blue-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-500 hover:border-blue-400 hover:shadow-2xl hover:scale-105"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </section>
  );
}
