"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Partners from "./components/partners";
import Map from "./components/map";
import Footer from "./components/footer";
import Services from "./Services/page";
// import Blogs from "./Blog/blogs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      {/* Partners Section */}
      <div className="animate-fade-in-up">
        <Partners />
      </div>

      {/* About Section */}
      <div className="animate-slide-in-left">
        <About />
      </div>

      {/* Map Section */}
      <div className="animate-slide-in-right">
        <Map />
      </div>

      {/* Footer Section */}
      <div className="animate-fade-in-up">
        <Footer />
      </div>
      
      {/* <Blogs /> */}
    </>
  );
}
