/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext,useState} from "react";
import { toast } from "react-toastify";


export const AdminContext = createContext();

const AdminContextProvider = (props) => {

    const [aToken,setAToken] = useState(localStorage.getItem('aToken') ||'')
    const [guides,setGuides] = useState([])

    const [booking,setBooking] = useState([])



    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllGuides = async ()=>{

        try {

            const{data} = await axios.post(backendUrl + '/api/admin/allguides' , {}, {headers:{aToken}})
            if ((data.success)) {
                setGuides(data.guides) 
                console.log(data.guides) 
            }else{
             toast.error(data.message)   
            }
            
        } catch (error) {
            toast.error(error.message)
            
        }
    }

    const changeAvailability = async (guideId) => {

    // const changeAvailabiity = async(guideId) =>{
        try {
            
            const{data} = await axios.post(backendUrl + '/api/admin/changeavailability',{guideId},{headers:{aToken}})
            if (data.success) {
                toast.success(data.message)
                getAllGuides()
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
         toast.error(error.message)  
        }
    }

    const getAllBooking = async ()=>{

        try {

            const{data}= await axios.get(backendUrl + '/api/admin/booking',{headers:{aToken}})

            if (data.success) {
                setBooking(data.booking)
                 console.log(data.booking);
            }else{
                toast.error(data.message)
            }
            
        } catch (error) {
           toast.error(error.message)   
        }
    }

    const cancelBooking = async(bookingId)=>{

        try {

            const{data}=await axios.post(backendUrl+'/api/admin/cancelbooking',{bookingId},{headers:{aToken}})

            if (data.success) {
                toast.success(data.message)
                getAllBooking()    
            }else{
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
  booking, setBooking,
  getAllBooking,
  cancelBooking,
};


    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;

