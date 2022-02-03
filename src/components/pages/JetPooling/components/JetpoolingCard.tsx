import React from "react";
import Plane from "../../../../assets/images/plane-5.png";
import { ReactComponent as ArrowRight } from "../../../../assets/svgs/arrow-right-secondary.svg";

const JetpoolingCard = ({ toggleDialog }: { toggleDialog?: () => void }) => {
  return (
    <div onClick={toggleDialog} className="jet-pooling__card">
      <div className="image">
        <img src={Plane} alt="" />
      </div>
      <div className="content">
        <div>
          <h3>Abuja (Nigeria)</h3>
          <p>Nnamdi Azikiw...</p>
        </div>
        <ArrowRight />
        <div>
          <h3>Abuja (Nigeria)</h3>
          <p>Nnamdi Azikiw...</p>
        </div>
      </div>
      <div className="available__cta">
        <span>Available from</span>
        <span className="action"> 22 Nov 2021</span>
      </div>
    </div>
  );
};

export default JetpoolingCard;
