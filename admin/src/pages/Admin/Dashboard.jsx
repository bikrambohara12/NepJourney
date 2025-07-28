import React, { useContext, useEffect } from 'react'

const Dashboard = () => {

  const {aToken, getDashData, cancelBooking, dashData} = useContext(AdminContext) 
   
  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])



  return dashData && (
  <div className='m-5'>

    <div className='flex flex-wrap gap-3'>
      <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-gray-100 cursor-pointer hover:scale-105 transition-all'>
        <img src={assets.doctor_icons} alt="photo" />
         <div>
          <p>{dashData.guides}</p>
          <p>Guides</p>
         </div>
      </div>
    </div>

    <div>
      <div >
        <img src={assets.appointment_icons} alt="phoyo" />
        <p>{dashData.bookings}</p>
        <p>Bookings</p>
      </div>
    </div>

    
      <div>
        <img src={assets.patient_icons} alt="photo" />
        
        <div>
          <p>{dashData.bookings}</p>
          <p>users</p>
        </div>
      
        
      </div>
    

  </div>
  )
}

export default Dashboard