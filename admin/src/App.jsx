// import React from 'react'
// import Login from './pages/login'
//   import { ToastContainer} from 'react-toastify';
// import { AppContext } from './context/AppContext';
// import { useContext } from 'react';
// import Navbar from './components/Navbar';
  


// const App = () => {
  
//   const {aToken} = useContext(AppContext)

//   return aToken ? (
//     <div className='bg-[#F8F9FD]'>
//     <ToastContainer/>
//     <Navbar/>

//     </div>
//   ) : (
//     <>
//     <Login/>
//     <ToastContainer/>
//     </>
//   )
// }

// export default App


import React, { useContext } from 'react';
import Login from './pages/login';
import { ToastContainer } from 'react-toastify';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllBooking from './pages/Admin/AllBooking';
import AddGuide from './pages/Admin/AddGuide';
import GuideList from './pages/Admin/GuideList';
import { GuideContext } from './context/GuideContext';
import GuideDashboard from './pages/Guide/GuideDashboard';
import GuideBooking from './pages/Guide/GuideBooking';
import GuideProfile from './pages/Guide/GuideProfile';

const App = () => {
  const { aToken } = useContext(AdminContext);
  const{dToken} = useContext(GuideContext)


  return aToken || dToken? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>


        <Routes>
          {/* {admin routes} */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-booking' element={<AllBooking/>}/>
          <Route path='/add-guide' element={<AddGuide/>}/>
          <Route path='/guide-list' element={<GuideList/>}/>

          {/* {guide routes} */}
          <Route path='/guide-dashboard' element={<GuideDashboard/>}/>
          <Route path='/guide-booking' element={<GuideBooking/>}/>
          <Route path='/guide-profile' element={<GuideProfile/>}/>



        </Routes>

      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;


// import React, { useContext } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { AdminContext } from './context/AdminContext';
// import Login from './pages/Login';
// import Navbar from './components/Navbar';

// const App = () => {
//     const { aToken } = useContext(AdminContext);

//     return (
//         <div className='bg-[#F8F9FD] min-h-screen'>
//             <ToastContainer />
//             {aToken ? (
//                 <>
               
//                     <Navbar />
//                     <div className='p-5'>Admin Panel Content Goes Here</div>
//                 </>
//             ) : (
//                 <Login />
//             )}
//         </div>
//     );
// };

// export default App;
