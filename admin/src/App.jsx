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

const App = () => {
  const { aToken } = useContext(AdminContext);

  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
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
