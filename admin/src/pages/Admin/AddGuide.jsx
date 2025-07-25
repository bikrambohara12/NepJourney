// import React from 'react'
// import { assets } from '../../assets/assets'

// const AddGuide = () => {
//   return (
//     <form>
       
//        <p>Add Guide</p>

//        <div>
//         <div>
//             <label htmlFor="guide-image">
//                 <img src={assets.upload_area} alt="" />
//             </label>

//             <input type="file" id='guide-image'  hidden/>
//             <p>Upload Guide Image</p>
//         </div>
        
//         <div>
//             <div>
//                 <div>
//                     <p>Guide Name</p>
//                     <input type="text" placeholder='Name' required />
//                 </div>

//                  <div>
//                     <p>Guide Email</p>
//                     <input type="email" placeholder='email' required />
//                 </div>

//                 <div>
//                     <p>Guide Conact</p>
//                     <input type="number" placeholder='contact' required />
//                 </div>

//                  <div>
//                     <p>Guide password</p>
//                     <input type="password" placeholder='password' required />
//                 </div>

//                <div>
//                     <p>Guide Experience</p>
//                     <select name="" id="">
//                     <option value="1 year">1 year</option>
//                     <option value="2 year">2 year</option>
//                     <option value="3 year">3 year</option>
//                     <option value="4 year">4 year</option>
//                     <option value="5 year">5 year</option>
//                     <option value="6 year">6 year</option>
//                     <option value="7 year">7 year</option>
//                     <option value="8 year">8 year</option>
//                     <option value="9 year">9 year</option>
//                     <option value="10 year">10 year</option>
//                     </select>
//                 </div>

//                  <div>
//                     <p>fees</p>
//                     <input type="Number" placeholder='fee' required />
//                 </div>
//                 <div>
//                     <div>
//                       <p>Speciality</p>  
//                       <select name="" id="">
//                                               <option value="cultureguide">cultureguide</option>
//                       <option value="localguide">localguide</option>
//                       <option value="familyguide"></option>
//                       <option value="natureguide"></option>
//                       <option value="luxoryguide"></option>
//                       <option value="advantureguide"></option>
//                       </select>
//                     </div>
//                    <div>
//                     <p>Education</p>
//                     <input type="text" placeholder='Education' required />
//                 </div>

//                  <div>
//                     <p>Address</p>
//                     <input type="text" placeholder='Address 1' required />
//                     <input type="text" placeholder='Address 2' required />
//                 </div>

//                  <div>
//                     <p>Location</p>
//                     <input type="text" placeholder='Location' required />
//                 </div>

//                 </div>
//             </div>

//               <div>
//                     <p>About Guide</p>
//                     <textarea  placeholder='write about guide' rows={5} required></textarea>
//                 </div>

//                 <button>Add Guide</button>

//         </div>

//        </div>

//     </form>
//   )
// }

// export default AddGuide


import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';

// type is baki

const AddGuide = () => {

    const [guideimage,setGuideImage] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [contact,setContact] = useState('')
    const [password,setPassword] = useState('')
    const [experience,setExperience] = useState('1 year')
    const [fee,setFee] = useState('')
    const [about,setAbout] = useState('')
    const [speciality,setSpeciality] = useState('advantureguide')
    const [education,setEducation] = useState('')
    const [address1,setAddress1] = useState('')
    const [address2,setAddress2] = useState('')
    const [locatio,setLocation] = useState('')
    const [language,setLanguage] = useState('')

    const {backendUrl, aToken} = useContext(AdminContext)


    const onSubmitHandler = async(e)=>{
        e.preventDefault()

        try {

            if (guideimage) {
                return toast.error('image not selected')    
            }

            const formData = new FormData()
            formData.append('image',guideimage)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('contact',contact)
            formData.append('experience',experience)
            formData.append('fee',Number(fee))
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('education',education)
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

            // formData.append('address',JSON.stringify({line1:address1,line2:address2}))
            formData.append('location',location)

            // cosol log formadata
            // formdaata.forEach((value,key)={
            //     console.log(`${key} : ${value}`)
            // })

           const {data} = await axios.post(backendUrl + '/api/admin/addguide',formData,{headers:{aToken}})

           if (data.success) {
            toast.success(data.message)
            setGuideImage(false)
            setName('')
            setEmail('')
            setPassword('')
            setAddress1('')                                              
            setAddress2('')
            setEducation('')
            setAbout('')
            setFee('')
            setLocation('')
            setLanguage('')
            setContact('')
           

           }else{
            toast.error(data.message)
           }


            
        } catch (error) {
            toast.error(error.message)
            console.log(error)
        }
    }


  return (
    <div className='pt-8 px-50 pb-8'>
    <form onSubmit={onSubmitHandler} className="mx-auto p-6 bg-white shadow-lg rounded-xl space-y-6 pb-2 ">
      <h2 className="text-2xl font-bold text-gray-800">Add Guide</h2>

      {/* Upload Image */}
      <div className="flex flex-col items-center">
        <label htmlFor="guide-image" className="cursor-pointer">
          <img src={guideimage ? URL.createObjectURL(guideimage) : assets.upload_area} alt="Upload" className="w-28 h-28 object-cover border-2 border-dashed border-gray-400 rounded-full" />
        </label>
        <input onChange={(e)=>setGuideImage(e.target.files[0])}  type="file" id="guide-image" hidden />
        <p className="text-sm mt-2 text-gray-500">Upload Guide Image</p>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Guide Name</label>
          <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder="Name" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Guide Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} value={email} type="email" placeholder="Email" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Guide Contact</label>
          <input onChange={(e)=> setContact(e.target.value)} value={contact} type="number" placeholder="Contact" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input onChange={(e)=> setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Experience</label>
          <select onChange={(e)=> setExperience(e.target.value)} value={experience} className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            {[...Array(10)].map((_, i) => (
              <option key={i} value={`${i + 1} year`}>{`${i + 1} year`}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Fees</label>
          <input onChange={(e)=> setFee(e.target.value)} value={fee} type="number" placeholder="Fee" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Speciality</label>
          <select onChange={(e)=> setSpeciality(e.target.value)} value={speciality} className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="cultureguide">Culture Guide</option>
            <option value="localguide">Local Guide</option>
            <option value="familyguide">Family Guide</option>
            <option value="natureguide">Nature Guide</option>
            <option value="luxoryguide">Luxury Guide</option>
            <option value="advantureguide">Adventure Guide</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Education</label>
          <input onChange={(e)=> setEducation(e.target.value)} value={education} type="text" placeholder="Education" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <div className="flex gap-2">
            <input onChange={(e)=> setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" required className="w-1/2 border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input onChange={(e)=> setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" required className="w-1/2 border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">Location</label>
          <input onChange={(e)=> setLocation(e.target.value)} value={locatio} type="text" placeholder="Location" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
         <div>
          <label className="block text-gray-700 font-medium mb-1">Language</label>
          <input onChange={(e)=> setLanguage(e.target.value)} value={language} type="text" placeholder="Location" required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      {/* About Guide */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">About Guide</label>
        <textarea onChange={(e)=> setAbout(e.target.value)} value={about} placeholder="Write about guide" rows={5} required className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Add Guide
        </button>
      </div>
    </form>
    </div>
  );
};

export default AddGuide;
