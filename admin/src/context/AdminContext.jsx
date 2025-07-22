// /* eslint-disable react-refresh/only-export-components */
// import { createContext,useState} from "react";

// export const AdminContext = createContext();

// const AdminContextProvider = (props) => {

//     const [aToken,setAToken] = useState(localStorage.getItem('aToken') ||'')

//     const backendUrl = import.meta.env.VITE_BACKEND_URL
     
//     const value = {
//        aToken,setAToken,
//        backendUrl
//     };

//     return (
//         <AdminContext.Provider value={value}>
//             {props.children}
//         </AdminContext.Provider>
//     );
// };

// export default AdminContextProvider;


/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '');
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    return (
        <AdminContext.Provider value={{ aToken, setAToken, backendUrl }}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
