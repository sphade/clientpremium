import React, { useState } from "react";
import {
  CharterTerminalDropdown,
  CharterTypeDropdown,
  CustomCounter,
  CustomDurationInput,
  CustomTimePicker,
  DatePicker,
  TripTypeDropdown,
} from "../../../../reusables";

const SeaCharterFilter = ({ type }: { type: string }) => {
  const [tripType, setTripType] = useState("boat cruise");

  const isBoatCruise = tripType === "boat cruise";

  return (
    <>
      <div className="charter__content--select">
        <div>
          <TripTypeDropdown
            filter={type}
            handleChange={(e) => setTripType(e.target.value)}
          />
          <CharterTypeDropdown filter={type} />
        </div>
        <CustomCounter text="Guest" />
      </div>
      <div className="charter__content--form">
        <CharterTerminalDropdown filter={type} className="flex-none" />
        {isBoatCruise ? (
          <CustomDurationInput label="Cruise Duration" />
        ) : (
          <CharterTerminalDropdown
            isPickup={false}
            label="Destination Terminal"
            filter={type}
            className="flex-none"
          />
        )}
      </div>
      <div className="charter__content--form">
        <DatePicker label="Departure date" />
        <CustomTimePicker label="Departure time" />
      </div>
    </>
  );
};

export default SeaCharterFilter;
