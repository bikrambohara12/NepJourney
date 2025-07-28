import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { GuideContext } from '../context/GuideContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(GuideContext);
  const navigate = useNavigate();

  const logout = () => {
    if (aToken) {
      localStorage.removeItem('aToken');
      setAToken('');
    }
    if (dToken) {
      localStorage.removeItem('dToken');
      setDToken('');
    }
    navigate('/');
  };

  return (
    
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-gray-700 bg-gray-900 shadow-lg shadow-gray-900/50'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer hover:scale-105 transition-all duration-300 hover:brightness-110 filter' src={assets.admin_logo} alt="Logo" />
        <p className='border border-cyan-400/40 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-400 font-medium hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105'>
          {aToken ? 'Admin' : dToken ? 'Guide' : ''}
        </p>
      </div>
      <button onClick={logout} className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white text-sm px-10 py-2 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 font-medium'>
        Logout
      </button>
    </div>
   
  );
};

export default Navbar;