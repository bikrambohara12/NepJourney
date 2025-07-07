import React, { useState } from 'react'
import { assets } from '../assets/assets'


const MyProfile = () => {

 const [userData, setUserData] = useState({
     name: "Bikram Bohara",
     Image: assets.profile_pic,
     email: "bikram@gmail.com",
     phone: "+977-9876543210",
     address: {
        line1:"123 Main Street",
        line2:"New-Baneshower, Kathmandu, Nepal"
         },
         gender:'male',
         dob:'2003-12-31',
 })

 const [isEdit,setIsEdit] = useState(false)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm pt-30 px-20 pb-16'>
      <img className='w-36 rounded ' src={userData.Image} alt="" />
       
       {
        isEdit 
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4 ' type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev,name:e.target.value}))} /> 
        : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
       }

       <hr className='bg-zinc-400 h-[1px] border-none' />
       <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email id:</p>
            <p className='text-blue-500'>{userData.email}</p>
            <p className='font-medium'>Phone:</p>
             {
        isEdit 
        ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))} /> 
        : <p className='text-blue-400'>{userData.phone}</p>
       }
       <p className='font-medium'>Address:</p>
       {
        isEdit
        ? <p><input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address:{...prev.address, line1: e.target.value }}))} value={userData.address.line1} type="text" /> <br />
        <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({...prev, address:{...prev.address, line2: e.target.value }}))} value={userData.address.line2} type="text" /></p>
        :<p className='text-gray-500'>{userData.address.line1} <br />
        {userData.address.line2} 
        </p>
       }

        </div>
       </div>
       <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Gender:</p>
            {
             isEdit 
        ?  <select className='mxa-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option></select>
        : <p className='text-gray-400'>{userData.gender}</p>
       }
       <p className='font-medium'>date of birth:</p>
       {
        isEdit 
        ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob} />
        : <p className='text-gray-400'>{userData.dob}</p>
       }
        </div>
       </div>

       <div className='mt-10'>
        {
            isEdit
            ? <button className='border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all' onClick={()=>setIsEdit(false)}>Save Information</button>
            : <button className='border border-blue-500 px-8 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all' onClick={()=>setIsEdit(true)}>Edit</button>

        }
       </div>

    </div>
  )
}

export default MyProfile



// import React, { useState } from 'react'
// import { assets } from '../assets/assets'
// import { FaEdit, FaSave } from "react-icons/fa";

// const MyProfile = () => {
//   const [userData, setUserData] = useState({
//     name: "Bikram Bohara",
//     Image: assets.profile_pic,
//     email: "bikram@gmail.com",
//     phone: "+977-9876543210",
//     address: {
//       line1: "123 Main Street",
//       line2: "New-Baneshower, Kathmandu, Nepal"
//     },
//     gender: 'male',
//     dob: '2003-12-31',
//   });

//   const [isEdit, setIsEdit] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleSave = () => {
//     setIsEdit(false);
//     setMessage("Profile updated successfully!");
//     setTimeout(() => setMessage(''), 3000);
//   };

//   return (
//     <div className='max-w-xl mx-auto bg-white rounded-xl shadow-xl px-8 py-10 mt-10'>
//       <div className='flex items-center gap-6'>
//         <img className='w-28 h-28 object-cover rounded-full border border-gray-300' src={userData.Image} alt="Profile" />
//         <div>
//           {
//             isEdit
//               ? <input
//                   className='text-2xl font-semibold text-gray-800 border-b border-gray-300 focus:outline-none'
//                   type="text"
//                   value={userData.name}
//                   onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
//                 />
//               : <h2 className='text-2xl font-semibold text-gray-800'>{userData.name}</h2>
//           }
//           <p className='text-sm text-gray-500 mt-1'>{userData.email}</p>
//         </div>
//       </div>

//       <hr className='my-6 border-gray-300' />

//       <div className='text-gray-700 space-y-4'>
//         <div>
//           <p className='text-sm font-medium text-gray-500'>Phone:</p>
//           {
//             isEdit
//               ? <input
//                   className='bg-gray-100 px-3 py-1 rounded w-full'
//                   type="text"
//                   value={userData.phone}
//                   onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
//                 />
//               : <p>{userData.phone}</p>
//           }
//         </div>

//         <div>
//           <p className='text-sm font-medium text-gray-500'>Address:</p>
//           {
//             isEdit
//               ? <>
//                   <input
//                     className='bg-gray-100 px-3 py-1 rounded w-full mt-1'
//                     type="text"
//                     value={userData.address.line1}
//                     onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
//                   />
//                   <input
//                     className='bg-gray-100 px-3 py-1 rounded w-full mt-2'
//                     type="text"
//                     value={userData.address.line2}
//                     onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
//                   />
//                 </>
//               : <p>{userData.address.line1}<br />{userData.address.line2}</p>
//           }
//         </div>

//         <div>
//           <p className='text-sm font-medium text-gray-500'>Gender:</p>
//           {
//             isEdit
//               ? <select
//                   className='bg-gray-100 px-3 py-1 rounded w-full mt-1'
//                   value={userData.gender}
//                   onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
//                 >
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               : <p className='capitalize'>{userData.gender}</p>
//           }
//         </div>

//         <div>
//           <p className='text-sm font-medium text-gray-500'>Date of Birth:</p>
//           {
//             isEdit
//               ? <input
//                   className='bg-gray-100 px-3 py-1 rounded w-full mt-1'
//                   type="date"
//                   value={userData.dob}
//                   onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
//                 />
//               : <p>{userData.dob}</p>
//           }
//         </div>
//       </div>

//       {message && <p className="text-green-600 mt-4 text-sm font-medium">{message}</p>}

//       <div className='mt-8'>
//         {
//           isEdit
//             ? <button
//                 onClick={handleSave}
//                 className='bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all'
//               >
//                 <FaSave /> Save Info
//               </button>
//             : <button
//                 onClick={() => setIsEdit(true)}
//                 className='border border-blue-600 text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all'
//               >
//                 <FaEdit /> Edit Profile
//               </button>
//         }
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
