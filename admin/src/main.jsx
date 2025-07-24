import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminContextProvider from './context/AdminContext.jsx'
import GuideContextProvider from './context/GuideContext.jsx'
import AppContextProvider from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AdminContextProvider>
    <GuideContextProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </GuideContextProvider>
  </AdminContextProvider>
  </BrowserRouter>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// import AdminContextProvider from './context/AdminContext.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <AdminContextProvider>
//                 <App />
//             </AdminContextProvider>
//         </BrowserRouter>
//     </React.StrictMode>
// );
