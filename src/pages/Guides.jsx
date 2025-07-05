import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Guides = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { guides: guideData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
  if (speciality) {
    setFilterDoc(guideData.filter(doc => doc.tag === speciality));
  } else {
    setFilterDoc(guideData);
  }
}, [guideData, speciality]);


  return (
    <div className="px-6 md:px-12 py-10 pt-25 ">
      <div
        className="bg-cover bg-center text-white py-20 rounded-lg relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1533142266415-ac591a4c233c')`,
        }}
      >
        <div className="bg-black bg-opacity-60 absolute inset-0 rounded-lg"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover the world with the <br /> best Traveller guide
          </h1>

          {/* Search Bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 px-4">
            <input type="text" placeholder="Location" className="px-4 py-2 w-40 rounded-md text-black border border-gray-300"/>
            <input type="date" className="px-4 py-2 w-40 rounded-md text-black border border-gray-300" />
            <select className="px-4 py-2 w-40 rounded-md text-black border border-gray-300">
              <option value="">Language</option>
              <option value="english">English</option>
              <option value="french">French</option>
              <option value="spanish">Spanish</option>
            </select>
            <input
              type="text"
              placeholder="Your Type"
              className="px-4 py-2 w-40 rounded-md text-black border border-gray-300" />
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 border border-gray-300">
              Search
            </button>
          </div>
        </div>
      </div>

      <p className="text-lg font-semibold mb-6 text-center">
        Browse through the guide speciality and types of guides
      </p>

      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <p onClick={() => speciality === 'cultureguide' ? navigate('/guide') : navigate('/guides/cultureguide')} className="px-4 py-2 border rounded-full cursor-pointer"> cultureguide</p>
        <p onClick={() => speciality === 'localguide' ? navigate('/guide') : navigate('/guides/localguide')} className="px-4 py-2 border rounded-full cursor-pointer">localguide </p>
        <p onClick={() => speciality === 'familyguide' ? navigate('/guide') : navigate('/guides/familyguide')} className="px-4 py-2 border rounded-full cursor-pointer" >  familyguide </p>
        <p onClick={() => speciality === 'natureguide' ? navigate('/guide') : navigate('/guides/natureguide')} className="px-4 py-2 border rounded-full cursor-pointer" >  natureguide </p>
        <p onClick={() => speciality === 'luxoryguide' ? navigate('/guide') : navigate('/guides/luxoryguide')} className="px-4 py-2 border rounded-full cursor-pointer" > luxoryguide</p>
        <p onClick={() => speciality === 'advantureguide' ? navigate('/guide') : navigate('/guides/advantureguide')} className="px-4 py-2 border rounded-full cursor-pointer" > advantureguide</p>
      </div>


      {/* Filtered Guides */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-9 pt-2 px-10">
        {filterDoc.map((item) => (
          <div key={item._id} onClick={() => navigate(`/booking/${item._id}`)} className="border border-blue-300 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-300 shadow-md" >
            <img className="bg-blue-50 w-full h-80 object-cover" src={item.image} alt={item.name || 'Guide'} />
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-800 text-xl font-semibold">
                {item.name}
              </p>
              <p className="text-gray-600 text-base">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;


