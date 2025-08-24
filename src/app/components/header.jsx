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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gradient-to-r from-blue-400 to-green-400 bg-opacity-60 backdrop-blur-xl shadow-lg' : 'bg-gradient-to-r from-blue-400 to-green-400 bg-opacity-80 backdrop-blur-xl shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                     {/* Logo */}
           <div className="flex-shrink-0">
                           <Image
                src="/images/logo.png"
                alt="FireStone Logo"
                width={200}
                height={80}
                className="h-40 w-auto object-contain"
                priority
                quality={100}
              />
           </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
                         <Link 
               href="/projects" 
               className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
             >
               Projects
             </Link>
            
                         <Link 
               href="/about" 
               className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
             >
               About
             </Link>
                         <Link 
               href="/blog" 
               className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
             >
               Blog
             </Link>
                         <Link 
               href="/people" 
               className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
             >
               People
             </Link>
            
                         <Link 
               href="/contact" 
               className="text-black hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide"
             >
               Contact
             </Link>
                         <button className="text-black hover:text-blue-600 p-2 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
                         <button
               onClick={toggleMenu}
               className="text-black hover:text-blue-600 focus:text-blue-600 transition-colors duration-300 focus:outline-none"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-transparent border-t border-white border-opacity-20">
                             <Link 
                 href="/projects" 
                 className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 uppercase"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Projects
               </Link>
              
                             <Link 
                 href="/about" 
                 className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 uppercase"
                 onClick={() => setIsMenuOpen(false)}
               >
                 About
               </Link>
                             <Link 
                 href="/blog" 
                 className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 uppercase"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Blog
               </Link>
                             <Link 
                 href="/people" 
                 className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 uppercase"
                 onClick={() => setIsMenuOpen(false)}
               >
                 People
               </Link>
              
                             <Link 
                 href="/contact" 
                 className="text-black hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 uppercase"
                 onClick={() => setIsMenuOpen(false)}
               >
                 Contact
               </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
