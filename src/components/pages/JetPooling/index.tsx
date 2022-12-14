import React from "react";
import JetPoolingBanner2 from "../../../assets/images/jet_pooling.png";
import Banner from "../Home/Banner";
import AvailableJetPools from "./AvailableJetPools";
import JetPoolingLeftBar from "./JetPoolingLeftBar";

const JetPooling = () => {
  return (
    <div className="home jet-pooling">
      <Banner
        images={[JetPoolingBanner2]}
        canSwitch={false}
        headers={["JET POOLING"]}
        subtitle="Join people going your direction and enjoy premium services at lower cost."
        hasButton={false}
        scrollId="jet-pool-content"
      />
      <div className="jet-pooling__body">
        <article className="center">
          <JetPoolingLeftBar />
          <div>
            <AvailableJetPools />
          </div>
        </article>
      </div>
    </div>
  );
};

export default JetPooling;
