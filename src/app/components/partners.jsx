"use client";

import Image from "next/image";

export default function Partners() {
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

  return (
    <div className="text-center bg-white py-6 sm:py-8 md:py-10 px-2 sm:px-4">
      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-800 relative inline-block after:content-[''] after:block after:w-16 sm:after:w-20 md:after:w-24 lg:after:w-101 after:h-0.5 sm:after:h-1 after:bg-yellow-300 after:mx-auto after:mt-2 mb-6 sm:mb-8 md:mb-10">
        Our Trusted Partners
      </h1>

      {/* Single Row - All 16 images */}
      <div className="overflow-hidden relative">
        <div className="flex justify-center animate-marquee gap-3 sm:gap-4 md:gap-6 w-max">
          {[...images, ...images].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Partner ${index}`}
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 object-contain flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
