"use client";

import { useState, useEffect, useRef } from "react";

export default function About() {
  const [visibleElements, setVisibleElements] = useState({
    title: false,
    description: false,
    whoWeAre: false,
    numbers: false,
    services: false
  });
  
  const aboutTitle = "About RQUIN Integrated Solutions Inc.";

  // Scroll-triggered animations
  useEffect(() => {
    // Show all elements immediately when component mounts
    const showAllElements = () => {
      setVisibleElements({
        title: true,
        description: true,
        whoWeAre: true,
        numbers: true,
        services: true
      });
    };

    // Show elements immediately and also on scroll
    showAllElements();
    
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Trigger animations based on scroll position (as backup)
      if (scrollY > 200) setVisibleElements(prev => ({ ...prev, title: true }));
      if (scrollY > 300) setVisibleElements(prev => ({ ...prev, description: true }));
      if (scrollY > 400) setVisibleElements(prev => ({ ...prev, whoWeAre: true }));
      if (scrollY > 500) setVisibleElements(prev => ({ ...prev, numbers: true }));
      if (scrollY > 600) setVisibleElements(prev => ({ ...prev, services: true }));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="py-16 relative overflow-hidden min-h-screen bg-white">
      {/* Clean Background with Simple Accents */}
      <div className="absolute inset-0 z-0">
        {/* Simple blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
        
        {/* Simple green accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Clean Design */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          visibleElements.title 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-95'
        }`}>
          {/* Fixed height container to prevent auto-scroll */}
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 font-montserrat transition-all duration-300 break-words">
              {aboutTitle}
            </h2>
          </div>
          <div className={`transition-all duration-1000 delay-500 ${
            visibleElements.description 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-montserrat break-words px-2">
            We are a leading provider of integrated fire protection, gas systems, and security solutions in the Philippines.
          </p>
          </div>
        </div>

        {/* Company Description with Clean Design */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`group transform transition-all duration-1000 ease-out ${
              visibleElements.whoWeAre 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-20 scale-95'
            }`}>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat transition-all duration-300 group-hover:text-blue-600">Who We Are</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium font-montserrat transition-all duration-300 group-hover:text-blue-700">
                Founded in 2019 as MG3 Electrical Equipment Repair Services, our company has grown and rebranded into RQUIN Integrated Solutions Inc. – a name that reflects innovation, expertise, and integration in the field of the fire protection and safety systems.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed font-medium font-montserrat transition-all duration-300 group-hover:text-blue-700">
                With a solid foundation built on years of specialized services, Beyond fire protection, our services also extend to civil works and engineering solutions, making us a complete solutions provider that meet safety and infrastructure need of our client across the Philippines.
              </p>
            </div>
            
            <div className={`relative group transform transition-all duration-1000 ease-out delay-300 ${
              visibleElements.numbers 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-20 scale-95'
            }`}>
              <div className="bg-[#0d3c85] rounded-2xl p-8 text-white shadow-lg border border-white/20 transition-all duration-500 hover:bg-[#0a2f6b] hover:scale-105">
                <h4 className="text-3xl font-bold mb-6 text-center font-montserrat transition-all duration-300">Our Numbers</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 font-montserrat">50+</div>
                    <div className="text-white text-sm font-semibold font-montserrat">Happy Clients</div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 font-montserrat">6+</div>
                    <div className="text-white text-sm font-semibold font-montserrat">Years Experience</div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 font-montserrat">15+</div>
                    <div className="text-white text-sm font-semibold font-montserrat">Team Members</div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 font-montserrat">100%</div>
                    <div className="text-white text-sm font-semibold font-montserrat">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision with Clean Design */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border-2 border-blue-100 p-8 rounded-lg shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md group cursor-pointer">
            <div className="text-blue-600 mb-4 transition-all duration-300 group-hover:text-blue-700">
              <svg className="w-12 h-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat transition-all duration-300 group-hover:text-blue-600">Our Mission</h3>
            <p className="text-gray-700 font-medium font-montserrat transition-all duration-300 group-hover:text-gray-800">
              To become the most trusted name in integrated fire safety and engineering solutions in The Philippines.
            </p>
          </div>
          
          <div className="bg-white border-2 border-green-100 p-8 rounded-lg shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-md group cursor-pointer">
            <div className="text-blue-600 mb-4 transition-all duration-300 group-hover:text-blue-700">
              <svg className="w-12 h-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 font-montserrat transition-all duration-300 group-hover:text-green-600">Our Vision</h3>
            <p className="text-gray-700 font-medium font-montserrat transition-all duration-300 group-hover:text-gray-800">
              To deliver advanced, reliable, and integrated fire protection and engineering services that safeguard lives, assets, and infrastructure.
            </p>
          </div>
        </div>

        {/* Core Values with Clean Design */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12 font-montserrat transition-all duration-300 cursor-pointer">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white border-2 border-blue-100 p-8 rounded-lg shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md group cursor-pointer">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200">
                <svg className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat transition-all duration-300 group-hover:text-blue-600">Excellence</h4>
              <p className="text-gray-700 font-medium font-montserrat transition-all duration-300 group-hover:text-gray-800">We strive for excellence in everything we do, delivering quality solutions that exceed expectations.</p>
            </div>
            
            <div className="text-center bg-white border-2 border-green-100 p-8 rounded-lg shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-md group cursor-pointer">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200">
                <svg className="w-8 h-8 text-green-600 transition-all duration-300 group-hover:text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat transition-all duration-300 group-hover:text-green-600">Collaboration</h4>
              <p className="text-gray-700 font-medium font-montserrat transition-all duration-300 group-hover:text-gray-800">We believe in the power of teamwork and collaboration to achieve the best results for our clients.</p>
            </div>
            
            <div className="text-center bg-white border-2 border-blue-100 p-8 rounded-lg shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md group cursor-pointer">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200">
                <svg className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat transition-all duration-300 group-hover:text-blue-600">Innovation</h4>
              <p className="text-gray-700 font-medium font-montserrat transition-all duration-300 group-hover:text-gray-800">We embrace innovation and creative thinking to solve complex business challenges effectively.</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
