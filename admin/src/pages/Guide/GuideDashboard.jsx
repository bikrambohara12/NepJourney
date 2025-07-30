import React from 'react'
import { useContext } from 'react'
import { GuideContext } from '../../context/GuideContext'
import { useEffect } from 'react'
import { assets } from '../../assets/assets'
import {AppContext} from '../../context/AppContext'

const GuideDashboard = () => {
  
  
  const{dToken,dashData, getDashData,cancelBooking,completeBooking} = useContext(GuideContext)
   const{currency,slotDateFormat,} = useContext(AppContext)



  useEffect(()=>{
    if (dToken) {
      getDashData()
      
    }

  },[dToken])

  return dashData && (
    <div className='m-5'>
      <div className='flex flex-wrap gap-8'>
      
              <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-blue-300 group'>
              <img className='w-12 h-12 group-hover:scale-110 transition-transform duration-300' src={assets.earning_icon} alt="" />
              <div>
                <p className='text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300'>{currency} {dashData.earnings}</p>
                <p className='text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300'>Earning</p>
              </div>
            </div>
                        
            <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-green-300 group'>
              <img className='w-12 h-12 group-hover:scale-110 transition-transform duration-300' src={assets.appointment_icon} alt="" />
              <div>
                <p className='text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300'>{dashData.booking}</p>
                <p className='text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300'>Booking</p>
              </div>
            </div>
                        
            <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded-lg border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-lg hover:border-purple-300 group'>
              <img className='w-12 h-12 group-hover:scale-110 transition-transform duration-300' src={assets.patients_icon} alt="" />
              <div>
                <p className='text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300'>{dashData.travelers}</p>
                <p className='text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300'>Traveler</p>
              </div>
            </div>
    </div>



    <div className='bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 mt-12'>
       <div className='flex items-center gap-2.5 px-4 py-4 rounded-t-lg border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 hover:from-blue-50 hover:to-indigo-50 transition-all duration-300'>
         <img className='w-6 h-6 hover:scale-110 transition-transform duration-300' src={assets.list_icon} alt="" />
         <p className='font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300'>Latest Bookings</p>
       </div>

       <div className='pt-4 border-0'>
         {
           dashData.latestBooking.map((item,index)=>(
             <div className='flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 group' key={index}>
               <div className='flex items-center gap-3'>
                 <img className='w-12 h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 shadow-sm group-hover:shadow-md transition-all duration-300' src={item.userData.image} alt="" />
                 <div>
                   <p className='font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200'>{item.userData.name}</p>
                   <p className='text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-200'>{slotDateFormat(item.slotDate)}</p>
                 </div>
               </div>
              
               {
              item.cancelled 
              ? <p className='text-red-500 text-xs font-medium'>Cancelled</p>
              : item.isCopleted
               ? <p className='text-green-500 text-xs font-medium'>Completed</p>
               :<div className='flex items-center gap-3'>
              <img onClick={()=>cancelBooking(item._id)}  src={assets.cancel_icon}  alt="Cancel"  className='w-10 h-10 cursor-pointer hover:scale-125 transition-all duration-300 filter hover:brightness-110 hover:drop-shadow-lg hover:drop-shadow-red-500/30 opacity-80 hover:opacity-100'  />
              <img onClick={()=>completeBooking(item._id)} src={assets.tick_icon}  alt="Approve"   className='w-10 h-10 cursor-pointer hover:scale-125 transition-all duration-300 filter hover:brightness-110 hover:drop-shadow-lg hover:drop-shadow-green-500/30 opacity-80 hover:opacity-100'  />
            </div>
            }
             </div>
           ))
          }
       </div>
     </div>
    </div>
  )
}

export default GuideDashboard
