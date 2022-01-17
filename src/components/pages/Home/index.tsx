import React from "react";
import Banner from "./Banner";
import Charter from "./Charter";
import Destinations from "./Destinations";
import PremiumCharter from "./PremiumCharter";
import PremiumService from "./PremiumService";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Charter />
      <PremiumService />
      <PremiumCharter />
      <Destinations />
    </div>
  );
};

export default Home;
