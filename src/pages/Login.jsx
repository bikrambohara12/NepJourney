// import React from 'react'
// import React, {useState}  from 'react' 

// const Login = () => {

// const [state,setState] = usestate('sign up')
// const[email,setEmail] = useState('')
// const[password,setPassword] = useState('')
// const[name,setName] = useState('')

// constonSubmitHandler = async(event) =>{
// event.preventDefault()
// }
//   return (
//     <form className='min-h-[80vh] fles items-center'>
//       <div className='flex flex-col gap-3 m-auto items-startp-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
//         <p className='text-2xl font-semibold '>{state === 'Sign up '? "Create account" :"Login"}</p>
//         <p>please {state === 'Register '? "Register" :"log in"} sign up to book Guide and destination</p>

//         {
//             state === "Register" &&<div className='w-full'>
//             <p>Full Name</p>
//             <input className='border border-zinc-300 rounded w-full p-2  mt-1' type="text" onChange={(e)=>setName(e.target.name)}value ={name} required/>
//         </div>
//         }


//         <div className='w-full'>
//             <p>Email</p>
//             <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="Email" onChange={(e)=>setEmail(e.target.name)}value ={email}required/>
//         </div>

//         <div className='w-full'>
//             <p>Password</p>
//             <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="Password" onChange={(e)=>setPassword(e.target.name)}value ={password}required/>
//         </div>
//         <button className='bg-primary text-white w-full py-2 rounded-md text-base '>{state === 'Sign up '? "Login" :"Login"}</button>
//         {
//          stse === ' Register' ?
//          <p>Don't have an account? <span onClick={()=>setState('Register')} className='text-primary underline crusor-pointer'>Register</span> </p>
//          : <p>Already have an account?<span onClick={()=>setState('Login')} className='text-primary underline crusor-pointer'>Login</span> </p>
//         }
//       </div>
//     </form>
//   )
// }

// export default Login


// import React from 'react';

// export default function Login() {
//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
//       <h2 className="text-xl font-bold mb-4">Login</h2>
//       <input className="w-full border p-2 rounded mb-4" placeholder="Email" />
//       <input className="w-full border p-2 rounded mb-4" type="password" placeholder="Password" />
//       <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Login</button>
//     </div>
//   );
// }


// import React, { useState } from "react";

// const Login = ({ onSwitchToRegister }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Add your login logic here (e.g., API call)
//     console.log("Logging in user:", formData);
//     alert(`Logged in as ${formData.email}`);
//     // Reset form (optional)
//     setFormData({ email: "", password: "" });
//   };

//   return (
//     <div className="modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div className="modal-content bg-white p-6 rounded-lg relative max-w-md w-full">
//         <h2 className="text-xl font-semibold mb-4">Login to Your Account</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="form-group flex flex-col">
//             <label htmlFor="email" className="mb-1 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="border border-gray-300 rounded px-3 py-2"
//             />
//           </div>

//           <div className="form-group flex flex-col">
//             <label htmlFor="password" className="mb-1 font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//               className="border border-gray-300 rounded px-3 py-2"
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn-submit w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
//           >
//             Login
//           </button>
//         </form>

//         <div className="form-footer mt-4 text-center text-sm">
//           Don't have an account?{" "}
//           <button
//             className="text-yellow-500 underline"
//             onClick={onSwitchToRegister}
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";

const Login = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login successful!");
    setEmail("");
    setPassword("");
    onClose(); // Close modal after login
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Login to Your Account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="loginEmail" className="block mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              id="loginEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="loginPassword" className="block mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToRegister}
            className="text-yellow-500 underline"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
