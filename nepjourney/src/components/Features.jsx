
// import React from 'react';
// import { FaMapMarkedAlt, FaUserTie, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';
// import { BsStars } from 'react-icons/bs';

// const Features = () => {
//   return (
//     <div>
//       <section className="py-16 px-6 text-center bg-gray-100 text-black">
//         <h2 className="text-4xl font-semibold text-secondary-600 mb-8 inline-block border-b-4 border-yellow-400 pb-3 text-shadow-md/30">
//           Why Choose NepJourney?
//         </h2>

//         <div className="flex flex-wrap justify-center gap-8 mt-8">
//           <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
//             <FaMapMarkedAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold  mb-2">Explore Destinations</h3>
//             <p className="">
//               Discover Nepal's most beautiful places with detailed information and cultural insights.
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
//             <FaUserTie className="text-4xl text-yellow-500 mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold  mb-2">Local Guides</h3>
//             <p className="">
//               Connect with certified local guides who know the hidden gems and authentic experiences.
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
//             <FaCalendarCheck className="text-4xl text-yellow-500 mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold  mb-2">Easy Booking</h3>
//             <p className="">
//               Simple and secure booking system for guides and travel services.
//             </p>
//           </div>

//           <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition text-black">
//             <FaPhoneAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
//             <h3 className="text-xl font-semibold  mb-2">24/7 Customer Support</h3>
//             <p className="">No matter the time zone, we're here to help.</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Features;


import React from 'react';
import { FaMapMarkedAlt, FaUserTie, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const Features = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-slate-700 hover:via-gray-800 hover:to-gray-900 transition-all duration-1000 text-black relative overflow-hidden">

        <h2 className="text-4xl font-semibold text-white mb-8 inline-block border-b-4 border-yellow-400 pb-3 text-shadow-md/30 hover:scale-105 hover:text-yellow-100 transition-all duration-300 cursor-pointer relative z-10">
          Why Choose NepJourney?
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-8 relative z-10">
          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transform transition-all duration-500 cursor-pointer ">
            <FaMapMarkedAlt className="text-4xl text-yellow-400 mb-4 mx-auto group-hover:text-yellow-200 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-100 transition-colors duration-300">Explore Destinations</h3>
            <p className="text-gray-100 group-hover:text-white transition-colors duration-300">
              Discover Nepal's most beautiful places with detailed information and cultural insights.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 transform transition-all duration-500 cursor-pointer ">
            <FaUserTie className="text-4xl text-yellow-400 mb-4 mx-auto group-hover:text-yellow-200 group-hover:scale-110 group-hover:animate-pulse transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-100 transition-colors duration-300">Local Guides</h3>
            <p className="text-gray-100 group-hover:text-white transition-colors duration-300">
              Connect with certified local guides who know the hidden gems and authentic experiences.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 transform transition-all duration-500 cursor-pointer ">
            <FaCalendarCheck className="text-4xl text-yellow-400 mb-4 mx-auto group-hover:text-yellow-200 group-hover:scale-110 group-hover:animate-spin transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-100 transition-colors duration-300">Easy Booking</h3>
            <p className="text-gray-100 group-hover:text-white transition-colors duration-300">
              Simple and secure booking system for guides and travel services.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30 transform transition-all duration-500 cursor-pointer ">
            <FaPhoneAlt className="text-4xl text-yellow-400 mb-4 mx-auto group-hover:text-yellow-200 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-100 transition-colors duration-300">24/7 Customer Support</h3>
            <p className="text-gray-100 group-hover:text-white transition-colors duration-300">No matter the time zone, we're here to help.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;