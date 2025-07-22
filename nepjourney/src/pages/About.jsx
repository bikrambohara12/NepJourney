// import React from 'react';
// import person4 from '../assets/person4.png';
// import person1 from '../assets/person1.png';
// import person2 from '../assets/person2.png';
// import { ArrowRight } from 'lucide-react'; 
// import person7 from '../assets/person7.png';
// import person8 from '../assets/person8.png';
// const About = () => {
//   return (
//     <div className="bg-sky-50 min-h-screen p-6 space-y-16 pt-38 pb-14">
      
//       {/* About Us Section  */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-6">
//         {/* Left Side */}
//         <div className="flex-1 bg-gradient-to-b from-blue-100 to-orange-100 rounded-xl p-30 flex flex-col justify-center items-center shadow-md">
//           <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">About Us</h1>
//           <p className="text-lg font-medium text-black text-center">
//             We connect travelers with trusted local guides to explore Nepal’s beauty safely and easily.
//             Our platform helps you discover authentic experiences while supporting local experts.
//           </p>
//         </div>

//         {/* Right Side */}
//         <div className="flex-1 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
//           <img src={person4}  alt="person"  className="w-full h-full object-cover" />
//         </div>
//       </div>

//       {/* mission Section  */}
//       <div className="bg-gray-100 p-6 md:p-16 rounded-3xl flex flex-col md:flex-row gap-10">
//         {/* Left Text Section */}
//         <div className="flex-1 flex flex-col justify-center   overflow-hidden transition-transform duration-300 transform hover:scale-105">
//           <p className="text-purple-900 font-bold mb-2 text-center text-5xl p-7">Our Mission:</p>
         
//           <p className="text-gray-600 mb-6 font-semibold text-lg">
//             NepJourney exists to make travel in Nepal easier and more meaningful. 
//             We connect travelers with trusted local guides, helping them explore the country’s 
//             stunning landscapes and rich culture with confidence. Our platform is designed to be simple, 
//             reliable, and focused on real experiences not just tours, but genuine connections.
//           </p>

//         </div>

         
//         {/* Right Image Section */}
//         <div className="flex-1 grid grid-cols-1 gap-6 ">
//           <img src={person2} alt="person2"  className="w-full h-72 object-cover rounded-2xl shadow-md  overflow-hidden transition-transform duration-300 transform hover:scale-105" />
//           <img src={person1} alt="person5" className="w-full h-72 object-cover rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"/>
//         </div>
//       </div>

// {/* our vission section */}
// <div className="bg-green-50 p-6 md:p-16 min-h-screen flex flex-col md:flex-row items-center gap-10 rounded-3xl">

//       {/* Left Side: Image */}
//       <div className="flex-1 grid grid-cols-1 gap-6">
//         <img
//           src={person7}
//           alt="Journey Home"
//           className="w-full h-auto object-cover rounded-2xl shadow-md overflow-hidden  transition-transform duration-300 transform hover:scale-105"/>
  
//         <img
//           src={person7}
//           alt="Journey Home"
//           className="w-full h-auto object-cover rounded-2xl shadow-md overflow-hidden  transition-transform duration-300 transform hover:scale-105"/>
//       </div>
//        {/* right side text-section */}
//         <div className="flex-1 flex flex-col justify-center   overflow-hidden transition-transform duration-300 transform hover:scale-105">
//           <p className="text-purple-900 font-bold mb-2 text-center text-5xl p-7">Our Vision:</p>
         
//           <p className="text-gray-600 mb-6 font-semibold text-lg">
//         We dream of becoming Nepal’s go-to travel platform, where every adventure is personal, authentic,
//            and hassle-free. By bringing travelers and local guides together, we want to boost sustainable tourism, 
//           support local communities, and showcase the best of Nepal to the world.
//           </p>
//         </div>
//     </div>

