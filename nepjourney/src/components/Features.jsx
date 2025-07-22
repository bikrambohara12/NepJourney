
import React from 'react';
import { FaMapMarkedAlt, FaUserTie, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const Features = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center bg-gray-100 text-black">
        <h2 className="text-4xl font-semibold text-secondary-600 mb-8 inline-block border-b-4 border-yellow-400 pb-3 text-shadow-md/30">
          Why Choose NepJourney?
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
            <FaMapMarkedAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">Explore Destinations</h3>
            <p className="">
              Discover Nepal's most beautiful places with detailed information and cultural insights.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
            <FaUserTie className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">Local Guides</h3>
            <p className="">
              Connect with certified local guides who know the hidden gems and authentic experiences.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
            <FaCalendarCheck className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">Easy Booking</h3>
            <p className="">
              Simple and secure booking system for guides and travel services.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition text-black">
            <FaPhoneAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">24/7 Customer Support</h3>
            <p className="">No matter the time zone, we're here to help.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
