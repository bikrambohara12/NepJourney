
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


import React, { useState } from "react"; // <-- also missing useState import
import { AppContext } from "./AppContext";
import { guides } from "../assets/assets";

const AppContextProvider = ({ children }) => {
  const currencySymbol = "$";
  const [token, setToken] = useState('');
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const value = {
    guides,
    currencySymbol,
    token,
    setToken,
    backendUrl
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

