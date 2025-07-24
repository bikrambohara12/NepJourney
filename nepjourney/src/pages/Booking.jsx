
// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';

// const Booking = () => {
//   const { guideId } = useParams();
//   const { guides, currencySymbol } = useContext(AppContext);

//   const [guideInfo, setGuideInfo] = useState(null);

//   useEffect(() => {
//     if (guides && guideId) {
//       const guide = guides.find(g => g._id.toString() === guideId);
//       setGuideInfo(guide);
//       console.log("Matched Guide Info:", guide);
//     }
//   }, [guides, guideId]);

//   return guideInfo ? (
//     <div className="pt-36 pb-10 px-6 lg:px-10">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left: Guide Info */}
//         <div className="flex-1 flex flex-col gap-8">
//           <div>
//             <img
//               src={guideInfo.image}
//               alt="Guide"
//               className="rounded-lg w-full h-80 object-cover"
//             />
//           </div>

//           <div className="border border-gray-400 rounded-lg p-8 py-7 bg-white">
//             <h2 className="text-2xl font-medium flex items-center gap-2 text-gray-900">
//               {guideInfo.name}
//               <img src={assets.verified_icon} alt="Verified" className="w-5" />
//             </h2>

//             <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
//               <p>{guideInfo.degree} - {guideInfo.speciality}</p>
//               <button className="py-0.5 px-2 border text-xs rounded-full">
//                 {guideInfo.experience}
//               </button>
//             </div>

//             <div>
//               <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
//                 About <img src={assets.info_icon} alt="" />
//               </p>
//               <p className="text-sm text-gray-500 mt-1">{guideInfo.about}</p>
//             </div>

//             <p className="text-gray-500 font-medium mt-4">
//               Guide fee per day:{' '}
//               <span className="text-gray-600">
//                 {currencySymbol}{guideInfo.fees}
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* Right: Booking Form */}
//         <div className="w-full lg:w-[400px] space-y-4 border border-gray-300 rounded-lg p-6 bg-white shadow-md self-start">
//           <h3 className="text-xl font-bold text-gray-800">Book This Guide</h3>
//           <input type="date" className="w-full border p-2 rounded" />
//           <input type="time" className="w-full border p-2 rounded" />
//           <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
//           <input type="tel" placeholder="Contact Number" className="w-full border p-2 rounded" />
//           <input type="text" placeholder="Pickup Location" className="w-full border p-2 rounded" />
//           <textarea
//             placeholder="Special Instructions"
//             className="w-full border p-2 rounded resize-none"
//           ></textarea>
//           <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
//             Submit Booking
//           </button>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <div className="p-6 text-center text-gray-600">Loading guide details...</div>
//   );
// };

// export default Booking;






// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { assets } from '../assets/assets';
// import RelatedGuide from '../components/RelatedGuide';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Booking = () => {
//   const { guideId } = useParams();
//   const { guides, currencySymbol, backendUrl,token,getGuidesData} = useContext(AppContext);

//   const navigate = useNavigate()

//   const [guideInfo, setGuideInfo] = useState(null);

//   useEffect(() => {
//     if (guides && guideId) {
//       const guide = guides.find(g => g._id.toString() === guideId);
//       setGuideInfo(guide);
//     }
//   }, [guides, guideId]);

//   const bookGuide = async(req,res)=>{
//   if (!token) {
//     toast.warn("please login first")
//     return  navigate('/login')
//   }
//   try {

//     const date = guideSlot[slotIndex][0].datetime
    
//     let day = date.getDate()
//     let month = date.getMonth()+1
//     let year = date.getFullyear()

//     const slotDate = day+'_'+month+"_"+year
    
//     const {data} = await axios.post(backendUrl + '/api/user/bookguide',{guideId,slotDate,sloTime},{headers:{token}})
//     if (data.success) {
//       toast.success(data.message)
//       getGuidesData()
//       navigate('/my-booking')
      
//     }else{
//       toast.error(data.message)
//     }

//   } catch (error) {
//     console.log(error)
//     toast.error(error.message)
//   }
// }

//   return guideInfo && (
//     <div className="pt-36 pb-10 px-6 lg:px-10">
//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="flex-1 flex flex-col gap-6">
//           <div className="w-full lg:w-[500px] h-80 overflow-hidden rounded-lg">
//             <img src={guideInfo.image} alt="Guide" className="w-full h-full object-cover" />
//           </div>

//           {/* Guide Details */}
//           <div className="border border-gray-300 rounded-lg p-8 bg-white">
//             <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900">
//               {guideInfo.name} <img src={assets.verified_icon} alt="Verified" className="w-5" />
//             </h2>

//             <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
//               <p>{guideInfo.degree} - {guideInfo.speciality}</p>
//               <button className="py-0.5 px-2 border text-xs rounded-full">{guideInfo.experience} </button>
//             </div>

//             <div className="mt-4">
//               <p className="flex items-center gap-1 text-sm font-medium text-gray-900"> About <img src={assets.info_icon} alt="" /></p>
//               <p className="text-sm text-gray-500 mt-1">{guideInfo.about}</p>
//             </div>