// {/* goal section */}
//     <div className="bg-gray-100 p-6 rounded-xl shadow-md">
//       <div className="grid md:grid-cols-3 gap-6">
//         {/* Image 1 */}
//         <img
//             src={person8} 
//             alt="person"
//             className="w-full h-full object-cover"/>
//         {/* Image 2 */}
//         <img
//           src="./person2.png"
//           alt="Room 2"
//           className="rounded-xl object-cover h-full w-full"/>
//         {/* Text Section */}
//         <div className="bg-white rounded-xl p-6 shadow bg-gradient-to-b from-blue-100 to-orange-100">
//           <h2 className="text-2xl font-bold mb-4 ">Our Goal:</h2>
//           <p className="text-gray-600 mb-6">
//             Our aim is to build a seamless, user-friendly platform where travelers can easily find and book guides,
//              discover hidden gems, and share their stories—while giving local experts a fair way to grow their businesses. 
//              We’re also committed to safety, transparency, and great service, making sure every journey is unforgettable for the right reasons.
//           </p>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-white p-6 rounded-xl shadow">
//         <div>
//           <p className="text-2xl font-bold text-gray-800">7,860+</p>
//           <p className="text-gray-500 text-sm">Rent Home</p>
//         </div>
//         <div>
//           <p className="text-2xl font-bold text-gray-800">98+</p>
//           <p className="text-gray-500 text-sm">State</p>
//         </div>
//         <div>
//           <p className="text-2xl font-bold text-gray-800">2,530+</p>
//           <p className="text-gray-500 text-sm">Buy Home</p>
//         </div>
//         <div>
//           <p className="text-2xl font-bold text-gray-800">250+</p>
//           <p className="text-gray-500 text-sm">Agents</p>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default About;






