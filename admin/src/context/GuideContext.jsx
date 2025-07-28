/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { createContext } from "react";

export const GuideContext = createContext();

const GuideContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken,setDToken] = useState(localStorage.getItem('aToken') ||'')
    
    
    const value = {
        dToken,setDToken,
        backendUrl,
       
    };

    return (
        <GuideContext.Provider value={value}>
            {props.children}
        </GuideContext.Provider>
    );
};

export default GuideContextProvider;
