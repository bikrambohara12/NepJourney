import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const [token, setToken] = useState(true);
  const {token,setToken,userData} = useContext(AppContext)

  const navigate = useNavigate();

   const handleLogout = () => { localStorage.removeItem('token'); setToken(false); navigate('/') };
  return (
    <header className="bg-[#2c3e50] text-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
    <img className='h-30 w-40 scale-270 sm:h-14 cursor-pointer  transition-all duration-300 hover:brightness-110 filter object-contain' src={assets.nep_logo}  alt="Logo" />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link to="/guides" className="hover:text-yellow-400 transition-colors">Guides</Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-4">
          {token && userData ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-10 rounded-full h-10" src={userData.image} alt="Profile" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
              <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                  <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={() => navigate('/my-booking')} className="hover:text-black cursor-pointer">My Booking</p>
                  <p onClick={handleLogout} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className="bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block" > Create account
            </button>
          )}
        </div>

        {/* Hamburger Icon */}
        <img src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="Menu" onClick={() => setShowMobileMenu(true)} />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-[#2c3e50] text-white flex flex-col items-center justify-center gap-6 z-50">
          {/* Close Button */}
          <div
            className="absolute top-5 right-6 cursor-pointer"
            onClick={() => setShowMobileMenu(false)} >
            <img src={assets.close_icon} className="w-6" alt="Close Menu" />
          </div>

          <Link to="/" onClick={() => setShowMobileMenu(false)}>Home</Link>
          <Link to="/guides" onClick={() => setShowMobileMenu(false)}>Guides</Link>
          <Link to="/about" onClick={() => setShowMobileMenu(false)}>About</Link>
          <Link to="/contact" onClick={() => setShowMobileMenu(false)}>Contact</Link>

          {token ? (
            <div>
              <p onClick={() => { navigate('/my-profile'); setShowMobileMenu(false); }}>My Profile</p>
              <p onClick={() => { navigate('/my-booking'); setShowMobileMenu(false); }}>My Booking</p>
              <p onClick={() => { setToken(false); setShowMobileMenu(false); }}>Logout</p>
            </div>
          ) : (
            <button onClick={() => { navigate('/login'); setShowMobileMenu(false); }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full" > Create account </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;

