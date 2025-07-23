
import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { FaEdit, FaSave } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { AppContext } from '../context/AppContext';

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('phone', userData.phone);
      formData.append('address', JSON.stringify(userData.address));
      formData.append('gender', userData.gender);
      formData.append('dob', userData.dob);
      image && formData.append('image', image);

      const { data } = await axios.post(
        backendUrl + '/api/user/update-profile',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return userData && (
    <div className='pb-20 pt-20 bg-gray-400'>
    <div className='max-w-2xl mx-auto bg-white rounded-2xl shadow-lg px-8 py-10 mt-12 pb-2 '>
      <div className="flex flex-col items-center gap-4 ">
        {isEdit ? (
          <label htmlFor='image' className='cursor-pointer relative group'>
            <img
              className='w-36 h-36 rounded-full object-cover opacity-80 group-hover:opacity-100 transition'
              src={image ? URL.createObjectURL(image) : userData.image}
              alt="Profile Preview"
            />
            <div className='absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md'>
              <img className='w-6' src={assets.upload_icon} alt="Upload" />
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
          </label>
        ) : (
          <img className='w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow ' src={userData.image} alt="Profile" />
        )}

        <div className='text-center'>
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
              className='text-2xl font-semibold border-b-2 border-gray-300 px-2 text-center focus:outline-none'
            />
          ) : (
            <h2 className='text-2xl font-bold text-gray-800'>{userData.name}</h2>
          )}
          <p className='text-sm text-gray-500 mt-1'>{userData.email}</p>
        </div>
      </div>

      <hr className='my-6 border-gray-300' />

      <div className='space-y-4'>
        {/* PHONE */}
        <div>
          <label className='text-sm font-medium text-gray-500'>Phone</label>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              className='w-full bg-gray-100 px-4 py-2 rounded mt-1'
            />
          ) : (
            <p className='text-gray-700'>{userData.phone}</p>
          )}
        </div>

        {/* ADDRESS */}
        <div>
          <label className='text-sm font-medium text-gray-500'>Address</label>
          {isEdit ? (
            <>
              <input
                type="text"
                value={userData.address.line1}
                onChange={e => setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line1: e.target.value }
                }))}
                className='w-full bg-gray-100 px-4 py-2 rounded mt-1'
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={e => setUserData(prev => ({
                  ...prev,
                  address: { ...prev.address, line2: e.target.value }
                }))}
                className='w-full bg-gray-100 px-4 py-2 rounded mt-2'
              />
            </>
          ) : (
            <p className='text-gray-700'>{userData.address.line1}<br />{userData.address.line2}</p>
          )}
        </div>

        {/* GENDER */}
        <div>
          <label className='text-sm font-medium text-gray-500'>Gender</label>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
              className='w-full bg-gray-100 px-4 py-2 rounded mt-1'
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p className='capitalize text-gray-700'>{userData.gender}</p>
          )}
        </div>

        {/* DOB */}
        <div>
          <label className='text-sm font-medium text-gray-500'>Date of Birth</label>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              className='w-full bg-gray-100 px-4 py-2 rounded mt-1'
            />
          ) : (
            <p className='text-gray-700'>{userData.dob}</p>
          )}
        </div>
      </div>

      {/* BUTTONS */}
      <div className='mt-8 text-center'>
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            className='bg-blue-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition'
          >
            <FaSave /> Save Info
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className='border border-blue-600 text-blue-600 px-6 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition'
          >
            <FaEdit /> Edit Profile
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default MyProfile;





// import React, { useState, useContext } from 'react';
// import { assets } from '../assets/assets';
// import { FaEdit } from "react-icons/fa";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { AppContext } from '../context/AppContext';

// const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

// const MyProfile = () => {
//   const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
//   const [isEdit, setIsEdit] = useState(false);
//   const [image, setImage] = useState(false);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (file.size > MAX_FILE_SIZE) {
//         toast.error("Image size too large! Maximum allowed is 10MB.");
//         return;
//       }
//       setImage(file);
//     }
//   };

//   const updateUserProfileData = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('name', userData.name);
//       formData.append('phone', userData.phone);
//       formData.append('address', JSON.stringify(userData.address));
//       formData.append('gender', userData.gender);
//       formData.append('dob', userData.dob);
//       if (image) formData.append('image', image);

//       const { data } = await axios.post(
//         `${backendUrl}/api/user/update-profile`,
//         formData,
//         { headers: { token } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         await loadUserProfileData();
//         setIsEdit(false);
//         setImage(false);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message);
//     }
//   };

//   return userData && (
//     <div className='max-w-xl mx-auto bg-white rounded-xl shadow-xl px-8 py-10 mt-10'>
//       {
//         isEdit
//           ? <>
//               <label htmlFor='image'>
//                 <div className='inline-block relative cursor-pointer'>
//                   <img className='w-36 h-36 object-cover rounded-full border border-gray-300' src={image ? URL.createObjectURL(image) : userData.image} alt="Profile" />
//                   <img className='w-10 absolute bottom-0 right-0' src={assets.upload_icon} alt="Upload" />
//                 </div>
//                 <input type="file" id="image" hidden onChange={handleImageChange} />
//               </label>
//               <p className="text-xs text-gray-500 mt-2">Max upload size: 10MB</p>
//             </>
//           : <img className='w-28 h-28 object-cover rounded-full border border-gray-300' src={userData.image} alt="Profile" />
//       }

//       <div className='flex items-center gap-6 mt-7 mb-4'>
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

//       <div className='mt-8'>
//         {
//           isEdit
//             ? <button
//                 onClick={updateUserProfileData}
//                 className='bg-blue-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all'>
//                 Save Info
//               </button>
//             : <button
//                 onClick={() => setIsEdit(true)}
//                 className='border border-blue-600 text-blue-600 px-6 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all'>
//                 <FaEdit /> Edit Profile
//               </button>
//         }
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
