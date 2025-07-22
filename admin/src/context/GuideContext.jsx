/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const GuideContext = createContext();

const GuideContextProvider = (props) => {
    
    const value = {
       
    };

    return (
        <GuideContext.Provider value={value}>
            {props.children}
        </GuideContext.Provider>
    );
};

export default GuideContextProvider;
