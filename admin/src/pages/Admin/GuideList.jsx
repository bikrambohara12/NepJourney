// import React, { useContext, useEffect } from 'react'
// import { AdminContext } from '../../context/AdminContext'


// const GuideList =  () => {

//   const {guides, aToken,getAllGuides} = useContext(AdminContext)

//   useEffect (()=>{
//     if (aToken) {
//       getAllGuides()
      
//     }

//   },[aToken])


//   return (
//     <div className='m-5 mx-h-[90vh] overflow-y-scroll'  >
//       <h1 className='text-lg font-medium'>All Guides</h1>
//       <div className='ww-full flex flex-warp gap-4 pt-5 gap-y-6'>
//         {
//           guides.map((item, index) => {
//   return (
//     <div className='border border-indigo' key={index}>
//       <img src={item.image} alt="" />
//       <div>
//         <p>{item.name}</p>
//         <p>{item.speciality}</p>
//         <div>
//           <input type="checjbox" checked={item.available}  />
//           <p>Available</p>
//         </div>
//       </div>
//     </div>
//   );
// })

//         }
//       </div>
      
//     </div>
//   )
// }

// export default GuideList



import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const GuideList = () => {
  const { guides, aToken, getAllGuides, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllGuides();
    }
  }, [aToken]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">All Guides</h1>

      {/* Grid: 4 columns on large screens, 2 on medium, 1 on small */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((item, index) => {
          return (
            <div
              key={index}
              className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-55 object-cover rounded-lg mb-3"
              />
              <div className="space-y-1">
                <p className="text-lg font-bold text-gray-800">Name: {item.name}</p>
                <p className="text-sm text-gray-600">Speciality: {item.speciality}</p>
                <div className="flex items-center gap-2 mt-2">
                  <input onChange={() => changeAvailability(item._id)} type="checkbox" checked={item.available} disabled className="w-4 h-4 text-green-500 border-gray-300 rounded focus:ring-green-400 cursor-pointer" />
                  {/* <p className="text-sm text-gray-700">
                    {item.available ? 'Available' : 'Unavailable'}
                  </p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuideList;
