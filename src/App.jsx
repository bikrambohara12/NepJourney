import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';       // ✅ your new Home page
import Guides from './pages/Guides';   // ✅ your existing Guides page
import Contact from './pages/Contact';
import Login  from './pages/Login';
import Register from './pages/register';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <Navbar />

        <Routes>
          <Route path="/Home" element={<Home />} />
          
          <Route path="/guides" element={<Guides />} />
          <Route path="/Contact" element={<Contact/>} />
                <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login/>} />
        </Routes>
 
        <Footer />
      </div>
    </Router>
  );
};

export default App;
