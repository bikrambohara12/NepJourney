/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { createContext } from "react";
import axios from "axios"
import {toast} from "react-toastify"

export const GuideContext = createContext();

const GuideContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken,setDToken] = useState(localStorage.getItem('dToken') ||'')
    
    const [booking,setBooking]= useState([])
    const [dashData, setDashData] = useState(false)
 
    const [profileData,setProfileData]=useState(false)

    const logoutGuide = () => {
  localStorage.removeItem('dToken');
  setDToken('');
};

    const getBooking = async () => {
  try {
  const { data } = await axios.get(`${backendUrl}/api/guide/booking`, {
  headers: {
    Authorization: `Bearer ${dToken}` 
  }
});

    if (data.success) {
      setBooking(data.booking.reverse());
      console.log(data.booking.reverse());
    } else {
      toast.error(data.message);
    }

  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }

}

const completeBooking = async(bookingId)=>{

  try {
        const { data } = await axios.post(
      `${backendUrl}/api/guide/complete-booking`,
      { bookingId },
      {
        headers: {
          Authorization: `Bearer ${dToken}` 
        }
      }
    );
    if (data.success) {
      toast.success(data.message)
      getBooking();
      
    }else{
      toast.error(data.message)
    }
    
  } catch (error) {
       console.log(error);
    toast.error(error.message);
  }
}


const cancelBooking = async(bookingId)=>{

  try {
    // const {data} = await axios.post(`${backendUrl}/api/guide/cancel-booking`,{bookingId},{headers:{dToken}})
    const { data } = await axios.post(
      `${backendUrl}/api/guide/cancel-booking`,
      { bookingId },
      {
        headers: {
          Authorization: `Bearer ${dToken}`
        }
      }
    );
    if (data.success) {
      toast.success(data.message)
      getBooking();
      
    }else{
      toast.error(data.message)
    }
    
  } catch (error) {
       console.log(error);
    toast.error(error.message);
  }
} 

/// dash board for guide
const getDashData = async()=>{
  try {
      
        const { data } = await axios.get( `${backendUrl}/api/guide/dashboard`,{ headers: {Authorization: `Bearer ${dToken}`}});

    if (data.success) {
      setDashData(data.dashData);
      console.log(data.dashData) ;  
    }else{
      toast.error(data.message)
    }
    
  } catch (error) {
         console.log(error);
    toast.error(error.message);
  }
}

const getProfileData = async()=>{

  try {
  const { data } = await axios.get( `${backendUrl}/api/guide/profile`,{ headers: {Authorization: `Bearer ${dToken}`}});

  if (data.success) {
    setProfileData(data.profileData);
    console.log(data.profileData);
  }

    
  } catch (error) {
     console.log(error);
    toast.error(error.message);
  }
}


    const value = {
        dToken,setDToken,
        backendUrl,
        booking,setBooking,
        getBooking,
        logoutGuide,
        completeBooking,
        cancelBooking,
        dashData,setDashData,
        getDashData,
        profileData,setProfileData,
        getProfileData,
    };
    return (
        <GuideContext.Provider value={value}>
            {props.children}
        </GuideContext.Provider>
    );
};

export default GuideContextProvider;
