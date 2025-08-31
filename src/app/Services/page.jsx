"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import { useState, useEffect } from "react";

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const serviceCategories = [
    { id: "all", name: "All Services" },
    { id: "fire", name: "Fire And Safety" },
    { id: "it", name: "IT & Security Systems" },
    { id: "civil", name: "Civil Works & Engineering" }
  ];

  const services = [
    {
      id: 1,
      title: "Fire Protection Systems",
      description: "Sourcing and supplying high-quality, certified (UL/FM approved where applicable) fire safety products from leading global manufacturers.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-800 to-orange-700",
      image: "/images/fire/fire1.png"
    },
    {
      id: 2,
      title: "Emergency Evacuation Plan",
      description: "We provide complete Emergency Evacuation Plan services in the Philippines, including expert design, equipment supply, and professional installation. Our solutions are tailored for diverse facilities, from high-rise buildings and commercial complexes to industrial sites, residential communities, and educational institutions.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-700 to-pink-600",
      image: "/images/fire/fire2.png"
    },
    {
      id: 3,
      title: "Consultation and Design",
      description: "Expert fire risk assessment, system design, and engineering, including hydraulic calculations and precise equipment specification.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-900 to-red-700",
      image: "/images/fire/fire3.png"
    },
    {
      id: 4,
      title: "Professional Installation",
      description: "Meticulous and compliant installation of all fire safety components by our certified and highly skilled technicians.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-800 to-red-600",
      image: "/images/fire/fire4.png"
    },
    {
      id: 5,
      title: "Testing and Commissioning",
      description: "Rigorous system testing and commissioning to ensure flawless operation and adherence to all performance standards.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-700 to-orange-600",
      image: "/images/fire/fire5.png"
    },
    {
      id: 6,
      title: "Annual Maintenance Contracts (AMC)",
      description: "Proactive and preventive maintenance to ensure continuous system readiness, extend equipment lifespan, and ensure ongoing compliance for license renewals.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-600 to-pink-500",
      image: "/images/fire/fire6.png"
    },
    {
      id: 7,
      title: "Comprehensive System Coverage",
      description: "Our expertise spans the full spectrum of fire safety and protection systems",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-500 to-orange-400",
      image: "/images/fire/fire7.png"
    },
    {
      id: 8,
      title: "Fire Alarm Systems",
      description: "Conventional, Addressable, Wireless systems, Smoke Detectors, Heat Detectors, Manual Call Points, Sounders, Beacons, and Voice Evacuation Systems.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-400 to-pink-300",
      image: "/images/fire/fire8.png"
    },
    {
      id: 9,
      title: "Automatic Sprinkler Systems",
      description: "Wet, Dry, Pre-action, and Deluge systems.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-300 to-orange-200",
      image: "/images/fire/fire9.png"
    },
    {
      id: 10,
      title: "Fire Pump Systems",
      description: "Electric, Diesel, and Jockey pumps (UL/FM approved).",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-200 to-pink-100",
      image: "/images/fire/fire10.png"
    },
    {
      id: 11,
      title: "Fire Hose Reels & Landing Valves (Hydrants)",
      description: "A fire hose reel is a device with a pre-connected hose for rapid water delivery by occupants, while a landing valve (or hydrant valve) is an outlet on a building's water pipe network, allowing firefighters to connect hoses and access water from a fire hydrant system to extinguish fires.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-100 to-orange-50",
      image: "/images/fire/fire11.png"
    },
    {
      id: 12,
      title: "Fire Extinguishers",
      description: "All types (DCP, CO2, Foam, Water) with refill and maintenance services.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-50 to-pink-25",
      image: "/images/fire/fire12.png"
    },
    {
      id: 13,
      title: "Emergency & Exit Lighting",
      description: "Ensuring clear evacuation routes during power outages.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-25 to-orange-10",
      image: "/images/fire/fire13.png"
    },
    {
      id: 14,
      title: "Compliance & Documentation",
      description: "provide comprehensive documentation, drawings, test reports, and certifications, ensuring your property is fully compliant for audits and insurance.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-10 to-pink-5",
      image: "/images/fire/fire14.png"
    },
    // IT & Security Systems Services
    {
      id: 15,
      title: "System Supply & Procurement",
      description: "Advanced closed-circuit television and surveillance systems for comprehensive security monitoring.",
      category: "it",
      bgClass: "bg-gradient-to-br from-blue-800 to-indigo-700",
      image: "/images/IT/IT1.png"
    },
    {
      id: 16,
      title: "Professional Installation & Integration",
      description: "Smart access control solutions including biometric scanners, key cards, and digital locks.",
      category: "it",
      bgClass: "bg-gradient-to-br from-blue-700 to-purple-600",
      image: "/images/IT/IT2.png"
    },
    {
      id: 17,
      title: "Proactive Maintenance & Support",
      description: "Cybersecurity solutions and network infrastructure protection for businesses.",
      category: "it",
      bgClass: "bg-gradient-to-br from-blue-600 to-indigo-500",
      image: "/images/IT/IT3.png"
    },
    {
      id: 18,
      title: "Earth and Masonry Works",
      description: "Iron, wood, concrete, masonry, and earth constructions.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-500 to-purple-400",
      image: "/images/IT/IT4.png"
    },
    {
      id: 19,
      title: "Material Supply and Fabrication.",
      description: "Manufacturing and furnishin of building materials and supplies.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-400 to-indigo-300",
      image: "/images/IT/IT5.png"
    },
    {
      id: 20,
      title: "Comprehensive Contracting.",
      description: "Bidding, executing, and receiving contracts or assignment related to construction, and allied activies.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-300 to-purple-200",
      image: "/images/IT/IT6.png"
    },
    {
      id: 21,
      title: "Support Services",
      description: "All incidental works and related services necessary for the completion of projects.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-200 to-indigo-100",
      image: "/images/IT/IT7.png"
    }
    
  ];

  const filteredServices = activeFilter === "all" 
    ? services 
    : services.filter(service => service.category === activeFilter);

  // Pagination logic for All Services
  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = services.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      
      <div className="min-h-screen relative overflow-hidden bg-white">
        {/* Clean Background with Simple Accents */}
        <div className="absolute inset-0 z-0">
          {/* Simple blue accent line at top */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-green-500"></div>
          
          {/* Simple green accent line at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
          
          {/* Geometric Shapes - Blue and Green */}
          {/* Top Right - Blue Triangle */}
          <div className="absolute top-20 right-20 w-0 h-0 border-l-[25px] border-l-transparent border-b-[43px] border-b-blue-400 opacity-20 animate-bounce delay-1000"></div>
          
          {/* Top Left - Green Square */}
          <div className="absolute top-16 left-20 w-16 h-16 bg-green-400 opacity-20 rotate-45 animate-pulse delay-500"></div>
          
          {/* Middle Left - Blue Circle */}
          <div className="absolute top-1/2 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-15 animate-ping delay-2000"></div>
          
          {/* Middle Right - Green Triangle */}
          <div className="absolute top-1/3 right-10 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-green-400 opacity-20 animate-bounce delay-1500"></div>
          
          {/* Bottom Left - Blue Square */}
          <div className="absolute bottom-20 left-16 w-12 h-12 bg-blue-400 opacity-20 rotate-45 animate-pulse delay-3000"></div>
          
          {/* Bottom Right - Green Circle */}
          <div className="absolute bottom-16 right-16 w-16 h-16 bg-green-300 rounded-full opacity-15 animate-ping delay-1000"></div>
          
          {/* Additional small shapes for texture */}
          <div className="absolute top-32 left-1/4 w-8 h-8 bg-blue-200 opacity-30 rotate-45 animate-spin delay-2000"></div>
          <div className="absolute bottom-32 right-1/4 w-6 h-6 bg-green-200 opacity-25 rounded-full animate-pulse delay-2500"></div>
          <div className="absolute top-40 right-1/3 w-10 h-10 bg-blue-200 opacity-20 rotate-45 animate-bounce delay-500"></div>
          
          {/* More floating shapes */}
          <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-blue-200 opacity-25 rotate-90 animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/6 w-8 h-8 bg-green-200 opacity-20 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-300 opacity-30 rotate-45 animate-float-fast"></div>
        </div>

        {/* Interactive Geometric Overlay */}
        <div className="fixed inset-0 pointer-events-none z-10">
          {/* Mouse-following geometric shapes */}
          <div 
            className="absolute w-4 h-4 bg-blue-400/20 rounded-full transition-transform duration-100 ease-out"
            style={{
              left: mousePosition.x - 8,
              top: mousePosition.y - 8,
              transform: 'scale(1)'
            }}
          ></div>
          <div 
            className="absolute w-2 h-2 bg-green-400/30 rounded-full transition-transform duration-200 ease-out"
            style={{
              left: mousePosition.x - 4,
              top: mousePosition.y - 4,
              transform: 'scale(1.5)'
            }}
          ></div>
          
          {/* Floating geometric patterns */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-blue-400/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-12 h-12 border-2 border-green-400/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/2 w-8 h-8 bg-purple-400/15 rotate-90 animate-bounce-slow"></div>
        </div>

        {/* Content */}
        <div className="relative z-20">
          {/* Hero Section with Clean Design */}
          <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 relative overflow-hidden">
            {/* Simple Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
            </div>
            
            {/* Simple Border Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-white/30 rounded-tl-3xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-white/30 rounded-tr-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-white/30 rounded-bl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-white/30 rounded-br-3xl"></div>
            
            {/* Simple Floating Shapes */}
            <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rotate-45 animate-spin-medium"></div>
            <div className="absolute top-20 right-20 w-12 h-12 border-2 border-white/15 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-white/25 rotate-90 animate-float-medium"></div>
            <div className="absolute bottom-10 right-1/3 w-14 h-14 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
            
            {/* Center Content with Enhanced Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              {/* Decorative Top Line */}
              <div className="flex justify-center mb-8">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
              </div>
              
              {/* Main Title with Enhanced Styling */}
              <div className="relative mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up relative font-montserrat">
                  <span className="relative z-10">Our Services</span>
                  {/* Text Shadow Effect */}
                  <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-black/20 blur-sm -translate-x-1 -translate-y-1 font-montserrat">
                    Our Services
                  </div>
                </h1>
                
                {/* Decorative Underline */}
                <div className="w-48 h-1 bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-full mx-auto animate-expand-width"></div>
              </div>
              
              {/* Description with Enhanced Container */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 animate-slide-in-down leading-relaxed font-montserrat">
                    Professional solutions for Fire & Safety, IT & Security Systems, and Civil Works & Engineering.
                  </p>
                  
                  {/* Bottom Decorative Elements */}
                  <div className="flex justify-center mt-6 space-x-4">
                    <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse delay-300"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full animate-pulse delay-600"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Bottom Line */}
              <div className="flex justify-center mt-8">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
              </div>
            </div>
          </section>

                     {/* Filter Section with Clean Design */}
            <section className="py-16 bg-white border-b border-blue-200/50 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Enhanced Geometric Decorative Elements */}
                <div className="flex justify-center mb-12">
                  <div className="relative">
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-green-400 to-blue-600 rounded-full animate-expand-width shadow-lg"></div>
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute -top-1 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute -top-1 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-600"></div>
                  </div>
                </div>
                
                {/* Enhanced Title Section */}
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate-fade-in-up font-montserrat">
                    Explore Our Services
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in-down font-montserrat">
                    Choose a service category to explore our specialized solutions
                  </p>
                </div>

                {/* Enhanced Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-6">
                  {serviceCategories.map((category, index) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-110 active:scale-95 ${
                        activeFilter === category.id
                          ? "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl shadow-blue-500/40 border-2 border-blue-400"
                          : "bg-gradient-to-r from-gray-100 via-white to-gray-100 text-gray-700 hover:from-blue-50 hover:via-white hover:to-blue-50 hover:shadow-xl hover:shadow-blue-200/50 border-2 border-gray-200 hover:border-blue-300"
                      }`}
                      style={{
                        transitionDelay: `${index * 150}ms`
                      }}
                    >
                      {/* Enhanced Button Background Pattern */}
                      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        activeFilter === category.id ? 'bg-gradient-to-r from-blue-400/20 to-blue-600/20' : 'bg-gradient-to-r from-blue-100/30 to-green-100/30'
                      }`}>
                        <div className="absolute top-2 left-2 w-3 h-3 border border-current opacity-30 rotate-45"></div>
                        <div className="absolute top-2 right-2 w-3 h-3 border border-current opacity-30 rounded-full"></div>
                        <div className="absolute bottom-2 left-2 w-3 h-3 border border-current opacity-30 rotate-90"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border border-current opacity-30 rotate-45"></div>
              </div>
              
                      {/* Button Content */}
                      <span className="relative z-10 flex items-center font-montserrat">
                        {category.name}
                        {/* Enhanced Icon */}
                        <svg className={`ml-3 w-5 h-5 transition-all duration-300 ${
                          activeFilter === category.id 
                            ? 'text-white rotate-12 scale-110' 
                            : 'text-gray-500 group-hover:text-blue-600 group-hover:rotate-12 group-hover:scale-110'
                        }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      
                      {/* Enhanced Hover Effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 transform -skew-x-12 translate-x-full group-hover:translate-x-0`}></div>
                    </button>
                  ))}
                </div>
                
                {/* Enhanced Bottom Decorative Elements */}
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-400"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-600"></div>
                  </div>
                </div>
              </div>
            </section>

                     {/* Category Description Section */}
            {activeFilter === "fire" && (
              <section className="py-20 relative z-20">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                   <h2 className="text-4xl font-bold text-black mb-4 drop-shadow-lg font-montserrat">Comprehensive Fire and Safety Solutions</h2>
                   <p className="text-xl text-black/90 font-semibold mb-6 drop-shadow-md font-montserrat">Maintenance, Supply & Installation Across Region and Philippines.</p>
                 </div>
                 
                 <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                   <p className="text-lg text-black leading-relaxed text-center drop-shadow-sm font-montserrat">
                     At RQUIN Integrated Solutions Inc., we provide comprehensive, end-to-end fire safety and protection system solutions designed to safeguard lives and assets. We offer unparalleled expertise in the maintenance, supply, and installation of all types of fire safety equipment and integrated systems for commercial, industrial, and residential properties in The Philippines.
                   </p>
                 </div>
               </div>
             </section>
           )}

           {/* IT & Security Systems Description Section */}
           {activeFilter === "it" && (
             <section className="py-20 relative z-20">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-12">
                   <h2 className="text-4xl font-bold text-black mb-4 drop-shadow-lg font-montserrat">Advanced IT & Security Services for Smart Protection</h2>
                   <p className="text-xl text-black/90 font-semibold mb-6 drop-shadow-md font-montserrat">End-to-End Technology for a Safer Environment</p>
                 </div>
                 
                 <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
                   <p className="text-lg text-black leading-relaxed text-center drop-shadow-sm font-montserrat">
                     RQUIN is a leading provider of integrated IT and security system solutions serving Abu Dhabi, Dubai, and across the entire United Arab Emirates. We offer a full spectrum of services from initial consultation and system design to professional installation, ongoing maintenance, and reliable supply of cutting-edge equipment. We are committed to empowering businesses throughout the UAE with robust, secure, and efficient technological infrastructures that protect assets, optimize operations, and ensure business continuity.
                   </p>
                 </div>
               </div>
             </section>
           )}

                     {/* Services Grid with Professional Layout */}
                     <section className="py-20 relative z-20">
                       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                         {/* Fire & Safety Services Grid */}
                         {activeFilter === "fire" && (
                           <section className="py-20 relative z-20 animate-fade-in-up">
                             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                               {/* Fire & Safety Services Grid */}
                               {activeFilter === "fire" && (
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in-down">
                                   {/* Card 1: Fire Protection Systems */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Protection Systems",
                                       description: "Complete fire detection, suppression, and prevention systems for commercial and residential buildings.",
                                       image: "/images/fire/fire1.png",
                                       details: "Complete fire detection, suppression, and prevention systems for commercial and residential buildings."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire1.png" 
                                         alt="Fire Protection Systems"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Protection Systems
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 2: Safety Equipment & Training */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Safety Equipment & Training",
                                       description: "Professional safety equipment installation and comprehensive safety training programs.",
                                       image: "/images/fire/fire2.png",
                                       details: "We provide complete safety equipment solutions including fire extinguishers, safety gear, and emergency response equipment. Our certified trainers conduct comprehensive safety training programs for staff, ensuring everyone knows how to respond in emergency situations."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire2.png" 
                                         alt="Safety Equipment & Training"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Safety Equipment & Training
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 3: Emergency Response Systems */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Emergency Response Systems",
                                       description: "Emergency monitoring and rapid response systems for critical situations.",
                                       image: "/images/fire/fire3.png",
                                       details: "Our emergency response systems provide round-the-clock monitoring and immediate response capabilities. We integrate advanced communication systems, automated alerts, and rapid response protocols to ensure the fastest possible reaction time during emergencies."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire3.png" 
                                         alt="Emergency Response Systems"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Emergency Response Systems
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 4: Fire Detection & Alarms */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Detection & Alarms",
                                       description: "Advanced fire detection systems with integrated alarm and notification capabilities.",
                                       image: "/images/fire/fire4.png",
                                       details: "Our advanced fire detection systems feature cutting-edge sensors, intelligent alarm networks, and seamless integration with building management systems. We provide comprehensive detection coverage with minimal false alarms and maximum reliability."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire4.png" 
                                         alt="Fire Detection & Alarms"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Detection & Alarms
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 5: Fire Suppression Systems */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Suppression Systems",
                                       description: "Automatic fire suppression systems including sprinklers and chemical extinguishing agents.",
                                       image: "/images/fire/fire5.png",
                                       details: "Our fire suppression systems utilize the latest technology in automatic fire detection and response. We install and maintain sprinkler systems, chemical suppression agents, and specialized extinguishing systems for different types of fires and environments."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire5.png" 
                                         alt="Fire Suppression Systems"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Suppression Systems
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 6: Fire Safety Equipment */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Safety Equipment",
                                       description: "Comprehensive range of fire safety equipment and emergency response tools.",
                                       image: "/images/fire/fire6.png",
                                       details: "We supply and maintain a complete range of fire safety equipment including fire extinguishers, alarms, sensors, and specialized equipment for various applications."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire6.png" 
                                         alt="Fire Safety Equipment"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Safety Equipment
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 7: Fire Prevention Solutions */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Prevention Solutions",
                                       description: "Proactive fire prevention systems and safety protocols for all types of facilities.",
                                       image: "/images/fire/fire7.png",
                                       details: "Our fire prevention solutions focus on proactive measures to prevent fires before they start. We implement comprehensive safety protocols, conduct risk assessments, and install prevention systems tailored to your specific facility needs."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire7.png" 
                                         alt="Fire Prevention Solutions"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Prevention Solutions
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 8: Emergency Fire Services */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Emergency Fire Services",
                                       description: "Emergency fire response and professional fire safety consultation services.",
                                       image: "/images/fire/fire8.png",
                                       details: "Our emergency fire services provide round-the-clock response capabilities for fire emergencies. We offer immediate response, professional consultation, and emergency planning services to ensure your safety and compliance."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire8.png" 
                                         alt="Emergency Fire Services"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Emergency Fire Services
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 9: Fire Safety Training */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Safety Training",
                                       description: "Comprehensive fire safety training programs for staff and emergency response teams.",
                                       image: "/images/fire/fire9.png",
                                       details: "Our fire safety training programs are designed to educate staff on fire prevention, emergency response procedures, and proper use of fire safety equipment. We offer customized training for different industries and facility types."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire9.png" 
                                         alt="Fire Safety Training"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Safety Training
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 10: Fire System Maintenance */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire System Maintenance",
                                       description: "Regular maintenance and testing of fire protection systems to ensure reliability.",
                                       image: "/images/fire/fire10.png",
                                       details: "Our comprehensive maintenance services ensure your fire protection systems remain in optimal condition. We provide regular inspections, testing, and preventive maintenance to maximize system reliability and compliance with safety regulations."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire10.png" 
                                         alt="Fire System Maintenance"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire System Maintenance
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 11: Fire Safety Inspections */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Safety Inspections",
                                       description: "Professional fire safety inspections and compliance verification services.",
                                       image: "/images/fire/fire11.png",
                                       details: "Our professional fire safety inspections thoroughly evaluate your facility's compliance with fire safety regulations. We identify potential hazards, verify system functionality, and provide detailed reports with recommendations for improvement."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire11.png" 
                                         alt="Fire Safety Inspections"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Safety Inspections
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 12: Fire Equipment Supply */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Equipment Supply",
                                       description: "Complete supply of fire safety equipment and replacement parts for all systems.",
                                       image: "/images/fire/fire12.png",
                                       details: "We provide a complete supply of fire safety equipment, replacement parts, and accessories for all fire protection systems. Our inventory includes extinguishers, alarms, sensors, and specialized equipment for various applications."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire12.png" 
                                         alt="Fire Equipment Supply"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Equipment Supply
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 13: Fire System Integration */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire System Integration",
                                       description: "Seamless integration of fire safety systems with building management and security.",
                                       image: "/images/fire/fire13.png",
                                       details: "Our fire system integration services create seamless connections between fire safety systems and building management, security, and automation systems. We ensure all systems work together efficiently for maximum safety and operational efficiency."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire13.png" 
                                         alt="Fire System Integration"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire System Integration
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>

                                   {/* Card 14: Fire Safety Consulting */}
                                   <div 
                                     className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                     onClick={() => openModal({
                                       title: "Fire Safety Consulting",
                                       description: "Expert fire safety consulting and risk assessment for commercial and industrial facilities.",
                                       image: "/images/fire/fire14.png",
                                       details: "Our expert fire safety consultants provide comprehensive risk assessments, compliance audits, and strategic planning for commercial and industrial facilities. We help you develop and implement effective fire safety strategies tailored to your specific needs."
                                     })}
                                   >
                                     <div className="absolute inset-0 z-0">
                                       <img 
                                         src="/images/fire/fire14.png" 
                                         alt="Fire Safety Consulting"
                                         className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                       />
                                     </div>
                                     <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                       <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                         Fire Safety Consulting
                                       </h3>
                                       <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                         Click to learn more
                                       </p>
                                     </div>
                                   </div>
                                 </div>
                               )}
                             </div>
                           </section>
                         )}
                       </div>
                     </section>

                     {/* IT & Security Systems Services Grid */}
                     {activeFilter === "it" && (
                       <section className="pt-0 pb-8 relative z-20 animate-fade-in-up">
                         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in-down">
                             {/* Card 1: CCTV & Surveillance */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "System Supply & Procurement",
                                 description: "Advanced closed-circuit television and surveillance systems for comprehensive security monitoring.",
                                 image: "/images/IT/IT1.png",
                                 details: "We supply high-quality, reliable, and future-proof IT and security equipment from industry-leading manufacturers such as Cisco, HP, Dell, Microsoft, Hikvision, Dahua, Honeywell, and Bosch. All products supplied comply with relevant Philippines safety and quality standards.\n\nIT Systems:\n• Servers (rack, tower, blade)\n• Networking equipment (switches, routers, firewalls, access points, SD-WAN solutions)\n• Workstations & laptops, printers & peripherals\n• Comprehensive software licenses (operating systems, office suites, antivirus, specialized applications, ERP/CRM)\n• Diverse data storage solutions (NAS, SAN, cloud storage, hyper-converged infrastructure)\n• Robust cabling infrastructure (fiber optic, Cat6/7)\n• Advanced telephony systems (VoIP, PABX)\n\nSecurity Systems:\n• Advanced CCTV surveillance systems (IP cameras, DVR/NVR, video analytics, thermal imaging)\n• Secure access control systems (biometric, card readers, turnstiles, door locks, visitor management systems)\n• Reliable intrusion detection systems (alarms, motion sensors, glass break detectors, perimeter fencing solutions)\n• Compliant fire alarm systems (conventional, addressable, smoke/heat detectors, aspirating smoke detection)\n• Essential intercom & public address systems\n• Comprehensive perimeter security solutions (fence-mounted detection, LiDAR)\n• Specialized data center security (environmental monitoring, rack access control)"
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT1.png" 
                                   alt="System Supply & Procurement"
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                 System Supply & Procurement
                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>

                             {/* Card 2: Access Control Systems */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "Professional Installation & Integration",
                                 description: "Our certified technicians ensure seamless and efficient installation of all hardware and software components, adhering to international best practices and local regulations across all Emirates.",
                                 image: "/images/IT/IT2.png",
                                 details: "Expert Deployment:\n• We ensure flawless execution of installations and threat response\n\nSystem Integration:\n• We specialize in creating unified, centrally managed IT and security infrastructures\n• Seamlessly integrating diverse systems, enhancing operational efficiency across all Emirates\n\nCustomized Solutions:\n• We design and implement solutions tailored to your specific operational needs\n• Facility layout and regulatory requirements in Abu Dhabi, Dubai, and other Emirates\n\nNetwork Cabling & Infrastructure:\n• We provide professional structured cabling services for optimal network performance\n• Reliability and scalability\n\nConfiguration & Testing:\n• Thorough configuration and rigorous testing\n• Including vulnerability assessments and penetration testing (for IT security)\n• Ensure all systems are functional, secure, and performing optimally\n\nCompliance:\n• All installations strictly adhere to SIRA (Security Industry Regulatory Agency) guidelines for security systems\n• Relevant TRA (Telecommunications and Digital Government Regulatory Authority), Etisalat, and Du regulations for IT infrastructure\n• Ensuring full legal compliance throughout the UAE"
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT2.png" 
                                   alt="Professional Installation & Integration"
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                 Professional Installation & Integration
                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>

                             {/* Card 3: Network Security */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "Proactive Maintenance & Support",
                                 description: "We offer comprehensive maintenance and support services designed to maximize system uptime and protect your investment.",
                                 image: "/images/IT/IT3.png",
                                 details: "Preventive Maintenance:\n• Regular inspections, performance checks, cleaning, and firmware updates\n• Prevent downtime and extend system lifespan\n\nReactive Support:\n• We provide rapid response and expert troubleshooting for unexpected issues and system failures\n• On-site support available across the UAE\n\nRemote Monitoring:\n• Our command center remotely monitors critical IT and security systems\n• Early detection of anomalies, potential threats, and performance issues\n\nSoftware Updates & Patch Management:\n• We ensure all systems run the latest software versions and security patches\n• Mitigate vulnerabilities\n\nHardware Repair & Replacement:\n• Prompt repair or replacement of faulty hardware components\n• Minimize service disruption\n\nData Backup & Recovery:\n• We implement robust backup solutions (on-premise, cloud, hybrid)\n• Disaster recovery plans to safeguard your critical data\n• Ensure business continuity\n\nSLA-Driven Support:\n• Flexible Service Level Agreements (SLAs) tailored to your business's urgency and budget requirements\n• Guaranteed response and resolution times"
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT3.png" 
                                   alt="Proactive Maintenance & Support
"
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                 Proactive Maintenance & Support

                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>

                             {/* Card 4: Support Services */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "Support Services",
                                 description: "All incidental works and related services necessary for the completion of projects.",
                                 image: "/images/IT/IT7.png",
                                 details: "Our support services provide comprehensive assistance for all incidental works and related services necessary for the completion of projects. We ensure smooth project execution and timely delivery."
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT7.png" 
                                   alt="Support Services"
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                   Support Services
                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>
                           </div>
                         </div>
                       </section>
                     )}

                     {/* Civil Works & Engineering Services Grid */}
                     {activeFilter === "civil" && (
                       <section className="py-20 relative z-20 animate-fade-in-up">
                         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-in-down">
                             {/* Card 1: Smart Home Systems */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "Earth and Masonry Works",
                                 description: "Iron, wood, concrete, masonry, and earth constructions.",
                                 image: "/images/IT/IT4.png",
                                 details: "Our smart home systems integrate automation, security, and entertainment into one seamless platform. We provide complete smart home solutions that enhance comfort, security, and energy efficiency."
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT4.png" 
                                   alt="Earth and Masonry Works"
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                   Earth and Masonry Works
                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>

                             {/* Card 2: Data Center Security */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "Material Supply and Fabrication.",
                                 description: "Manufacturing and furnishing of building materials and supplies.",
                                 image: "/images/IT/IT5.png",
                                 details: "Our data center security solutions provide comprehensive protection for critical infrastructure. We implement multi-layered security including physical access control, environmental monitoring, and advanced threat detection systems."
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT5.png" 
                                   alt="Material Supply and Fabrication."
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                   Material Supply and Fabrication.
                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>

                             {/* Card 3: Video Analytics */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "Comprehensive Contracting.",
                                 description: "Bidding, executing, and receiving contracts or assignments related to construction and allied activities.",
                                 image: "/images/IT/IT6.png",
                                 details: "Our advanced video analytics systems use artificial intelligence to provide intelligent surveillance capabilities. We offer facial recognition, object detection, behavior analysis, and automated alerting systems."
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT6.png" 
                                   alt="Comprehensive Contracting."
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                   Comprehensive Contracting.
                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>

                             {/* Card 4: Cloud Security */}
                             <div 
                               className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                               onClick={() => openModal({
                                 title: "Support Services",
                                 description: "all incidental works and related services necessary for the completion of projects.",
                                 image: "/images/IT/IT7.png",
                                 details: "Our cloud security solutions protect your data and applications in cloud environments. We implement comprehensive security measures including encryption, access control, threat detection, and compliance monitoring."
                               })}
                             >
                               <div className="absolute inset-0 z-0">
                                 <img 
                                   src="/images/IT/IT7.png" 
                                   alt="Support Services"
                                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                 />
                               </div>
                               <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                 <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                   Support Services
                                 </h3>
                                 <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                   Click to learn more
                                 </p>
                               </div>
                             </div>


                           </div>
                         </div>
                       </section>
                     )}

                      {/* All Services Grid with Pagination */}
                      {activeFilter === "all" && (
                        <section className="py-20 relative z-20 animate-fade-in-up">
                          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            {/* All Services Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-in-down">
                              {currentServices.map((service) => (
                                <div 
                                  key={service.id}
                                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                                  onClick={() => openModal({
                                    title: service.title,
                                    description: service.description,
                                    image: service.image,
                                    details: service.details || service.description
                                  })}
                                >
                                  <div className="absolute inset-0 z-0">
                                    <img 
                                      src={service.image} 
                                      alt={service.title}
                                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                  </div>
                                  <div className="relative z-20 p-6 h-full flex flex-col justify-center text-center">
                                    <h3 className="text-xl font-bold text-white mb-3 leading-tight drop-shadow-lg uppercase tracking-wide font-montserrat">
                                      {service.title}
                                    </h3>
                                    <p className="text-white text-sm leading-relaxed opacity-95 drop-shadow-md font-montserrat">
                                      Click to learn more
                                    </p>
                                  </div>
            </div>
          ))}
        </div>

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                              <div className="flex justify-center items-center space-x-2">
                                <button
                                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                  disabled={currentPage === 1}
                                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-montserrat"
                                >
                                  Previous
                                </button>
                                
                                <div className="flex space-x-1">
                                  {Array.from({ length: totalPages }, (_, index) => {
                                    const pageNumber = index + 1;
                                    return (
                                      <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`px-3 py-2 rounded-lg transition-colors duration-200 font-montserrat ${
                                          currentPage === pageNumber
                                            ? "bg-blue-600 text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                      >
                                        {pageNumber}
                                      </button>
                                    );
                                  })}
                                </div>

                                <button
                                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                  disabled={currentPage === totalPages}
                                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-montserrat"
                                >
                                  Next
                                </button>
                  </div>
                )}
                
                            {/* Page Info */}
                            {totalPages > 1 && (
                              <div className="text-center mt-4 text-white">
                                <p className="text-sm font-montserrat">
                                  Page {currentPage} of {totalPages} • Showing {startIndex + 1}-{Math.min(endIndex, services.length)} of {services.length} services
                                </p>
                              </div>
                            )}
                          </div>
                        </section>
                      )}

                     {/* Additional Info Section */}
           <section className="py-20 relative z-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              {/* Enhanced Heading Separator */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-400 rounded-full animate-expand-width"></div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-6 font-montserrat">Why Choose Our Services?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 font-montserrat">
                We combine expertise in fire safety, technology, and engineering to deliver comprehensive solutions for all your needs.
              </p>
              
              {/* Geometric Shapes - Blue and Green */}
              <div className="absolute inset-0 z-0">
                {/* Top Left - Blue Triangle */}
                <div className="absolute top-10 left-10 w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-blue-400 opacity-20 animate-bounce delay-1000"></div>
                
                {/* Top Right - Green Square */}
                <div className="absolute top-16 right-16 w-12 h-12 bg-green-400 opacity-20 rotate-45 animate-pulse delay-500"></div>
                
                {/* Bottom Left - Blue Circle */}
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-blue-300 rounded-full opacity-15 animate-ping delay-2000"></div>
                
                {/* Bottom Right - Green Triangle */}
                <div className="absolute bottom-16 right-10 w-0 h-0 border-l-[15px] border-l-transparent border-b-[26px] border-b-green-400 opacity-20 animate-bounce delay-1500"></div>
                
                {/* Additional small shapes for texture */}
                <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-200 opacity-30 rotate-45 animate-spin delay-2000"></div>
                <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-green-200 opacity-25 rounded-full animate-pulse delay-2500"></div>
                <div className="absolute top-1/2 right-1/3 w-10 h-10 bg-blue-200 opacity-20 rotate-45 animate-bounce delay-500"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-200">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">Safety First</h3>
                  <p className="text-gray-600 font-montserrat">Your safety and security are our top priorities in every project.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-green-200">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">Innovation</h3>
                  <p className="text-gray-600 font-montserrat">Cutting-edge technology and modern engineering solutions.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-200">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-montserrat">Expert Team</h3>
                  <p className="text-gray-600 font-montserrat">Certified professionals with years of industry experience.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/20 animate-bounce-in transform scale-100">
            {/* Modal Header with Close Button */}
            <div className="relative p-6 border-b border-gray-200/50">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedService.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 bg-gray-100/80 hover:bg-gray-200/80 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-600 mt-2 text-lg">
                {selectedService.description}
              </p>
            </div>
            
            {/* Modal Content */}
            <div className="p-6">
              {/* Service Image */}
              <div className="mb-6">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-80 object-cover rounded-lg shadow-md"
                />
              </div>
              
              {/* Service Details */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Overview</h3>
                <div className="text-gray-600 leading-relaxed">
                  {selectedService.details.split('\n').map((line, index) => {
                    if (line.trim() === '') return <br key={index} />;
                    if (line.startsWith('•')) {
                      return (
                        <div key={index} className="flex items-start mb-2">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span>{line.substring(1).trim()}</span>
                        </div>
                      );
                    }
                    if (line.endsWith(':')) {
                      return (
                        <h4 key={index} className="font-semibold text-gray-700 mt-4 mb-2">
                          {line}
                        </h4>
                      );
                    }
                    return <p key={index} className="mb-2">{line}</p>;
                  })}
                </div>
              </div>
              
              {/* Features List */}
              <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-5 border border-blue-100/50 mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-4">What's Included</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center text-blue-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Professional Installation</span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Support</span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Regular Maintenance</span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <svg className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Safety Compliance</span>
                  </div>
                </div>
          </div>
        </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50/80 backdrop-blur-sm rounded-b-xl border-t border-gray-200/50">
              <button
                onClick={closeModal}
                className="w-full bg-white/80 text-gray-700 py-3 px-6 rounded-lg font-semibold border border-gray-300/50 hover:bg-white/90 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
}
