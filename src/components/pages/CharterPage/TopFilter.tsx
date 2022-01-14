import React from "react";
import {
  PrimaryInput,
  DatePicker,
  PrimarySelect,
  CustomTimePicker,
} from "../../../reusables";
import { ReactComponent as NavigatorIcon } from "./../../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../../assets/svgs/location-outlined.svg";
import { airCraftType, landCraftType, tripType } from "./constants";
import StylishArrow from "../../../assets/images/arrow-style.png";
import { useCheckCharterType } from "../../../hooks";

const TopFilter = () => {
  const { charterType, isLand, isAir } = useCheckCharterType();

  console.log({ isLand, isAir });

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
          {!isLand ? (
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
          {!isLand ? (
            <div>
              <PrimarySelect
                name="airCraftType"
                label="Air craft type"
                options={airCraftType}
              />
              <PrimarySelect
                name="tripType"
                label="Trip Type"
                options={tripType}
              />
            </div>
          ) : (
            <div>
              <PrimarySelect
                name="carType"
                label="Car type"
                fullWidth={false}
                options={landCraftType}
              />
            </div>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default TopFilter;
