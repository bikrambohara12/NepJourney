import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { GuideContext } from '../context/GuideContext'

const Sidebar = () => {
     
    const{aToken} = useContext(AdminContext)
    const{dToken} = useContext(GuideContext)
   
  return (
    <div className='min-h-248 border-r border-gray-600 bg-gray-900 rounded-lg px-6 py-8 shadow-2xl shadow-gray-900/50 backdrop-blur-sm'>
      {
        aToken && <ul className='text-gray-100'>
                       
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group ${isActive ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'hover:border-r-2 hover:border-cyan-500/50'}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="" className='transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter' />
            <p className='hidden md:block group-hover:text-cyan-300 transition-all duration-300 font-medium'>Dashboard</p>
          </NavLink>
            
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group ${isActive ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'hover:border-r-2 hover:border-cyan-500/50'}`} to ={'/all-booking'}>
            <img src={assets.appointment_icon} alt="" className='transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter' />
            <p className='hidden md:block group-hover:text-cyan-300 transition-all duration-300 font-medium'>Booking</p>
          </NavLink>
            
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group ${isActive ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'hover:border-r-2 hover:border-cyan-500/50'}`} to={'/add-guide'}>
            <img src={assets.add_icon} alt="" className='transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter' />
            <p className='hidden md:block group-hover:text-cyan-300 transition-all duration-300 font-medium'>Add Guide</p>
          </NavLink>
            
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group ${isActive ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'hover:border-r-2 hover:border-cyan-500/50'}`} to ={'/guide-list'}>
            <img src={assets.people_icon} alt="" className='transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter' />
            <p className='hidden md:block group-hover:text-cyan-300 transition-all duration-300 font-medium'>Guide List</p>
          </NavLink>
         </ul>
      }
           
      {
        dToken && <ul className='text-gray-100'>
                       
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group ${isActive ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'hover:border-r-2 hover:border-cyan-500/50'}`} to={'/guide-dashboard'}>
            <img src={assets.home_icon} alt="" className='transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter' />
            <p className='hidden md:block group-hover:text-cyan-300 transition-all duration-300 font-medium'>Dashboard</p>
          </NavLink>
            
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group ${isActive ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'hover:border-r-2 hover:border-cyan-500/50'}`} to ={'/guide-booking'}>
            <img src={assets.appointment_icon} alt="" className='transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter' />
            <p className='hidden md:block group-hover:text-cyan-300 transition-all duration-300 font-medium'>Booking</p>
          </NavLink>
            
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 group ${isActive ? 'bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-r-4 border-cyan-400 shadow-lg shadow-cyan-500/30' : 'hover:border-r-2 hover:border-cyan-500/50'}`} to ={'/guide-profile'}>
            <img src={assets.people_icon} alt="" className='transition-all duration-300 group-hover:scale-110 group-hover:brightness-125 filter' />
            <p className='hidden md:block group-hover:text-cyan-300 transition-all duration-300 font-medium'>Profile</p>
          </NavLink>
         </ul>
      }
           
    </div>
  )
}

export default Sidebar
