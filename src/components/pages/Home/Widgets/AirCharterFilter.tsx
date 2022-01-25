import React, { useState } from "react";
import {
  CharterTypeDropdown,
  CustomCounter,
  DatePicker,
  PrimaryInput,
  TripTypeDropdown,
} from "../../../../reusables";

import { ReactComponent as NavigatorIcon } from "./../../../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../../../assets/svgs/location-outlined.svg";
import { ReactComponent as RoundTripIcon } from "./../../../../assets/svgs/round-trip-icon.svg";
import { ReactComponent as SingleTripIcon } from "./../../../../assets/svgs/single-trip-icon.svg";
import { ReactComponent as PlusIcon } from "./../../../../assets/svgs/plus-icon.svg";
import { Divider } from "@mui/material";
import { flightNumber } from "../constants";

const AirCharterFilter = ({ type }: { type: string }) => {
  const [selectedTripType, setSelectedTripType] = useState("");
  const [formNumber, setFormNumber] = useState([1]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (event: any) => {
    setFormNumber([1]);
    setSelectedTripType(event.target.value);
  };

  const isMultiCity = selectedTripType?.toLowerCase() === "multi-city";
  const isRoundTrip = selectedTripType?.toLowerCase() === "round trip";

  return (
    <>
      <div className="charter__content--select air-type">
        <div>
          <TripTypeDropdown filter={type} handleChange={handleChange} />
          <CharterTypeDropdown filter={type} />
        </div>
        <CustomCounter text="Passenger" />
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
              <div className="trip-icon">
                {isRoundTrip ? <RoundTripIcon /> : <SingleTripIcon />}
              </div>
            </div>
            <div className="charter__content--form">
              <DatePicker label="Depature Date" />
              <DatePicker label="Return Date" />
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
