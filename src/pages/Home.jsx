
import React from 'react';
import Header from "../components/Header";
import Features from '../components/Features';
// import RecentTrips from '../components/RecentTrips';
import Latest from '../components/Latest';
import Customers from '../components/Customers';



const Home = () => {
  return (
    <>
      <Header />
      <Features/>
      {/* <RecentTrips /> */}
      <Latest />
      <Customers />
    </>
  );
};

export default Home;
