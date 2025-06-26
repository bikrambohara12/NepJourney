// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';

// const Latestdata = [
//   {
//     title: "Skip the Queue: Off-Beat Himachal",
//     date: "30 March, 2025",
//     description: "Manali, Kufri, Shimla, etc., have now become too mainstream. If you are looking for hidden gems, explore untouched valleys and trails.",
//     image: "./nepal.png",
//   },
//   {
//     title: "Trekking in Sikkim",
//     date: "30 March, 2025",
//     description: "Sikkim, a place less explored, and a natural bliss for adventure lovers, offers some of the most scenic trekking routes in the Himalayas.",
//     image: "./homeimage.jpg",
//   },
//   {
//     title: "Top Foods of Himachal",
//     date: "23 March, 2025",
//     description: "Himachal shares a rich Pahadi cuisine that's unique to the region. Dishes like Siddu, Dham, and Chha Gosht are must-tries!",
//     image: "./home.jpg",
//   },
//   {
//     title: "Ganga Aarti in Varanasi",
//     date: "23 March, 2025",
//     description: "Ganga Aarti is one of the most famous spiritual rituals in India. The atmosphere during the Aarti is magical and peaceful.",
//     image: "./nepal.png",
//   },
//   {
//     title: "Kathmandu Adventure",
//     date: "29 March, 2025",
//     description: "Explore cultural richness and temples of Kathmandu, the city of temples and the gateway to Himalayan adventure.",
//     image: "./home.jpg",
//   },
//   {
//     title: "Trekking in Sikkim",
//     date: "30 March, 2025",
//     description: "Sikkim, a place less explored, and a natural bliss for adventure lovers, offers some of the most scenic trekking routes in the Himalayas.",
//     image: "./homeimage.jpg",
//   },
//   {
//     title: "Top Foods of Himachal",
//     date: "23 March, 2025",
//     description: "Himachal shares a rich Pahadi cuisine that's unique to the region. Dishes like Siddu, Dham, and Chha Gosht are must-tries!",
//     image: "./home.jpg",
//   },
//   {
//     title: "Ganga Aarti in Varanasi",
//     date: "23 March, 2025",
//     description: "Ganga Aarti is one of the most famous spiritual rituals in India. The atmosphere during the Aarti is magical and peaceful.",
//     image: "./nepal.png",
//   },
//   {
//     title: "Kathmandu Adventure",
//     date: "29 March, 2025",
//     description: "Explore cultural richness and temples of Kathmandu, the city of temples and the gateway to Himalayan adventure.",
//     image: "./home.jpg",
//   },
// ];

// const Latest = () => {
//   return (
//     <section className='py-16 px-4 max-w-7xl mx-auto'>
//       <div className='text-center'>
//         <h1 className='text-3xl font-bold md:text-4xl mb-4'>Latest from Nep-Journey</h1>
//         <p>Stay updated with our latest blogs. Dive into interesting stories, tips, and insights!</p>
//       </div>

//       <div className='relative mt-10'>
//         <Swiper
//           pagination={{ dynamicBullets: true }}
//           spaceBetween={30}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           modules={[Navigation, Pagination]}
//           className="latest-swiper md:mb-12">
//           {Latestdata.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between">
//                 <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
//                 <div className="p-4 flex flex-col flex-grow">
//                   <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                   <p className="text-sm text-gray-500 mb-1">{item.date}</p>
//                   <p className="text-gray-700 text-sm mb-4 line-clamp-3">{item.description}</p>
//                   <button className="mt-auto bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition duration-200">
//                     Book Now
//                   </button>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Latest;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Latestdata = [
  {
    title: "Skip the Queue: Off-Beat Himachal",
    date: "30 March, 2025",
    description: "Manali, Kufri, Shimla, etc., have now become too mainstream. If you are looking for hidden gems, explore untouched valleys and trails.",
    image: "./nepal.png",
  },
  {
    title: "Trekking in Sikkim",
    date: "30 March, 2025",
    description: "Sikkim, a place less explored, and a natural bliss for adventure lovers, offers some of the most scenic trekking routes in the Himalayas.",
    image: "./homeimage.jpg",
  },
  {
    title: "Top Foods of Himachal",
    date: "23 March, 2025",
    description: "Himachal shares a rich Pahadi cuisine that's unique to the region. Dishes like Siddu, Dham, and Chha Gosht are must-tries!",
    image: "./home.jpg",
  },
  {
    title: "Ganga Aarti in Varanasi",
    date: "23 March, 2025",
    description: "Ganga Aarti is one of the most famous spiritual rituals in India. The atmosphere during the Aarti is magical and peaceful.",
    image: "./nepal.png",
  },
  {
    title: "Kathmandu Adventure",
    date: "29 March, 2025",
    description: "Explore cultural richness and temples of Kathmandu, the city of temples and the gateway to Himalayan adventure.",
    image: "./home.jpg",
  },
];

const Latest = () => {
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold md:text-4xl mb-4'>Latest from Nep-Journey</h1>
        <p>Stay updated with our latest blogs. Dive into interesting stories, tips, and insights!</p>
      </div>

      <div className='relative mt-10'>
        <Swiper
          pagination={{ dynamicBullets: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[Navigation, Pagination]}
          className="latest-swiper md:mb-12"
          style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }}>
          {Latestdata.map((item, index) => (
            <SwiperSlide key={index} style={{ height: '100%' }}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300 h-full flex flex-col justify-between">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">{item.description}</p>
                  <button className="mt-auto bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Latest;
