
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const MyBooking = () => {
  const { backendUrl, token } = useContext(AppContext)
  const [booking, setBooking] = useState([])
 const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

 const slotDateFormat = (slotDate)=>{
  const dateArray = slotDate.split('_')
  return dateArray[0]+ ""+months[Number(dateArray[1])]+""+dateArray[2]
 }
  

  const getUserBooking = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/booking`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      console.log("Fetched Bookings:", data.booking)

      if (data.success) {
        setBooking(data.booking.reverse())
      }
    } catch (error) {
      console.error(error)
      toast.error(error.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    if (token) {
      getUserBooking()
    }
  }, [token])

  return (
    <div className='pb-20 pt-20 px-6 sm:px-20'>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b text-lg'>My Bookings</p>

      {booking.length === 0 ? (
        <p className='text-center mt-6 text-zinc-500'>You have no bookings yet.</p>
      ) : (
        booking.slice(0, 3).map((item, index) => (
          <div
            className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b items-center'
            key={index}
          >
            <div>
              <img
                className='w-32 h-28 object-cover rounded-md'
                src={item.guideData?.image}
                alt={item.guideData?.name || 'Guide'}
              />
            </div>
            <div className='flex-1 text-sm text-zinc-600'>
              <p className='text-neutral-800 font-semibold text-base'>
                {item.guideData?.name}
              </p>
              <p>{item.guideData?.speciality || 'No speciality provided'}</p>

              <p className='text-zinc-700 font-medium mt-1'>Address:</p>

              {/* ✅ Safe conditional logic for address */}
              {typeof item.guideData?.address === 'object' ? (
                <>
                  <p className='text-xs'>{item.guideData.address?.line1 || ''}</p>
                  <p className='text-xs'>{item.guideData.address?.line2 || ''}</p>
                </>
              ) : (
                <p className='text-xs'>{item.guideData?.address || 'Address not available'}</p>
              )}

              <p className='text-xs mt-1'>
                <span className='text-sm text-neutral-700 font-medium'>Date: </span>
                {slotDateFormat(item.slotDate)}
              </p>
            </div>
            <div className='flex flex-col gap-2 justify-end'>
              <button className='text-sm text-stone-500 text-center py-2 border rounded hover:bg-blue-600 hover:text-white transition-all duration-300'>
                Pay Online
              </button>
              <button className='text-sm text-stone-500 text-center py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>
                Cancel Booking
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default MyBooking

