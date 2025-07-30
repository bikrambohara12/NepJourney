import React from 'react';

const GuideCard = ({ name, country, languages, price, rating, image }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center w-full max-w-xs mx-auto">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto object-cover mb-3"/>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">{country}</p>
      <p className="text-sm text-gray-500 mb-2">{languages}</p>
      <div className="text-sm text-yellow-500">⭐ {rating}</div>
      <div className="text-blue-600 font-bold mt-1">${price} /pp</div>
     
    </div>
  );
};

export default GuideCard;
