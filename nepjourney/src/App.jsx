import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Guides from './pages/Guides';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
// import Register from './pages/Register';

import Booking from './pages/Booking';
import MyBooking from './pages/MyBooking';



const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Guides" element={<Guides />} />
        <Route path="/guides/:speciality" element={<Guides />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path='/my-profile' element={<MyProfile/>}/>
         <Route path="/my-booking" element={<MyBooking />}/>

        <Route path="/booking/:guideId" element={<Booking />}/>
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
