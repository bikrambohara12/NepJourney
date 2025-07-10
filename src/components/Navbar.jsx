// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const navigate = useNavigate();


//   const [showMenu, setShowMenu] = useState(false)
//   const [taken,setToken] = useState(true)

//   return (
//     <header className="bg-[#2c3e50] text-white shadow-md fixed w-full z-50">
      
//       <div className="flex justify-between items-center px-8 py-4">
//         {/* Logo */}
//         {/* <img src="./logo.png" alt="NepJourney Logo" className="h-16 w-50 object-contain scale-235" /> */}
//         <img className='w-10 cursor-pointer  ' src={assets.logo}alt="" />


//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-6">
//           <Link to="/" className="hover:text-yellow-400 transition-colors">
//             Home
//           </Link>
//           {/* <Link to="/destinations" className="hover:text-yellow-400 transition-colors">
//             Destinations
//           </Link> */}
//           <Link to="/guides" className="hover:text-yellow-400 transition-colors">
//             Guides
//           </Link>
//           <Link to="/about" className="hover:text-yellow-400 transition-colors">
//             About
//           </Link>
//           <Link to="/contact" className="hover:text-yellow-400 transition-colors">
//             Contact
//           </Link>
//         </nav>

//         {/* Desktop Buttons */}
//         <div className='flex items-center gap-4'>
//           {
//             token 
//             ?<div className='fles items-center gap-2 cursor-pointer group relative'>
//               <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
//               <img className=' w-2.5' src={assets.dropdown_icon} alt="" />
//               <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
//                 <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
//                   <p onClick ={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
//                   <p onClick ={()=>navigate('my-booking')}  className='hover:text-black cursor-pointer'>My Booking</p>
//                   <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
//                 </div>
//               </div>
//             </div>
//             :<button onClick={()=>navigate('/login')} className='bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account </button>

//           }
//         </div>
       
//         {/* Hamburger Icon */}
//         <img
//           src="./menu.png"
//           className="md:hidden w-7 cursor-pointer"
//           alt="Menu"
//           onClick={() => setShowMobileMenu(true)}
//         />
//       </div>

//       {/* Mobile Menu */}
//       {showMobileMenu && (
//         <div className="md:hidden fixed inset-0 bg-[#2c3e50] text-white flex flex-col items-center justify-center gap-6 transition-all z-50">
//           {/* Close Button */}
//           <div
//             className="absolute top-5 right-6 cursor-pointer"
//             onClick={() => setShowMobileMenu(false)}
//           >
//             <img src="./close.png" className="w-6" alt="Close Menu" />
//           </div>

    

        
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  const navigate = useNavigate();

  return (
    <header className="bg-[#2c3e50] text-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <div onClick={() => navigate('/')} className="cursor-pointer flex items-center gap-2">
          <img className="w-12 h-12 object-contain" src={assets.logo} alt="NepJourney Logo" />
          {/* <h1 className="text-xl font-semibold hidden sm:block">NepJourney</h1> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link to="/guides" className="hover:text-yellow-400 transition-colors">Guides</Link>
          <Link to="/about" className="hover:text-yellow-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-2 cursor-pointer group relative">
              <img className="w-8 h-8 rounded-full" src={assets.profile_pic} alt="Profile" />
              <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
              <div className="absolute top-10 right-0 z-20 hidden group-hover:block">
                <div className="min-w-48 bg-stone-100 text-gray-700 rounded shadow-md flex flex-col gap-2 p-4">
                  <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                  <p onClick={() => navigate('/my-booking')} className="hover:text-black cursor-pointer">My Booking</p>
                  <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className="bg-blue-600 text-white px-6 py-2 rounded-full hidden md:block">
              Create account
            </button>
          )}
        </div>

        {/* Hamburger Icon */}
        <img
          src={assets.menu_icon} 
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-[#2c3e50] text-white flex flex-col items-center justify-center gap-6 z-50">
          {/* Close Button */}
          <div
            className="absolute top-5 right-6 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          >
            <img src={assets.cross_icon} className="w-6" alt="Close Menu" />
          </div>

          <Link to="/" onClick={() => setShowMobileMenu(false)}>Home</Link>
          <Link to="/guides" onClick={() => setShowMobileMenu(false)}>Guides</Link>
          <Link to="/about" onClick={() => setShowMobileMenu(false)}>About</Link>
          <Link to="/contact" onClick={() => setShowMobileMenu(false)}>Contact</Link>

          {!token && (
            <button
              onClick={() => {
                navigate('/login');
                setShowMobileMenu(false);
              }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              Create account
            </button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
