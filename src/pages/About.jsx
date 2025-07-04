import React from 'react';
import person4 from '../assets/person4.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import { ArrowRight } from 'lucide-react'; 
import person7 from '../assets/person7.png';
import person8 from '../assets/person8.png';
const About = () => {
  return (
    <div className="bg-sky-50 min-h-screen p-6 space-y-16 pt-38 pb-14">
      
      {/* About Us Section  */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Left Side */}
        <div className="flex-1 bg-gradient-to-b from-blue-100 to-orange-100 rounded-xl p-30 flex flex-col justify-center items-center shadow-md">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">About Us</h1>
          <p className="text-lg font-medium text-black text-center">
            We connect travelers with trusted local guides to explore Nepal’s beauty safely and easily.
            Our platform helps you discover authentic experiences while supporting local experts.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
          <img
            src={person4} 
            alt="person"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* mission Section  */}
      <div className="bg-gray-100 p-6 md:p-16 rounded-3xl flex flex-col md:flex-row gap-10">
        {/* Left Text Section */}
        <div className="flex-1 flex flex-col justify-center   overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <p className="text-purple-900 font-bold mb-2 text-center text-5xl p-7">Our Mission:</p>
         
          <p className="text-gray-600 mb-6 font-semibold text-lg">
            NepJourney exists to make travel in Nepal easier and more meaningful. 
            We connect travelers with trusted local guides, helping them explore the country’s 
            stunning landscapes and rich culture with confidence. Our platform is designed to be simple, 
            reliable, and focused on real experiences not just tours, but genuine connections.
          </p>

        </div>

         
        {/* Right Image Section */}
        <div className="flex-1 grid grid-cols-1 gap-6 ">
          <img
            src={person2}
            alt="person2"
            className="w-full h-72 object-cover rounded-2xl shadow-md  overflow-hidden transition-transform duration-300 transform hover:scale-105" />
          <img
            src={person1}
            alt="person5"
            className="w-full h-72 object-cover rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"/>
        </div>
      </div>

{/* our vission section */}
<div className="bg-green-50 p-6 md:p-16 min-h-screen flex flex-col md:flex-row items-center gap-10 rounded-3xl">

      {/* Left Side: Image */}
      <div className="flex-1 grid grid-cols-1 gap-6">
        <img
          src={person7}
          alt="Journey Home"
          className="w-full h-auto object-cover rounded-2xl shadow-md overflow-hidden  transition-transform duration-300 transform hover:scale-105"/>
  
        <img
          src={person7}
          alt="Journey Home"
          className="w-full h-auto object-cover rounded-2xl shadow-md overflow-hidden  transition-transform duration-300 transform hover:scale-105"/>
      </div>
       {/* right side text-section */}
        <div className="flex-1 flex flex-col justify-center   overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <p className="text-purple-900 font-bold mb-2 text-center text-5xl p-7">Our Vision:</p>
         
          <p className="text-gray-600 mb-6 font-semibold text-lg">
        We dream of becoming Nepal’s go-to travel platform, where every adventure is personal, authentic,
           and hassle-free. By bringing travelers and local guides together, we want to boost sustainable tourism, 
          support local communities, and showcase the best of Nepal to the world.
          </p>
        </div>
    </div>

{/* goal section */}
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Image 1 */}
        <img
            src={person8} 
            alt="person"
            className="w-full h-full object-cover"/>
        {/* Image 2 */}
        <img
          src="./person2.png"
          alt="Room 2"
          className="rounded-xl object-cover h-full w-full"/>
        {/* Text Section */}
        <div className="bg-white rounded-xl p-6 shadow bg-gradient-to-b from-blue-100 to-orange-100">
          <h2 className="text-2xl font-bold mb-4 ">Our Goal:</h2>
          <p className="text-gray-600 mb-6">
            Our aim is to build a seamless, user-friendly platform where travelers can easily find and book guides,
             discover hidden gems, and share their stories—while giving local experts a fair way to grow their businesses. 
             We’re also committed to safety, transparency, and great service, making sure every journey is unforgettable for the right reasons.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-white p-6 rounded-xl shadow">
        <div>
          <p className="text-2xl font-bold text-gray-800">7,860+</p>
          <p className="text-gray-500 text-sm">Rent Home</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">98+</p>
          <p className="text-gray-500 text-sm">State</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">2,530+</p>
          <p className="text-gray-500 text-sm">Buy Home</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-800">250+</p>
          <p className="text-gray-500 text-sm">Agents</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
