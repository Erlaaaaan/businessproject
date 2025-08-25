"use client";

import { useEffect, useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Partners from "./components/partners";
import Map from "./components/map";
import Footer from "./components/footer";
import Services from "./Services/services";
// import Blogs from "./Blog/blogs";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Partners />
      <div 
        className={`transition-all duration-1000 ease-out delay-200 ${
          scrollY > 300 ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-8'
        }`}
      >
        <About />
      </div>
      <div 
        className={`transition-all duration-1000 ease-out delay-400 ${
          scrollY > 600 ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-8'
        }`}
      >
        <Map />
      </div>
      <div 
        className={`transition-all duration-1000 ease-out delay-600 ${
          scrollY > 900 ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-8'
        }`}
      >
        <Footer />
      </div>
      {/* <Blogs /> */}
    </>
  );
}
