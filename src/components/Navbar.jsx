
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="bg-[#2c3e50] text-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <img src="./logo.png" alt="NepJourney Logo" className="h-15 w-40 scale-290" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <a href="/home" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="/destinations" className="hover:text-yellow-400 transition-colors">Destinations</a>
          <a href="/Guides" className="hover:text-yellow-400 transition-colors">Guides</a>
          <a href="/about" className="hover:text-yellow-400 transition-colors">About</a>
          <a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#2c3e50] transition-all self-start ml-7">Login</button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all self-start ml-6">Register</button>
        </div>

        {/* Hamburger Icon */}
        <img src="./menu.png"className="md:hidden w-7 cursor-pointer"alt="Menu"
          onClick={() => setShowMobileMenu(true)}/>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-[#2c3e50] text-white flex flex-col items-center justify-center gap-6 transition-all z-50">
          {/* Close Button */}
          <div className="absolute top-5 right-6 cursor-pointer" onClick={() => setShowMobileMenu(false)}>
            <img src="./close.png" className="w-6" alt="Close Menu" />
          </div>

          {/* Menu Items */}
          <a href="#home" className="text-lg hover:text-yellow-400 transition-colors" onClick={() => setShowMobileMenu(false)}>Home</a>
          <a href="#destinations" className="text-lg hover:text-yellow-400 transition-colors" onClick={() => setShowMobileMenu(false)}>Destinations</a>
          <a href="#guides" className="text-lg hover:text-yellow-400 transition-colors" onClick={() => setShowMobileMenu(false)}>Guides</a>
          <a href="#about" className="text-lg hover:text-yellow-400 transition-colors" onClick={() => setShowMobileMenu(false)}>About</a>
          <a href="#contact" className="text-lg hover:text-yellow-400 transition-colors" onClick={() => setShowMobileMenu(false)}>Contact</a>

          {/* Mobile Buttons */}
          <button className="w-2/5 px-2 py-2 border border-white text-white rounded hover:bg-white hover:text-[#2c3e50] transition-all">Login</button>
          <button className="w-2/5 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all">Register</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;



