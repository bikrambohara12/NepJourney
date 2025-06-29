
// import React from 'react';

// const Header = () => {
//   return (
//     <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
//       {/* Background Image/Video - Use either one */}
      
//       {/* Option 1: Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: "url('./assets/person2.jpg')"
//           backgroundImage: "url('./assets/person3.jpg')"
//           backgroundImage: "url('./assets/person1.jpg')"
//           backgroundImage: "url('./assets/person4.jpg')"
//          }}
//       ></div>
      
//       {/* Option 2: Background Video (uncomment to use) */}
      
//       {/* <video
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="absolute w-full h-full object-cover"
//       >
//         <source src="/video.mp4" type="video/mp4" /></video> */}
    
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
//         <h1 className="text-5xl font-bold mb-6 tracking-wide">
//           Explore Nepal with Confidence
//         </h1>
//         <p className="text-xl md:text-2xl mt-8">Discover destinations, guides, and unforgettable experiences</p>
//       </div>
//     </div>
//   );
// };

// export default Header;





// import React, { useEffect, useState } from 'react';
// import img1 from '../assets/person1.jpg';
// import img2 from '../assets/person2.jpg';
// import img3 from '../assets/person4.jpg';

// const images = [img1, img2, img3];

// const Header = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="relative w-full h-screen flex items-center justify-center transition-all duration-1000 ease-in-out"
//       style={{
//         backgroundImage: `url(${images[currentIndex]})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
//       <div className="z-10 text-center text-white px-4">
//         <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//           Find the best guide <br /> and don’t waste a moment
//         </h1>
//         <p className="max-w-xl mx-auto mb-6 text-sm lg:text-base">
//           Explore the world with top-rated guides. Discover amazing places, experience new cultures, and make unforgettable memories.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState, useEffect } from 'react';

const images = [
  '/person1.jpg',
  '/person2.jpg',
  '/person5.jpg',
  '/person4.jpg',
];

const Header = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[index]})`,
          filter: 'brightness(0.85)', // Slight darkening for readability
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-0"></div>
      <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 tracking-wide drop-shadow-lg">
          Explore Nepal with Confidence
        </h1>
        <p className="text-xl md:text-2xl mt-8 drop-shadow-md">
          Discover destinations, guides, and unforgettable experiences
        </p>
      </div>
    </div>
  );
};

export default Header;

