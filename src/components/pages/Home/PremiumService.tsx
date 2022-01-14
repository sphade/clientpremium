import React from "react";
import { ArrowButton, PrimaryButton } from "../../../reusables";
import ServiceOneImage from "./../../../assets/images/service-1.jpg";

const PremiumService = () => {
  return (
    <div className="services jumbotron">
      <h3 className="title">BOSSBUS PREMIUM SUB-SERVICES</h3>
      <div className="service__card">
        <div className="service__card--content pl-100">
          <div>
            <h3>JET POOLING</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              cursus, felis ut lacinia luctus, nisi nisi gravida ligula, in
              convallis risus odio non felis. Mauris scelerisque nibh velit.{" "}
            </p>
            <PrimaryButton label="Learn More" noRounded />
          </div>
          <div className="service__arrow">
            <ArrowButton />
          </div>
        </div>
        <div className="service__card--image">
          <img src={ServiceOneImage} alt="service-one" />
        </div>
      </div>
    </div>
  );
};

export default PremiumService;
