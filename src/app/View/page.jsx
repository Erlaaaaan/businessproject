"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Open modal with animation
      setIsVisible(true);
      // Small delay to ensure DOM is ready
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      // Close modal with animation
      setIsAnimating(false);
      // Wait for animation to complete before hiding
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isOpen]);

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-all duration-500 ease-out ${
          isAnimating ? 'opacity-60' : 'opacity-0'
        }`}
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className={`relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-700 ease-out transform border border-blue-100/50 backdrop-blur-sm ${
        isAnimating ? 'scale-100 opacity-100 translate-y-0 rotate-0' : 'scale-75 opacity-0 translate-y-16 rotate-2'
      }`}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 rounded-2xl"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-t-2xl"></div>
        
        {/* Close Button */}
        <button
          onClick={() => {
            console.log('Close button clicked!');
            onClose();
          }}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 hover:rotate-90 border border-blue-200/50 cursor-pointer"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Project Details */}
        <div className="p-8 pt-16 relative z-10">
          {/* Description Section */}
          <div className="mb-8 bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center font-montserrat">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              Project Description
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed font-montserrat">
              {project?.description || "Detailed project description will be displayed here."}
            </p>
          </div>

          {/* Additional Details Section */}
          <div className="mb-8 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center font-montserrat">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              Project Highlights
            </h3>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                  <span className="text-gray-700 font-montserrat">Comprehensive fire protection system installation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                  <span className="text-gray-700 font-montserrat">Advanced security and monitoring solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                  <span className="text-gray-700 font-montserrat">Professional engineering and compliance standards</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 shadow-sm"></div>
                  <span className="text-gray-700 font-montserrat">Support and maintenance services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Location */}
            <div className="bg-gradient-to-br from-white/80 to-blue-50/60 backdrop-blur-sm rounded-xl p-6 hover:from-white/90 hover:to-blue-50/80 transition-all duration-300 border border-blue-200/50 shadow-sm hover:shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 font-montserrat">Location</h4>
              </div>
              <p className="text-gray-700 font-montserrat">{project?.location || "Location information"}</p>
            </div>

            {/* Client */}
            <div className="bg-gradient-to-br from-white/80 to-green-50/60 backdrop-blur-sm rounded-xl p-6 hover:from-white/90 hover:to-green-50/80 transition-all duration-300 border border-green-200/50 shadow-sm hover:shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 font-montserrat">Client</h4>
              </div>
              <p className="text-gray-700 font-montserrat">{project?.client || "Client information"}</p>
            </div>

            {/* Category */}
            <div className="bg-gradient-to-br from-white/80 to-purple-50/60 backdrop-blur-sm rounded-xl p-6 hover:from-white/90 hover:to-purple-50/80 transition-all duration-300 border border-purple-200/50 shadow-sm hover:shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 font-montserrat">Category</h4>
              </div>
              <p className="text-gray-700 capitalize font-montserrat">{project?.category || "Category information"}</p>
            </div>

            {/* Year */}
            <div className="bg-gradient-to-br from-white/80 to-orange-50/60 backdrop-blur-sm rounded-xl p-6 hover:from-white/90 hover:to-orange-50/80 transition-all duration-300 border border-orange-200/50 shadow-sm hover:shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 font-montserrat">Year</h4>
              </div>
              <p className="text-gray-700 font-montserrat">{project?.year || "Year information"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
