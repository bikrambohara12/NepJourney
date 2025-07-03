
import React from "react";
import { AppContext } from "./AppContext";
import { guides } from "../assets/assets";

const AppContextProvider = ({ children }) => {
  const value = { guides };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
