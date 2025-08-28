"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

export default function CivilWorks() {

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

  const civilServices = [
    {
      id: 1,
      title: "Earth and Masonry Works",
      description: "Iron, wood, concrete, masonry, and earth constructions.",
      details: "Our earth and masonry works include comprehensive construction services using traditional and modern building materials. We specialize in iron, wood, concrete, masonry, and earth constructions, ensuring structural integrity and durability for all types of projects.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-500 to-purple-400",
      image: "/images/civil/ear.png"
    },
    {
      id: 2,
      title: "Material Supply and Fabrication",
      description: "Manufacturing and furnishing of building materials and supplies.",
      details: "We provide complete material supply and fabrication services for construction projects. Our manufacturing capabilities include custom building materials, supplies, and fabricated components designed to meet your specific project requirements and quality standards.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-400 to-indigo-300",
      image: "/images/civil/mat.png"
    },
    {
      id: 3,
      title: "Comprehensive Contracting",
      description: "Bidding, executing, and receiving contracts or assignment related to construction, and allied activities.",
      details: "Our comprehensive contracting services cover the entire project lifecycle from initial bidding to final execution. We handle all aspects of construction contracts and allied activities, ensuring professional project delivery and client satisfaction.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-300 to-purple-200",
      image: "/images/civil/comp.png"
    },
    {
      id: 4,
      title: "Support Services",
      description: "All incidental works and related services necessary for the completion of projects.",
      details: "We provide comprehensive support services including all incidental works and related services necessary for project completion. Our support covers every aspect needed to ensure successful project delivery and operational efficiency.",
      category: "civil",
      bgClass: "bg-gradient-to-br from-blue-200 to-indigo-100",
      image: "/images/civil/support.png"
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
              Civil Works & Engineering
            </h1>
            <div className="w-48 h-1 bg-gradient-to-r from-blue-300 via-white to-blue-300 rounded-full mx-auto"></div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl">
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95 leading-relaxed font-montserrat">
              Professional civil engineering and construction services that build the foundation for modern infrastructure and sustainable development across the Philippines.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-montserrat">
              Our Civil Works & Engineering Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From concept to completion, we deliver high-quality construction and engineering solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {civilServices.map((service, index) => (
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
            Ready to Build Your Vision?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a comprehensive civil works and engineering assessment for your construction project.
          </p>
          <button className="bg-[#0a810d] text-white font-bold py-4 px-8 rounded-lg hover:bg-[#086a0a] transition-all duration-300 transform hover:scale-105 font-montserrat">
            Get Construction Quote
          </button>
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
              <div className="bg-green-50/80 backdrop-blur-sm rounded-lg p-5 border border-green-100/50 mb-6">
                <h4 className="text-lg font-semibold text-green-800 mb-4">What's Included</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center text-green-700">
                    <svg className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Professional Construction</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <svg className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Quality Materials</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <svg className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Safety Compliance</span>
                  </div>
                  <div className="flex items-center text-green-700">
                    <svg className="w-5 h-5 mr-3 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Project Management</span>
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
