"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      isScrolled ? 'bg-gradient-to-r from-blue-400 to-green-400 bg-opacity-60 backdrop-blur-xl shadow-lg' : 'bg-gradient-to-r from-blue-400 to-green-400 bg-opacity-80 backdrop-blur-xl shadow-lg'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/Project" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            >
              Projects
            </Link>
            
            <Link 
              href="/Services" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            >
              Services
            </Link>
            
            <Link 
              href="/about" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            >
              About
            </Link>
          </nav>

          {/* Logo - Centered */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/logo.png"
              alt="FireStone Logo"
              width={200}
              height={80}
              className="h-32 w-auto object-contain md:h-16 lg:h-50"
              priority
              quality={100}
            />
          </div>

          {/* Right Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            >
              Home
            </Link>
            
            <Link 
              href="/people" 
              className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            >
              People
            </Link>
          </nav>

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
                  className="text-blue-800 hover:text-green-700 block px-4 py-3 text-lg font-medium transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link 
                  href="/Project" 
                  className="text-blue-800 hover:text-green-700 block px-4 py-3 text-lg font-medium transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                
                <Link 
                  href="/Services" 
                  className="text-blue-800 hover:text-green-700 block px-4 py-3 text-lg font-medium transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                
                <Link 
                  href="/about" 
                  className="text-blue-800 hover:text-green-700 block px-4 py-3 text-lg font-medium transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                
                <Link 
                  href="/people" 
                  className="text-blue-800 hover:text-green-700 block px-4 py-3 text-lg font-medium transition-colors duration-200 border-b-2 border-blue-200 bg-white hover:bg-green-50 rounded-lg shadow-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  People
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
