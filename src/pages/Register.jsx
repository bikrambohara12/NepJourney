// import React, { useState } from 'react';

// export default function Register() {
//   const [role, setRole] = useState('traveler');

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
//       <h2 className="text-xl font-bold mb-4">Register as {role}</h2>
//       <div className="mb-4">
//         <label className="block font-medium mb-1">Select Role</label>
//         <select
//           className="w-full border p-2 rounded"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}>
//           <option value="traveler">Traveler</option>
//           <option value="guide">Guide</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>
//       <input className="w-full border p-2 rounded mb-4" placeholder="Full Name" />
//       <input className="w-full border p-2 rounded mb-4" placeholder="Email" />
//       <input className="w-full border p-2 rounded mb-4" type="password" placeholder="Password" />
//       {role === 'guide' && (
//         <div>
//           <input className="w-full border p-2 rounded mb-4" placeholder="Region" />
//           <input className="w-full border p-2 rounded mb-4" placeholder="Expertise" />
//           <input className="w-full border p-2 rounded mb-4" type="file" />
//         </div>
//       )}
//       <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Register</button>
//     </div>
//   );
// }

// import React, { useState } from "react";

// const Register = ({ onSwitchToLogin }) => {
//   const [role, setRole] = useState(""); // traveler, guide, admin
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     location: "",
//     expertise: "",
//     adminCode: "",
//   });

//   const handleRoleSelect = (selectedRole) => {
//     setRole(selectedRole);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: Add your registration logic here (e.g., API call)
//     console.log("Registering user:", { role, ...formData });
//     alert(`Registered as ${role}`);
//     // Reset form (optional)
//     setRole("");
//     setFormData({
//       fullName: "",
//       email: "",
//       password: "",
//       location: "",
//       expertise: "",
//       adminCode: "",
//     });
//   };

//   return (
//     <div className="modal fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
//       <div className="modal-content bg-white p-6 rounded-lg relative max-w-md w-full">
//         <h2 className="text-xl font-semibold mb-4">Create Your Account</h2>

//         <div className="role-selection flex justify-around mb-6">
//           {[
//             {
//               roleName: "traveler",
//               iconClass: "fas fa-user",
//               label: "Traveler",
//               desc: "I want to explore Nepal",
//             },
//             {
//               roleName: "guide",
//               iconClass: "fas fa-user-tie",
//               label: "Guide",
//               desc: "I want to offer services",
//             },
//             {
//               roleName: "admin",
//               iconClass: "fas fa-user-shield",
//               label: "Admin",
//               desc: "Manage the platform",
//             },
//           ].map(({ roleName, iconClass, label, desc }) => (
//             <div
//               key={roleName}
//               onClick={() => handleRoleSelect(roleName)}
//               className={`role-option cursor-pointer flex flex-col items-center border rounded p-4 ${
//                 role === roleName
//                   ? "border-yellow-500 bg-yellow-100"
//                   : "border-gray-300"
//               }`}
//             >
//               <i className={`${iconClass} text-3xl mb-2`} aria-hidden="true"></i>
//               <h3 className="font-semibold">{label}</h3>
//               <p className="text-sm text-gray-600">{desc}</p>
//             </div>
//           ))}
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="hidden" name="role" value={role} />

//           <div className="form-group flex flex-col">
//             <label htmlFor="fullName" className="mb-1 font-medium">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               required
//               value={formData.fullName}
//               onChange={handleChange}
//               className="border border-gray-300 rounded px-3 py-2"
//             />
//           </div>

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

//           {role === "guide" && (
//             <>
//               <div className="form-group flex flex-col">
//                 <label htmlFor="location" className="mb-1 font-medium">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded px-3 py-2"
//                 />
//               </div>

//               <div className="form-group flex flex-col">
//                 <label htmlFor="expertise" className="mb-1 font-medium">
//                   Expertise
//                 </label>
//                 <input
//                   type="text"
//                   id="expertise"
//                   name="expertise"
//                   value={formData.expertise}
//                   onChange={handleChange}
//                   className="border border-gray-300 rounded px-3 py-2"
//                 />
//               </div>
//             </>
//           )}

//           {role === "admin" && (
//             <div className="form-group flex flex-col">
//               <label htmlFor="adminCode" className="mb-1 font-medium">
//                 Admin Code
//               </label>
//               <input
//                 type="password"
//                 id="adminCode"
//                 name="adminCode"
//                 required
//                 value={formData.adminCode}
//                 onChange={handleChange}
//                 placeholder="Enter admin secret code"
//                 className="border border-gray-300 rounded px-3 py-2"
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="btn-submit w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
//             disabled={!role}
//           >
//             Register
//           </button>
//         </form>

//         <div className="form-footer mt-4 text-center text-sm">
//           Already have an account?{" "}
//           <button
//             className="text-yellow-500 underline"
//             onClick={onSwitchToLogin}
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

"use client"

import { useState } from "react"
import { X, User, UserCheck, Mail, Lock, MapPin, Award } from "lucide-react"

const Register = ({ onClose, onSwitchToLogin }) => {
  const [role, setRole] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
    expertise: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      alert("Registration successful!")
      setFormData({
        fullName: "",
        email: "",
        password: "",
        location: "",
        expertise: "",
      })
      setRole("")
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  const roleOptions = [
    {
      type: "traveler",
      label: "Traveler",
      desc: "I want to explore Nepal",
      icon: User,
    },
    {
      type: "guide",
      label: "Guide",
      desc: "I want to offer services",
      icon: UserCheck,
    },
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md relative animate-in fade-in duration-200 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClose()
          }}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100 z-50"
          aria-label="Close modal"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600">Join our community today</p>
        </div>

        {/* Role Selection */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Choose your role</h3>
          <div className="grid grid-cols-2 gap-3">
            {roleOptions.map(({ type, label, desc, icon: Icon }) => (
              <div
                key={type}
                onClick={() => setRole(type)}
                className={`cursor-pointer text-center border-2 rounded-lg p-4 transition-all hover:shadow-md ${
                  role === type ? "border-yellow-500 bg-yellow-50 shadow-md" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                <h4 className="font-semibold text-gray-900 mb-1">{label}</h4>
                <p className="text-xs text-gray-600 leading-tight">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                placeholder="Create a password"
              />
            </div>
          </div>

          {/* Guide-specific fields */}
          {role === "guide" && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="Your location"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expertise</label>
                <div className="relative">
                  <Award className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="Your expertise"
                  />
                </div>
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!role || isLoading}
            className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        {/* Switch to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
