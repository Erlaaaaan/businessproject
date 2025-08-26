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
    "/images/projects/perps.jpg",
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
    <div className="text-center bg-white py-10 px-4">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 relative inline-block after:content-[''] after:block after:w-101 after:h-1 after:bg-yellow-300 after:mx-auto after:mt-2 mb-10">
        Our Trusted Partners
      </h1>

      {/* Marquee - Starting from center */}
      <div className="overflow-hidden">
        <div className={`flex animate-marquee-reverse gap-10 w-max transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index}`}
              className="h-16 sm:h-40 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerCompanies;
