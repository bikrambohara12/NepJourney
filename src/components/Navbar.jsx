import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#2c3e50] text-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <img
          src="./logo.png"
          alt="NepJourney Logo"
          className="h-16 w-50 object-contain scale-235"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-400 transition-colors">
            Home
          </Link>
          <Link to="/destinations" className="hover:text-yellow-400 transition-colors">
            Destinations
          </Link>
          <Link to="/guides" className="hover:text-yellow-400 transition-colors">
            Guides
          </Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#2c3e50] transition-all ml-7"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all ml-6"
          >
            Register
          </button>
        </div>

        {/* Hamburger Icon */}
        <img
          src="./menu.png"
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-[#2c3e50] text-white flex flex-col items-center justify-center gap-6 transition-all z-50">
          {/* Close Button */}
          <div
            className="absolute top-5 right-6 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          >
            <img src="./close.png" className="w-6" alt="Close Menu" />
          </div>

          {/* Menu Items */}
          <Link
            to="/"
            className="text-lg hover:text-yellow-400 transition-colors"
            onClick={() => setShowMobileMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/destinations"
            className="text-lg hover:text-yellow-400 transition-colors"
            onClick={() => setShowMobileMenu(false)}
          >
            Destinations
          </Link>
          <Link
            to="/guides"
            className="text-lg hover:text-yellow-400 transition-colors"
            onClick={() => setShowMobileMenu(false)}
          >
            Guides
          </Link>
          <Link
            to="/about"
            className="text-lg hover:text-yellow-400 transition-colors"
            onClick={() => setShowMobileMenu(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-lg hover:text-yellow-400 transition-colors"
            onClick={() => setShowMobileMenu(false)}
          >
            Contact
          </Link>

          {/* Mobile Buttons */}
          <button
            onClick={() => {
              setShowMobileMenu(false);
              navigate('/login');
            }}
            className="w-2/5 px-2 py-2 border border-white text-white rounded hover:bg-white hover:text-[#2c3e50] transition-all"
          >
            Login
          </button>
          <button
            onClick={() => {
              setShowMobileMenu(false);
              navigate('/register');
            }}
            className="w-2/5 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-all"
          >
            Register
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
