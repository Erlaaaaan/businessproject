"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function FireAndSafety() {

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const fireServices = [
    {
      id: 1,
      title: "Fire Protection Systems",
      description: "Complete fire detection, suppression, and prevention systems for commercial and residential buildings.",
      details: "Our comprehensive fire protection systems include advanced fire detection sensors, automatic suppression systems, and integrated alarm networks. We design and install complete solutions that meet all safety codes and regulations, ensuring maximum protection for your property and occupants.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-800 to-orange-700",
      image: "/images/fire/fire1.png"
    },

    {
      id: 2,
      title: "Consultation and Design",
      description: "Expert fire risk assessment, custom system design, and engineering with hydraulic calculations and equipment specifications.",
      details: "Our expert engineers conduct comprehensive fire risk assessments and develop custom system designs tailored to your specific facility requirements. We perform detailed hydraulic calculations, create precise equipment specifications, and ensure all designs comply with local fire codes and international safety standards. Our design process includes site surveys, risk analysis, and comprehensive documentation for regulatory approval.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-900 to-red-700",
      image: "/images/fire/fire3.png"
    },
    {
      id: 3,
      title: "Fire Detection & Alarms",
      description: "Advanced fire detection and alarm systems with smoke detectors, heat sensors, and integrated notification systems.",
      details: "Our advanced fire detection systems feature cutting-edge sensors, intelligent alarm networks, and seamless integration with building management systems. We provide comprehensive detection coverage with minimal false alarms and maximum reliability.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-800 to-red-600",
      image: "/images/fire/fire4.png"
    },
    {
      id: 4,
      title: "Fire Suppression Systems",
      description: "Automatic fire suppression systems including sprinklers and chemical extinguishing agents.",
      details: "Our fire suppression systems utilize the latest technology in automatic fire detection and response. We install and maintain sprinkler systems, chemical suppression agents, and specialized extinguishing systems for different types of fires and environments.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-700 to-orange-600",
      image: "/images/fire/fire5.png"
    },
    {
      id: 5,
      title: "Fire Safety Equipment",
      description: "Comprehensive range of fire safety equipment and emergency response tools.",
      details: "We supply and maintain a complete range of fire safety equipment including fire extinguishers, alarms, sensors, and specialized equipment for various applications.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-600 to-pink-500",
      image: "/images/fire/fire6.png"
    },
    {
      id: 6,
      title: "Fire Prevention Solutions",
      description: "Proactive fire prevention systems and safety protocols for all types of facilities.",
      details: "Our fire prevention solutions focus on proactive measures to prevent fires before they start. We implement comprehensive safety protocols, conduct risk assessments, and install prevention systems tailored to your specific facility needs.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-500 to-orange-400",
      image: "/images/fire/fire7.png"
    },


    {
      id: 7,
      title: "Fire System Maintenance",
      description: "Regular maintenance and testing of fire protection systems to ensure reliability.",
      details: "Our comprehensive maintenance services ensure your fire protection systems remain in optimal condition. We provide regular inspections, testing, and preventive maintenance to maximize system reliability and compliance with safety regulations.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-200 to-pink-100",
      image: "/images/fire/fire10.png"
    },
    {
      id: 8,
      title: "Fire Hose Reels & Landing Valves (Hydrants)",
      description: "Complete fire hose reel and landing valve systems for rapid fire response and strategic water access.",
      details: "We provide complete fire hose reel and landing valve systems for rapid fire response. Our hose reels feature pre-connected hoses for immediate water delivery by building occupants, while landing valves provide strategic water access points for firefighters. All systems are designed and installed according to fire safety regulations. We ensure proper placement and maintenance for optimal emergency response.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-100 to-orange-50",
      image: "/images/fire/fire11.png"
    },
    {
      id: 9,
      title: "Fire Equipment Supply",
      description: "All types of fire extinguishers including DCP, CO2, Foam, and Water-based systems with maintenance services.",
      details: "We provide a complete supply of fire safety equipment, replacement parts, and accessories for all fire protection systems. Our inventory includes extinguishers, alarms, sensors, and specialized equipment for various applications.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-50 to-pink-25",
      image: "/images/fire/fire12.png"
    },
    {
      id: 10,
      title: "Fire System Integration",
      description: "Seamless integration of fire safety systems with building management and security.",
      details: "Our fire system integration services create seamless connections between fire safety systems and building management, security, and automation systems. We ensure all systems work together efficiently for maximum safety and operational efficiency.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-25 to-orange-10",
      image: "/images/fire/fire13.png"
    },
    {
      id: 11,
      title: "Fire Safety Consulting",
      description: "Expert fire safety consulting and risk assessment for commercial and industrial facilities.",
      details: "Our expert fire safety consultants provide comprehensive risk assessments, compliance audits, and strategic planning for commercial and industrial facilities. We help you develop and implement effective fire safety strategies tailored to your specific needs.",
      category: "fire",
      bgClass: "bg-gradient-to-br from-red-10 to-pink-5",
      image: "/images/fire/fire14.png"
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#003280] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="text-6xl mb-4"></div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat">
            Comprehensive Fire and Safety Solutions
            </h1>
            <div className="w-48 h-1 bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed font-montserrat">
            Maintenance, Supply & Installation Across Region and Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Our Fire & Safety Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At RQUIN Integrated Solutions Inc., we provide comprehensive, end-to-end fire safety and protection system solutions designed to safeguard lives and assets. We offer unparalleled expertise in the maintenance, supply, and installation of all types of fire safety equipment and integrated systems for commercial, industrial, and residential properties in The Philippines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fireServices.map((service, index) => (
              <div 
                key={service.id}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 active:rotate-1 group h-80 cursor-pointer"
                onClick={() => openModal({
                  title: service.title,
                  description: service.description,
                  image: service.image,
                  details: service.details
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
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">
            Ready to Protect Your Facility?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a comprehensive fire safety assessment and quote for your building or facility.
          </p>
          <Link href="/qoute" className="inline-block bg-[#0a810d] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#086a0a] transition-all duration-300 transform hover:scale-105 font-montserrat">
            Get fire and Security Quote
          </Link>
        </div>
      </section>

      {/* Service Details Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-white/20">
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
                  {selectedService.details}
                </div>
              </div>
              
              {/* Features List */}
              <div className="bg-red-50/80 backdrop-blur-sm rounded-lg p-5 border border-red-100/50 mb-6">
                <h4 className="text-lg font-semibold text-red-800 mb-4">What's Included</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center text-red-700">
                    <svg className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Professional Installation</span>
                  </div>
                  <div className="flex items-center text-red-700">
                    <svg className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Support</span>
                  </div>
                  <div className="flex items-center text-red-700">
                    <svg className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Regular Maintenance</span>
                  </div>
                  <div className="flex items-center text-red-700">
                    <svg className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
                className="w-full bg-white/80 text-gray-700 py-3 px-6 rounded-lg font-montserrat"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
