import React, { useContext, useEffect } from 'react'

const Dashboard = () => {

  const {aToken, getDashData, cancelBooking, dashData} = useContext(AdminContext) 
   
  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])


  return (
    <div>
      
    </div>
  )
}

export default Dashboard