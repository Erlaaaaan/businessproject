"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <section id="map" className="pt-20 sm:pt-30 md:pt-40 lg:pt-50 pb-16 relative overflow-hidden bg-white">
      {/* Clean Background with Simple Accents */}
      <div className="absolute inset-0 z-0">
        {/* Simple blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
        
        {/* Simple green accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
      </div>

      {/* Content with Clean Design */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header with Clean Design */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
          visibleElements.title 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 font-montserrat px-2">Our Nationwide Presence</h2>
          <div className={`transition-all duration-1000 delay-300 ${
            visibleElements.description 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto font-montserrat px-3 sm:px-4">
              Serving clients nationwide with our business solutions and consulting services.
            </p>
          </div>
        </div>

        {/* Map Section with Clean Design - Responsive height */}
        <section className={`relative w-full transform transition-all duration-1200 ease-out delay-500 ${
          visibleElements.map 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95'
        }`}>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map - Left Side */}
            <div className="h-64 sm:h-80 md:h-96 lg:h-150">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.9782638325523!2d121.02448117587255!3d14.428416231267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1d1e4d6bcbf%3A0xadb61ea35f880f4f!2sMSA%20Academic%20Advancement%20Institute%20-%20Alabang!5e0!3m2!1sen!2sph!4v1756111128407!5m2!1sen!2sph" 
                className="w-full h-full border-2 border-blue-200 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-500 hover:border-blue-400 hover:shadow-2xl hover:scale-105"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* RQUIN Company Section - Right Side */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200 p-8">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 font-montserrat px-2">
                Looking for Reliable Safety Solutions?
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto px-2">
                  We deliver certified services tailored to your facility's needs.
                </p>
                <div className="flex justify-center">
                  <Link href="/Quotation">
                    <button className="bg-[#0a810d] hover:bg-[#086a0a] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 sm:space-x-3 text-sm sm:text-base">
                      <span className="text-xl sm:text-2xl">🔥</span>
                      <span>Get A Quote</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