//             <p className="text-gray-700 font-medium mt-4"> Guide fee per day:{' '} <span className="text-gray-900 font-semibold"> {currencySymbol}{guideInfo.fees}</span> </p>
//           </div>
//         </div>

//         {/* Right: Booking Form */}
//         <div className="w-full lg:w-[400px] space-y-6 border border-gray-300 rounded-lg p-6 bg-white shadow-md self-start">
//           <h3 className="text-xl font-bold text-gray-800">Book This Guide</h3>
//           <input type="date" className="w-full border p-2 rounded" />
//           {/* <input type="time" className="w-full border p-2 rounded" /> */}
//           <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
//           <input type="text" placeholder='Email' className="w-full border p-2 rounded" />
//           <input type="tel" placeholder="Contact Number" className="w-full border p-2 rounded" />
//           <input type="text" placeholder="Pickup Location" className="w-full border p-2 rounded" />
//           <textarea placeholder="Special Instructions" className="w-full border p-2 rounded resize-none" />
//           <button onClick={bookGuide} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
//             Submit Booking
//           </button>
//         </div>
//       </div>

//       {/* Related Guides using tag */}

      
//       {guideInfo && guideInfo.tag && (
//         <RelatedGuide guideId={guideId} tag={guideInfo.tag} />
//       )}
//     </div>
//   ) : (
//     <div className="p-6 text-center text-gray-600">Loading guide details...</div>
//   );
// };




// export default Booking;




import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedGuide from '../components/RelatedGuide';
import { toast } from 'react-toastify';
import axios from 'axios';

const Booking = () => {
  const { guideId } = useParams();
  const { guides, currencySymbol, backendUrl, token, getGuidesData } = useContext(AppContext);

  const navigate = useNavigate();

  const [guideInfo, setGuideInfo] = useState(null);
  const [date, setDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [instructions, setInstructions] = useState('');

  useEffect(() => {
    if (guides && guideId) {
      const guide = guides.find(g => g._id.toString() === guideId);
      setGuideInfo(guide);
    }
  }, [guides, guideId]);

  const bookGuide = async () => {
    if (!token) {
      toast.warn("Please login first");
      return navigate('/login');
    }

    if (!date || !fullName || !email || !contactNumber || !pickupLocation) {
      toast.warn("Please fill in all required fields");
      return;
    }

    try {
      const selectedDate = new Date(date);
      const day = selectedDate.getDate();
      const month = selectedDate.getMonth() + 1;
      const year = selectedDate.getFullYear();
      const slotDate = `${day}_${month}_${year}`;
      const slotTime = "10:00 AM"; // Placeholder (can be replaced with real time input)

      const response = await axios.post(
        `${backendUrl}/api/user/bookguide`,
        {
          guideId,
          slotDate,
          slotTime,
          fullName,
          email,
          contactNumber,
          pickupLocation,
          instructions
        },
        {
          headers: { token }
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        getGuidesData();
        navigate('/my-booking');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  };
  
 

useEffect(() => {
  if (guides && guideId) {
    const guide = guides.find(g => g._id.toString() === guideId);
    if (guide) {
      setGuideInfo(guide);
    } else {
      console.warn("Guide not found for ID:", guideId);
    }
  }
}, [guides, guideId]);



  return guideInfo ? (
    <div className="pt-36 pb-10 px-6 lg:px-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full lg:w-[500px] h-80 overflow-hidden rounded-lg">
            <img src={guideInfo.image} alt="Guide" className="w-full h-full object-cover" />
          </div>

          <div className="border border-gray-300 rounded-lg p-8 bg-white">
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-900">
              {guideInfo.name} <img src={assets.verified_icon} alt="Verified" className="w-5" />
            </h2>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>{guideInfo.degree} - {guideInfo.speciality}</p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{guideInfo.experience}</button>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 mt-1">{guideInfo.about}</p>
            </div>

            <p className="text-gray-700 font-medium mt-4">
              Guide fee per day:{' '}
              <span className="text-gray-900 font-semibold">
                {currencySymbol}{guideInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full lg:w-[400px] space-y-6 border border-gray-300 rounded-lg p-6 bg-white shadow-md self-start">
          <h3 className="text-xl font-bold text-gray-800">Book This Guide</h3>
          <input type="date" className="w-full border p-2 rounded" value={date} onChange={e => setDate(e.target.value)} />
          <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" value={fullName} onChange={e => setFullName(e.target.value)} />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="tel" placeholder="Contact Number" className="w-full border p-2 rounded" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
          <input type="text" placeholder="Pickup Location" className="w-full border p-2 rounded" value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />
          <textarea placeholder="Special Instructions" className="w-full border p-2 rounded resize-none" value={instructions} onChange={e => setInstructions(e.target.value)} />
          <button onClick={bookGuide} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
            Submit Booking
          </button>
        </div>
      </div>

      {guideInfo.tag && (
        <RelatedGuide guideId={guideId} tag={guideInfo.tag} />
      )}
    </div>
  ) : (
    <div className="p-6 text-center text-gray-600">Loading guide details...</div>
  );
};

export default Booking;
