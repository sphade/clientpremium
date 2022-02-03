import React from "react";
import Banner from "./Banner";
import Charter from "./Charter";
import Destinations from "./Destinations";
import HomeJetPooling from "./HomeJetPooling";
import PremiumCharter from "./PremiumCharter";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Charter />
      <HomeJetPooling />
      <PremiumCharter />
      <Destinations />
    </div>
  );
};

export default Home;
