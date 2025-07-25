import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {

    const{aToken} = useContext(AdminContext)

  return (
    <div className='min-h-248 bg-gray-300 border-r'>
      {
        aToken && <ul className='text-gray-900'>
            
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-gray-300 border-r-4 border-blue-600' : ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" />
            <p>Dashboard</p>
          </NavLink>

           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-gray-300 border-r-4 border-blue-600' : ''}`} to ={'/all-booking'}>
            <img src={assets.appointment_icon} alt="" />
            <p>Booking</p>
          </NavLink>

           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-gray-300 border-r-4 border-blue-600' : ''}`} to={'/add-guide'}>
            <img src={assets.add_icon} alt="" />
            <p>Add Guide</p>
          </NavLink>

           <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-gray-300 border-r-4 border-blue-600' : ''}`} to ={'/guide-list'}>
            <img src={assets.people_icon} alt="" />
            <p>Guide List</p>
          </NavLink>

        </ul>
      }
    </div>
  )
}

export default Sidebar
