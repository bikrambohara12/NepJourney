import React from 'react';
import { FaMapMarkedAlt, FaUserTie, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';

const Features = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 hover:from-slate-700 hover:via-gray-800 hover:to-gray-900 transition-all duration-1000 text-black relative overflow-hidden">

        <h2 className="text-4xl font-semibold text-white mb-8 inline-block border-b-4 border-yellow-400 pb-3 text-shadow-md/30 hover:scale-105 hover:text-yellow-100 transition-all duration-300 cursor-pointer relative z-10">
          Why Choose NepJourney?
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-8 relative z-10">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transform transition-all duration-500 cursor-pointer">
            <FaMapMarkedAlt className="text-4xl text-yellow-400 mb-4 mx-auto transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white">Smart Guide Matching</h3>
            <p className="text-gray-100">Get guides that speak your language and know the best places to explore.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 transform transition-all duration-500 cursor-pointer">
            <FaUserTie className="text-4xl text-yellow-400 mb-4 mx-auto transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white">Verified Local Experts</h3>
            <p className="text-gray-100">Connect with trusted guides who know the culture, places, and stories of Nepal.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 transform transition-all duration-500 cursor-pointer">
            <FaCalendarCheck className="text-4xl text-yellow-400 mb-4 mx-auto transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white">Hassle-Free Booking</h3>
            <p className="text-gray-100">Book your guide or travel service quickly and securely, anytime.</p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-600 rounded-lg shadow-xl p-8 w-[300px] hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/30 transform transition-all duration-500 cursor-pointer">
            <FaPhoneAlt className="text-4xl text-yellow-400 mb-4 mx-auto transition-all duration-300" />
            <h3 className="text-xl font-semibold mb-2 text-white">24/7 Support</h3>
            <p className="text-gray-100">Got questions? Our friendly team is always ready to help—day or night.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
