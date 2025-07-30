import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Guides = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { guides: guideData } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("guideData:", guideData);
    console.log("selected speciality:", speciality);

    if (speciality) {
      const filtered = guideData.filter(doc =>
        doc.speciality?.toLowerCase().replace(/\s+/g, '') === speciality.toLowerCase()
      );
      console.log("Filtered guides:", filtered);
      setFilterDoc(filtered);
    } else {
      setFilterDoc(guideData);
    }
  }, [guideData, speciality]);

  const handleFilterClick = (tag) => {
    if (speciality === tag) {
      navigate('/guides');
    } else {
      navigate(`/guides/${tag}`);
    }
  };

  return (
    <div className="px-6 md:px-12 py-10 pt-25">
      {/* Hero Section */}
      <div className="relative text-white py-20 rounded-lg overflow-hidden">
        <img src={assets.guideimg} alt="Guide background" className="absolute inset-0 w-full h-full object-cover brightness-50 rounded-lg" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover the world with the <br/> best Traveller guide
          </h1>

          {/* Search Bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 px-4">
            {/* <input type="text" placeholder="Location" className="px-4 py-2 w-40 rounded-md text-white font-bold border bg-transparent"  /> */}

             <select className="px-4 py-2 w-40 rounded-md text-white border border-gray-300 bg-transparent">
              <option className="text-black" value="">Location:</option>
              <option className="text-black" value="english">Mustang</option>
              <option className="text-black" value="french">Pokhara</option>
              <option className="text-black" value="spanish">Everest Base Camp</option>
              <option className="text-black" value="spanish">Lukla</option>
              <option className="text-black" value="spanish">Bandipur</option>
            </select>


            <select className="px-4 py-2 w-40 rounded-md text-white border border-gray-300 bg-transparent">
              <option className="text-black" value="">Language:</option>
              <option className="text-black" value="english">English</option>
              <option className="text-black" value="french">French</option>
              <option className="text-black" value="spanish">Spanish</option>
              <option className="text-black" value="spanish">German</option>
              <option className="text-black" value="spanish">Hindi</option>
            </select>

                <select className="px-4 py-2 w-40 rounded-md text-white border border-gray-300 bg-transparent">
              <option className="text-black" value="">Tour Types:</option>
              <option className="text-black" value="english">Family Tour</option>
              <option className="text-black" value="french">Solo Tour</option>
              <option className="text-black" value="spanish">Group Tour</option>
              <option className="text-black" value="spanish">Luxury Tour</option>
              <option className="text-black" value="spanish">Private Tour</option>
            </select>
            <button className="px-6 py-2 bg-white text-black font-semibold rounded-md hover:bg-gray-200 border border-gray-300 cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <p className="text-lg font-semibold mb-6 text-center">Browse through the guide speciality and types of guides</p>

      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <p onClick={() => navigate('/guides')} className={`px-4 py-2 border rounded-full cursor-pointer ${!speciality ? 'bg-indigo-100 text-black' : ''}`}>All Guides</p>
        <p onClick={() => handleFilterClick('cultureguide')} className={`px-4 py-2 border rounded-full cursor-pointer ${speciality === 'cultureguide' ? 'bg-indigo-100 text-black' : ''}`}>cultureguide</p>
        <p onClick={() => handleFilterClick('localguide')} className={`px-4 py-2 border rounded-full cursor-pointer ${speciality === 'localguide' ? 'bg-indigo-100 text-black' : ''}`}>localguide</p>
        <p onClick={() => handleFilterClick('familyguide')} className={`px-4 py-2 border rounded-full cursor-pointer ${speciality === 'familyguide' ? 'bg-indigo-100 text-black' : ''}`}>familyguide</p>
        <p onClick={() => handleFilterClick('natureguide')} className={`px-4 py-2 border rounded-full cursor-pointer ${speciality === 'natureguide' ? 'bg-indigo-100 text-black' : ''}`}>natureguide</p>
        <p onClick={() => handleFilterClick('luxoryguide')} className={`px-4 py-2 border rounded-full cursor-pointer ${speciality === 'luxoryguide' ? 'bg-indigo-100 text-black' : ''}`}>luxoryguide</p>
        <p onClick={() => handleFilterClick('advantureguide')} className={`px-4 py-2 border rounded-full cursor-pointer ${speciality === 'advantureguide' ? 'bg-indigo-100 text-black' : ''}`}>advantureguide</p>
      </div>

      {/* Filtered Guides List */}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-9 pt-2 px-10">
        {filterDoc.length === 0 ? (
          <p className="text-center text-lg col-span-full text-red-500 font-medium">No guides found for this category.</p>
        ) : (
          filterDoc.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/booking/${item._id}`)}
              className="border border-blue-300 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 transition-all duration-300 shadow-md"
            >
              <img className="bg-blue-50 w-full h-80 object-cover" src={item.image} alt={item.name || 'Guide'} />
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-green-500 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                  <p>Available</p>
                </div>
                <p className="text-gray-800 text-xl font-semibold">{item.name}</p>
                <p className="text-gray-600 text-base">{item.speciality}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Guides;
