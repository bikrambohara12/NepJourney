// import React, { useRef, useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const originalTestimonials = [
//   {
//     name: "Dev Chauhan",
//     rating: 5,
//     text: "I have booked Himachal trip for my family at very reasonable price...",
//   },
//   {
//     name: "Riya Agarwal",
//     rating: 5,
//     text: "Went on my first solo trip with EnjoyKaraDo. Best experience ever.",
//   },
//   {
//     name: "Zeeshan Nadaf",
//     rating: 5,
//     text: "We booked a Jaipur Ranthambore trip. Excellent service!",
//   },
//   {
//     name: "Nisha Mehta",
//     rating: 5,
//     text: "Loved the Kerala trip! Amazing service. Highly recommend!",
//   },
//   {
//     name: "Rahul Singh",
//     rating: 5,
//     text: "Parents enjoyed every moment of the Sikkim tour. Thank you!",
//   },
//   {
//     name: "Priya Sharma",
//     rating: 5,
//     text: "Smooth and memorable. 10/10 experience!",
//   },
// ];

// const Customers = () => {
//   const containerRef = useRef(null);
//   const [cardWidth, setCardWidth] = useState(0);

//   // Clone items for circular loop
//   const testimonials = [
//     ...originalTestimonials.slice(-4), // last 4
//     ...originalTestimonials,
//     ...originalTestimonials.slice(0, 4), // first 4
//   ];

//   const scrollLeft = () => {
//     if (!containerRef.current) return;
//     containerRef.current.scrollBy({
//       left: -cardWidth,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     if (!containerRef.current) return;
//     containerRef.current.scrollBy({
//       left: cardWidth,
//       behavior: "smooth",
//     });
//   };

//   // Set initial position to "real start" (after prepended clones)
//   useEffect(() => {
//     const container = containerRef.current;
//     const firstCard = container?.querySelector(".testimonial-card");
//     if (firstCard) {
//       const width = firstCard.offsetWidth + 16;
//       setCardWidth(width);
//       setTimeout(() => {
//         container.scrollLeft = width * 4;
//       }, 50);
//     }
//   }, []);

//   // Infinite loop effect: detect when to reset scroll position invisibly
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const onScroll = () => {
//       const scrollLeft = container.scrollLeft;
//       const totalScroll = cardWidth * (originalTestimonials.length);
//       if (scrollLeft <= cardWidth * 0.5) {
//         // At the start (before real items) → jump to end
//         container.scrollLeft = scrollLeft + totalScroll;
//       } else if (
//         scrollLeft >= cardWidth * (originalTestimonials.length + 3.5)
//       ) {
//         // At the end (past real items) → jump to start
//         container.scrollLeft = scrollLeft - totalScroll;
//       }
//     };

//     container.addEventListener("scroll", onScroll);
//     return () => container.removeEventListener("scroll", onScroll);
//   }, [cardWidth]);

//   return (
//     <section className="py-16 px-4 bg-gray-300 text-center">
//       <h2 className="text-3xl font-bold text-gray-900 mb-2">
//         What Our Customers Say
//       </h2>
//       <p className="text-gray-600 mb-10">
//         Hear from our happy customers about their amazing journeys.
//       </p>

//       <div className="flex items-center justify-center gap-4">
//         <button
//           onClick={scrollLeft}
//           className="p-2 border rounded-full shadow hover:bg-gray-100 z-10"
//         >
//           <ChevronLeft />
//         </button>

//         <div
//           ref={containerRef}
//           className="flex overflow-x-auto scroll-smooth no-scrollbar gap-4 max-w-6xl"
//         >
//           {testimonials.map((t, idx) => (
//             <div
//               key={idx}
//               className="testimonial-card min-w-[250px] max-w-[300px] flex-shrink-0 bg-white shadow-md rounded-lg px-4 py-6 border"
//             >
//               <div className="flex flex-col items-center">
//                 <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-yellow-400 mb-4">
//                   <div className="text-yellow-400 text-3xl">👤</div>
//                 </div>
//                 <h3 className="text-md font-semibold text-gray-900">
//                   {t.name}
//                 </h3>
//                 <div className="text-yellow-400 my-2">
//                   {"★".repeat(t.rating)}
//                 </div>
//                 <p className="text-gray-600 text-sm text-center">{t.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={scrollRight}
//           className="p-2 border rounded-full shadow hover:bg-gray-100 z-10"
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Customers;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const users = [
  ...Array(10).fill({
    name: 'Bikram Bohara',
    profession: 'Full Stack Developer',
    image: './bikram.jpg', // make sure this image exists in your public folder
  }),
];

const Customers = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-6">
      <h2 className="text-3xl font-bold text-center mb-2">
        Latest from{" "}
        <span className="underline decoration-yellow-500">NepJourney</span>
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-xl">
        Stay updated with our latest blogs. Dive into interesting stories, tips,
        and insights!
      </p>
      <div className="w-full max-w-7xl">
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          grabCursor={true}
          spaceBetween={45}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            620: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="text-white bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center text-center">
                <img
                  src={user.image}
                  alt="user"
                  className="w-36 h-36 rounded-full border-4 border-white mb-6 object-cover"/>
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-200 mt-2 mb-6 text-sm">{user.profession}</p>
                <button className="px-6 py-2 text-sm font-medium text-[#030728] bg-gray-200 rounded hover:bg-yellow-400 transition"> Message</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;




