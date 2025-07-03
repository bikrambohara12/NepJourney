"use client"
import React from 'react';
import person4 from '../assets/person4.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import { ArrowRight, Twitter, Linkedin, Globe } from 'lucide-react'; 
import person7 from '../assets/person7.png';

const About = () => {
  const teamMembers = [
    {
      name: "Bikram Bohara",
      title: "Founder & CEO",
      description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
      image: "public/images/bikkuvai.jpg",
    },
    {
      name: "name",
      title: "Engineering Manager",
      description: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
      image: "public/images/shadhaiva.jpg",
    },
    {
      name: "Amir Bohara",
      title: "Frontend Developer",
      description: "Former frontend dev for Linear, Coinbase, and Postscript.",
      image: "public/person2.jpg",
    },
  ]

  return (
    <div className="bg-sky-50 min-h-screen p-6 space-y-16 pt-38 pb-14">
      
      {/* About Us Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="flex-1 bg-gradient-to-b from-blue-100 to-orange-100 rounded-xl p-30 flex flex-col justify-center items-center shadow-md">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">About Us</h1>
          <p className="text-lg font-medium text-black text-center">
            We connect travelers with trusted local guides to explore Nepal’s beauty safely and easily.
            Our platform helps you discover authentic experiences while supporting local experts.
          </p>
        </div>
        <div className="flex-1 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
          <img
            src={person4} 
            alt="person"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-100 p-6 md:p-16 rounded-3xl flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col justify-center overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <p className="text-purple-900 font-bold mb-2 text-center text-5xl p-7">Our Mission:</p>
          <p className="text-gray-600 mb-6 font-semibold text-lg">
            NepJourney exists to make travel in Nepal easier and more meaningful. 
            We connect travelers with trusted local guides, helping them explore the country’s 
            stunning landscapes and rich culture with confidence. Our platform is designed to be simple, 
            reliable, and focused on real experiences not just tours, but genuine connections.
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 gap-6">
          <img
            src={person2}
            alt="person2"
            className="w-full h-72 object-cover rounded-2xl shadow-md transition-transform duration-300 transform hover:scale-105" />
          <img
            src={person1}
            alt="person5"
            className="w-full h-72 object-cover rounded-2xl shadow-md transition-transform duration-300 transform hover:scale-105"/>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-green-50 p-6 md:p-16 min-h-screen flex flex-col md:flex-row items-center gap-10 rounded-3xl">
        <div className="flex-1 grid grid-cols-1 gap-6">
          <img
            src={person7}
            alt="Journey Home"
            className="w-full h-auto object-cover rounded-2xl shadow-md transition-transform duration-300 transform hover:scale-105"/>
          <img
            src={person7}
            alt="Journey Home"
            className="w-full h-auto object-cover rounded-2xl shadow-md transition-transform duration-300 transform hover:scale-105"/>
        </div>
        <div className="flex-1 flex flex-col justify-center overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <p className="text-purple-900 font-bold mb-2 text-center text-5xl p-7">Our Vision:</p>
          <p className="text-gray-600 mb-6 font-semibold text-lg">
            We dream of becoming Nepal’s go-to travel platform, where every adventure is personal, authentic,
            and hassle-free. By bringing travelers and local guides together, we want to boost sustainable tourism, 
            support local communities, and showcase the best of Nepal to the world.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-purple-600 mb-4 tracking-wide uppercase">Our team</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Leadership team</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              We're building the future of software development.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center max-w-4xl">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover ring-4 ring-gray-100 group-hover:ring-purple-200 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-purple-600 font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="text-gray-400 hover:text-purple-600" aria-label={`${member.name} Twitter`}><Twitter  className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-400 hover:text-purple-600" aria-label={`${member.name} LinkedIn`}><Linkedin className="w-5 h-5" /></a>
                    <a href="#" className="text-gray-400 hover:text-purple-600" aria-label={`${member.name} Website`}><Globe className="w-5 h-5" /></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
