// import React from 'react'
// import { assets } from '../assets/assets'

// const login = () => {
    
//     const [state,setState] = useState('Admin')


//   return (
//     <form>
//       <div>
//         <p><span>{state}</span>Login</p>
//       </div>
//     </form>
//   )
// }

// export default login


// import React, { useState } from 'react'

// const Login = () => {

//     const [state] = useState('Admin')

//     return (
//         <form className='min-h-[80vh] flex items-center'>
//             <div className='flex felx-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
//                 <p className='text-2xl font-medium m-auto '><span>{state}</span> Login</p>
//                 <div>
//                     <p>Email</p>
//                     <input type="email" required/>
//                 </div>

//                 <div>
//                     <p>Password</p>
//                     <input type="password" required/>
//                 </div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }

// export default Login


// import React, { useState,useContext } from 'react'
// import { AdminContext } from '../context/AdminContext'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Login = () => {
//     const [state,setState] = useState('Admin')
//     const [email,setEmail] =  useState('')
//     const [password,setPassword] =  useState('')


//     const{setAToken,backendUrl} = useContext(AdminContext)
//     // const onSubmitHandler = async(event)=>{

//     //     event.preventDefault()

//     //     try {
//     //         if (state === 'Admin') {
//     //             const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password})
//     //             if (data.success) {
//     //                 localStorage.setItem('aToken',data.token)
//     //                 setAToken(data.token)
//     //             } else{
//     //                 toast.error(data.message)
//     //             }
//     //         }else{
     
                 

//     //         }
//     //     } catch (error) {
            
//     //     }

//     // }

// const onSubmitHandler = async(event)=>{
//     event.preventDefault();
//     try {
//         if (state === 'Admin') {
//             const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password });
//             if (data.success) {
//                 localStorage.setItem('aToken', data.token);
//                 setAToken(data.token);
//             } else {
//                 toast.error(data.message);
//             }
//         } else {
//             toast.error("Guide login not implemented yet");
//         }
//     } catch (error) {
//         console.error(error);
//         toast.error("Something went wrong!");
//     }
// }


//     return (
//         <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center bg-gray-100'>
//             <div className='flex flex-col gap-4 p-8 w-[340px] sm:w-96 bg-white border rounded-2xl shadow-xl text-[#5E5E5E]'>
//                 <p className='text-2xl font-semibold text-center text-black'>
//                     <span className='text-blue-600'>{state}</span> Login
//                 </p>

//                 <div className='flex flex-col gap-1'>
//                     <label className='font-medium text-gray-700'>Email</label>
//                     <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"  required   placeholder="Enter your email"  className='p-3 border rounded-lg outline-blue-500 focus:ring-2 ring-blue-200' />
//                 </div>

//                 <div className='flex flex-col gap-1'>
//                     <label className='font-medium text-gray-700'>Password</label>
//                     <input onChange={(e)=>setPassword(e.target.value)} value={password}
//                         type="password" 
//                         required 
//                         placeholder="Enter your password" 
//                         className='p-3 border rounded-lg outline-blue-500 focus:ring-2 ring-blue-200'
//                     />
//                 </div>

//                 <button type="submit" className='mt-3 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold'> Login </button>
//                 {
//                    state === 'Admin' ? 
//                     <p>Guide Login ?<span className='text-blue-600 underline cursor-pointer' onClick={()=> setState('Guide')}>Click here</span></p>
//                    : <p>Admin Login ?<span className='text-blue-600 underline cursor-pointer' onClick={()=> setState('Admin')}>Click here</span></p>
//                 }
//             </div>
//         </form>
//     )
// }

// export default Login



import React, { useState, useContext } from 'react';
// import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { GuideContext } from '../context/GuideContext';

const Login = () => {
    const [state, setState] = useState('Admin');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { setAToken, backendUrl } = useContext(AdminContext);
    const {setDToken} =useContext(GuideContext)


    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            if (state === 'Admin') {
                const { data } = await axios.post(backendUrl +'/api/admin/login', { email, password });
                if (data.success) {
                    localStorage.setItem('aToken', data.token);
                    setAToken(data.token);
                    toast.success("Login Successful");
                } else {
                    toast.error(data.message);
                }
            } else {
                // toast.info("Guide login not implemented");
                const {data} = await axios.post(backendUrl +'/api/guide/login',{email,password})
                 if (data.success) {
                    localStorage.setItem('dToken', data.token);
                    setDToken(data.token);
                    toast.success("Login Successful");
                    console.log(data.token);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center justify-center bg-gray-100'>
            <div className='flex flex-col gap-4 p-8 w-[340px] sm:w-96 bg-white border rounded-2xl shadow-xl text-[#5E5E5E]'>
                <p className='text-2xl font-semibold text-center text-black'>
                    <span className='text-blue-600'>{state}</span> Login
                </p>
                <div className='flex flex-col gap-1'>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="Email" className='p-3 border rounded-lg' />
                </div>
                <div className='flex flex-col gap-1'>
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} required type="password" placeholder="Password" className='p-3 border rounded-lg' />
                </div>
                <button type="submit" className='p-3 bg-blue-600 text-white rounded-lg'>Login</button>
                {state === 'Admin' ? (
                    <p>Guide Login? <span onClick={() => setState('Guide')} className='text-blue-600 cursor-pointer'>Click here</span></p>
                ) : (
                    <p>Admin Login? <span onClick={() => setState('Admin')} className='text-blue-600 cursor-pointer'>Click here</span></p>
                )}
            </div>
        </form>
    );
};

export default Login;
