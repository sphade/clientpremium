/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { PrimaryButton, PrimaryInput, DatePicker } from "../../../reusables";
import Plane from "../../../assets/images/plane-5.png";
import { ReactComponent as ArrowRight } from "./../../../assets/svgs/arrow-right-secondary.svg";
import { ReactComponent as NavigatorIcon } from "./../../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../../assets/svgs/location-outlined.svg";
import { ReactComponent as CloseIcon } from "./../../../assets/svgs/close.svg";

import { PREMIUM_CHARTER_DATA } from "../Home/constants";
import { useDialogHook } from "../../../hooks";
import JetPoolingDialog from "./JetPoolingDialog";

const AvailableJetPools = () => {
  const [filter, setFilter] = useState("air");

  const selectedFilter = PREMIUM_CHARTER_DATA.filter(
    (item) => item.type.toLowerCase() === filter
  );

  const onChange = (value: string) => {
    setFilter(value.toLowerCase());
  };

  const { open, toggleDialog } = useDialogHook();

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
              icon={<NavigatorIcon />}
            />
            <PrimaryInput
              name="Leaving"
              label="Going to"
              icon={<LocationIcon />}
            />
            <DatePicker label="Departing" />
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div onClick={toggleDialog} key={item} className="jet-pooling__card">
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
        ))}
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

      <JetPoolingDialog open={open} handleClose={toggleDialog} />
    </article>
  );
};

export default AvailableJetPools;
