import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";
import Partners from "./components/partners";
import Map from "./components/map";
import Footer from "./components/footer";
import Services from "./components/services";
import Blogs from "./components/blogs";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Partners />
      <Services />
      <Blogs />
      <Map />
      <Footer />
    </>
  );
}
