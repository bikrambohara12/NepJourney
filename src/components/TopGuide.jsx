import React from 'react';
import { guides } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const TopGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-6 my-20 text-gray-900 md:mx-10">
      <h1 className="text-4xl font-semibold">Top Guides to Book</h1>
      <p className="sm:w-1/2 text-center text-base">
        Simply browse through our extensive list of trusted and verified guides to make your journey unforgettable.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6 px-4 sm:px-0">
        {guides.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/booking/${item._id}`)}
            className="border border-blue-300 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-300 shadow-md" key={index}>
            <img className="bg-blue-50 w-full h-80 object-cover" src={item.image} alt={item.name || 'Guide'}/>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-800 text-xl font-semibold">{item.name}</p>
              <p className="text-gray-600 text-base">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate('/guides')} className="bg-blue-100 hover:bg-blue-200 text-gray-700 px-16 py-4 text-lg rounded-full mt-12 transition-colors duration-300">More
      </button>
    </div>
  );
};

export default TopGuide;

