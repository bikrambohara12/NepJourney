
import React from 'react';

const Header = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image/Video - Use either one */}
      
      {/* Option 1: Background Image */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-image.jpg')" }}
      ></div> */}
      
      {/* Option 2: Background Video (uncomment to use) */}
      
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" /></video>
    
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 tracking-wide">
          Explore Nepal with Confidence
        </h1>
        <p className="text-xl md:text-2xl mt-8">Discover destinations, guides, and unforgettable experiences</p>
      </div>
    </div>
  );
};

export default Header;



