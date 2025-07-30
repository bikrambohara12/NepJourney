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
          filter: 'brightness(0.85)', 
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

