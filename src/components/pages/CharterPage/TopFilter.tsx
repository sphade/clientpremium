import React, { useEffect } from "react";

import StylishArrow from "../../../assets/images/arrow-style.png";
import { useCheckCharterType } from "../../../hooks";
import useGlobalStoreProvider from "../../../context";
import AirFilter from "./components/AirFilter";
import { useFormik } from "formik";
import LandFilter from "./components/LandFilter";
import SeaFilter from "./components/SeaFilter";

const TopFilter = ({
  handleFilters,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleFilters: (filter: any) => void;
}) => {
  const { charterType, isAir, isLand, isSea } = useCheckCharterType();

  const {
    state: { charter },
  } = useGlobalStoreProvider();

  const formik = useFormik({
    initialValues: {
      pickup: "",
      destination: "",
      departureDate: "",
      returnDate: "",
      passenger: 1,
      tripType: "",
      transitType: "",
      duration: 1,
      departureTime: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

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
          <img src={StylishArrow} alt="stylish-arrow" />
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
