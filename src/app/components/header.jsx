"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-lg'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="RQUIN Logo"
                width={200}
                height={80}
                className="h-16 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity duration-200"
                priority
                quality={100}
              />
            </Link>
          </div>

          {/* Center Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
          <Link 
              href="/" 
              className="text-black hover:text-blue-600 px-3 py-2 text-lg font-bold transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-montserrat"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="text-black hover:text-blue-600 px-3 py-2 text-lg font-bold transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-montserrat flex items-center">
                Services
                <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-0 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                >
                  <div className="py-3">
                    <Link 
                      href="/Services#fire-safety" 
                      className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a8 8 0 00-8 8c0 4.41 3.59 8 8 8s8-3.59 8-8c0-4.41-3.59-8-8-8zm0 14a6 6 0 01-6-6c0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.31-2.69 6-6 6z"/>
                          <path d="M10 6a4 4 0 00-4 4c0 2.21 1.79 4 4 4s4-1.79 4-4c0-2.21-1.79-4-4-4z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">Fire And Safety</div>
                        <div className="text-xs text-gray-500">Advanced fire safety systems</div>
                      </div>
                    </Link>
                    <Link 
                      href="/Services#systems" 
                      className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">Systems</div>
                        <div className="text-xs text-gray-500">Integrated IT and security solutions</div>
                      </div>
            </Link>
            <Link 
                      href="/Services#civil" 
                      className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-b border-gray-100 last:border-b-0"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2-2H3a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-sm">Civil Works & Engineering</div>
                        <div className="text-xs text-gray-500">Infrastructure and construction solutions</div>
                      </div>
            </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link 
              href="/about" 
              className="text-black hover:text-blue-600 px-3 py-2 text-lg font-bold transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-montserrat"
            >
              About
            </Link>
            
            <Link 
              href="/people" 
              className="text-black hover:text-blue-600 px-3 py-2 text-lg font-bold transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] font-montserrat"
            >
              People
            </Link>
          </nav>

          {/* Get a Quote Button - Right Side */}
          <div className="hidden md:block">
            <Link href="/qoute">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-montserrat uppercase tracking-wide">
                Get a Quote
              </button>
            </Link>
          </div>

          {/* Mobile menu button - Right Side */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-blue-600 focus:text-blue-600 transition-colors duration-300 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-[9999] bg-gradient-to-br from-blue-50 to-green-50 border-4 border-blue-200">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b-2 border-blue-300 bg-gradient-to-r from-blue-100 to-green-100">
              <div className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="RQUIN Logo"
                  width={120}
                  height={48}
                  className="h-32 w-auto object-contain"
                />
              </div>
              <button
                onClick={toggleMenu}
                className="text-blue-700 hover:text-green-600 p-2 text-2xl font-bold bg-white rounded-full shadow-md"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Mobile Menu Navigation Links */}
            <div className="px-6 py-8 bg-gradient-to-b from-blue-50 to-green-50">
              <div className="space-y-4">
                <Link 
                  href="/" 
                  className="text-blue-800 hover:text-green-700 block px-4 py-3 text-2xl font-bold transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm font-montserrat"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                {/* Mobile Services Section */}
                <div className="space-y-2">
                  <div className="text-blue-800 px-4 py-2 text-xl font-bold border-b-2 border-blue-200 bg-white rounded-lg">
                    Services
                  </div>
                  <Link 
                    href="/Services#fire-safety" 
                    className="text-blue-800 hover:text-green-700 block px-8 py-2 text-lg font-medium transition-colors duration-200 bg-white hover:bg-green-50 rounded-lg shadow-sm ml-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    • Fire And Safety
                  </Link>
                <Link 
                    href="/Services#systems" 
                    className="text-blue-800 hover:text-green-700 block px-8 py-2 text-lg font-medium transition-colors duration-200 bg-white hover:bg-green-50 rounded-lg shadow-sm ml-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                    • Systems
                </Link>
                <Link 
                    href="/Services#civil" 
                    className="text-blue-800 hover:text-green-700 block px-8 py-2 text-lg font-medium transition-colors duration-200 bg-white hover:bg-green-50 rounded-lg shadow-sm ml-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                    • Civil Works & Engineering
                </Link>
                </div>
                
                <Link 
                  href="/about" 
                  className="text-blue-800 hover:text-green-700 block w-full text-left px-4 py-3 text-2xl font-bold transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm font-montserrat"
                >
                  About
                </Link>
                
                <Link 
                  href="/people" 
                  className="text-blue-800 hover:text-green-700 block px-4 py-3 text-2xl font-bold transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm font-montserrat"
                  onClick={() => setIsMenuOpen(false)}
                >
                  People
                </Link>

                {/* Get a Quote Button for Mobile */}
                <Link href="/qoute">
                  <button 
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-4 px-6 rounded-lg border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-montserrat uppercase tracking-wide text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get a Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
