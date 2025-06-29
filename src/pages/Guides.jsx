// import React from 'react'

// const Guides = () => {
//   return (
//     <div>
//     <div className="p-6 max-w-screen-xl mx-auto">
//       {/* Title & Filters */}
//       <div className="text-center mb-8">
//         <h1 className="text-3xl font-bold mb-4">Find a tour guide</h1>
//         <div className="flex flex-wrap justify-center gap-4">
//           <input type="text" placeholder="Location" className="border px-4 py-2 rounded" />
//           <input type="date" className="border px-4 py-2 rounded" />
//           <input type="text" placeholder="Language" className="border px-4 py-2 rounded" />
//           <input type="text" placeholder="Your Type" className="border px-4 py-2 rounded" />
//           <button className="border px-6 py-2 rounded bg-gray-200 hover:bg-gray-300">Search</button>
//         </div>
//       </div>

//       {/* Content Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Search Results */}
//         <div className="md:col-span-2 space-y-4">
//           {["Andame", "Jon Smalt", "Candi name", "Same name"].map((name, i) => (
//             <div key={i} className="border rounded p-4 flex items-start gap-4">
//               <div className="w-16 h-16 bg-gray-300 rounded" />
//               <div className="flex-1">
//                 <h3 className="font-semibold">{name}</h3>
//                 <p>★★★★★</p>
//                 <p className="text-sm text-gray-500">Languages spoken</p>
//                 <p className="text-sm text-gray-600">Experience susie drc... accum.</p>
//               </div>
//               <div className="text-sm text-gray-600 mt-1">{(5.5 + i * 0.1).toFixed(1)} km</div>
//             </div>
//           ))}
//         </div>

//         {/* Guide Profile */}
//         <div className="border rounded p-4 space-y-4">
//           <div className="flex items-center gap-4">
//             <div className="w-20 h-20 bg-gray-300 rounded" />
//             <div>
//               <h3 className="font-semibold">Stavr</h3>
//               <p>★★★★★</p>
//             </div>
//           </div>

//           <div>
//             <p className="text-sm text-gray-500">Languages spoken</p>
//             <p className="text-sm">Experience a à de•n</p>
//           </div>

//           <div className="flex gap-4">
//             <button className="border px-4 py-2 rounded bg-blue-100 hover:bg-blue-200">Message</button>
//             <button className="border px-4 py-2 rounded bg-green-100 hover:bg-green-200">Call</button>
//           </div>

//           <div>
//             <h4 className="font-semibold">Tour packages</h4>
//             <div className="text-sm mt-2">
//               <p className="text-gray-600">Tarif tare - <strong>$1.50</strong></p>
//               <p className="text-gray-500">Description</p>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-semibold">Reviews</h4>
//             <textarea
//               placeholder="Review"
//               className="w-full border rounded p-2 text-sm mt-1"
//               rows={3}
//             />
//           </div>
//         </div>
//       </div>
//     </div>


//     </div>
//   )
// }

// export default Guides



// TravelGuide.jsx



// import React from 'react';

// const Guide = () => {
//   const guides = [
//     {
//       name: "Rejoice Byers",
//       price: "$360/pg",
//       discountPrice: "$36.00/pg",
//       rating: "4.9 (320)",
//       country: "Central African Republic",
//       languages: "English, Dutch, French +3"
//     },
//     {
//       name: "Bessie Cooper",
//       price: "$38.00/pg",
//       rating: "4.9 (320)",
//       country: "Russian Federation",
//       languages: "English, Dutch, French +3"
//     },
//     {
//       name: "Brooklyn Simmons",
//       price: "$43.00/pg",
//       rating: "4.9 (320)",
//       country: "Sao Tome and Principe",
//       languages: "English, Dutch, French +3"
//     },
//     {
//       name: "Theresa Webb",
//       price: "$44.00/pg",
//       rating: "4.9 (320)",
//       country: "Central African Republic",
//       languages: "English, Dutch, French +3"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <div className="min-h-screen bg-gray-50 bg-cover bg-center bg-no-repeat p-6" 
//      style={{ backgroundImage: "url('./home.jpg')" }}>
//       <h1 className="text-3xl font-bold text-gray-800 mb-2">Discover the world with the best Traveller guide</h1>
// <div className="max-w-md mx-auto relative mb-6">
//           <input 
//             type="text" 
//             placeholder="Search Places, or Countries" 
//             className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
//           <svg 
//             className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" 
//             fill="none" 
//             viewBox="0 0 24 24" 
//             stroke="currentColor"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </div>
// </div>
     
        
//         {/* Filters */}
//         <div className="flex flex-wrap justify-center gap-2 mb-8">
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">ALL</button>
//           <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300">Most experienced</button>
//           <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300">Most Popular</button>
//           <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300">Most Visited</button>
//           <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300">Top Review</button>
//           <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300">Recommended</button>
//           <button className="px-4 py-2 bg-white text-gray-700 rounded-lg border border-gray-300">Boost tours</button>
//         </div>
//       </div>
      
