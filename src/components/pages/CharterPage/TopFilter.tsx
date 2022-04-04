/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

import { useCheckCharterType } from "../../../hooks";
import useGlobalStoreProvider from "../../../context";
import AirFilter from "./components/AirFilter";
import LandFilter from "./components/LandFilter";
import SeaFilter from "./components/SeaFilter";
import { CHARTER_ARROW } from "./constants";

const TopFilter = ({
  handleFilters,
  formik,
}: // formik,
{
  handleFilters: (filter: any) => void;
  formik: any;
}) => {
  const { charterType, isAir, isLand, isSea } = useCheckCharterType();

  const {
    state: { charter },
  } = useGlobalStoreProvider();

  const { setValues } = formik;

  // Set existing values to form field
  useEffect(() => {
    // Destructure form admin user
    const {
      pickup = "",
      destination = "",
      departureDate = "",
      returnDate = "",
      passenger = 1,
      tripType = "",
      transitType = "",
      duration = 1,
      departureTime = "",
    } = charter;

    setValues({
      pickup,
      destination,
      departureDate,
      returnDate,
      passenger,
      tripType,
      transitType,
      duration,
      departureTime,
    });
  }, [charter]);

  return (
    <div className="top-filter">
      <div className="top-filter__banner">
        <div className="center">
          <h3>{charterType} CHARTER</h3>
          <img src={CHARTER_ARROW[charterType]} alt="stylish-arrow" />
        </div>
      </div>
      <div className=" center">
        {isAir && <AirFilter handleFilters={handleFilters} formik={formik} />}
        {isLand && <LandFilter handleFilters={handleFilters} formik={formik} />}
        {isSea && <SeaFilter formik={formik} handleFilters={handleFilters} />}
      </div>
    </div>
  );
};

export default TopFilter;
