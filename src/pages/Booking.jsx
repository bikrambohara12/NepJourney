import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Booking = () => {
  const { guideId } = useParams();
  const { guides } = useContext(AppContext);

  const [guideInfo, setGuideInfo] = useState(null);

  useEffect(() => {
    if (guides && guideId) {
      const guide = guides.find(g => g._id.toString() === guideId);
      setGuideInfo(guide);
      console.log(" Matched Guide Info:", guide);
      
    }
  }, [guides, guideId]);

  return guideInfo ? (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img src={guideInfo.image} alt={guideInfo.name} className="rounded-lg w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            {guideInfo.name}
            <img src={assets.varified_icon} alt="Verified" className="w-5 h-5" />
          </h2>
          <p className="text-lg text-gray-600">{guideInfo.deegree} - {guideInfo.speciality}</p>
          <p className="mt-4 text-sm text-gray-700">Experience: {guideInfo.experience}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="p-6 text-center text-gray-600">Loading guide details...</div>
  );
};

export default Booking;

