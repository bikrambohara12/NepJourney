import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2c3e50] text-white px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">

        <div>
          <h3 className="text-[#f39c12] text-lg font-semibold mb-6">NepJourney</h3>
          <p>Connecting travelers with local guides for authentic Nepalese experiences.</p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-600 bg-opacity-10 rounded-full hover:bg-[#f39c12] transition">
              <FaFacebookF /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-600 bg-opacity-10 rounded-full hover:bg-[#f39c12] transition">
              <FaTwitter /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-600 bg-opacity-10 rounded-full hover:bg-[#f39c12] transition">
              <FaInstagram /></a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-600 bg-opacity-10 rounded-full hover:bg-[#f39c12] transition">
              <FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h3 className="text-[#f39c12] text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#home" className="hover:text-[#f39c12]">Home</a></li>
            <li><a href="#destinations" className="hover:text-[#f39c12]">Destinations</a></li>
            <li><a href="/guides" className="hover:text-[#f39c12]">Guides</a></li>
            <li><a href="#about" className="hover:text-[#f39c12]">About Us</a></li>
            <li><a href="#contact" className="hover:text-[#f39c12]">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#f39c12] text-lg font-semibold mb-6">Support</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-[#f39c12]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#f39c12]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#f39c12]">Terms of Service</a></li>
            <li><a href="#" className="hover:text-[#f39c12]">Help Center</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#f39c12] text-lg font-semibold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> Kathmandu, Nepal</li>
            <li className="flex items-center gap-2"> <FaPhone /> +977 9868886773</li>
            <li className="flex items-center gap-2"><FaEnvelope /> info@nepjourney.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-gray border-opacity-10 pt-6 text-gray-400 text-sm">
        &copy; 2023 NepJourney. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
