
// import React from "react";
// import { AppContext } from "./AppContext";
// import { guides } from "../assets/assets";

// const AppContextProvider = ({ children }) => {

// const currencySymbol ="$"
//    const [token,setToken] = useState('')
//  const value = {
//     guides,
//     currencySymbol,
//     token,
//     setToken,
//     backendUrl
//   };

    
//   return (
//     <AppContext.Provider value={value}>
      
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;






// import React, { useState } from "react"; 
// import { AppContext } from "./AppContext";
// import { guides } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useEffect } from "react";
// import axios from "axios";


// const AppContextProvider = ({ children }) => {
//   const currencySymbol = "$";

//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false);

//   const [userData,setUserData] = useState(false)

  
//   // const loadUserProfileDate = async()=>{

//   //   try {

//   //     const{data}= await axios.get(backendUrl+ '/api/user/getprofile',{Headers:{token}})

//   //     if (data.success) {
//   //       setUserData(data.userData)
//   //     }else{
//   //       toast.error(data.message)
//   //     }
      
//   //   } catch (error) {
//   //     console.log(error)
//   //     toast.error(error.message)
//   //   }
//   // }



//   // const value = {
//   //   guides,
//   //   currencySymbol,
//   //   token,
//   //   setToken,
//   //   backendUrl,
//   //   userData,setUserData,
//   //   loadUserProfileDate
//   // };

//   const loadUserProfileData = async () => {
//   try {
//     const { data } = await axios.get(`${backendUrl}/api/user/getprofile`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     if (data.success) {
//       setUserData(data.userData);
//     } else {
//       toast.error(data.message);
//     }
//   } catch (error) {
//     console.error(error);
//     toast.error(error.message);
//   }
// };

// ...

// const value = {
//   guides,
//   currencySymbol,
//   token,
//   setToken,
//   backendUrl,
//   userData,
//   setUserData,
//   loadUserProfileData,
// };


//   useEffect(()=>{
//   if (token) {
//     loadUserProfileDate()
//   }else{
//     setUserData(false)
//   }
//   },[token])

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;



// import React, { useState, useEffect } from "react";
// import { AppContext } from "./AppContext";
// import { guides } from "../assets/assets";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AppContextProvider = ({ children }) => {
//   const currencySymbol = "$";
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [token, setToken] = useState(localStorage.getItem("token") || false);
//   const [userData, setUserData] = useState(false);

//   // ✅ Corrected function name and headers
//   const loadUserProfileData = async () => {
//     try {
//       const { data } = await axios.get(`${backendUrl}/api/user/getprofile`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (data.success) {
//         setUserData(data.userData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error(error.message);
//     }
//   };

//   // ✅ Fixed function name here
//   useEffect(() => {
//     if (token) {
//       loadUserProfileData();
//     } else {
//       setUserData(false);
//     }
//   }, [token]);

//   // ✅ Final context value
//   const value = {
//     guides, getGuidesData,
//     currencySymbol,
//     token,
//     setToken,
//     backendUrl,
//     userData,
//     setUserData,
//     loadUserProfileData,
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider;


import React, { useState, useEffect, useCallback } from "react";
import { AppContext } from "./AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const [userData, setUserData] = useState(false);
  const [guides, setGuides] = useState([]);

  // ✅ Fetch all guide data
  const getGuidesData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/guides`);
      if (data.success) {
        setGuides(data.guides);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch guides");
    }
  }, [backendUrl]);

  // ✅ Load user profile data
  const loadUserProfileData = useCallback(async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/getprofile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  }, [backendUrl, token]);

  // ✅ On token change, load profile
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    } else {
      setUserData(false);
    }
  }, [token, loadUserProfileData]);

  const value = {
    guides,
    getGuidesData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
