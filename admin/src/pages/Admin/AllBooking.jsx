import React from 'react' 
import { useContext } from 'react' 
import { AdminContext } from '../../context/AdminContext' 
import { useEffect } from 'react' 
import { AppContext } from '../../context/AppContext'  
import { assets } from '../../assets/assets'

const AllBooking = () => { 
 
  const {aToken, booking, getAllBooking,cancelBooking}= useContext(AdminContext) 
  const {calculateAge,slotDateFormat,currency} = useContext(AppContext) 

  useEffect(()=>{ 
    if (aToken) { 
      getAllBooking() 
    } 
 
  },[aToken]) 
 
  return ( 
    <div className='w-full max-w-6xl m-5'> 
      <p className='mb-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300'>All Booking</p> 
 
      <div className='bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll hover:border-blue-600'> 
 
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b border-gray-500 bg-gradient-to-r from-gray-400 to-blue-50 hover:from-blue-60 hover:to-indigo-300 transition-all duration-300 sticky top-0'> 
          <p className='font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200'>#</p> 
          <p className='font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200'>User</p> 
          <p className='font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200'>Age</p> 
          <p className='font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200'>Date</p> 
          <p className='font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200'>Guide</p> 
          <p className='font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200'>Fee</p> 
          <p className='font-semibold text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200'>Action</p> 
        </div> 

        {booking.map((item,index)=>(
          <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b hover:bg-gray-200 transition-all duration-200 group' key={index}>
            <p className='max-sm:hidden group-hover:text-gray-800 transition-colors duration-200'>{index+1}</p>
            <div className='flex items-center gap-3 group-hover:transform group-hover:scale-105 transition-all duration-300'>
              <img className='w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 shadow-sm group-hover:shadow-md transition-all duration-300' src={item.userData.image} alt="" />
              <p className='font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200'>{item.userData.name}</p>
            </div>
            <p className='maxx-sm:hideden group-hover:text-gray-800 group-hover:font-medium transition-all duration-200'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}</p>
             <div className='flex items-center gap-3 group-hover:transform group-hover:scale-105 transition-all duration-300'>
              <img className='w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 shadow-sm group-hover:shadow-md transition-all duration-300' src={item.guideData.image} alt="" />
              <p className='font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200'>{item.guideData.name}</p>
            </div>
            <p>{currency}{item.amount}</p>
            {item.cancelled ? <p className='text-red-500 font-medium'>Cancelled</p> 
            :  <img onClick={()=>cancelBooking(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />}
          </div>
        ))}

      </div> 
    </div> 
  ) 
}
export default AllBooking