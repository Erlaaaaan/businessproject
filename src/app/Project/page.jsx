"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import ProjectModal from "../View/page";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isPageTransitioning, setIsPageTransitioning] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectsPerPage = 3;

  const projectCategories = [
    { id: "all", name: "All Projects" },
    { id: "luzon", name: "Luzon" },
    { id: "visayas", name: "Visayas" },
  ];

  const projects = [
    {
      id: 1,
      title: "Tagaytay Highlands International Golf and Country Club",
      category: "luzon",
      description: "Complete fire alarm system installation for Tagaytay Highlands International Golf and Country Club",
      image: "/images/projects/tagaytay.png",
      location: "Tagaytay City",
      year: "2024",
      client: "Tagaytay Highlands International Golf and Country Club"
    },
    {
      id: 2,
      title: "Monde Nissin Laguna",
      category: "luzon",
      description: "Advanced gas detection and monitoring system for Monde Nissin Laguna manufacturing facility",
      image: "/images/projects/Monde.png",
      location: "Laguna",
      year: "2024",
      client: "Monde Nissin Laguna"
    },
    {
      id: 3,
      title: "SM SuperMarket",
      category: "luzon",
      description: "Comprehensive CCTV surveillance system with remote monitoring for SM Mall",
      image: "/images/projects/SM.png",
      location: "Metro Manila",
      year: "2024",
      client: "SM SuperMarket"
    },
    {
      id: 4,
      title: "Paseo Premier Residences, Inc.",
      category: "luzon",
      description: "Automated fire suppression system for Paseo Premier Residences high-rise building",
      image: "/images/projects/paseo.png",
      location: "Makati City",
      year: "2023",
      client: "Paseo Premier Residences, Inc."
    },
    {
      id: 5,
      title: "Crown Worldwide Group",
      category: "luzon",
      description: "Integrated building management and control system for Crown Worldwide Group headquarters",
      image: "/images/projects/crown.png",
      location: "Taguig City",
      year: "2023",
      client: "Crown Worldwide Group"
    },
    {
      id: 6,
      title: "University of Perpetual Help System",
      category: "luzon",
      description: "Biometric access control system for University of Perpetual Help System campuses",
      image: "/images/projects/pera.jpg",
      location: "Las Piñas & Laguna",
      year: "2023",
      client: "University of Perpetual Help System"
    },
    {
      id: 7,
      title: "Perpetual Help Medical Center",
      category: "luzon",
      description: "Complete fire protection system for Perpetual Help Medical Center",
      image: "/images/projects/perps.jpg",
      location: "Las Piñas City",
      year: "2023",
      client: "Perpetual Help Medical Center"
    },
    {
      id: 8,
      title: "Minibea Philippines, Inc.",
      category: "luzon",
      description: "Industrial gas monitoring and safety system for Minibea Philippines manufacturing plant",
      image: "/images/projects/Minebia.jpg",
      location: "Laguna",
      year: "2023",
      client: "Minibea Philippines, Inc."
    },
    {
      id: 9,
      title: "Baliwag Marketing Co., Inc.",
      category: "luzon",
      description: "Advanced security surveillance network for Baliwag Marketing Co. distribution centers",
      image: "/images/projects/Baliwag.png",
      location: "Bulacan",
      year: "2023",
      client: "Baliwag Marketing Co., Inc."
    },
    {
      id: 10,
      title: "Evangelista Hospital San Pedro Laguna",
      category: "luzon",
      description: "Comprehensive fire safety system for Evangelista Hospital San Pedro Laguna",
      image: "/images/projects/Evang.jpg",
      location: "San Pedro, Laguna",
      year: "2023",
      client: "Evangelista Hospital San Pedro Laguna"
    },
    {
      id: 11,
      title: "Rentokil Initial Phils. Inc.",
      category: "luzon",
      description: "Smart building automation system for Rentokil Initial Philippines headquarters",
      image: "/images/projects/Rent.jpg",
      location: "Quezon City",
      year: "2023",
      client: "Rentokil Initial Phils. Inc."
    },
    {
      id: 12,
      title: "SNF Floerger Phils. Inc.",
      category: "luzon",
      description: "Gas safety infrastructure and monitoring for SNF Floerger Philippines facility",
      image: "/images/projects/SNF.png",
      location: "Laguna",
      year: "2023",
      client: "SNF Floerger Phils. Inc."
    },
    {
      id: 13,
      title: "Triprint Corporation",
      category: "luzon",
      description: "Multi-level security access control system for Triprint Corporation",
      image: "/images/projects/tri.png",
      location: "Metro Manila",
      year: "2023",
      client: "Triprint Corporation"
    },
    {
      id: 14,
      title: "Aqua Frontier Development Inc.",
      category: "luzon",
      description: "Advanced fire detection network for Aqua Frontier Development Inc. properties",
      image: "/images/projects/Aqua.jpg",
      location: "Metro Manila",
      year: "2023",
      client: "Aqua Frontier Development Inc."
    },
    {
      id: 15,
      title: "Jordan Woods Academy",
      category: "luzon",
      description: "Comprehensive security system for Jordan Woods Academy campus",
      image: "/images/projects/Jordan.jpg",
      location: "Metro Manila",
      year: "2023",
      client: "Jordan Woods Academy"
    },
    {
      id: 16,
      title: "D'Talipapa Mall Boracay",
      category: "visayas",
      description: "Integrated safety and security systems for D'Talipapa Mall Boracay",
      image: "/images/projects/talipapa.jpg",
      location: "Boracay Island",
      year: "2023",
      client: "D'Talipapa Mall Boracay"
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  // Reset to first page when category changes
  const handleCategoryChange = (categoryId) => {
    setIsPageTransitioning(true);
    setActiveCategory(categoryId);
    setCurrentPage(1);
    setTimeout(() => setIsPageTransitioning(false), 300);
  };

  const goToPage = (pageNumber) => {
    if (pageNumber === currentPage) return;
    
    setIsPageTransitioning(true);
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsPageTransitioning(false), 300);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setIsPageTransitioning(true);
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsPageTransitioning(false), 300);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setIsPageTransitioning(true);
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsPageTransitioning(false), 300);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Wavy Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Top Half - Teal Background (#31c2c3) */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-[#31c2c3]">
          {/* Decorative circles for texture */}
          <div className="absolute top-20 left-20 w-16 h-16 bg-[#0a408b] opacity-20 rounded-full"></div>
          <div className="absolute top-32 right-32 w-12 h-12 bg-[#0a408b] opacity-15 rounded-full"></div>
          <div className="absolute top-40 left-1/3 w-8 h-8 bg-[#0a408b] opacity-25 rounded-full"></div>
          <div className="absolute top-16 right-1/4 w-20 h-20 bg-[#0a408b] opacity-10 rounded-full"></div>
          
          {/* Wavy bottom edge to separate from bottom half */}
          <svg className="absolute bottom-0 left-0 right-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#0a408b" opacity="0.4"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#0a408b" opacity="0.3"></path>
          </svg>
        </div>
        
        {/* Bottom Half - Dark Blue Background (#0a408b) */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#0a408b]">
          {/* Wavy top edge to separate from top half */}
          <svg className="absolute top-0 left-0 right-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#31c2c3" opacity="0.3"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#31c2c3" opacity="0.2"></path>
          </svg>
          
          {/* Decorative elements for bottom section */}
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-[#31c2c3] opacity-30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-[#31c2c3] opacity-20 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-[#31c2c3] opacity-25 rounded-full"></div>
        </div>
        
        {/* Additional floating wavy elements for more dynamic feel */}
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-[#31c2c3] opacity-10 rounded-full transform -translate-x-16"></div>
        <div className="absolute top-1/3 right-0 w-24 h-24 bg-[#0a408b] opacity-15 rounded-full transform translate-x-12"></div>
        <div className="absolute bottom-1/3 left-0 w-28 h-28 bg-[#31c2c3] opacity-8 rounded-full transform -translate-x-14"></div>
        <div className="absolute bottom-1/4 right-0 w-20 h-20 bg-[#0a408b] opacity-12 rounded-full transform translate-x-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-[#0a408b] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              Discover our portfolio of successful fire protection, gas systems, and security solutions across the Philippines
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 bg-white/90 backdrop-blur-sm border-b relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Loading State */}
            {isPageTransitioning && (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600 text-lg">Loading projects...</p>
                </div>
              </div>
            )}
            
            {/* Projects Grid with Animation */}
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-300 ${
                isPageTransitioning 
                  ? 'opacity-0 scale-95 transform translate-y-4' 
                  : 'opacity-100 scale-100 transform translate-y-0'
              }`}
            >
              {currentProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                    isPageTransitioning 
                      ? 'opacity-0 transform translate-y-8' 
                      : 'opacity-100 transform translate-y-0'
                  }`}
                  style={{
                    transitionDelay: isPageTransitioning ? '0ms' : `${index * 100}ms`,
                    boxShadow: '0 25px 50px -12px rgba(10, 64, 139, 0.15), 0 0 0 1px rgba(10, 64, 139, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 35px 70px -12px rgba(10, 64, 139, 0.3), 0 0 0 2px rgba(10, 64, 139, 0.1), 0 0 20px rgba(10, 64, 139, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(10, 64, 139, 0.15), 0 0 0 1px rgba(10, 64, 139, 0.05)';
                  }}
                >
                  {/* Project Image with Overlay */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm border border-white/20">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>

                  {/* Project Details with Enhanced Design */}
                  <div className="p-8 relative flex-1 flex flex-col">
                    {/* Decorative Element */}
                    <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                    
                    {/* Title with Enhanced Typography */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Description with Better Styling */}
                    <p className="text-gray-600 mb-6 leading-relaxed text-base">
                      {project.description}
                    </p>
                    
                    {/* Enhanced View Details Button - Now aligned at bottom */}
                    <div className="mt-auto">
                      <button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 border-0"
                        onClick={() => {
                          setSelectedProject(project);
                          setIsModalOpen(true);
                        }}
                      >
                        <span className="flex items-center justify-center">
                          View Details
                          <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination Controls */}
        <section className="py-8 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`flex justify-center items-center gap-2 mb-4 transition-all duration-300 ${
              isPageTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1 || isPageTransitioning}
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white transition-all duration-200 hover:scale-105 active:scale-95 border border-gray-200"
              >
                Previous
              </button>
              
              <span className="text-gray-700 px-4 bg-white/80 backdrop-blur-sm rounded-lg py-2">
                Page {currentPage} of {totalPages}
              </span>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || isPageTransitioning}
                className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white transition-all duration-200 hover:scale-105 active:scale-95 border border-gray-200"
              >
                Next
              </button>
            </div>
            
            {/* Page Number Buttons */}
            {totalPages > 1 && (
              <div className={`flex justify-center items-center gap-2 flex-wrap transition-all duration-300 ${
                isPageTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}>
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  // Show first page, last page, current page, and pages around current page
                  if (
                    pageNumber === 1 ||
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => goToPage(pageNumber)}
                        disabled={isPageTransitioning}
                        className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 ${
                          currentPage === pageNumber
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    );
                  } else if (
                    pageNumber === currentPage - 1 ||
                    pageNumber === currentPage + 1
                  ) {
                    return <span key={pageNumber} className="px-2 text-gray-500">...</span>;
                  }
                  return null;
                })}
              </div>
            )}
          </div>
        </section>
        
        <Footer />
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          project={selectedProject}
        />
      )}
    </div>
  );
}
