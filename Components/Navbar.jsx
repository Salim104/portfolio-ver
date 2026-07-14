"use client";

import React, { useState } from 'react'
import logo from '../assets/brand-logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const navLinks = [
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Client Work', href: '#client-work' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="flex items-center justify-between max-w-[1400px] mx-auto h-16 px-4 relative"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img src={logo.src} alt="Portfolio Logo" className="h-10 md:h-8 w-auto" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-16">
        {/* Middle Section: Nav Links */}
        <div className="flex gap-6 text-white text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-[2px] hover:text-[#2BC1EA] font-medium transition-all duration-200 font-body"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section: Contact Button */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="bg-[#2BC1EA] text-white px-4 py-[3px] rounded-md font-bold text-lg hover:bg-[#1fa9cf] transition-all duration-200 font-body"
          >
            Contact me
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl p-2 hover:bg-gray-800 rounded-md transition-all duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
    
        <div className={`fixed top-16 left-0 w-[80%] h-full border-r border-r-gray-900 bg-[#0E1A4A] z-50 transition-transform duration-700 ease-in-out ${
          isMenuOpen ? 'translate-x-0 ' : '-translate-x-full '
        }`}>
          <div className="flex flex-col px-4 py-6 space-y-4">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-2xl font-medium py-3 hover:text-[#2BC1EA] transition-all duration-200 border-b border-gray-700 w-full font-body"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Contact Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="block bg-[#2BC1EA] text-white px-4 py-4 rounded-md font-bold text-xl hover:bg-[#1fa9cf] transition-all duration-200 text-center font-body"
                onClick={closeMenu}
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      
    </nav>
  );
};

export default Navbar;
