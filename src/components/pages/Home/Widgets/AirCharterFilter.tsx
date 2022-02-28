import React, { useEffect, useState } from "react";
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  CustomCounter,
  DatePicker,
  TripTypeDropdown,
} from "../../../../reusables";

import { ReactComponent as RoundTripIcon } from "./../../../../assets/svgs/round-trip-icon.svg";
import { ReactComponent as SingleTripIcon } from "./../../../../assets/svgs/single-trip-icon.svg";
import { ReactComponent as PlusIcon } from "./../../../../assets/svgs/plus-icon.svg";
import { Divider } from "@mui/material";
import { flightNumber } from "../constants";
import { ICustomFormikProps } from "../../../../reusables/Input/types";

const AirCharterFilter = ({
  type,
  formik,
}: {
  type: string;
  formik: ICustomFormikProps;
}) => {
  const [formNumber, setFormNumber] = useState([1]);
  const {
    values: { tripType = "" },
  } = formik;

  const isMultiCity = tripType?.toLowerCase() === "multi-city";
  const isRoundTrip = tripType?.toLowerCase() === "round trip";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    if (!isMultiCity) {
      setFormNumber([1]);
    }
  }, [tripType]);

  return (
    <>
      <div className="charter__content--select air-type">
        <div>
          <TripTypeDropdown filter={type} formik={formik} />
          <CharterTypeDropdown filter={type} formik={formik} />
        </div>
        <CustomCounter text="Passenger" formik={formik} />
      </div>
      {formNumber.map((form, index) => {
        const numberIndex: string = (index + 1).toString();
        return (
          <article key={index}>
            {isMultiCity && index !== 0 && (
              <div style={{ margin: "1rem 0 2rem" }}>
                <Divider />
              </div>
            )}
            {isMultiCity && (
              <h3 style={{ margin: "1rem 0 2rem" }}>
                {flightNumber[numberIndex]} Flight{" "}
              </h3>
            )}
            <div className="charter__content--form">
              <CharterTerminalDropdown
                name="pickup"
                label="Leaving from"
                formik={formik}
              />
              <CharterTerminalDropdown
                name="destination"
                label="Going to"
                formik={formik}
              />

              <div className="trip-icon">
                {isRoundTrip ? <RoundTripIcon /> : <SingleTripIcon />}
              </div>
            </div>
            <div className="charter__content--form">
              <DatePicker
                name="departureDate"
                label="Departure Date"
                formik={formik}
              />
              <DatePicker
                name="returnDate"
                label="Return Date"
                formik={formik}
              />
            </div>
          </article>
        );
      })}
      {isMultiCity && (
        <div className="add__flight">
          <button
            className="add__flight--button"
            onClick={() => {
              const lastNumber = ++formNumber[formNumber.length - 1];
              setFormNumber([...formNumber, lastNumber]);
            }}
          >
            <PlusIcon />
            Add Another Flight
          </button>
        </div>
      )}
    </>
  );
};

export default AirCharterFilter;
