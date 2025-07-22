import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const customerdata = [
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

const Customers = () => {
  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold md:text-4xl mb-4'>What Our Customers Say</h1>
        <p>Hear from our happy customers about their amazing journeys.</p>
      </div>

      <div className='relative'>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {customerdata.map((testimonial, index) => (
            <SwiperSlide key={index} className='h-full md:py-12 py-4'>
              <div className='text-center  p-4 rounded-lg shadow-md h-full flex flex-col transform transition-transform duration-300 hover:shadow-lg hover:scale-105 min-h-[400px]'>
                <div className='w-24 h-24 mx-auto mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.title}
                    className='w-full h-full object-cover rounded-full'
                  />
                </div>
                <div className='flex justify-center mb-2'>
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className='text-yellow-400 text-lg'>★</span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-1'>{testimonial.title}</h3>
                <p className='text-gray-500 text-sm mb-2'>{testimonial.date}</p>
                <p className='text-gray-600 h-20 overflow-hidden'>{testimonial.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='flex justify-center gap-4 md:mt-8'>
          <button className='swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-200 cursor-pointer'>
            <BsChevronLeft className='size-6' />
          </button>
          <button className='swiper-button-next-custom w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-yellow-400 hover:text-white transition-all duration-200 cursor-pointer'>
            <BsChevronRight className='size-6' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customers;
