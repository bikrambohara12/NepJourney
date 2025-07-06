
import React from "react";
import { AppContext } from "./AppContext";
import { guides } from "../assets/assets";

const AppContextProvider = ({ children }) => {

const currencySymbol ="$"

  const value = { guides,currencySymbol };

  return (
    <AppContext.Provider value={value}>
      
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
