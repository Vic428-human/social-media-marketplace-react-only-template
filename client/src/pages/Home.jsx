import React from "react";
import Hero from "../components/Hero";
import LatestListing from "../components/LatestListing";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <LatestListing/>
    </div>
  );
};

export default Home;
