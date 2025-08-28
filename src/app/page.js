"use client";

import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Partners from "./components/partners";
import Map from "./components/map";
import Footer from "./components/footer";
// import Blogs from "./Blog/blogs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      
      {/* Partners Section */}
      <Partners />

      {/* About Section */}
      <About />

      {/* Map Section */}
      <Map />

      {/* Footer Section */}
      <Footer />
      
      {/* <Blogs /> */}
    </>
  );
}
