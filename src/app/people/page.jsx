"use client";

import Header from "../components/header";
import Footer from "../components/footer";

export default function PeoplePage() {
  return (
    <>
      <Header />
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#31c2c3] to-[#0a408b]"></div>
        
        {/* Content */}
        <div className="relative z-20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet the dedicated professionals behind RQUIN Integrated Solutions Inc.
            </p>
            
            {/* Placeholder for team content */}
            <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-white text-lg">
                Team information coming soon...
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
