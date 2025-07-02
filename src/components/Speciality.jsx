// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const Speciality = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
//       <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//       <p className='sm:w-1/3 text-center text-sm'>
//         Simply browse through our extensive list of trusted guides, schedule your booking and enjoy your journey.
//       </p>

//       {/* Horizontal Image Row with Larger Gap */}
//       <div className='flex gap-20 mt-6 overflow-x-auto px-4'>
//         {specialityData.map((item, index) => (
//           <Link
//             onClick={() => scrollTo(0, 0)}
//             key={index}
//             to={`/guides/${item.speciality}`}
//             className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 '
//           >
//             <img
//               className='w-24 h-24 object-cover rounded-full shadow-md'
//               src={item.image}
//               alt={item.speciality}
//             />
//             <p className='mt-2 text-sm font-medium whitespace-nowrap'>{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Speciality

import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Speciality = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
      <h1 className='text-3xl font-medium'>Find by Speciality</h1>

      <p className='w-full max-w-xl text-center text-sm px-4'> Simply browse through our extensive list of trusted guides, schedule your booking and enjoy your journey.</p>

      <div className='flex gap-20 mt-10 overflow-x-auto px-4'>
        {specialityData.map((item, index) => (
          <Link onClick={() => scrollTo(0, 0)} key={index} to={`/guides/${item.speciality}`} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 min-w-[100px] transition-transform duration-300 transform hover:-translate-y-2'>
            <div className='w-24 h-24 rounded-full overflow-hidden shadow-md'>
              <img src={item.image} alt={item.speciality} className='w-full h-full object-cover'/>
            </div>
            <p className='mt-2 text-sm font-medium whitespace-nowrap'>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Speciality
