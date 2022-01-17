import React from "react";
import {
  PrimaryInput,
  DatePicker,
  PrimarySelect,
  CustomTimePicker,
  CharterTypeDropdown,
  CharterTerminalDropdown,
} from "../../../reusables";
import { ReactComponent as NavigatorIcon } from "./../../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../../assets/svgs/location-outlined.svg";
import { tripType } from "./constants";
import StylishArrow from "../../../assets/images/arrow-style.png";
import { useCheckCharterType } from "../../../hooks";

const TopFilter = () => {
  const { charterType, isAir, isLand } = useCheckCharterType();

  return (
    <div className="top-filter">
      <div className="top-filter__banner">
        <div className="center">
          <h3>{charterType} CHARTER</h3>
          <img src={StylishArrow} alt="stylish-arrow" />
        </div>
      </div>
      <div className=" center">
        <div className="top-filter__content">
          {isAir ? (
            <>
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
            </>
          ) : (
            <>
              <CharterTerminalDropdown filter={charterType} />
              <PrimarySelect
                name="Leaving"
                label="Cruise Duration"
                icon={<NavigatorIcon />}
                options={[]}
              />
            </>
          )}
          {!isAir ? (
            <>
              <DatePicker label="Departing" />
              <DatePicker label="Returning" />
            </>
          ) : (
            <>
              <CustomTimePicker label="Pick-up time" />
              <CustomTimePicker label="Duration" />
            </>
          )}
        </div>
        <div className="top-filter__content">
          <div>
            <CharterTypeDropdown filter={charterType} />

            {!isLand && (
              <PrimarySelect
                name="tripType"
                label="Trip Type"
                options={tripType}
              />
            )}
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
