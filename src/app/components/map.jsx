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
    <section id="map" className="pt-20 sm:pt-30 md:pt-40 lg:pt-50 pb-0 relative overflow-hidden min-h-screen">
      {/* Wavy Background Pattern with Enhanced Animations */}
      <div className="absolute inset-0 z-0">
        {/* Top Half - Teal Background (#31c2c3) */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#31c2c3]">
          {/* Decorative circles for texture with staggered animations */}
          <div className="absolute top-10 sm:top-16 md:top-20 left-4 sm:left-8 md:left-20 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-[#0a408b] opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-16 sm:top-24 md:top-32 right-4 sm:right-8 md:right-32 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-[#0a408b] opacity-15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-20 sm:top-28 md:top-40 left-1/3 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-[#0a408b] opacity-25 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-8 sm:top-12 md:top-16 right-1/4 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 bg-[#0a408b] opacity-10 rounded-full animate-pulse delay-1500"></div>
          
          {/* Wavy bottom edge to separate from bottom half */}
          <svg className="absolute bottom-0 left-0 right-0 w-full h-12 sm:h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0a408b" opacity="0.4"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#0a408b" opacity="0.3"></path>
          </svg>
        </div>
        
        {/* Bottom Half - Dark Blue Background (#0a408b) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a408b]">
          {/* Wavy top edge to separate from top half */}
          <svg className="absolute top-0 left-0 right-0 w-full h-12 sm:h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#31c2c3" opacity="0.3"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#31c2c3" opacity="0.2"></path>
          </svg>
          
          {/* Decorative elements for bottom section with staggered animations */}
          <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-4 sm:right-8 md:right-20 w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 bg-[#31c2c3] opacity-30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-16 sm:bottom-24 md:bottom-32 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 bg-[#31c2c3] opacity-20 rounded-full animate-pulse delay-2500"></div>
          <div className="absolute bottom-20 sm:bottom-28 md:bottom-40 right-1/3 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-[#31c2c3] opacity-25 rounded-full animate-bounce delay-3000"></div>
        </div>
        
        {/* Additional floating wavy elements for more dynamic feel with animations */}
        <div className="absolute top-1/4 left-0 w-16 sm:w-20 md:w-32 h-16 sm:h-20 md:h-32 bg-[#31c2c3] opacity-10 rounded-full transform -translate-x-8 sm:-translate-x-10 md:-translate-x-16 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-0 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 bg-[#0a408b] opacity-15 rounded-full transform translate-x-6 sm:translate-x-8 md:translate-x-12 animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-0 w-14 sm:w-18 md:w-28 h-14 sm:h-18 md:h-28 bg-[#31c2c3] opacity-8 rounded-full transform -translate-x-7 sm:-translate-x-9 md:-translate-x-14 animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-0 w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 bg-[#0a408b] opacity-12 rounded-full transform translate-x-5 sm:translate-x-7 md:translate-x-10 animate-pulse delay-2500"></div>
      </div>

      {/* Content with Enhanced Animations */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header with Staggered Animation */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transform transition-all duration-1000 ease-out ${
          visibleElements.title 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg px-2">Our Global Presence</h2>
          <div className={`transition-all duration-1000 delay-300 ${
            visibleElements.description 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md px-3 sm:px-4">
              Serving clients worldwide with our business solutions and consulting services.
            </p>
          </div>
        </div>

        {/* Map Section with Enhanced Animation - Responsive height */}
        <section className={`relative w-full h-64 sm:h-80 md:h-96 lg:h-150 transform transition-all duration-1200 ease-out delay-500 ${
          visibleElements.map 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95'
        }`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.9782638325523!2d121.02448117587255!3d14.428416231267574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1d1e4d6bcbf%3A0xadb61ea35f880f4f!2sMSA%20Academic%20Advancement%20Institute%20-%20Alabang!5e0!3m2!1sen!2sph!4v1756111128407!5m2!1sen!2sph" 
            className="w-full h-full border-0 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </section>
  );
}
