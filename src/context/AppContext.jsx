import { createContext } from "react";
import { guides } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const value = {
    guides
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
