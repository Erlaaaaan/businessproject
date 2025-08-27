"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const PartnerCompanies = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const images = [
    "/images/projects/tagaytay.png",
    "/images/projects/Monde.png",
    "/images/projects/SM.png",
    "/images/projects/paseo.png",
    "/images/projects/crown.png",
    "/images/projects/pera.jpg",
    "/images/projects/perpetual.png",
    "/images/projects/Minebia.jpg",
    "/images/projects/Baliwag.png",
    "/images/projects/Evang.jpg",
    "/images/projects/Rent.jpg",
    "/images/projects/SNF.png",
    "/images/projects/tri.png",
    "/images/projects/Aqua.jpg",
    "/images/projects/Jordan.jpg",
    "/images/projects/talipapa.jpg"
  ];

  useEffect(() => {
    // Make logos visible immediately when component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="text-center bg-white py-6 sm:py-8 md:py-10 px-3 sm:px-4">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 sm:after:w-20 md:after:w-24 lg:after:w-101 after:h-0.5 sm:after:h-1 after:bg-yellow-300 after:mx-auto after:mt-2 mb-6 sm:mb-8 md:mb-10">
        Our Trusted Clients
      </h1>

      {/* Marquee - Starting from center */}
      <div className="overflow-hidden">
        <div className={`flex animate-marquee-reverse gap-4 sm:gap-6 md:gap-8 lg:gap-40 w-max transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index}`}
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-40 xl:w-auto object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanies;
