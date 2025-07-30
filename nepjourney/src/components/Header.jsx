// import React, { useState, useEffect } from 'react';

// const images = [
//   '/person1.jpg',
//   '/person2.jpg',
//   '/person5.jpg',
//   '/person4.jpg',
// ];

// const Header = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative h-screen flex items-center justify-center text-center overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
//         style={{
//           backgroundImage: `url(${images[index]})`,
//           filter: 'brightness(0.85)', 
//         }}
//       ></div>
//       <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-0"></div>
//       <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">
//         <h1 className="text-5xl font-bold mb-6 tracking-wide drop-shadow-lg">
//           Explore Nepal with Confidence
//         </h1>
//         <p className="text-xl md:text-2xl mt-8 drop-shadow-md">
//           Discover destinations, guides, and unforgettable experiences
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
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setIndex((prev) => (prev + 1) % images.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const handleImageClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center text-center overflow-hidden cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleImageClick}
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-105"
        style={{
          backgroundImage: `url(${images[index]})`,
          filter: 'brightness(0.85)',
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(${isHovered ? 1.02 : 1})`,
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-0 group-hover:from-black/20 group-hover:via-black/30 group-hover:to-black/50 transition-all duration-700"></div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content with Enhanced Animations */}
      <div 
        className="relative z-10 text-white px-6 max-w-4xl mx-auto transition-all duration-500"
        style={{
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wide drop-shadow-lg transform transition-all duration-700 group-hover:scale-105 group-hover:text-yellow-100">
          <span className="inline-block hover:animate-pulse">Explore</span>{' '}
          <span className="inline-block hover:animate-pulse animation-delay-100">Nepal</span>{' '}
          <span className="inline-block hover:animate-pulse animation-delay-200">with</span>{' '}
          <span className="inline-block hover:animate-pulse animation-delay-300">Confidence</span>
        </h1>
        
        <p className="text-xl md:text-2xl mt-8 drop-shadow-md transform transition-all duration-700 group-hover:scale-102 opacity-90 group-hover:opacity-100">
          Discover destinations, guides, and unforgettable experiences
        </p>

        {/* Interactive Click Hint */}
        <div className="mt-12 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
            <span className="text-sm">Click to explore next view</span>
            <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full border-2 border-white/50 transition-all duration-300 hover:scale-125 ${
              i === index 
                ? 'bg-white shadow-lg' 
                : 'bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Subtle Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30 opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
    </div>
  );
};

export default Header;