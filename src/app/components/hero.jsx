"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/fire.png", "/images/security.png", "/images/gas.png"];
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen h-full flex items-center overflow-hidden">
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
         </div>
       ))}
       
       

             {/* Content */}
       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Fire, Gas, and Security{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">
            Solutions Under One Roof
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
            The community, workspaces, and technology to make a good impression and get down to business.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Visit
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
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
