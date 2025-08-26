"use client";

import { useState, useEffect, useRef } from "react";

export default function About() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [visibleElements, setVisibleElements] = useState({
    title: false,
    description: false,
    whoWeAre: false,
    numbers: false,
    services: false
  });
  
  const aboutTitle = "About RQUIN Integrated Solutions Inc.";
  
  // Typing animation effect
  useEffect(() => {
    if (isTypingComplete) {
      // Wait 3 seconds after typing is complete
      const timer = setTimeout(() => {
        setIsTypingComplete(false);
        setCurrentTextIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    if (currentTextIndex < aboutTitle.length) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
      }, 100); // Speed of typing
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentTextIndex, isTypingComplete, aboutTitle.length]);

  // Scroll-triggered animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Trigger animations based on scroll position
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
    <section id="about" className="py-16 relative overflow-hidden min-h-screen">
      {/* Wavy Background Pattern with Animation */}
      <div className="absolute inset-0 z-0">
        {/* Top Half - Teal Background (#31c2c3) */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#31c2c3]">
          {/* Decorative circles for texture with animations */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-[#0a408b] opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-12 h-12 bg-[#0a408b] opacity-15 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-40 left-1/3 w-8 h-8 bg-[#0a408b] opacity-25 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-16 right-1/4 w-20 h-20 bg-[#0a408b] opacity-10 rounded-full animate-pulse delay-1500"></div>
          
          {/* Wavy bottom edge to separate from bottom half */}
          <svg className="absolute bottom-0 left-0 right-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0a408b" opacity="0.4"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#0a408b" opacity="0.3"></path>
          </svg>
        </div>
        
        {/* Bottom Half - Dark Blue Background (#0a408b) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a408b]">
          {/* Wavy top edge to separate from top half */}
          <svg className="absolute top-0 left-0 right-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#31c2c3" opacity="0.3"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#31c2c3" opacity="0.2"></path>
          </svg>
          
          {/* Decorative elements for bottom section with animations */}
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#31c2c3] opacity-30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-[#31c2c3] opacity-20 rounded-full animate-pulse delay-2500"></div>
          <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-[#31c2c3] opacity-25 rounded-full animate-bounce delay-3000"></div>
        </div>
        
        {/* Additional floating wavy elements for more dynamic feel */}
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#31c2c3] opacity-10 rounded-full transform -translate-x-16 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-0 w-24 h-24 bg-[#0a408b] opacity-15 rounded-full transform translate-x-12 animate-pulse delay-1500"></div>
        <div className="absolute bottom-1/3 left-0 w-28 h-28 bg-[#31c2c3] opacity-8 rounded-full transform -translate-x-14 animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 right-0 w-20 h-20 bg-[#0a408b] opacity-12 rounded-full transform translate-x-10 animate-pulse delay-2500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Enhanced Animation */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ease-out ${
          visibleElements.title 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-20 scale-95'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg transition-all duration-300 group-hover:text-blue-200">
            {aboutTitle.slice(0, currentTextIndex)}
            <span className="animate-pulse">|</span>
          </h2>
          <div className={`transition-all duration-1000 delay-500 ${
            visibleElements.description 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
              We are a leading provider of integrated fire protection, gas systems, and security solutions in the Philippines.
            </p>
          </div>
        </div>

        {/* Company Description with Staggered Animation */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`group transform transition-all duration-1000 ease-out ${
              visibleElements.whoWeAre 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 -translate-x-20 scale-95'
            }`}>
              <h3 className="text-3xl font-bold text-white mb-6 drop-shadow-lg transition-all duration-300 group-hover:text-blue-200">Who We Are</h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed font-medium drop-shadow-md transition-all duration-300 group-hover:text-blue-100">
                Founded in 2019 as MG3 Electrical Equipment Repair Services, our company has grown and rebranded into RQUIN Integrated Solutions Inc. – a name that reflects innovation, expertise, and integration in the field of the fire protection and safety systems.
              </p>
              <p className="text-lg text-white/90 leading-relaxed font-medium drop-shadow-md transition-all duration-300 group-hover:text-blue-100">
                With a solid foundation built on years of specialized services, Beyond fire protection, our services also extend to civil works and engineering solutions, making us a complete solutions provider that meet safety and infrastructure need of our client across the Philippines.
              </p>
            </div>
            
            <div className={`relative group transform transition-all duration-1000 ease-out delay-300 ${
              visibleElements.numbers 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-20 scale-95'
            }`}>
              <div className="bg-gradient-to-br from-[#0a408b] to-[#1e40af] rounded-2xl p-8 text-white shadow-2xl border border-white/20 transition-all duration-500 hover:from-[#1e40af] hover:to-[#0a408b] hover:scale-105 hover:shadow-3xl">
                <h4 className="text-3xl font-bold mb-6 text-center transition-all duration-300 group-hover:text-blue-200">Our Numbers</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-200">50+</div>
                    <div className="text-white text-sm font-semibold transition-all duration-300 group-hover:text-blue-200">Happy Clients</div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-200">6+</div>
                    <div className="text-white text-sm font-semibold transition-all duration-300 group-hover:text-blue-200">Years Experience</div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-200">15+</div>
                    <div className="text-white text-sm font-semibold transition-all duration-300 group-hover:text-blue-200">Team Members</div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:text-blue-200">
                    <div className="text-4xl font-bold mb-2 transition-all duration-300 group-hover:text-blue-200">100%</div>
                    <div className="text-white text-sm font-semibold transition-all duration-300 group-hover:text-blue-200">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30 transition-all duration-300 hover:bg-blue-50 group cursor-pointer">
            <div className="text-blue-600 mb-4 transition-all duration-300 group-hover:text-blue-700">
              <svg className="w-12 h-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-all duration-300 group-hover:text-blue-600">Our Mission</h3>
            <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-800">
              To become the most trusted name in integrated fire safety and engineering solutions in The Philippines.
            </p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30 transition-all duration-300 hover:bg-blue-50 group cursor-pointer">
            <div className="text-blue-600 mb-4 transition-all duration-300 group-hover:text-blue-700">
              <svg className="w-12 h-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 transition-all duration-300 group-hover:text-blue-600">Our Vision</h3>
            <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-800">
              To deliver advanced, reliable, and integrated fire protection and engineering services that safeguard lives, assets, and infrastructure.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 drop-shadow-lg transition-all duration-300 hover:text-blue-200 cursor-pointer">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30 transition-all duration-300 hover:bg-blue-50 group cursor-pointer">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-200">
                <svg className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-blue-600">Excellence</h4>
              <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-800">We strive for excellence in everything we do, delivering quality solutions that exceed expectations.</p>
            </div>
            
            <div className="text-center bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30 transition-all duration-300 hover:bg-green-50 group cursor-pointer">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-200">
                <svg className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-green-600">Collaboration</h4>
              <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-800">We believe in the power of teamwork and collaboration to achieve the best results for our clients.</p>
            </div>
            
            <div className="text-center bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-md border border-white/30 transition-all duration-300 hover:bg-purple-50 group cursor-pointer">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-purple-200">
                <svg className="w-8 h-8 text-blue-600 transition-all duration-300 group-hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 transition-all duration-300 group-hover:text-purple-600">Innovation</h4>
              <p className="text-gray-700 font-medium transition-all duration-300 group-hover:text-gray-800">We embrace innovation and creative thinking to solve complex business challenges effectively.</p>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}
