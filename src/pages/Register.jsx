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



import React, { useState } from "react";

const Register = ({ onClose, onSwitchToLogin }) => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    location: "",
    expertise: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      location: "",
      expertise: "",
    });
    setRole("");
    onClose(); // Close modal after register
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
        <h2 className="text-xl font-semibold mb-4">Create Your Account</h2>

        {/* Role Selection */}
        <div className="flex justify-around mb-6">
          {[
            { type: "traveler", label: "Traveler", desc: "I want to explore Nepal", icon: "fas fa-user" },
            { type: "guide", label: "Guide", desc: "I want to offer services", icon: "fas fa-user-tie" },
          ].map(({ type, label, desc, icon }) => (
            <div
              key={type}
              onClick={() => setRole(type)}
              className={`cursor-pointer text-center border rounded p-3 w-[45%] ${
                role === type ? "border-yellow-500 bg-yellow-100" : "border-gray-300"
              }`}
            >
              <i className={`${icon} text-2xl mb-1`}></i>
              <h3 className="font-semibold">{label}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="role" value={role} />

          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded"
            />
          </div>

          {role === "guide" && (
            <>
              <div>
                <label className="block mb-1 font-medium">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Expertise</label>
                <input
                  type="text"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition"
            disabled={!role}
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-yellow-500 underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