import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Users, Target, Eye, Award, MapPin, UserCheck } from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [animatedStats, setAnimatedStats] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const observerRef = useRef();

  // Mock images - replace with your actual imports
  const images = {
    person1: "person1.jpg",
    person2: "person2.jpg",
    person4: "person3.jpg",
    person7: "person4.jpg",
    person8: "person5.jpg"
  };

  const stats = [
    { value: 7860, label: "Happy Travelers", icon: Users },
    { value: 98, label: "Destinations", icon: MapPin },
    { value: 2530, label: "Tours Completed", icon: Award },
    { value: 250, label: "Expert Guides", icon: UserCheck }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section');
            setVisibleSections(prev => new Set([...prev, sectionId]));
            
            // Animate stats when stats section becomes visible
            if (sectionId === 'stats') {
              animateStats();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Animate statistics numbers
  const animateStats = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const duration = 2000;
      const increment = stat.value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.value) {
          start = stat.value;
          clearInterval(timer);
        }
        
        setAnimatedStats(prev => ({
          ...prev,
          [index]: Math.floor(start)
        }));
      }, 16);
    });
  };

  // Auto-rotate images in mission section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-sky-50 to-blue-100 min-h-screen p-6 space-y-16 pt-20 pb-14">
      
      {/* Hero About Section with Interactive Elements */}
      <div 
        className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-1000 transform ${
          visibleSections.has('hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        data-section="hero"
      >
        {/* Left Side */}
        <div className="flex-1 bg-gradient-to-br from-blue-100 via-purple-50 to-orange-100 rounded-2xl p-8 flex flex-col justify-center items-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer">
          <div className="relative overflow-hidden">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-900 to-blue-800 bg-clip-text text-transparent mb-4 group-hover:scale-105 transition-transform duration-300">
              About Us
            </h1>
            <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
          </div>
          <p className="text-lg font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300 leading-relaxed">
            We connect travelers with trusted local guides to explore Nepal's beauty safely and easily.
            Our platform helps you discover authentic experiences while supporting local experts.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 group relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img 
            src={images.person4} 
            alt="About us" 
            className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <p className="font-semibold">Discover Nepal</p>
            <p className="text-sm">With trusted local guides</p>
          </div>
        </div>
      </div>

      {/* Interactive Mission Section */}
      <div 
        className={`bg-white/80 backdrop-blur-sm p-6 md:p-16 rounded-3xl flex flex-col md:flex-row gap-10 shadow-xl transition-all duration-1000 transform ${
          visibleSections.has('mission') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        data-section="mission"
      >
        {/* Left Text Section */}
        <div className="flex-1 flex flex-col justify-center group">
          <div className="flex items-center gap-4 mb-6">
            <Target className="text-purple-900 w-12 h-12 animate-pulse" />
            <h2 className="text-purple-900 font-bold text-4xl md:text-5xl bg-gradient-to-r from-purple-900 to-blue-800 bg-clip-text text-transparent">
              Our Mission
            </h2>
          </div>
          
          <div className="relative">
            <p className="text-gray-700 font-medium text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              NepJourney exists to make travel in Nepal easier and more meaningful. 
              We connect travelers with trusted local guides, helping them explore the country's 
              stunning landscapes and rich culture with confidence. Our platform is designed to be simple, 
              reliable, and focused on real experiences—not just tours, but genuine connections.
            </p>
            <div className="absolute -left-4 top-0 w-1 h-0 bg-gradient-to-b from-purple-500 to-blue-500 group-hover:h-full transition-all duration-1000"></div>
          </div>
        </div>

        {/* Right Image Section with Auto-rotation */}
        <div className="flex-1 grid grid-cols-1 gap-6">
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src={currentImageIndex === 0 ? images.person2 : images.person1} 
              alt="Mission" 
              className="w-full h-72 object-cover transition-all duration-1000 group-hover:scale-105" 
            />
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="w-4 h-4 text-purple-900" />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg group">
            <img 
              src={currentImageIndex === 1 ? images.person2 : images.person1} 
              alt="Mission" 
              className="w-full h-72 object-cover transition-all duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Interactive Vision Section */}
      <div 
        className={`bg-gradient-to-br from-green-50 to-emerald-100 p-6 md:p-16 rounded-3xl flex flex-col md:flex-row items-center gap-10 shadow-xl transition-all duration-1000 transform ${
          visibleSections.has('vision') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        data-section="vision"
      >
        {/* Left Side: Images */}
        <div className="flex-1 space-y-6">
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={images.person7}
              alt="Vision"
              className="w-full h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl shadow-lg">
            <img
              src={images.person7}
              alt="Vision"
              className="w-full h-60 object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white font-medium">Authentic Nepal Experience</p>
            </div>
          </div>
        </div>

        {/* Right side text section */}
        <div className="flex-1 flex flex-col justify-center group">
          <div className="flex items-center gap-4 mb-6">
            <Eye className="text-emerald-700 w-12 h-12 animate-pulse" />
            <h2 className="text-emerald-800 font-bold text-4xl md:text-5xl bg-gradient-to-r from-emerald-800 to-green-700 bg-clip-text text-transparent">
              Our Vision
            </h2>
          </div>
          
          <div className="relative">
            <p className="text-gray-700 font-medium text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              We dream of becoming Nepal's go-to travel platform, where every adventure is personal, authentic,
              and hassle-free. By bringing travelers and local guides together, we want to boost sustainable tourism, 
              support local communities, and showcase the best of Nepal to the world.
            </p>
            <div className="absolute -left-4 top-0 w-1 h-0 bg-gradient-to-b from-emerald-500 to-green-600 group-hover:h-full transition-all duration-1000"></div>
          </div>
        </div>
      </div>

      {/* Interactive Goal Section */}
      <div 
        className={`bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl transition-all duration-1000 transform ${
          visibleSections.has('goal') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
        data-section="goal"
      >
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Image 1 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={images.person8} 
              alt="Goal"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Image 2 */}
          <div className="relative group overflow-hidden rounded-xl shadow-lg">
            <img
              src={images.person2}
              alt="Goal"
              className="rounded-xl object-cover h-full w-full transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          {/* Text Section */}
          <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-blue-800 w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-orange-700 bg-clip-text text-transparent">
                Our Goal
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
              Our aim is to build a seamless, user-friendly platform where travelers can easily find and book guides,
              discover hidden gems, and share their stories—while giving local experts a fair way to grow their businesses. 
              We're also committed to safety, transparency, and great service, making sure every journey is unforgettable for the right reasons.
            </p>
          </div>
        </div>

        {/* Interactive Stats Section */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg transition-all duration-1000 ${
            visibleSections.has('stats') ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          data-section="stats"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                className="group hover:bg-white hover:shadow-lg rounded-xl p-4 transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className="flex flex-col items-center">
                  <IconComponent className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 group-hover:text-purple-600 transition-all duration-300" />
                  <p className="text-3xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                    {animatedStats[index] !== undefined ? animatedStats[index].toLocaleString() : '0'}+
                  </p>
                  <p className="text-gray-500 text-sm font-medium group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
                <div className="w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 mt-2 mx-auto"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;