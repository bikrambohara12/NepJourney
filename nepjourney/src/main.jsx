// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';
// import { BrowserRouter } from 'react-router-dom';
// // import AppContextProvider from './context/AppContext.jsx';
// import AppContextProvider from './context/AppContextProvider';


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <AppContextProvider>
//         <App />
//       </AppContextProvider>
//     </BrowserRouter>
//   </StrictMode>
// );



import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './context/AppContextProvider';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
