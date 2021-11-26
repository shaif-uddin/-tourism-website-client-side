import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Offer from "../Offer/Offer";
import PopularPlace from "../PopularPlace/PopularPlace";
import ShowTours from "../ShowTours/ShowTours";
import WhyUs from "../WhyUs/WhyUs";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Offer></Offer>
      <ShowTours></ShowTours>
      <WhyUs></WhyUs>
      <About></About>
      <PopularPlace></PopularPlace>
    </>
  )
};

export default Home;