//       {/* Guides Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {guides.map((guide, index) => (
//           <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//             <div className="h-48 bg-gray-200 relative">
//               {/* Placeholder for guide image */}
//               <div className="absolute inset-0 flex items-center justify-center text-gray-400">
//                 <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                 </svg>
//               </div>
//             </div>
//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <h3 className="text-lg font-semibold text-gray-800">{guide.name}</h3>
//                 <div className="flex items-center">
//                   <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                   <span className="ml-1 text-gray-600">{guide.rating}</span>
//                 </div>
//               </div>
              
//               <div className="mt-2">
//                 {guide.discountPrice && (
//                   <div className="flex items-center">
//                     <span className="text-gray-400 line-through mr-2">{guide.price}</span>
//                     <span className="text-lg font-bold text-blue-600">{guide.discountPrice}</span>
//                   </div>
//                 )}
//                 {!guide.discountPrice && (
//                   <span className="text-lg font-bold text-blue-600">{guide.price}</span>
//                 )}
//               </div>
              
//               <div className="mt-3 text-sm text-gray-600">
//                 <p className="flex items-center">
//                   <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   {guide.country}
//                 </p>
//                 <p className="flex items-center mt-1">
//                   <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
//                   </svg>
//                   {guide.languages}
//                 </p>
//               </div>
              
//               <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300">
//                 Book Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Guide;



// import React from "react";

// const Guides = () => {
//   return (
//     <div className="relative h-[300px] md:h-[400px] lg:h-[600px] w-full">
//       <img
//         src="./person2.jpg" alt="Travel Background" className="absolute inset-0 w-full h-full object-cover"/>
//       <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
//         <h1 className="text-white text-2xl md:text-4xl font-bold text-center">
//           Discover the Nepal with the <br />
//           best Traveller guide
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Guides;



// import React from "react";

// const Hero = () => {
//   return (
//     <div className="relative w-full h-screen">
//       {/* Full Background Image */}
//       <img
//         src="/person2.jpg" 
//         alt="Travel Background"
//         className="w-full h-30000000vh object-contain shadow-lime-300"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0  bg-opacity-60 flex items-center justify-center">
//         {/* Centered Text */}
//         <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
//           Discover the world with the <br />
//           best Traveller guide
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React from 'react';
import GuideList from '../components/GuideList';

const Guides = () => {
  return (
    <div className="font-sans">
     
      <div className="relative h-150 w-full">
        <img
          src="/person1.jpg" 
          alt="Travel"
          className="absolute w-full h-full object-cover brightness-50 rounded-b-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl font-bold text-center px-2">
          Discover the Nepal with the best Traveller guide
        </div>
        

         <div className="px-4 py-6 max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search Places, or Countries"
          className="w-full md:w-2/3 px-4 py-2 border rounded mb-4"
        />
        </div>
      </div>

      
      <div className="px-4 py-6 max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search Places, or Countries"
          className="w-full md:w-2/3 px-4 py-2 border rounded mb-4"
        />
        <div className="flex flex-wrap gap-2">
          {[
            'All',
            'Most experienced',
            'Most Popular',
            'Most Visited',
            'Top Review',
            'Recommended',
            'Boat tours',
            'Repeat Buyers',
          ].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-blue-200 text-sm"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Guide Cards */}
      <GuideList />
    </div>
  );
};

export default Guides;
