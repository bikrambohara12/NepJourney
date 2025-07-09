
import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium text-center px-4'>Find by Speciality</h1>

      <p className='w-full max-w-xl text-center text-sm px-4'> Simply browse through our extensive list of trusted guides, schedule your booking and enjoy your journey. </p>

      <div className='mt-10 w-full overflow-x-auto px-4 scrollbar-hide'>
        <div className='flex gap-6 sm:gap-10 md:gap-16 lg:gap-20 flex-nowrap sm:flex-wrap justify-start sm:justify-center'>
          {specialityData.map((item, index) => (
            <Link key={index} onClick={() => scrollTo(0, 0)}to={`/guides/${item.speciality}`}
              className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 min-w-[80px] sm:min-w-[100px] transition-transform duration-300 transform hover:-translate-y-2'>
              <div className='w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-md'>
                <img src={item.image} alt={item.speciality} className='w-full h-full object-cover' />
              </div>
              <p className='mt-2 text-sm font-medium text-center whitespace-nowrap'>
                {item.speciality}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speciality;
