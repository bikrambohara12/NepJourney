import React from 'react';
import Header from "../components/Header";
import Features from '../components/Features';
import Customers from '../components/Customers';
import Speciality from '../components/Speciality';
import TopGuide from '../components/TopGuide';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <Speciality />
      <TopGuide />
      <Banner/>
      <Customers />
    </div>
  );
};

export default Home;
