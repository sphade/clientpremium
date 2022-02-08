import React from "react";
import {
  CustomCounter,
  DatePicker,
  PrimaryButton,
  PrimaryInput,
} from "../../../reusables";
import { ReactComponent as NavigatorIcon } from "./../../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../../assets/svgs/location-outlined.svg";
import { Divider } from "@mui/material";

const JetPoolingLeftBar = () => {
  return (
    <div className="jet-pooling__leftbar">
      <div className="info">
        <h5>Jet pooling</h5>
        <h3>WHAT IS IT?</h3>
        <p>{`Jetpooling (also known as jet-sharing) is an arrangement among a group of jet travelers by which each individual shares the cost of private jet travel by paying on a per seat, basis. Those included in such arrangements are referred to as 'jetpoolers'.`}</p>
      </div>
      <div className="subscribe">
        <div className="subscribe__header">
          <h3>SUBSCRIBE FOR UPDATES</h3>
          <p>
            Recieve updates on shared flights going your route, when they are
            available.
          </p>
          <Divider className="custom-divider" />
          <p>
            Fill the form below to get updates on your preferred jet pooling
            routes.
          </p>
        </div>
        <div className="subscribe__form">
          <PrimaryInput
            name="Leaving"
            label="Leaving from"
            icon={<NavigatorIcon />}
          />
          <PrimaryInput
            name="Leaving"
            label="Going to"
            icon={<LocationIcon />}
          />
          <div className="mb-12">
            <DatePicker name="departure" label="Departing" />
          </div>

          <CustomCounter outlined mb />
          <PrimaryButton label="Subscribe" color={"black"} fullWidth={true} />
        </div>
      </div>
    </div>
  );
};

export default JetPoolingLeftBar;
