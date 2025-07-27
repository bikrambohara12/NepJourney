// import axios from "axios";
// import { createContext, useState } from "react";
// import { toast } from "react-toastify";

// export const AdminContext = createContext();

// const AdminContextProvider = (props) => {

//     const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '')
//     const [guides, setGuides] = useState([])
//     const [bookings, setBookings] = useState([])
//     const [dashData, setDashData] = useState(false)

//     const backendUrl = import.meta.env.VITE_BACKEND_URL

//     const getAllGuides = async () => {
//         try {
//             const { data } = await axios.post(backendUrl + '/api/admin/allguides', {}, { headers: { aToken } })
//             if (data.success) {
//                 setGuides(data.guides)
//                 console.log(data.guides)
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     const changeAvailability = async (guideId) => {
//         try {
//             const { data } = await axios.post(backendUrl + '/api/admin/changeavailability', { guideId }, { headers: { aToken } })
//             if (data.success) {
//                 toast.success(data.message)
//                 getAllGuides()
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     const getAllBookings = async () => {
//         try {
//             const { data } = await axios.get(backendUrl + '/api/admin/bookings', { headers: { aToken } })
//             if (data.success) {
//                 setBookings(data.bookings)
//                 console.log(data.bookings)
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     const getDashData = async () => {
//         try {
//             const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
//             if (data.success) {
//                 setDashData(data.dashData)
//                 console.log(data.dashData)
//             } else {
//                 toast.error(data.message)
//             }
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     const value = {
//         aToken, setAToken,
//         backendUrl, guides,
//         getAllGuides, changeAvailability,
//         bookings, setBookings,
//         getAllBookings,
//         dashData, getDashData
//     };

//     return (
//         <AdminContext.Provider value={value}>
//             {props.children}
//         </AdminContext.Provider>
//     );
// };

// export default AdminContextProvider;


/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken, setAToken] = useState(localStorage.getItem('aToken') || '')
    const [guides, setGuides] = useState([])
    const [bookings, setBookings] = useState([])
    const [dashData, setDashData] = useState(false)

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllGuides = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/allguides', {}, { headers: { aToken } })
            if (data.success) {
                setGuides(data.guides)
                console.log(data.guides)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const changeAvailability = async (guideId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/changeavailability', { guideId }, { headers: { aToken } })
            if (data.success) {
                toast.success(data.message)
                getAllGuides()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllBookings = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/bookings', { headers: { aToken } })
            if (data.success) {
                setBookings(data.bookings)
                console.log(data.bookings)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getDashData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/admin/dashboard', { headers: { aToken } })
            if (data.success) {
                setDashData(data.dashData)
                // console.log(data.dashData)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        aToken, setAToken,
        backendUrl, guides,
        getAllGuides, changeAvailability,
        bookings, setBookings,
        getAllBookings,
        dashData, getDashData
    };

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;