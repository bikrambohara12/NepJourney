import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const trips = [
  { title: "Himachal & Kashmir", image: "./bikram.jpg" },
  { title: "Sikkim", image: "./bikram.jpg" },
  { title: "Darjeeling", image: "./bikram.jpg" },
  { title: "Kerala", image: "./bikram.jpg" },
  { title: "Jibhi", image: "./bikram.jpg" },
  { title: "More Jibhi", image: "./bikram.jpg" },
  { title: "Another Jibhi", image: "./bikram.jpg" },
];

const RecentTrips = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 300; // Adjust based on card size
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-gray-200 py-13 px-40 text-center relative">
      <h1 className="text-4xl font-bold mb-2">
        <span className="border-b-4  border-yellow-500 py-2">Recent Trips</span>
      </h1>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10 py-4">
        Check out the recent trips of our customers, featuring images and travel dates. 
        Celebrate their journeys and get inspired for your next adventure with us!
      </p>

      {/* Scroll Container with Arrows */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollContainerRef}
          className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar px-10">
          {trips.map((trip, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-52 rounded-[30px] border-4 border-gray-400 overflow-hidden shadow-md bg-white"
            >
              <img
                src={trip.image}
                alt={trip.title}
                className="w-full h-64 object-cover"
              />
              <p className="mt-2 font-medium">{trip.title}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RecentTrips;


