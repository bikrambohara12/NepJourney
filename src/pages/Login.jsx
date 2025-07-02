// import React, { useState } from "react";

// const Login = ({ onClose, onSwitchToRegister }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     alert("Login successful!");
//     setEmail("");
//     setPassword("");
//     onClose(); // Close modal after login
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-2xl font-bold"
//         >
//           &times;
//         </button>
//         <h2 className="text-xl font-semibold mb-4">Login to Your Account</h2>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <label htmlFor="loginEmail" className="block mb-1 font-medium">
//               Email
//             </label>
//             <input
//               type="email"
//               id="loginEmail"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full border border-gray-300 px-3 py-2 rounded"
//             />
//           </div>
//           <div>
//             <label htmlFor="loginPassword" className="block mb-1 font-medium">
//               Password
//             </label>
//             <input
//               type="password"
//               id="loginPassword"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full border border-gray-300 px-3 py-2 rounded"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
//           >
//             Login
//           </button>
//         </form>
//         <div className="mt-4 text-center text-sm">
//           Don't have an account?{" "}
//           <button
//             onClick={onSwitchToRegister}
//             className="text-yellow-500 underline"
//           >
//             Register
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
"use client"

import { useState } from "react"
import { X, Mail, Lock } from "lucide-react"

const Login = ({ onClose, onSwitchToRegister }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      alert("Login successful!")
      setEmail("")
      setPassword("")
      setIsLoading(false)
      onClose()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md relative animate-in fade-in duration-200">
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
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="loginEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="text-sm text-yellow-600 hover:text-yellow-700 transition-colors">
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-500 text-white py-3 px-4 rounded-lg hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Switch to Register */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToRegister}
              className="text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
            >
              Create account
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
