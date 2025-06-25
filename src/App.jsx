

// import React from 'react';
// import Navbar from './components/Navbar';
// import Header from "./components/Header";
// import Features from './components/Features';
// import Destinations from './components/Destinations';
// import RecentTrips from './components/RecentTrips';
// import Latest from './components/Latest';
// import Customers from './components/Customers';
// import Footer from './components/Footer';
// import Ruff from './components/Ruff';
// import Guides from './pages/Guides';



// const App = () => {
//   return (
//     <Router>
//       <div className="bg-gray-100 text-gray-800">
//         <Navbar />
//         <Header />
//         <Features/>
//         <Destinations/>
//         <RecentTrips/>
//         <Latest/>
//         <Customers/>
//         <Ruff/>
//         <Footer/>
//         <Routes>
//           <Route path="/Guides" element={<Guides />} />
      
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ React Router import

// import Navbar from './components/Navbar';
// import Header from "./components/Header";
// import Features from './components/Features';
// import Destinations from './components/Destinations';
// import RecentTrips from './components/RecentTrips';
// import Latest from './components/Latest';
// import Customers from './components/Customers';
// import Footer from './components/Footer';
// import Ruff from './components/Ruff';
// import Guides from './pages/Guides';

// const App = () => {
//   return (
//     <Router>
//       <div className="bg-gray-100 text-gray-800">
//         <Navbar />
//         <Header />
//         <Features/>
//         <Destinations/>
//         <RecentTrips/>
//         <Latest/>
//         <Customers/>
//         <Ruff/>
//         <Footer/>

//         {/* Page routing */}
//         <Routes>
//           <Route path="/Guides" element={<Guides />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';       // ✅ your new Home page
import Guides from './pages/Guides';   // ✅ your existing Guides page
import Contact from './pages/Contact';
const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800">
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
