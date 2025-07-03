
import React from 'react';
import Header from "../components/Header";
import Features from '../components/Features';
// import RecentTrips from '../components/RecentTrips';
import Latest from '../components/Latest';
import Customers from '../components/Customers';
import ExtraFeatures from '../components/ExtraFeatures';



const Home = () => {
  return (
    <>
      <Header />
      <Features/>
      {/* <RecentTrips /> */}
      <Latest />
      <Customers />
      <ExtraFeatures />
    </>
  );
};

export default Home;
