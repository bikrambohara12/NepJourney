
import React from 'react';
import { FaMapMarkedAlt, FaUserTie, FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

// const tourData = [
//   {
//     id: 1,
//     image: './home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Himachal Pradesh - India',
//     title: 'Discover Spiti Valley 7D/6N Tour Package',
//     isNew: true,
//     originalPrice: '₹25,000',
//     discountedPrice: '₹20,999',
//     save: '₹4,001',
//   },
//   {
//     id: 2,
//     image: './home.jpg',
//     days: '5 Days / 4 Nights',
//     location: 'Himachal Pradesh - India',
//     title: 'Chandigarh to Chitkul : 5 days Spiti Itinerary',
//     isNew: true,
//     originalPrice: '₹27,999',
//     discountedPrice: '₹21,999',
//     save: '₹6,000',
//   },

//   {
//     id: 3,
//     image: './home.jpg',
//     days: '9 Days / 8 Nights',
//     location: 'Ladakh - India',
//     title: 'Ladakh - Srinagar Expedition: 9 Days of Monasteries, Valleys, and Lakes',
//     isNew: true,
//     originalPrice: null,
//     discountedPrice: 'Request Price',
//     save: null,
//   },
//   {
//     id: 4,
//     image: '/home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Ladakh - India',
//     title: '7 days Leh Ladakh road trip with Turtuk',
//     isNew: true,
//     originalPrice: '₹38,999',
//     discountedPrice: '₹26,999',
//     save: '₹12,000',
//   },

//    {
//     id: 5,
//     image: '/home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Ladakh - India',
//     title: '7 days Leh Ladakh road trip with Turtuk',
//     isNew: true,
//     originalPrice: '₹38,999',
//     discountedPrice: '₹26,999',
//     save: '₹12,000',
//   },
//     {
//     id: 6,
//     image: '/home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Ladakh - India',
//     title: '7 days Leh Ladakh road trip with Turtuk',
//     isNew: true,
//     originalPrice: '₹38,999',
//     discountedPrice: '₹26,999',
//     save: '₹12,000',
//   },
//     {
//     id: 7,
//     image: '/home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Ladakh - India',
//     title: '7 days Leh Ladakh road trip with Turtuk',
//     isNew: true,
//     originalPrice: '₹38,999',
//     discountedPrice: '₹26,999',
//     save: '₹12,000',
//   },
//     {
//     id: 8,
//     image: '/home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Ladakh - India',
//     title: '7 days Leh Ladakh road trip with Turtuk',
//     isNew: true,
//     originalPrice: '₹38,999',
//     discountedPrice: '₹26,999',
//     save: '₹12,000',
//   },
//     {
//     id: 9,
//     image: '/home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Ladakh - India',
//     title: '7 days Leh Ladakh road trip with Turtuk',
//     isNew: true,
//     originalPrice: '₹38,999',
//     discountedPrice: '₹26,999',
//     save: '₹12,000',
//   },
//     {
//     id: 10,
//     image:'/home.jpg',
//     days: '7 Days / 6 Nights',
//     location: 'Ladakh - India',
//     title: '7 days Leh Ladakh road trip with Turtuk',
//     isNew: true,
//     originalPrice: '₹38,999',
//     discountedPrice: '₹26,999',
//     save: '₹12,000',
//   },
// ];

const Features = () => {
  return (
    <div>
      <section className="py-16 px-6 text-center bg-gray-100 text-black">
        <h2 className="text-4xl font-semibold text-secondary-600 mb-8 inline-block border-b-4 border-yellow-400 pb-3 text-shadow-md/30">
          Why Choose NepJourney?
        </h2>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
            <FaMapMarkedAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">Explore Destinations</h3>
            <p className="">
              Discover Nepal's most beautiful places with detailed information and cultural insights.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
            <FaUserTie className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">Local Guides</h3>
            <p className="">
              Connect with certified local guides who know the hidden gems and authentic experiences.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition">
            <FaCalendarCheck className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">Easy Booking</h3>
            <p className="">
              Simple and secure booking system for guides and travel services.
            </p>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-xl/20 p-8 w-[300px] hover:-translate-y-2 transform transition text-black">
            <FaPhoneAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold  mb-2">24/7 Customer Support</h3>
            <p className="">No matter the time zone, we're here to help.</p>
          </div>
        </div>
      </section>

      {/* Trending Tours Section */}
      {/* <section className="px-4 py-10 md:px-20 bg-slate-600">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-shadow-md/30 text-white">
          Trending <span className="border-b-4 border-yellow-500">Tours</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourData.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl shadow-xl/80 hover:shadow-2xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img src={tour.image} alt={tour.title} className="w-full h-52 object-cover" />
                {tour.save && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    💰 Save {tour.save}
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-2 py-1 rounded shadow-xl/30">
                  {tour.days}
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500">{tour.location}</p>
                <h3 className="font-semibold mt-1">{tour.title}</h3>

                {tour.isNew && (
                  <p className="flex items-center text-sm text-yellow-500 mt-1">
                    <BsStars className="mr-1" /> New
                  </p>
                )}

                <div className="mt-2 mb-4 text-sm">
                  {tour.originalPrice ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">{tour.originalPrice}</span>
                      <span className="text-green-600 font-semibold">{tour.discountedPrice}</span>
                    </>
                  ) : (
                    <span className="text-blue-500 font-medium">{tour.discountedPrice} &rarr;</span>
                  )}
                </div>

                <button className="w-full flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Features;
