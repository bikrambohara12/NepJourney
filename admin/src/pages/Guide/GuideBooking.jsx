import React from 'react'
import { useContext } from 'react'
import { GuideContext } from '../../context/GuideContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'


const GuideBooking = () => {
  const{dToken,booking,getBooking, completeBooking,cancelBooking,}=useContext(GuideContext)
  const {calculateAge,slotDateFormat,currency} = useContext(AppContext)
     
  useEffect(()=>{
    if (dToken) {
      getBooking()
    }
  },[dToken])
   
  return (
   
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium text-gray-100 hover:text-cyan-400 transition-all duration-300 transform hover:scale-100 cursor-pointer'>All Booking</p>
             
      <div className='bg-gray-900 border border-gray-700 rounded-lg shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll backdrop-blur-sm'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-4 px-6 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-cyan-900/30 hover:to-blue-900/30 transition-all duration-500'>
          <p className='font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-110 hover:glow'>#</p>
          <p className='font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-110'>Traveler</p>
          <p className='font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-110'>Payment</p>
          <p className='font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-110'>Age</p>
          <p className='font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-110'>Date</p>
          <p className='font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-110'>Fee</p>
          <p className='font-semibold text-cyan-400 hover:text-cyan-300 transition-all duration-300 cursor-pointer transform hover:scale-110'>Action</p>
        </div>
                   
        {
          booking.map((item,index)=>{
            return(
           <div className='grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-4 px-6 border-b border-gray-700/50 hover:bg-gradient-to-r hover:from-gray-800/50 hover:to-gray-700/30 transition-all duration-300 group hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'  key={index}>
            <p className='text-gray-300 group-hover:text-cyan-400 transition-all duration-300 font-medium'>{index+1}</p>
            <div className='flex items-center gap-3 group-hover:transform group-hover:scale-105 transition-all duration-300'>
              <img src={item.userData.image} alt="" className='w-10 h-10 rounded-full border-2 border-gray-600 group-hover:border-cyan-500 transition-all duration-300 hover:scale-110 shadow-lg' />
              <p className='text-gray-200 group-hover:text-white font-medium transition-all duration-300'>{item.userData.name}</p>
            </div>
            <div className='flex items-center'>
              <p className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                item.payment 
                  ? 'bg-green-900/50 text-green-400 border border-green-500/30 group-hover:bg-green-800/60 group-hover:shadow-green-500/20 group-hover:shadow-md' 
                  : 'bg-orange-900/50 text-orange-400 border border-orange-500/30 group-hover:bg-orange-800/60 group-hover:shadow-orange-500/20 group-hover:shadow-md'
              }`}>
                {item.payment ? 'ONLINE' :'CASH'}
              </p>
            </div>
            <p className='text-gray-300 group-hover:text-cyan-400 transition-all duration-300 font-medium flex items-center'>{calculateAge(item.userData.dob)}</p>
            <p className='text-gray-300 group-hover:text-white transition-all duration-300 font-medium flex items-center'>{slotDateFormat(item.slotDate)}</p>
            <p className='text-green-400 group-hover:text-green-300 font-bold transition-all duration-300 flex items-center hover:scale-110 transform'>{currency}{item.amount}</p>
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
            )
          })
         }
                
      </div>
    </div>
  
  )
}

export default GuideBooking