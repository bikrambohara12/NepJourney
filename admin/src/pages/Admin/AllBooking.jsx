// import React, { useContext, useEffect } from 'react';
// import { AdminContext } from '../../context/AdminContext.jsx';

// const AllBooking = () => {
//   const { aToken, bookings, getAllBookings } = useContext(AdminContext);

//   useEffect(() => {
//     if (aToken) {
//       getAllBookings();
//     }
//   }, [aToken]);

//   return (
//     <div className='w-full max-w-6xl ms-5'>
//       <p className='mb-3 test-lg font-medium'>All Bookings</p>
//       <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
      
//         <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
//           <p>#</p>
//           <p>Name</p>
//           <p>Age</p>
//           <p>Date and Time</p>
//           <p>Guide</p>
//           <p>Costs</p>
//           <p>Status</p>
//         </div>
//         {/* bookings.map(...) here */}
//       </div>
//     </div>
//   );
// };

// export default AllBooking;


import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext.jsx';

const AllBooking = () => {
  const { aToken, bookings, getAllBookings } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllBookings();
    }
  }, [aToken]);

  return (
    <div className='w-full max-w-6xl ms-5'>
      <p className='mb-3 test-lg font-medium'>All Bookings</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>

        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
          <p>#</p>
          <p>Name</p>
          <p>Age</p>
          <p>Date and Time</p>
          <p>Guide</p>
          <p>Costs</p>
          <p>Status</p>
        </div>
        {/* bookings.map(...) here */}
      </div>
    </div>
  );
};

export default AllBooking;
