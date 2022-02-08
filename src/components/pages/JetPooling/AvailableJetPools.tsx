/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { PrimaryButton, PrimaryInput, DatePicker } from "../../../reusables";
import Plane from "../../../assets/images/plane-5.png";
import { ReactComponent as ArrowRight } from "./../../../assets/svgs/arrow-right-secondary.svg";
import { ReactComponent as CloseIcon } from "./../../../assets/svgs/close.svg";

import { PREMIUM_CHARTER_DATA } from "../Home/constants";
import { useDialogHook } from "../../../hooks";
import JetPoolingDialog from "./JetPoolingDialog";
import JetpoolingCard from "./components/JetpoolingCard";
import HomeJetPoolingContainer from "../Home/Widgets/HomeJetPoolingContainer";

const AvailableJetPools = () => {
  const [filter, setFilter] = useState("air");

  const selectedFilter = PREMIUM_CHARTER_DATA.filter(
    (item) => item.type.toLowerCase() === filter
  );

  const onChange = (value: string) => {
    setFilter(value.toLowerCase());
  };

  return (
    <article className="jet-pooling__middleBar" id="jet-pool-content">
      <div className="searchBar__container">
        <p>
          Search for Empty leg filights going from your present location to your
          desired destination
        </p>
        <div className="searchBar">
          <div className="searchBar__group">
            <PrimaryInput
              name="Leaving"
              label="Leaving from"
              iconType="navigator"
            />
            <PrimaryInput name="Leaving" label="Going to" iconType="location" />
            <DatePicker name="departure" label="Departing" />
            <PrimaryButton label="Search" small />
          </div>
          <div className="reset__filter">
            <p>Reset Filter</p>
            <CloseIcon />
          </div>
        </div>
      </div>
      <h3 className="title">Available Jet Pools</h3>
      <div className="jet-pooling__cards">
        <HomeJetPoolingContainer />
      </div>
      <div className="private-jets__footer">
        <p className="private-jets__footer--sumary">Showing 4 from 12 Jets</p>
        <div className="private-jets__footer--buttons">
          <button>
            <span>{"<<"}</span>
            <span>Previous</span>
          </button>

          <div className="paginations">
            <h3 className="active">1</h3>
            <h3>2</h3>
            <h3>3</h3>
          </div>
          <button>
            <span>Next</span>
            <span>{">>"}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default AvailableJetPools;
