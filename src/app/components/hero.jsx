"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const images = ["/images/fire.png", "/images/camera.jpg", "/images/gas.png"];
  
  const heroText = "Leading the way in Safety, Construction & Technology.";
  
  // Temporary test with SVG files to debug
  // const images = ["/next.svg", "/vercel.svg", "/file.svg"];
  
  // Debug: Log the current image index
  console.log('Current image index:', currentImageIndex, 'Image:', images[currentImageIndex]);
  
  // Test if images exist
  useEffect(() => {
    images.forEach((img, index) => {
      const testImg = new window.Image();
      testImg.onload = () => console.log(`Image ${index} loaded successfully:`, img);
      testImg.onerror = () => console.error(`Image ${index} failed to load:`, img);
      testImg.src = img;
    });
  }, []);

  // Scroll effect for hero content
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Parallax effect for hero content
  const parallaxOffset = scrollY * 0.3;

  return (
    <section id="hero" className="relative min-h-[50vh] h-full flex items-center overflow-hidden">
      {/* Background Images with Loop */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentImageIndex ? 1 : 0 }}
        >
          <Image
            src={image}
            alt={`Background ${index + 1}`}
            fill
            className="object-cover w-full h-full"
            priority={index === 0}
            onError={(e) => console.error(`Error loading image: ${image}`)}
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      ))}
      
      {/* Content with Scroll-triggered Animations */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center"
        style={{
          transform: `translateY(${parallaxOffset}px)`
        }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Fixed height container to prevent auto-scroll */}
          <div className="h-32 sm:h-40 md:h-48 lg:h-56 flex items-center justify-center mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] drop-shadow-[0_0_30px_rgba(0,0,0,0.4)] [text-shadow:_2px_2px_0_#000,_4px_4px_0_#000,_6px_6px_0_#000] font-montserrat transition-all duration-700 break-words">
              {heroText}
            </h1>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 opacity-90 font-montserrat transition-all duration-700 hover:opacity-100 hover:text-blue-100 leading-relaxed break-words px-2">

          </p>
          
          {/* Quote Button */}
          <div className="flex justify-center">
            <Link href="/Quotation">
              <button className="bg-[#0a810d] hover:bg-[#086a0a] text-white font-bold py-4 px-8 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-montserrat uppercase tracking-wide text-lg flex items-center space-x-2">
                <span className="text-2xl">🔥</span>
                Get a Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
