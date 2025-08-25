"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const images = ["/images/fire.png", "/images/camera.jpg", "/images/gas.png"];
  
  const heroText = "RQUIN Integrated Solutions Inc.";
  const heroSubtitle = "Leading the way in Safety, Construction & Technology.";
  
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

  // Typing animation effect
  useEffect(() => {
    if (isTypingComplete) {
      // Wait 5 seconds after typing is complete
      const timer = setTimeout(() => {
        setIsTypingComplete(false);
        setCurrentTextIndex(0);
      }, 5000);
      return () => clearTimeout(timer);
    }

    if (currentTextIndex < heroText.length) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(prev => prev + 1);
      }, 100); // Speed of typing
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentTextIndex, isTypingComplete, heroText.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[50vh] h-full flex items-center overflow-hidden">
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
       
       

             {/* Content */}
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] drop-shadow-[0_0_30px_rgba(0,0,0,0.4)] [text-shadow:_2px_2px_0_#000,_4px_4px_0_#000,_6px_6px_0_#000] font-['HKModularRounded-Bold']">
            {heroText.slice(0, currentTextIndex)}
            <span className="animate-pulse">|</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] drop-shadow-[0_0_16px_rgba(0,0,0,0.6)] [text-shadow:_1px_1px_0_#000,_2px_2px_0_#000] font-['HKModularRounded-Bold']">
            {heroSubtitle}
          </h2>
          
          <p className="text-xl md:text-2xl text-white mb-8 opacity-90 font-['HKModularRounded-Bold']">
          We specialize in delivering integrated solutions – from fire protection and electrical systems to security, civil works and engineering services. With a focus on reliability, innovation, and compliance, we help protect people, property and communities through tailored systems designed to mee the unique needs of every project.
          </p>
         
           
          
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
