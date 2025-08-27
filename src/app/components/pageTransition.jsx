"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show loading when pathname changes
    setIsLoading(true);
    
    // Hide loading after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {children}
      
      {/* Loading Animation Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-transparent backdrop-blur-2xl flex items-center justify-center pointer-events-none">
          {/* Animated Loading Elements */}
          <div className="text-center text-white">
            {/* Loading Spinner */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"></div>
            </div>
            
            {/* Loading Text */}
            <div className="text-xl animate-pulse drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">Loading</div>
            
            {/* Animated Dots */}
            <div className="flex justify-center mt-4 space-x-2">
              <div className="w-3 h-3 bg-white rounded-full animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" style={{ animationDelay: '300ms' }}></div>
            </div>
            
            {/* Tectonic-like Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              {/* Floating Geometric Shapes */}
              <div className="absolute top-20 left-20 w-8 h-8 bg-white bg-opacity-30 rounded-full animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]"></div>
              <div className="absolute top-40 right-32 w-6 h-6 bg-white bg-opacity-30 rounded-full animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" style={{ animationDelay: '200ms' }}></div>
              <div className="absolute bottom-32 left-1/3 w-10 h-10 bg-white bg-opacity-30 rounded-full animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" style={{ animationDelay: '400ms' }}></div>
              <div className="absolute bottom-20 right-20 w-4 h-4 bg-white bg-opacity-30 rounded-full animate-bounce drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]" style={{ animationDelay: '600ms' }}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
