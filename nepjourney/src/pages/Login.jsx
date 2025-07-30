import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { backendUrl,setToken,token} = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Sign up') {

        const {data} = await axios.post(backendUrl + '/api/user/register',{name,password,email})
        if (data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
          
        }else{
          toast.error(data.message)
        }
        
      } else{
        
        const {data} = await axios.post(backendUrl + '/api/user/login',{password,email})
        if (data.success) {
          localStorage.setItem('token',data.token)
          setToken(data.token)
          
        }else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
   
  };

  useEffect(()=>{
 if (token) {
  navigate('/')
 }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center pt-30 pb-16 bg-gradient-to-b from-blue-400 to-blue-200' >
      <div className='flex flex-col gap-5 m-auto items-start p-8 min-w-[340px] sm:min-w-110 border rounded-xl text-zinc-600 text-sm shadow-lg bg-gradient-to-b from-blue-100 to-orange-100'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? "Create Account" : "Login"}</p>
        <p>Please {state === 'Sign up' ? "sign up" : "log in"} to book a guide</p>

        {state === "Sign up" && (
          <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name}  required/>
          </div>
        )}

        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email"  onChange={(e) => setEmail(e.target.value)} value={email}  required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} name={password} required />
        </div>

        <button type='submit' className='bg-blue-600 text-white w-full py-2 rounded-md text-base hover:bg-blue-700 transition-all duration-200'>
          {state === 'Sign up' ? "Create Account" : "Login"}
        </button>

        <hr className="w-full border-t border-gray-200 my-2" />

        <p className='text-center w-full text-sm text-gray-500'>Or continue with</p>
        <div className='flex justify-center gap-4 w-full'>
          <button type="button" className='bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-400 hover:scale-105 transition-transform duration-200'>
            <img src="https://img.icons8.com/color/48/google-logo.png" alt="Google" className='w-6 h-6' />
          </button>
          <button type="button" className='bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-400 hover:scale-105 transition-transform duration-200'>
            <img src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook" className='w-6 h-6' />
          </button>
          <button type="button" className='bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-400 hover:scale-105 transition-transform duration-200'>
            <img src="https://img.icons8.com/color/48/twitter--v1.png" alt="Twitter" className='w-6 h-6' />
          </button>
        </div>

        {state === 'Sign up' ? (
          <p className='text-sm mt-3'>
            Already have an account?{' '}
            <span onClick={() => setState('Login')} className='text-blue-500 underline cursor-pointer hover:text-blue-700'>Login here</span>
          </p>
        ) : (
          <p className='text-sm mt-3'>
            Create a new account?{' '}
            <span onClick={() => setState('Sign up')} className='text-blue-500 underline cursor-pointer hover:text-blue-700'>Click here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;



// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const { backendUrl, setToken, token } = useContext(AppContext);
//   const navigate = useNavigate();
//   const [state, setState] = React.useState('Sign up');

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();
//     const fd = new FormData(e.currentTarget);
//     const name = fd.get('name');          // only present in Sign up
//     const email = fd.get('email');
//     const password = fd.get('password');

//     try {
//       const url =
//         state === 'Sign up'
//           ? `${backendUrl}/api/user/register`
//           : `${backendUrl}/api/user/login`;

//       const body =
//         state === 'Sign up'
//           ? { name, email, password }
//           : { email, password };

//       const { data } = await axios.post(url, body);

//       if (data.success) {
//         // Prefer httpOnly cookies from the server (best), but if you must:
//         localStorage.setItem('token', data.token);
//         setToken(data.token);
//         e.currentTarget.reset(); // clear fields ASAP
//       } else {
//         toast.error(data.message);
//       }
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   React.useEffect(() => {
//     if (token) navigate('/');
//   }, [token, navigate]);

//   return (
//     <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center pt-30 pb-16 bg-gradient-to-b from-blue-400 to-blue-200">
//       <div className="flex flex-col gap-5 m-auto items-start p-8 min-w-[340px] sm:min-w-110 border rounded-xl text-zinc-600 text-sm shadow-lg bg-gradient-to-b from-blue-100 to-orange-100">
//         <p className="text-2xl font-semibold">{state === 'Sign up' ? 'Create Account' : 'Login'}</p>
//         <p>Please {state === 'Sign up' ? 'sign up' : 'log in'} to book a guide</p>

//         {state === 'Sign up' && (
//           <div className="w-full">
//             <label className="block">Full Name</label>
//             <input
//               className="border border-zinc-300 rounded w-full p-2 mt-1"
//               type="text"
//               name="name"
//               autoComplete="name"
//               required
//             />
//           </div>
//         )}

//         <div className="w-full">
//           <label className="block">Email</label>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="email"
//             name="email"
//             autoComplete="email"
//             required
//           />
//         </div>

//         <div className="w-full">
//           <label className="block">Password</label>
//           <input
//             className="border border-zinc-300 rounded w-full p-2 mt-1"
//             type="password"
//             name="password"
//             autoComplete={state === 'Sign up' ? 'new-password' : 'current-password'}
//             inputMode="text"
//             required
//           />
//         </div>

//         <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded-md text-base hover:bg-blue-700 transition-all duration-200">
//           {state === 'Sign up' ? 'Create Account' : 'Login'}
//         </button>

//         <hr className="w-full border-t border-gray-200 my-2" />

//         <p className="text-center w-full text-sm text-gray-500">Or continue with</p>
//         <div className="flex justify-center gap-4 w-full">
//           {/* social buttons */}
//         </div>

//         {state === 'Sign up' ? (
//           <p className="text-sm mt-3">
//             Already have an account?{' '}
//             <span onClick={() => setState('Login')} className="text-blue-500 underline cursor-pointer hover:text-blue-700">
//               Login here
//             </span>
//           </p>
//         ) : (
//           <p className="text-sm mt-3">
//             Create a new account?{' '}
//             <span onClick={() => setState('Sign up')} className="text-blue-500 underline cursor-pointer hover:text-blue-700">
//               Click here
//             </span>
//           </p>
//         )}
//       </div>
//     </form>
//   );
// };

// export default Login;
